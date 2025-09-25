import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Eye,
  ExternalLink,
  Search,
  Calendar,
  Users,
  Target,
  Briefcase,
  TrendingUp,
  Star,
  Github,
  Figma as FigmaIcon,
  FileText,
} from "lucide-react";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll(".counter-animation");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60 FPS
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.floor(current) + "%";
        }, 16);
      });
    };

    // Start animation after component mounts and CSS animations begin
    const timeout = setTimeout(animateCounters, 2500);
    return () => clearTimeout(timeout);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App Redesign",
      category: "mobile",
      type: "Mobile App",
      client: "RetailTech Solutions",
      year: "2024",
      duration: "8 weeks",
      team: "4 members",
      image: "/tharunam.png",
      thumbnail: "/tharunam.png",
      description:
        "Complete mobile shopping experience redesign that increased conversion rates by 45% and improved user satisfaction scores.",
      challenge:
        "The existing mobile app had a 23% cart abandonment rate and poor user reviews citing confusing navigation and lengthy checkout process.",
      solution:
        "Redesigned the entire user flow with simplified navigation, one-tap checkout, and personalized product recommendations based on user behavior analysis.",
      results: [
        "45% increase in conversion rate",
        "60% reduction in cart abandonment",
        "4.8/5 app store rating (up from 3.2)",
        "35% increase in average order value",
      ],
      tools: ["Figma", "Principle", "After Effects", "Maze", "Hotjar"],
      tags: ["Mobile Design", "E-commerce", "User Research", "Prototyping"],
      featured: true,
      status: "Completed",
      testimonial: {
        text: "Vickash completely transformed our mobile experience. The new design is intuitive and our customers love it!",
        author: "Sarah Johnson",
        role: "Product Manager at RetailTech",
      },
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 2,
      title: "SaaS Dashboard Analytics Platform",
      category: "web",
      type: "Dashboard Design",
      client: "DataFlow Inc",
      year: "2024",
      duration: "12 weeks",
      team: "6 members",
      image: "/leadstitch.png",
      thumbnail: "/leadstitch.png",
      description:
        "Modern dashboard interface for data analytics platform with improved user flow and data visualization.",
      challenge:
        "Complex data visualization was overwhelming users, leading to low feature adoption and high churn rates.",
      solution:
        "Created a clean, modular dashboard with customizable widgets, progressive disclosure, and intelligent data insights.",
      results: [
        "40% increase in feature adoption",
        "25% reduction in user churn",
        "50% faster task completion time",
        "90% user satisfaction score",
      ],
      tools: ["Figma", "FigJam", "D3.js", "Principle", "UserTesting"],
      tags: ["Web Design", "Dashboard", "Data Visualization", "SaaS"],
      featured: true,
      status: "Completed",
      testimonial: {
        text: "The new dashboard design has revolutionized how our users interact with data. Simply outstanding work!",
        author: "Michael Chen",
        role: "CEO at DataFlow Inc",
      },
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 3,
      title: "TechStart Brand Identity System",
      category: "branding",
      type: "Brand Design",
      client: "TechStart Innovations",
      year: "2024",
      duration: "6 weeks",
      team: "3 members",
      image: "/timesmart.png",
      thumbnail: "/timesmart.png",
      description:
        "Complete brand identity including logo, color palette, typography, and comprehensive design guidelines.",
      challenge:
        "Startup needed a modern, professional brand identity that would appeal to both B2B clients and investors.",
      solution:
        "Developed a sophisticated brand system with flexible logo variations, modern color palette, and comprehensive brand guidelines.",
      results: [
        "300% increase in brand recognition",
        "150% growth in website traffic",
        "Successfully raised $2M Series A",
        "Award-winning brand identity",
      ],
      tools: ["Illustrator", "Photoshop", "InDesign", "After Effects"],
      tags: ["Branding", "Logo Design", "Brand Guidelines", "Startup"],
      featured: false,
      status: "Completed",
      testimonial: {
        text: "The brand identity perfectly captures our vision and has been instrumental in our fundraising success.",
        author: "Emily Rodriguez",
        role: "Founder at TechStart",
      },
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 4,
      title: "Healthcare Patient Portal",
      category: "web",
      type: "Web Application",
      client: "MedConnect Systems",
      year: "2023",
      duration: "16 weeks",
      team: "8 members",
      image: "/nandhuvino.png",
      thumbnail: "/nandhuvino.png",
      description:
        "Patient-centric portal design focusing on accessibility, ease of use, and secure health information management.",
      challenge:
        "Existing portal was not accessible to elderly patients and those with disabilities, causing frustration and low adoption.",
      solution:
        "Redesigned with WCAG 2.1 AA compliance, large touch targets, clear typography, and simplified navigation patterns.",
      results: [
        "85% increase in patient adoption",
        "99% accessibility compliance",
        "40% reduction in support calls",
        "4.9/5 patient satisfaction score",
      ],
      tools: ["Figma", "Axure", "WAVE", "Optimal Workshop"],
      tags: ["Healthcare", "Accessibility", "Web Design", "UX Research"],
      featured: true,
      status: "Completed",
      testimonial: {
        text: "Finally, a healthcare portal that puts patients first. The accessibility features are game-changing.",
        author: "Dr. Robert Kim",
        role: "Chief Medical Officer",
      },
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 5,
      title: "FinTech Mobile Banking App",
      category: "mobile",
      type: "Mobile App",
      client: "NextGen Banking",
      year: "2023",
      duration: "20 weeks",
      team: "10 members",
      image: "/solarprospects.png",
      thumbnail: "/solarprospects.png",
      description:
        "Modern mobile banking experience with advanced security features and intuitive financial management tools.",
      challenge:
        "Traditional banking app was outdated and lacked modern features that younger customers expected.",
      solution:
        "Created a fresh, security-first mobile banking experience with biometric authentication and AI-powered insights.",
      results: [
        "200% increase in app downloads",
        "75% improvement in user engagement",
        "Zero security incidents",
        "Industry award for innovation",
      ],
      tools: ["Sketch", "InVision", "Marvel", "Lottie", "Firebase"],
      tags: ["FinTech", "Mobile Design", "Security", "Banking"],
      featured: false,
      status: "Completed",
      testimonial: {
        text: "The new app has transformed how our customers interact with their finances. Exceptional design work!",
        author: "Lisa Thompson",
        role: "Head of Digital at NextGen",
      },
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 6,
      title: "Design System for Enterprise",
      category: "design-system",
      type: "Design System",
      client: "Global Corp",
      year: "2023",
      duration: "24 weeks",
      team: "12 members",
      image: "/sai_20krisshna.png",
      thumbnail: "/sai_20krisshna.png",
      description:
        "Comprehensive design system with reusable components, clear documentation, and implementation guidelines.",
      challenge:
        "Large enterprise had inconsistent UI across 50+ products, leading to poor user experience and high development costs.",
      solution:
        "Built a scalable design system with atomic design principles, comprehensive documentation, and developer tools.",
      results: [
        "90% faster development time",
        "Consistent UI across all products",
        "50% reduction in design debt",
        "Adopted by 15+ development teams",
      ],
      tools: ["Figma", "Storybook", "Notion", "GitHub", "npm"],
      tags: ["Design System", "Enterprise", "Documentation", "Scalability"],
      featured: true,
      status: "Ongoing",
      testimonial: {
        text: "This design system has been a game-changer for our organization. Consistency and efficiency at scale.",
        author: "James Wilson",
        role: "VP of Engineering",
      },
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      liveUrl: "#",
      caseStudyUrl: "#",
    },
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 Columns */}
            <div className="lg:col-span-6 animate-slide-in-left">
              <Badge
                variant="outline"
                className="mb-6 text-primary border-primary/20 bg-primary/5"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Portfolio
              </Badge>

              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="text-foreground">My Design</span>
                <br />
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A collection of my best work showcasing user-centered design
                solutions across mobile apps, web platforms, and brand
                identities.
              </p>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">6</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Featured Projects
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hand-picked showcase
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">50+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Total Projects
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Since 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 6 Columns - Animated Tools & UX Improvements */}
            <div className="lg:col-span-6 animate-slide-in-right">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 shadow-xl">
                {/* Animated Design Tools */}
                <div className="mb-8">
                  <h3 className="text-xl font-display font-bold mb-6 text-foreground">
                    Design Tools & Expertise
                  </h3>
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="tool-animation tool-delay-1 flex flex-col items-center p-3 rounded-lg hover:bg-primary/5 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-2 floating-animation">
                        <FigmaIcon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-medium">Figma</span>
                    </div>
                    <div className="tool-animation tool-delay-2 flex flex-col items-center p-3 rounded-lg hover:bg-primary/5 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-2 floating-animation">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7.5 7.5h-2v2h2v-2zm0 9h-2v2h2v-2zm9-9h-2v2h2v-2zm0 9h-2v2h2v-2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Adobe XD</span>
                    </div>
                    <div className="tool-animation tool-delay-3 flex flex-col items-center p-3 rounded-lg hover:bg-primary/5 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-2 floating-animation">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Sketch</span>
                    </div>
                    <div className="tool-animation tool-delay-4 flex flex-col items-center p-3 rounded-lg hover:bg-primary/5 transition-all cursor-pointer">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-2 floating-animation">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                      <span className="text-xs font-medium">Principle</span>
                    </div>
                  </div>
                </div>

                {/* Animated Skills Progress */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">
                    Core Skills
                  </h4>
                  <div className="space-y-4">
                    <div className="skill-item">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">UI/UX Design</span>
                        <span className="skill-percentage text-primary font-bold">
                          95%
                        </span>
                      </div>
                      <div className="w-full bg-primary/10 rounded-full h-2">
                        <div
                          className="skill-bar skill-bar-1 bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">User Research</span>
                        <span className="skill-percentage text-primary font-bold">
                          90%
                        </span>
                      </div>
                      <div className="w-full bg-primary/10 rounded-full h-2">
                        <div
                          className="skill-bar skill-bar-2 bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-item">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Prototyping</span>
                        <span className="skill-percentage text-primary font-bold">
                          92%
                        </span>
                      </div>
                      <div className="w-full bg-primary/10 rounded-full h-2">
                        <div
                          className="skill-bar skill-bar-3 bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated UX Improvements */}
                <div className="border-t border-primary/10 pt-6">
                  <h4 className="font-semibold text-foreground mb-4">
                    UX Impact Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div
                        className="counter-animation text-2xl font-bold text-primary mb-1"
                        data-target="45"
                      >
                        0%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Conversion
                        <br />
                        Increase
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="counter-animation text-2xl font-bold text-primary mb-1"
                        data-target="60"
                      >
                        0%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Task
                        <br />
                        Completion
                      </div>
                    </div>
                    <div className="text-center">
                      <div
                        className="counter-animation text-2xl font-bold text-primary mb-1"
                        data-target="30"
                      >
                        0%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Time
                        <br />
                        Reduction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Highlighting some of my most impactful design work that drove
              measurable business results and exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 4).map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-500 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
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
                  {project.status === "Ongoing" && (
                    <Badge
                      variant="outline"
                      className="absolute top-4 right-4 bg-white/90"
                    >
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Ongoing
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.team}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                      >
                        View Case Study
                        <Star className="w-4 h-4 ml-2" />
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

      {/* Filter and Search */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              All <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore my complete portfolio with filtering and search
              capabilities.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects by title or tags..."
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

          {/* Projects Grid */}
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
                    alt={project.title}
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
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {project.type}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
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

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Like What You <span className="text-primary">See?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create
              exceptional digital experiences. Let's discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a href="/about">Learn More About Me</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Project Modal Component
function ProjectModal({ project }: { project: any }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg shadow-lg"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-3">Project Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Client:</span>
              <span>{project.client}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span>{project.duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Team Size:</span>
              <span>{project.team}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Year:</span>
              <span>{project.year}</span>
            </div>
          </div>
        </div>

        <div>
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
        <h3 className="font-semibold mb-3">Challenge</h3>
        <p className="text-muted-foreground">{project.challenge}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Solution</h3>
        <p className="text-muted-foreground">{project.solution}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Results</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.results.map((result: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm">{result}</span>
            </div>
          ))}
        </div>
      </div>

      {project.testimonial && (
        <div className="bg-neutral-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-3">Client Testimonial</h3>
          <blockquote className="text-muted-foreground italic mb-3">
            "{project.testimonial.text}"
          </blockquote>
          <div className="text-sm">
            <div className="font-medium">{project.testimonial.author}</div>
            <div className="text-muted-foreground">
              {project.testimonial.role}
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-4">
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
            Full Case Study
          </a>
        </Button>
      </div>
    </div>
  );
}
