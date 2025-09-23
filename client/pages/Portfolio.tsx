import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Eye,
  ExternalLink,
  Search,
  Calendar,
  Users,
  Briefcase,
  TrendingUp,
  ArrowRight,
  FileText,
  Figma as FigmaIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

// It's highly recommended to use a library like React Helmet to manage page titles and meta descriptions for SEO.
// Example:
// <Helmet>
//   <title>Portfolio | Vickash Shivan | Product Designer</title>
//   <meta name="description" content="Explore the portfolio of Vickash Shivan, a product designer specializing in creating beautiful, intuitive, and results-driven digital experiences." />
// </Helmet>

// Add this to your global CSS to improve the animation
/*
@keyframes skill-bar-fill {
  from { width: 0; }
  to { width: var(--skill-level); }
}
.skill-bar-animation {
  animation: skill-bar-fill 2s ease-out forwards;
}
*/

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App Redesign",
      category: "mobile",
      type: "App Design",
      client: "RetailTech Solutions",
      year: "2024",
      duration: "8 weeks",
      team: "4 members",
      image: "https://picsum.photos/seed/project1/800/600",
      thumbnail: "https://picsum.photos/seed/project1/400/300",
      description:
        "A complete mobile shopping experience redesign that increased conversion rates by 45% and dramatically improved user satisfaction scores.",
      challenge:
        "The existing mobile app suffered from a 23% cart abandonment rate and poor user reviews, which cited confusing navigation and a lengthy checkout process.",
      solution:
        "I led the redesign of the entire user flow, implementing simplified navigation, a one-tap checkout, and personalized product recommendations based on user behavior analysis.",
      results: [
        "45% increase in conversion rate",
        "60% reduction in cart abandonment",
        "App store rating increased from 3.2 to 4.8/5",
        "35% increase in average order value",
      ],
      tools: ["Figma", "Principle", "After Effects", "Maze", "Hotjar"],
      tags: ["Mobile Design", "E-commerce", "User Research", "Prototyping"],
      featured: true,
      status: "Completed",
      testimonial: {
        text: "Vickash completely transformed our mobile experience. The new design is intuitive, beautiful, and our customers absolutely love it!",
        author: "Sarah Johnson",
        role: "Product Manager at RetailTech",
      },
      gallery: [
        "https://picsum.photos/seed/project1-1/800/600",
        "https://picsum.photos/seed/project1-2/800/600",
        "https://picsum.photos/seed/project1-3/800/600",
      ],
      liveUrl: "#live-url-1",
      caseStudyUrl: "#case-study-1",
    },
    {
      id: 2,
      title: "SaaS Dashboard Analytics Platform",
      category: "web",
      type: "Dashboard Design",
      client: "DataFlow Inc.",
      year: "2024",
      duration: "12 weeks",
      team: "6 members",
      image: "https://picsum.photos/seed/project2/800/600",
      thumbnail: "https://picsum.photos/seed/project2/400/300",
      description:
        "A modern dashboard interface for a data analytics platform that simplifies complex data visualization and improves user flow.",
      challenge:
        "Users were overwhelmed by the complex data visualization, which led to low feature adoption and high churn rates.",
      solution:
        "I designed a clean, modular dashboard with customizable widgets, progressive disclosure of information, and intelligent data insights to make data more accessible and actionable.",
      results: [
        "40% increase in feature adoption",
        "25% reduction in user churn",
        "50% faster task completion time",
        "Achieved a 90% user satisfaction score",
      ],
      tools: ["Figma", "FigJam", "D3.js", "Principle", "UserTesting"],
      tags: ["Web Design", "Dashboard", "Data Visualization", "SaaS"],
      featured: true,
      status: "Completed",
      testimonial: {
        text: "The new dashboard design has revolutionized how our users interact with their data. It's a masterpiece of clarity and usability. Simply outstanding work!",
        author: "Michael Chen",
        role: "CEO at DataFlow Inc.",
      },
      gallery: [
        "https://picsum.photos/seed/project2-1/800/600",
        "https://picsum.photos/seed/project2-2/800/600",
        "https://picsum.photos/seed/project2-3/800/600",
      ],
      liveUrl: "#live-url-2",
      caseStudyUrl: "#case-study-2",
    },
    // Add more projects here...
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "mobile",
      name: "Mobile Apps",
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "web",
      name: "Web Design",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "branding",
      name: "Branding",
      count: projects.filter((p) => p.category === "branding").length,
    },
    {
      id: "design-system",
      name: "Design Systems",
      count: projects.filter((p) => p.category === "design-system").length,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge
                variant="outline"
                className="mb-6 text-primary border-primary/20 bg-primary/5"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                My Work
              </Badge>

              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="text-foreground">Crafting Digital</span>
                <br />
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Welcome to my portfolio. Here you'll find a collection of my
                best work, showcasing my passion for creating user-centered
                design solutions that are both beautiful and effective.
              </p>
            </div>

            <div className="lg:col-span-1 animate-slide-in-right">
              <Card className="p-6 bg-white/50 backdrop-blur-sm border-primary/10 shadow-xl">
                <h3 className="text-xl font-display font-bold mb-4 text-foreground">
                  My Design Toolkit
                </h3>
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-3 rounded-lg hover:bg-primary/5 transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-2">
                      <FigmaIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-medium">Figma</span>
                  </div>
                  {/* Add other tools here */}
                </div>
                <h3 className="text-xl font-display font-bold mb-4 text-foreground">
                  Key Skills
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">UI/UX Design</span>
                    <span className="text-primary font-bold">95%</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full skill-bar-animation"
                      style={{ "--skill-level": "95%" } as React.CSSProperties}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">User Research</span>
                    <span className="text-primary font-bold">90%</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full skill-bar-animation"
                      style={{ "--skill-level": "90%" } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are a few of my favorite projects that demonstrate my ability
              to drive measurable business results and create exceptional user
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-500 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`A screenshot of the ${project.title} project`}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-white/90 hover:bg-white"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                          <ProjectModal project={project} />
                        </DialogContent>
                      </Dialog>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 hover:bg-white"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {project.type}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                      >
                        View Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <ProjectModal project={project} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              All <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore my complete portfolio of projects. Use the filters and
              search to find what you're looking for.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects by name or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={cn(
                    "relative",
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-primary-500 to-primary-600"
                      : "hover:bg-primary/5",
                  )}
                >
                  {category.name}
                  <Badge
                    variant="secondary"
                    className="ml-2 text-xs bg-white/20 text-inherit border-0"
                  >
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={`A thumbnail image for the ${project.title} project`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="shadow-lg"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <ProjectModal project={project} />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary text-white text-xs">
                    {project.type}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Projects Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find what you're
                looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Have a Project in <span className="text-primary">Mind?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new projects and collaborate with
              passionate people. If you're looking for a designer who can bring
              your ideas to life, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <Link to="/about">More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ProjectModal({ project }: { project: any }) {
  return (
    <div className="space-y-6 p-2">
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img
            src={project.image}
            alt={`A detailed view of the ${project.title} project`}
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <div className="grid grid-cols-3 gap-2">
            {project.gallery.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`Gallery image ${index + 1} for ${project.title}`}
                className="w-full rounded-md"
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Project Details</h3>
          <div className="space-y-2 text-sm mb-6">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Client:</span>{" "}
              <span>{project.client}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>{" "}
              <span>{project.duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Team Size:</span>{" "}
              <span>{project.team}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Year:</span>{" "}
              <span>{project.year}</span>
            </div>
          </div>
          <h3 className="font-semibold mb-3">Tools Used</h3>
          <div className="flex flex-wrap gap-1">
            {project.tools.map((tool: string) => (
              <Badge key={tool} variant="secondary" className="text-xs">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">The Challenge</h3>
        <p className="text-muted-foreground">{project.challenge}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">The Solution</h3>
        <p className="text-muted-foreground">{project.solution}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">The Results</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.results.map((result: string, index: number) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-green-50 p-2 rounded-md"
            >
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-800">{result}</span>
            </div>
          ))}
        </div>
      </div>

      {project.testimonial && (
        <div className="bg-neutral-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">What the Client Said</h3>
          <blockquote className="text-muted-foreground italic mb-3">
            <p>"{project.testimonial.text}"</p>
          </blockquote>
          <div className="text-sm text-right">
            <p className="font-medium">{project.testimonial.author}</p>
            <p className="text-muted-foreground">{project.testimonial.role}</p>
          </div>
        </div>
      )}

      <div className="flex gap-4 pt-4 border-t">
        <Button asChild className="flex-1">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            View Live Project
          </a>
        </Button>
        <Button variant="outline" asChild className="flex-1">
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="w-4 h-4 mr-2" />
            Read the Full Case Study
          </a>
        </Button>
      </div>
    </div>
  );
}
