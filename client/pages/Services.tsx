import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { 
  Palette, 
  Users, 
  Code, 
  Target,
  Search,
  BarChart,
  Smartphone,
  Globe,
  Eye,
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Zap,
  Star,
  MessageSquare,
  FileText,
  Settings,
  Lightbulb
} from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

export default function Services() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const services = [
    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      shortDescription: "Complete user interface and experience design solutions",
      description: "Transform your ideas into beautiful, functional designs that users love. I focus on creating intuitive interfaces that balance aesthetics with usability, ensuring your product not only looks great but also provides an exceptional user experience.",
      features: [
        "User interface design",
        "User experience optimization",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Design system creation",
        "Responsive design",
        "Accessibility compliance"
      ],
      process: [
        "Discovery & Research",
        "User Journey Mapping",
        "Wireframing",
        "Visual Design",
        "Prototyping",
        "Testing & Iteration"
      ],
      deliverables: [
        "High-fidelity mockups",
        "Interactive prototypes",
        "Design specifications",
        "Asset exports",
        "Style guide"
      ],
     
    },
    {
      id: "user-research",
      icon: Search,
      title: "User Research",
      shortDescription: "In-depth user research to inform design decisions",
      description: "Understand your users through comprehensive research methodologies. I conduct user interviews, surveys, usability testing, and competitive analysis to provide actionable insights that drive design decisions and improve user satisfaction.",
      features: [
        "User interviews",
        "Surveys and questionnaires",
        "Usability testing",
        "Competitive analysis",
        "Persona development",
        "Journey mapping",
        "Analytics review"
      ],
      process: [
        "Research Planning",
        "Data Collection",
        "User Interviews",
        "Analysis & Synthesis",
        "Insights Documentation",
        "Recommendations"
      ],
      deliverables: [
        "Research report",
        "User personas",
        "Journey maps",
        "Usability findings",
        "Recommendations"
      ],
   
    },
    {
      id: "design-systems",
      icon: Code,
      title: "Design Systems",
      shortDescription: "Scalable design systems for consistent user experiences",
      description: "Build scalable, maintainable design systems that ensure consistency across your entire product ecosystem. I create comprehensive component libraries, style guides, and documentation that empower teams to work efficiently.",
      features: [
        "Component library creation",
        "Design tokens",
        "Style guide documentation",
        "Pattern library",
        "Accessibility guidelines",
        "Implementation support",
        "Team training"
      ],
      process: [
        "Audit & Analysis",
        "Component Design",
        "Token Definition",
        "Documentation",
        "Implementation",
        "Team Training"
      ],
      deliverables: [
        "Component library",
        "Design tokens",
        "Style guide",
        "Documentation site",
        "Implementation guide"
      ],
      timeline: "4-12 weeks",
      startingPrice: "$4,500"
    },
    {
      id: "usability-testing",
      icon: Target,
      title: "Usability Testing",
      shortDescription: "Validate designs through comprehensive user testing",
      description: "Optimize your product's usability through systematic testing and analysis. I design and conduct usability tests, analyze user behavior, and provide actionable recommendations to improve user experience and achieve business goals.",
      features: [
        "Test planning and design",
        "Moderated user testing",
        "Unmoderated testing",
        "A/B testing setup",
        "Analytics analysis",
        "Heuristic evaluation",
        "Performance metrics"
      ],
      process: [
        "Test Planning",
        "Participant Recruitment",
        "Test Execution",
        "Data Analysis",
        "Report Generation",
        "Recommendations"
      ],
      deliverables: [
        "Test plan",
        "Testing results",
        "Video recordings",
        "Analysis report",
        "Improvement roadmap"
      ],
      timeline: "1-3 weeks",
      startingPrice: "$1,500"
    }
  ];

  const packages = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for small projects and startups",
      price: "$2,500",
      duration: "2-4 weeks",
      features: [
        "UI/UX design for 5-10 screens",
        "Basic user research",
        "2 design revisions",
        "Design system basics",
        "Mobile responsive design",
        "Design handoff assets"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      id: "professional",
      name: "Professional",
      description: "Comprehensive design solution for growing businesses",
      price: "$5,500",
      duration: "4-8 weeks",
      features: [
        "UI/UX design for 15-25 screens",
        "Comprehensive user research",
        "User personas & journey maps",
        "3 design revisions",
        "Complete design system",
        "Usability testing",
        "Mobile & desktop design",
        "Developer handoff support"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Full-scale design transformation for large organizations",
      price: "$12,500",
      duration: "8-16 weeks",
      features: [
        "UI/UX design for 30+ screens",
        "Extensive user research",
        "Multiple user personas",
        "Unlimited revisions",
        "Advanced design system",
        "Comprehensive testing",
        "Multi-platform design",
        "Team training & workshops",
        "Ongoing support (3 months)"
      ],
      popular: false,
      cta: "Contact for Details"
    }
  ];

  const addOns = [
    {
      name: "Additional Screen Design",
      description: "Extra screens beyond package limits",
      price: "$150-300 per screen"
    },
    {
      name: "Animation & Micro-interactions",
      description: "Custom animations and interactive elements",
      price: "$500-1,500"
    },
    {
      name: "Brand Identity Design",
      description: "Logo, colors, typography, brand guidelines",
      price: "$2,000-5,000"
    },
    {
      name: "User Testing Sessions",
      description: "Additional usability testing rounds",
      price: "$800-1,200 per session"
    },
    {
      name: "Implementation Support",
      description: "Direct collaboration with development team",
      price: "$150 per hour"
    }
  ];

  const testimonials = [
    {
      text: "Vickash delivered exceptional UI/UX design that transformed our user engagement. Professional, creative, and results-driven.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFlow",
      rating: 5
    },
    {
      text: "The design system Vickash created has been instrumental in scaling our product across multiple platforms efficiently.",
      author: "Michael Chen",
      role: "CTO",
      company: "DataFlow Inc",
      rating: 5
    },
    {
      text: "Outstanding user research insights that completely changed our product strategy. Highly recommend!",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "StartupXYZ",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What's included in the discovery phase?",
      answer: "The discovery phase includes stakeholder interviews, competitor analysis, user research, goal definition, and project planning. This ensures we align on objectives and create a solid foundation for the design process."
    },
    {
      question: "How many revisions are included?",
      answer: "The number of revisions depends on your package. Starter includes 2 major revisions, Professional includes 3, and Enterprise includes unlimited revisions. Minor adjustments are always included."
    },
    {
      question: "Do you work with development teams?",
      answer: "Absolutely! I provide detailed design specifications, assets, and can collaborate directly with your development team to ensure pixel-perfect implementation. Implementation support is available as an add-on."
    },
    {
      question: "What tools do you use?",
      answer: "I primarily use Figma for design work, along with various research and prototyping tools like Maze, Optimal Workshop, and Principle depending on project needs."
    },
    {
      question: "Can you work within our existing brand guidelines?",
      answer: "Yes, I can work within your existing brand guidelines or help evolve them as needed. I'm experienced in both following established design systems and creating new ones."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Typical ranges are: Starter (2-4 weeks), Professional (4-8 weeks), Enterprise (8-16 weeks). Rush projects may be accommodated with priority pricing."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5">
              <Zap className="w-4 h-4 mr-2" />
              Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">Design Services That</span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              From initial concept to final implementation, I provide comprehensive design 
              services that transform your ideas into exceptional user experiences that 
              users love and businesses value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <a href="#packages">View Packages</a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/20 hover:border-primary hover:bg-primary/5"
                  >
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <ContactForm variant="compact" />
                </DialogContent>
              </Dialog>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="animate-scale-in">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Avg UX Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What I <span className="text-primary">Offer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive design services covering every aspect of the user experience, 
              from research and strategy to implementation and optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.shortDescription}</p>
                  
                  {/* <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Starting from</span>
                      <span className="font-semibold text-lg text-primary">{service.startingPrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Timeline</span>
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                  </div> */}
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-white hover:border-primary transition-all">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <ServiceModal service={service} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section
      <section id="packages" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Choose Your <span className="text-primary">Package</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible packages designed to meet different project needs and budgets. 
              All packages include my signature attention to detail and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.id} 
                className={`relative p-8 hover:shadow-xl transition-all duration-300 animate-scale-in ${
                  pkg.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.duration}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className={`w-full ${
                          pkg.popular 
                            ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700' 
                            : ''
                        }`}
                        variant={pkg.popular ? 'default' : 'outline'}
                      >
                        {pkg.cta}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Get Started with {pkg.name}</h3>
                        <p className="text-muted-foreground">
                          Ready to begin your project? Fill out the form below and I'll get back to you within 24 hours.
                        </p>
                        <ContactForm variant="compact" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Add-ons */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Add-On <span className="text-primary">Services</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <Card key={addon.name} className="p-6 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
      //             <CardContent className="p-0">
      //               <h4 className="font-semibold mb-2">{addon.name}</h4>
      //               <p className="text-sm text-muted-foreground mb-3">{addon.description}</p>
      //               <div className="text-sm font-medium text-primary">{addon.price}</div>
      //             </CardContent>
      //           </Card> */}
      {/* //         ))} */}
      {/* //       </div> */}
      {/* //     </div> */}
      {/* //   </div> */}
      {/* // </section> */}

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My Design <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures exceptional results through 
              systematic approach, collaboration, and continuous iteration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Search, title: "Discovery", description: "Understanding goals and requirements" },
              { icon: Users, title: "Research", description: "User interviews and analysis" },
              { icon: FileText, title: "Strategy", description: "Information architecture and planning" },
              { icon: Palette, title: "Design", description: "Visual design and prototyping" },
              { icon: Eye, title: "Testing", description: "Usability testing and validation" },
              { icon: Code, title: "Handoff", description: "Implementation support and delivery" }
            ].map((step, index) => (
              <Card key={step.title} className="p-6 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Client <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              What clients say about working with me and the results we achieved together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.author} className="p-6 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Common questions about my services, process, and working together.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={faq.question} className="p-6 animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <CardContent className="p-0">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start Your <span className="text-primary">Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project goals and how I can help you create 
              exceptional user experiences that drive business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                  >
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <ContactForm />
                </DialogContent>
              </Dialog>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a href="/portfolio">View My Work</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Service Modal Component
function ServiceModal({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
            <service.icon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold">{service.title}</h2>
        </div>
        <p className="text-muted-foreground">{service.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-3">What's Included</h3>
          <ul className="space-y-2">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">Process Overview</h3>
          <ol className="space-y-2">
            {service.process.map((step: string, index: number) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </div>
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-3">Deliverables</h3>
        <div className="flex flex-wrap gap-2">
          {service.deliverables.map((deliverable: string) => (
            <Badge key={deliverable} variant="secondary">
              {deliverable}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
        <div>
          <div className="text-sm text-muted-foreground">Starting from</div>
          <div className="text-2xl font-bold text-primary">{service.startingPrice}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Timeline</div>
          <div className="text-lg font-semibold">{service.timeline}</div>
        </div>
      </div>
      
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
            <MessageSquare className="mr-2 w-4 h-4" />
            Discuss This Service
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <ContactForm variant="compact" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
