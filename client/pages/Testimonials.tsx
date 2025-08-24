import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  Search, 
  Filter,
  Quote,
  Heart,
  TrendingUp,
  Users,
  Award,
  ExternalLink,
  MessageSquare,
  Calendar
} from "lucide-react";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFlow Solutions",
      image: "/placeholder.svg",
      rating: 5,
      category: "ui-ux",
      projectType: "Mobile App Redesign",
      content: "Vickash completely transformed our mobile app experience. The new design increased our user engagement by 60% and reduced support tickets by 40%. His attention to detail and user-centric approach was exceptional.",
      results: ["60% increase in user engagement", "40% reduction in support tickets", "4.8/5 app store rating"],
      date: "March 2024",
      featured: true,
      linkedIn: "https://linkedin.com/in/sarah-johnson"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "DataFlow Inc",
      image: "/placeholder.svg",
      rating: 5,
      category: "design-systems",
      projectType: "Design System Creation",
      content: "The design system Vickash created has been instrumental in scaling our product across multiple platforms. It reduced our development time by 50% and ensured consistency across all our interfaces.",
      results: ["50% faster development", "Consistent UI across 8 products", "90% developer satisfaction"],
      date: "February 2024",
      featured: true,
      linkedIn: "https://linkedin.com/in/michael-chen"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "StartupXYZ",
      image: "/placeholder.svg",
      rating: 5,
      category: "branding",
      projectType: "Brand Identity Design",
      content: "Vickash helped us create a brand identity that perfectly captures our vision. The new branding has been instrumental in our fundraising success and customer acquisition.",
      results: ["Successfully raised $2M Series A", "300% increase in brand recognition", "Award-winning design"],
      date: "January 2024",
      featured: false,
      linkedIn: "https://linkedin.com/in/emily-rodriguez"
    },
    {
      id: 4,
      name: "Dr. Robert Kim",
      role: "Chief Medical Officer",
      company: "MedConnect Systems",
      image: "/placeholder.svg",
      rating: 5,
      category: "ui-ux",
      projectType: "Healthcare Portal",
      content: "Finally, a healthcare portal that puts patients first. The accessibility features Vickash implemented have made our platform usable for patients of all ages and abilities.",
      results: ["85% increase in patient adoption", "99% accessibility compliance", "4.9/5 patient satisfaction"],
      date: "December 2023",
      featured: true,
      linkedIn: "https://linkedin.com/in/robert-kim-md"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Head of Digital",
      company: "NextGen Banking",
      image: "/placeholder.svg",
      rating: 5,
      category: "ui-ux",
      projectType: "Mobile Banking App",
      content: "The new mobile banking app design has transformed how our customers interact with their finances. Vickash understood the security requirements while creating an intuitive experience.",
      results: ["200% increase in app downloads", "75% improvement in engagement", "Industry innovation award"],
      date: "November 2023",
      featured: false,
      linkedIn: "https://linkedin.com/in/lisa-thompson"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "VP of Engineering",
      company: "Global Corp",
      image: "/placeholder.svg",
      rating: 5,
      category: "design-systems",
      projectType: "Enterprise Design System",
      content: "This design system has been a game-changer for our organization. Vickash created something that works at scale and has improved consistency across our entire product suite.",
      results: ["90% faster development time", "50% reduction in design debt", "Adopted by 15+ teams"],
      date: "October 2023",
      featured: true,
      linkedIn: "https://linkedin.com/in/james-wilson"
    },
    {
      id: 7,
      name: "Amanda Foster",
      role: "Marketing Director",
      company: "E-commerce Plus",
      image: "/placeholder.svg",
      rating: 5,
      category: "ui-ux",
      projectType: "E-commerce Platform",
      content: "Vickash redesigned our entire e-commerce platform and the results speak for themselves. Our conversion rate improved dramatically and customers love the new experience.",
      results: ["45% increase in conversion rate", "60% reduction in cart abandonment", "35% increase in AOV"],
      date: "September 2023",
      featured: false,
      linkedIn: "https://linkedin.com/in/amanda-foster"
    },
    {
      id: 8,
      name: "David Park",
      role: "CTO",
      company: "AI Innovations",
      image: "/placeholder.svg",
      rating: 5,
      category: "user-research",
      projectType: "UX Research & Strategy",
      content: "The user research insights Vickash provided completely changed our product strategy. His methodology was thorough and the recommendations were actionable and impactful.",
      results: ["40% increase in user satisfaction", "25% reduction in churn rate", "Data-driven product roadmap"],
      date: "August 2023",
      featured: false,
      linkedIn: "https://linkedin.com/in/david-park"
    },
    {
      id: 9,
      name: "Sophie Chen",
      role: "Design Lead",
      company: "Creative Agency",
      image: "/placeholder.svg",
      rating: 5,
      category: "branding",
      projectType: "Brand Guidelines",
      content: "Working with Vickash on our client's brand identity was fantastic. His systematic approach and creative vision resulted in a brand that truly resonates with the target audience.",
      results: ["150% increase in brand engagement", "Successful brand launch", "Client retention improved"],
      date: "July 2023",
      featured: false,
      linkedIn: "https://linkedin.com/in/sophie-chen"
    },
    {
      id: 10,
      name: "Mark Rodriguez",
      role: "Product Owner",
      company: "SaaS Solutions",
      image: "/placeholder.svg",
      rating: 5,
      category: "ui-ux",
      projectType: "Dashboard Redesign",
      content: "The dashboard redesign Vickash delivered exceeded our expectations. Complex data is now presented in an intuitive way that our users actually enjoy interacting with.",
      results: ["65% faster task completion", "90% user satisfaction score", "50% reduction in training time"],
      date: "June 2023",
      featured: false,
      linkedIn: "https://linkedin.com/in/mark-rodriguez"
    },
    {
      id: 11,
      name: "Jessica Liu",
      role: "Startup Founder",
      company: "HealthTech Innovations",
      image: "/placeholder.svg",
      rating: 5,
      category: "user-research",
      projectType: "User Experience Audit",
      content: "Vickash's UX audit identified critical issues we hadn't noticed. His recommendations were spot-on and implementing them led to significant improvements in user engagement.",
      results: ["30% increase in user retention", "Improved onboarding flow", "Higher user activation rates"],
      date: "May 2023",
      featured: false,
      linkedIn: "https://linkedin.com/in/jessica-liu"
    },
    {
      id: 12,
      name: "Alex Thompson",
      role: "Head of Product",
      company: "EdTech Platform",
      image: "/placeholder.svg",
      rating: 5,
      category: "ui-ux",
      projectType: "Learning Platform Design",
      content: "Vickash created an educational platform design that truly enhances the learning experience. Students and teachers love the intuitive interface and improved functionality.",
      results: ["80% increase in course completion", "95% teacher satisfaction", "Award for educational innovation"],
      date: "April 2023",
      featured: false,
      linkedIn: "https://linkedin.com/in/alex-thompson"
    }
  ];

  const categories = [
    { id: "all", name: "All Reviews", count: testimonials.length },
    { id: "ui-ux", name: "UI/UX Design", count: testimonials.filter(t => t.category === "ui-ux").length },
    { id: "design-systems", name: "Design Systems", count: testimonials.filter(t => t.category === "design-systems").length },
    { id: "branding", name: "Branding", count: testimonials.filter(t => t.category === "branding").length },
    { id: "user-research", name: "User Research", count: testimonials.filter(t => t.category === "user-research").length }
  ];

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesFilter = activeFilter === "all" || testimonial.category === activeFilter;
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.projectType.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5">
              <Heart className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">What Clients</span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Say About Me
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Real feedback from real clients who have worked with me to create 
              exceptional digital experiences. These testimonials showcase the 
              impact of thoughtful design on business success.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="animate-scale-in">
                <div className="text-3xl font-bold text-primary flex items-center justify-center gap-1">
                  {averageRating.toFixed(1)}
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">{testimonials.length}</div>
                <div className="text-sm text-muted-foreground">Client Reviews</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Featured <span className="text-primary">Success Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Highlighting some of the most impactful projects and the 
              exceptional results achieved through strategic design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTestimonials.slice(0, 4).map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <a 
                          href={testimonial.linkedIn} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="mb-4">
                    {testimonial.projectType}
                  </Badge>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <blockquote className="text-muted-foreground italic pl-6">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary mb-2">Key Results:</h4>
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials with Filtering */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              All Client <span className="text-primary">Reviews</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Browse through all client testimonials and filter by project type or search for specific companies.
            </p>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by client name, company, or content..."
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
                      : "hover:bg-primary/5"
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
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="p-6 hover:shadow-xl transition-all duration-300 animate-scale-in h-full"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.projectType}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground italic mb-4 flex-1">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="space-y-1 mb-4">
                    {testimonial.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <TrendingUp className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span className="line-clamp-1">{result}</span>
                      </div>
                    ))}
                    {testimonial.results.length > 2 && (
                      <div className="text-xs text-muted-foreground">
                        +{testimonial.results.length - 2} more results
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
                    <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                    <a 
                      href={testimonial.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Testimonials Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Working with companies of all sizes, from startups to enterprise organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60">
            {[
              "TechFlow", "DataFlow Inc", "StartupXYZ", "MedConnect", "NextGen", "Global Corp"
            ].map((company, index) => (
              <div 
                key={company} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-muted-foreground">
                    {company.charAt(0)}
                  </span>
                </div>
                <div className="text-sm font-medium text-muted-foreground">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Be My <span className="text-primary">Next Success Story?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the growing list of satisfied clients who have transformed 
              their digital presence through exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <a href="/contact">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Start Your Project
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a href="/portfolio">
                  <Award className="mr-2 w-4 h-4" />
                  View My Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
