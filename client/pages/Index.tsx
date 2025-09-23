import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Download, 
  Eye, 
  ExternalLink, 
  Star, 
  User, 
  Briefcase, 
  Code, 
  Palette, 
  Users, 
  Zap,
  Send,
  Mail,
  Phone,
  MapPin,
  Award,
  Lightbulb,
  Target,
  Heart,
  Brain,
  Sparkles,
  List,
  Wrench,
  FileOutput,
  Shield,
  BarChart3,
  MessageSquare,
  CheckCircle,
  Play,
  Figma,
  Monitor,
  Smartphone,
  Search,
  Layout as LayoutIcon,
  PenTool,
  Layers,
  Grid,
  TestTube,
  UsersIcon
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { downloadResume } from "@/utils/resume";

// It's highly recommended to use a library like React Helmet to manage page titles and meta descriptions for SEO.
// Example:
// <Helmet>
//   <title>Vickash Shivan | Lead Product Designer & UI/UX Expert</title>
//   <meta name="description" content="Vickash Shivan is a passionate and results-driven UI/UX designer with 3+ years of experience, specializing in creating intuitive and beautiful digital experiences. Available for new opportunities." />
// </Helmet>

export default function Index() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isDownloadingResume, setIsDownloadingResume] = useState(false);

  const skills = [
    "UI/UX Design", "User Research", "Prototyping", "Figma", 
    "Adobe Creative Suite", "Usability Testing", "Wireframing", 
    "Design Systems", "React", "HTML/CSS"
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Tharunam",
      category: "Website",
      image: "/client/asset/tharunam.png",
      description: "Engineered a complete mobile shopping experience, resulting in a more intuitive navigation and a seamless checkout process.",
      tools: ["Figma", "Photoshop"],
      url : "https://tharunamattire.com",
      year: "2024"
    },
    {
      id: 2,
      title: "Web Application Landing Page",
      category: "web",
      image: "client/asset/leadstitch.png", 
      description: "Designed a modern dashboard interface for a data analytics platform, which significantly improved user flow and data comprehension.",
      tools: ["Figma", "FigJam", "Maze"],
      url:"https://d3cdob3hh5ynfu.cloudfront.net/",
      year: "2023"
    },
    {
      id: 3,
      title: "Website Branding",
      category: "web",
      image: "client/asset/timesmart.png",
      description: "Developed a complete brand identity, including a new logo, color palette, and design guidelines, leading to a 40% increase in brand recognition.",
      tools: ["Illustrator", "Photoshop", "InDesign"],
      url:"https://timesmart.ai/",
      year: "2024"
    },
    {
      id: 4,
      title: "Bridal Website",
      category: "mobile",
      image: "client/asset/nandhuvino.png",
      description: "Created a patient-centric mobile app design with a focus on accessibility and ease of use, resulting in a 95% user satisfaction rate.",
      tools: ["Figma", "Marvel", "Optimal Workshop"],
      url:"https://mediumblue-barracuda-987452.hostingersite.com/",
      year: "2023"
    },
    {
      id: 5,
      title: "Corporate Website Redesign", 
      category: "web",
      image: "client/asset/solarprospects.png",
      description: "Led the redesign of a corporate website, which resulted in a 30% increase in conversion rates and higher user engagement.",
      tools: ["Figma", "Webflow", "Hotjar"],
      url:"https://solarprospects.co.uk/",
      year: "2024"
    },
    {
      id: 6,
      title: "Design System Creation",
      category: "uiux",
      image: "client/asset/sai_20krisshna.png",
      description: "Built a comprehensive design system from the ground up, which increased development velocity by 50%.",
      tools: ["Figma", "Storybook", "Notion"],
      url:"https://www.behance.net/gallery/202549287/Sai-Krisshna-catering",
      year: "2023"
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "I craft intuitive and visually compelling user interfaces that elevate the user experience and drive engagement.",
      features: ["Wireframing & Prototyping", "Visual & Interaction Design", "User-Centric Design", "Responsive Design"]
    },
    {
      icon: Users,
      title: "User Research",
      description: "I uncover valuable user insights through comprehensive research to inform design decisions and enhance usability.",
      features: ["User Interviews & Surveys", "Persona Development", "Journey Mapping", "Usability Testing"]
    },
    {
      icon: Code,
      title: "Design Systems",
      description: "I build and maintain scalable design systems that ensure brand consistency and streamline product development.",
      features: ["Component Libraries", "Style Guides & Documentation", "Brand Guidelines", "Token-Based Design"]
    },
    {
      icon: Target,
      title: "Product Strategy",
      description: "I help define and validate product direction through user testing and data analysis to ensure we're building the right thing.",
      features: ["A/B Testing", "User Testing & Feedback", "Analytics & Data Review", "Performance Optimization"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "/placeholder.svg",
      content: "Vickash is a design powerhouse. He delivered an exceptional UI/UX design that significantly improved our user engagement. His attention to detail and user-centric approach are second to none.",
      rating: 5
    },
    {
      id: 2, 
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      image: "/placeholder.svg",
      content: "Working with Vickash was a game-changer for our product. He has a unique ability to understand a complex vision and transform it into an intuitive, beautiful, and highly effective user interface.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director", 
      company: "Design Studio",
      image: "/placeholder.svg",
      content: "Vickash's design expertise was instrumental in creating a cohesive brand identity that truly resonated with our target audience. I can't recommend him enough!",
      rating: 5
    }
  ];

  const designTools = [
    { name: "Figma", icon: Figma, category: "Design & Prototyping", color: "from-purple-500 to-purple-600" },
    { name: "Adobe XD", icon: Monitor, category: "Design & Prototyping", color: "from-pink-500 to-pink-600" },
    { name: "Sketch", icon: PenTool, category: "Design & Prototyping", color: "from-orange-500 to-orange-600" },
    { name: "InVision", icon: Eye, category: "Design & Prototyping", color: "from-red-500 to-red-600" },
    { name: "Photoshop", icon: Palette, category: "Graphic Design", color: "from-blue-500 to-blue-600" },
    { name: "Illustrator", icon: PenTool, category: "Graphic Design", color: "from-orange-600 to-red-500" },
    { name: "Miro", icon: Grid, category: "Wireframing", color: "from-yellow-500 to-yellow-600" },
    { name: "Notion", icon: FileOutput, category: "Collaboration", color: "from-gray-500 to-gray-600" }
  ];

  const coreSkills = [
    { name: "UI Design", icon: Monitor, description: "Creating intuitive and visually appealing interfaces" },
    { name: "UX Design", icon: UsersIcon, description: "Designing user-centered experiences and journeys" },
    { name: "Prototyping", icon: Layers, description: "Building interactive prototypes and wireframes" },
    { name: "Responsive Design", icon: Smartphone, description: "Mobile-first and cross-platform design approach" },
    { name: "User Research", icon: Search, description: "Understanding user needs through research and testing" },
    { name: "Information Architecture", icon: LayoutIcon, description: "Organizing content and navigation structures" },
    { name: "Usability Testing", icon: TestTube, description: "Validating designs through user feedback and testing" },
    { name: "Visual Design", icon: Palette, description: "Creating cohesive visual systems and branding" }
  ];

  const filteredPortfolio = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  const handleResumeDownload = async () => {
    setIsDownloadingResume(true);
    await downloadResume();
    setTimeout(() => setIsDownloadingResume(false), 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-50/50"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20 bg-primary/5">
              <Lightbulb className="w-4 h-4 mr-2" />
              Available for new opportunities
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">Lead Product Designer</span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                & UI/UX Expert
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm <strong>Vickash Shivan</strong>. I design and build beautiful, intuitive, and results-driven digital experiences that users love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                asChild
              >
                <Link to="/portfolio">
                  See My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5 px-8"
                asChild
              >
                <Link to="/contact">
                  <Send className="mr-2 w-4 h-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
              <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Successful Projects</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
                <User className="w-4 h-4 mr-2" />
                About Me
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Designing with Purpose, Creating with <span className="text-primary">Passion</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  For over three years, I've been immersed in the world of UI/UX design, helping businesses translate their ideas into exceptional digital products. My passion lies in creating experiences that are not only visually stunning but also intuitive, accessible, and highly functional.
                </p>
                <p>
                  I combine deep user research, creative problem-solving, and a meticulous attention to detail to deliver designs that not only meet business goals but also foster user loyalty and satisfaction.
                </p>
                <p>
                  I believe that great design is about more than just aesthetics; it's about solving problems so elegantly that the solution feels effortless. That's the standard I bring to every project.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button                   
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 w-auto"
                >
                  <a href="https://drive.google.com/file/d/1yU1TQXv9yDIk4tAHmpofyWQ8nL2MeVjR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex">
                   <Download className="mr-2 w-4 h-4" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/vickash-shivan-415139267/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F0c313c2d09f34b648b6967b58f4f7809%2F295d4c0c397a46ab894b3a291cd53fa3"
                    alt="A professional portrait of Vickash Shivan, a UI/UX designer."
                    className="w-full rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              <Briefcase className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Selected <span className="text-primary">Works</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
             Here's a curated selection of my work, demonstrating my ability to solve complex problems with creative, user-centric solutions across web, mobile, and branding.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {["all", "web", "mobile", "uiux", "branding"].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter 
                    ? "bg-gradient-to-r from-primary-500 to-primary-600" 
                    : "hover:bg-primary/5"
                  }
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <Card 
                key={item.id} 
                className="group hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={`A screenshot of the ${item.title} project.`}
                    className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="w-4 h-4" />
                      </Button>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {item.tools.map((tool) => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:border-primary hover:bg-primary/5"
              asChild
            >
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools & Skills Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My Design <span className="text-primary">Arsenal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My toolkit is a curated collection of the industry's best, enabling me to craft exceptional user-focused digital experiences from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-electric rounded-xl flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Design & Prototyping Tools</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {designTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{tool.name}</h4>
                          <p className="text-xs text-muted-foreground">{tool.category}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-brand-50 text-brand-600 border-brand-200">Balsamiq</Badge>
                  <Badge variant="secondary" className="bg-brand-50 text-brand-600 border-brand-200">Lucidchart</Badge>
                  <Badge variant="secondary" className="bg-brand-50 text-brand-600 border-brand-200">Zeplin</Badge>
                  <Badge variant="secondary" className="bg-brand-50 text-brand-600 border-brand-200">Jira</Badge>
                  <Badge variant="secondary" className="bg-electric/10 text-electric border-electric/20">Canva</Badge>
                  <Badge variant="secondary" className="bg-electric/10 text-electric border-electric/20">Slack</Badge>
                  <Badge variant="secondary" className="bg-neural/10 text-neural border-neural/20">Principle</Badge>
                  <Badge variant="secondary" className="bg-neural/10 text-neural border-neural/20">Framer</Badge>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-electric to-neural rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Core Skills & Competencies</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {coreSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <Card
                      key={index}
                      className="p-5 hover:shadow-lg transition-all duration-300 hover:border-brand-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-500/10 to-electric/10 rounded-xl flex items-center justify-center group-hover:from-brand-500 group-hover:to-electric transition-all duration-300">
                          <Icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2 group-hover:text-brand-600 transition-colors">{skill.name}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              <Zap className="w-4 h-4 mr-2" />
              My Expertise
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What I Bring to the <span className="text-primary">Table</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a range of services designed to create user-friendly and visually stunning digital experiences. My goal is to combine creativity with functionality to help your team achieve its goals and deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
              asChild
            >
              <Link to="/contact">
                Let's Start a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              <Heart className="w-4 h-4 mr-2" />
              Testimonials
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What My Clients <span className="text-primary">Say</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm proud to have collaborated with some amazing clients. Here's what they have to say about our work together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="p-6 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={`A portrait of ${testimonial.name}.`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              <Send className="w-4 h-4 mr-2" />
              Contact
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Create Something <span className="text-primary">Amazing</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             I'm excited to bring my skills and passion for design to a forward-thinking team. If you're looking for a dedicated designer who is ready to make an impact, I'd love to connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:vickashshivan.designer@gmail.com" className="text-muted-foreground hover:text-primary">vickashshivan.designer@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href="tel:+918667350673" className="text-muted-foreground hover:text-primary">+91 86673 50673</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Available Worldwide</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/vickash-shivan-415139267/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Dribbble"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 4.1-16.88 10.24"></path></svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Behance"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary"><path d="M4 4h16v16H4z"></path><path d="M4 4h16v16H4z"></path><path d="M12 12h8"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}