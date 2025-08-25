import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Calendar,
  ExternalLink,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Globe,
  Download,
  Star,
  CheckCircle,
  ArrowRight,
  Users,
  Zap,
  Target
} from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const [selectedContactMethod, setSelectedContactMethod] = useState("form");

  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "Email",
      subtitle: "Get in touch via email",
      description: "Perfect for detailed project discussions and file sharing",
      contact: "vickashshivan.designer@gmail.com",
      responseTime: "Within 6 hours",
      bestFor: ["Project inquiries", "Detailed requirements", "File sharing", "Follow-ups"]
    },
    {
      id: "phone",
      icon: Phone,
      title: "Phone Call",
      subtitle: "Schedule a phone consultation",
      description: "Ideal for quick discussions and urgent matters",
      contact: "+1 (555) 123-4567",
      responseTime: "Same day callback",
      bestFor: ["Urgent matters", "Quick consultations", "Project clarifications", "Real-time discussion"]
    },
    {
      id: "video",
      icon: MessageSquare,
      title: "Video Meeting",
      subtitle: "Face-to-face consultation",
      description: "Best for detailed project planning and presentations",
      contact: "Schedule via Calendly",
      responseTime: "Within 24 hours",
      bestFor: ["Project planning", "Design reviews", "Team meetings", "Detailed presentations"]
    },
    {
      id: "linkedin",
      icon: Linkedin,
      title: "LinkedIn",
      subtitle: "Connect professionally",
      description: "Great for networking and professional discussions",
      contact: "linkedin.com/in/vickash-shivan-415139267",
      responseTime: "Within 24 hours",
      bestFor: ["Professional networking", "Industry discussions", "Recommendations", "Career opportunities"]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vickash-shivan-415139267/",
      description: "Professional updates and networking"
    },
    {
      name: "Dribbble",
      icon: Globe,
      url: "#",
      description: "Latest design shots and inspiration"
    },
    {
      name: "Behance",
      icon: Globe,
      url: "#",
      description: "Full project case studies and portfolio"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      description: "Design thoughts and industry insights"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      description: "Behind the scenes and design process"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "#",
      description: "Code samples and design system resources"
    }
  ];

  const faqs = [
    {
      question: "What's the best way to get in touch?",
      answer: "For project inquiries and detailed discussions, I recommend using the contact form or sending an email. For urgent matters or quick questions, feel free to call directly."
    },
    {
      question: "How quickly do you respond?",
      answer: "I typically respond to emails within 6 hours during business days. Phone calls are returned the same day, and video meetings can usually be scheduled within 24 hours."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! I offer a complimentary 30-minute consultation for all new clients to discuss your project needs and see if we're a good fit to work together."
    },
    {
      question: "What information should I include in my inquiry?",
      answer: "Please include details about your project goals, timeline, budget range, and any specific requirements. The more information you provide, the better I can understand your needs."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I work with clients worldwide and am experienced in remote collaboration. I'm flexible with time zones and use various communication tools."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Simple projects may take 2-4 weeks, while comprehensive design systems can take 8-16 weeks. I'll provide a detailed timeline during our initial consultation."
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM PST" },
    { day: "Sunday", hours: "Closed (Emergency only)" }
  ];

  const quickStats = [
    { icon: Clock, number: "< 6hrs", label: "Average Response Time" },
    { icon: Users, number: "20+", label: "Happy Clients" },
    { icon: Star, number: "4.9/5", label: "Client Satisfaction" },
    { icon: CheckCircle, number: "100%", label: "Project Success Rate" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5">
                <Send className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Let's Create Something
                <span className="text-primary"> Amazing Together</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ready to transform your digital presence? I'm here to help you create 
                exceptional user experiences that drive results. Let's discuss your project 
                and explore how we can work together.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {quickStats.map((stat, index) => (
                  <div key={stat.label} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-xl font-bold text-foreground">{stat.number}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                  onClick={() => setSelectedContactMethod("form")}
                >
                  <Send className="mr-2 w-4 h-4" />
                  Start Conversation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:border-primary hover:bg-primary/5"
                  asChild
                >
                  <a href="#schedule">
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule Call
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <Card className="p-8 shadow-xl">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
                    <p className="text-muted-foreground">Choose your preferred way to connect</p>
                  </div>
                  
                  <div className="space-y-3">
                    {contactMethods.slice(0, 3).map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setSelectedContactMethod(method.id)}
                        className={`w-full p-4 rounded-lg border text-left transition-all duration-200 hover:shadow-md ${
                          selectedContactMethod === method.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <method.icon className="w-5 h-5 text-primary" />
                          <div>
                            <div className="font-medium text-sm">{method.title}</div>
                            <div className="text-xs text-muted-foreground">{method.subtitle}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Multiple Ways to <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the communication method that works best for you. 
              I'm committed to providing prompt, helpful responses regardless of how you reach out.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.id} 
                className="p-6 hover:shadow-xl transition-all duration-300 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedContactMethod(method.id)}
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="font-medium text-xs">{method.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response:</span>
                      <span className="font-medium text-xs">{method.responseTime}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-2">Best for:</div>
                    <div className="flex flex-wrap gap-1">
                      {method.bestFor.slice(0, 2).map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="animate-slide-in-right space-y-8">
              {/* Direct Contact */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4">Direct Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">vickashshivan.designer@gmail.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-sm text-muted-foreground">Available Worldwide (Remote)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Working Hours (PST)
                  </h3>
                  <div className="space-y-3">
                    {workingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{schedule.day}</span>
                        <span className="text-sm font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                    <p className="text-xs text-primary">
                      <Clock className="w-3 h-3 inline mr-1" />
                      Available for emergency consultations outside business hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4">Follow & Connect</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
                      >
                        <social.icon className="w-5 h-5 text-primary" />
                        <div>
                          <div className="font-medium text-sm">{social.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">
                            {social.description}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about getting in touch and working together.
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
      </section>

      {/* Call to Action */}
      <section id="schedule" className="py-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Get <span className="text-primary">Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let your project ideas stay just ideas. Let's turn them into 
              exceptional digital experiences that your users will love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
              >
                <Calendar className="mr-2 w-4 h-4" />
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a href="/services">
                  <Target className="mr-2 w-4 h-4" />
                  View Services & Pricing
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Free 30-min consultation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                No obligations
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Quick response time
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
