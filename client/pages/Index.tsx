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
import ParallaxSection, {
  TrustSection,
  EnergyCard,
  BackgroundPattern,
  ParallaxHero
} from "@/components/ParallaxSection";
import { url } from "inspector";

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
      image: "client/asset/tharunam.png",
      description: "Complete mobile shopping experience with intuitive navigation and seamless checkout process.",
      tools: ["Figma", "Photoshop"],
      url : "https://tharunamattire.com",
      year: "2024"
    },
    {
      id: 2,
      title: "web application landing page",
      category: "web",
      image: "client/asset/leadstitch.png", 
      description: "Modern dashboard interface for data analytics platform with improved user flow.",
      tools: ["Figma", "FigJam", "Maze"],
      url:"https://d3cdob3hh5ynfu.cloudfront.net/",
      year: "2023"
    },
    {
      id: 3,
      title: "website branding",
      category: "web",
      image: "client/asset/timesmart.png",
      description: "Complete brand identity including logo, color palette, and design guidelines.",
      tools: ["Illustrator", "Photoshop", "InDesign"],
      url:"https://timesmart.ai/",
      year: "2024"
    },
    {
      id: 4,
      title: "bridal website ",
      category: "mobile",
      image: "client/asset/nandhuvino.png",
      description: "Patient-centric mobile app design focusing on accessibility and ease of use.",
      tools: ["Figma", "Marvel", "Optimal Workshop"],
      url:"https://mediumblue-barracuda-987452.hostingersite.com/",
      year: "2023"
    },
    {
      id: 5,
      title: "Corporate Website Redesign", 
      category: "web",
      image: "client/asset/solarprospects.png",
      description: "Modern, responsive website design with improved conversion rates and user engagement.",
      tools: ["Figma", "Webflow", "Hotjar"],
      url:"https://solarprospects.co.uk/",
      year: "2024"
    },
    {
      id: 6,
      title: "Design System Creation",
      category: "uiux",
      image: "client/asset/sai_20krisshna.png",
      description: "Comprehensive design system with reusable components and clear documentation.",
      tools: ["Figma", "Storybook", "Notion"],
      url:"https://www.behance.net/gallery/202549287/Sai-Krisshna-catering",
      year: "2023"
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.",
      features: ["Wireframing", "Prototyping", "Visual Design", "Interaction Design"]
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user needs through comprehensive research to inform design decisions and improve usability.",
      features: ["User Interviews", "Surveys", "Persona Development", "Journey Mapping"]
    },
    {
      icon: Code,
      title: "Design Systems",
      description: "Building scalable design systems that ensure consistency and efficiency across digital products.",
      features: ["Component Libraries", "Style Guides", "Documentation", "Brand Guidelines"]
    },
    {
      icon: Target,
      title: "Usability Testing",
      description: "Validating design decisions through user testing to optimize user experience and product performance.",
      features: ["A/B Testing", "User Testing", "Analytics Review", "Performance Optimization"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "/placeholder.svg",
      content: "Vickash delivered exceptional UI/UX design that significantly improved our user engagement. His attention to detail and user-centric approach was impressive.",
      rating: 5
    },
    {
      id: 2, 
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      image: "/placeholder.svg",
      content: "Working with Vickash was a game-changer for our product. He understood our vision and transformed it into an intuitive, beautiful interface.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director", 
      company: "Design Studio",
      image: "/placeholder.svg",
      content: "Vickash's design expertise helped us create a cohesive brand identity that resonated with our target audience. Highly recommend his services!",
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
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleResumeDownload = async () => {
    setIsDownloadingResume(true);
    await downloadResume();
    setTimeout(() => setIsDownloadingResume(false), 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-primary-50/50"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/20 bg-primary/5">
              <Lightbulb className="w-4 h-4 mr-2" />
              Available for a freelance projects
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight flex flex-row justify-center">
              <span className="text-foreground">UI/UX</span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Designer
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm <strong>Vickash Shivan</strong>, a passionate UI/UX designer who creates intuitive and 
              beautiful digital experiences that solve real-world problems and delight users.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                asChild
              >
                <Link to="/portfolio">
                  View My Work
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
            
            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-center">
              <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border"></div>
              <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
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
                Passionate About Creating 
                <span className="text-primary"> Meaningful Experiences</span>
              </h2>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  With over 3 years of experience in UI/UX design, I specialize in creating 
                  digital experiences that are not only visually stunning but also highly 
                  functional and user-centric.
                </p>
                <p>
                  My approach combines deep user research, creative problem-solving, and 
                  attention to detail to deliver designs that drive business results and 
                  enhance user satisfaction.
                </p>
                <p>
                  I believe great design is invisible – it solves problems so elegantly 
                  that users don't even think about it. That's the kind of seamless 
                  experience I strive to create in every project.
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
                {/* <Button
                  onClick={handleResumeDownload}
                  disabled={isDownloadingResume}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                >
                  <Download className="mr-2 w-4 h-4" />
                  {isDownloadingResume ? "Downloading..." : "Download Resume"}
                </Button> */}
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
                    alt="Vickash Shivan"
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
             A curated collection of my design work, highlighting problem-solving, creativity, and user-focused solutions across web, mobile, and branding.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {["all", "web", "mobile", "branding"].map((filter) => (
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
          
          {/* Portfolio Grid */}
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
                    alt={item.title}
                    
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
            >
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
{/* Tools & Skills Section */}
<section className="bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tools &{" "}
                <span >
                  Skills
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                My toolkit and skill set for crafting user-focused digital experiences that bridge design excellence with AI innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-16">
              {/* Design Tools */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-electric rounded-xl flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Design Tools</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
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

                {/* Additional Tools Categories */}
                <div className="mt-6 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-brand-50 text-brand-600 border-brand-200">
                      Balsamiq
                    </Badge>
                    <Badge variant="secondary" className="bg-brand-50 text-brand-600 border-brand-200">
                      Lucidchart
                    </Badge>
                    <Badge variant="secondary" className="bg-brand-50 text-brand-600 border-brand-200">
                      Zeplin
                    </Badge>
                    <Badge variant="secondary" className="bg-brand-50 text-brand-600 border-brand-200">
                      Jira
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-electric/10 text-electric border-electric/20">
                      Canva
                    </Badge>
                    <Badge variant="secondary" className="bg-electric/10 text-electric border-electric/20">
                      Slack
                    </Badge>
                    <Badge variant="secondary" className="bg-neural/10 text-neural border-neural/20">
                      Principle
                    </Badge>
                    <Badge variant="secondary" className="bg-neural/10 text-neural border-neural/20">
                      Framer
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Core Skills */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-electric to-neural rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Core Skills</h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
                  {coreSkills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <Card
                        key={index}
                        className="p-5 hover:shadow-lg transition-all duration-300 hover:border-brand-300 group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-brand-500/10 to-electric/10 rounded-xl flex items-center justify-center group-hover:from-brand-500 group-hover:to-electric transition-all duration-300">
                            <Icon className="w-6 h-6 text-brand-500 group-hover:--primary-100 transition-colors" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2 group-hover:text-brand-600 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
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
              Skills & Expertise
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              How I Can <span className="text-primary"> Contribute</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I bring strong design skills to create user-friendly and visually appealing digital experiences. My focus is on combining creativity with functionality to support your team’s goals and deliver impactful results.
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
              <Link to="#contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              <Heart className="w-4 h-4 mr-2" />
              Testimonials
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What Clients <span className="text-primary">Say</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say 
              about working with me.
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
                    alt={testimonial.name}
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
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">
              <Send className="w-4 h-4 mr-2" />
              Contact
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             I’m excited to contribute my skills and creativity to a forward-thinking team. If you’re looking for someone who’s passionate about design and eager to make an impact, I’d love to connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">vickashshivan.designer@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+91 86673 50673</div>
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
                  >
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </a>
                  <div className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-primary text-sm font-bold">D</span>
                  </div>
                  <div className="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-primary text-sm font-bold">B</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
