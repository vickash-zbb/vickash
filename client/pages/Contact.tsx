import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

// It's highly recommended to use a library like React Helmet to manage page titles and meta descriptions for SEO.
// Example:
// <Helmet>
//   <title>Contact Me | Vickash Shivan | Product Designer</title>
//   <meta name="description" content="Let's connect! Whether you have a project in mind or just want to say hello, I'd love to hear from you. Get in touch with Vickash Shivan today." />
// </Helmet>

/*
JSON-LD for SEO. This is an example and should be dynamically generated.
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vickash Shivan",
  "url": "https://your-website.com",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-866-735-0673",
      "contactType": "customer service"
    },
    {
      "@type": "ContactPoint",
      "email": "vickashshivan.designer@gmail.com",
      "contactType": "customer service"
    }
  ]
}
</script>
*/

export default function Contact() {

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vickash-shivan-415139267/",
      description: "Connect with me on LinkedIn for professional updates and networking."
    },
    {
      name: "Dribbble",
      icon: Globe,
      url: "#",
      description: "Check out my latest design shots and works in progress on Dribbble."
    },
    {
      name: "Behance",
      icon: Globe,
      url: "#",
      description: "Explore my full project case studies and portfolio on Behance."
    },
    {
      name: "GitHub",
      icon: Github,
      url: "#",
      description: "Find my code samples and design system resources on GitHub."
    }
  ];

  const faqs = [
    {
      question: "What's the best way to get in touch with you?",
      answer: "For project inquiries, I recommend using the contact form on this page or sending me an email. For urgent matters, feel free to give me a call."
    },
    {
      question: "How quickly can I expect a response?",
      answer: "I do my best to respond to all inquiries within 24 hours on business days. I'm passionate about what I do, and I'm excited to hear about your project."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, I offer a free 30-minute consultation to all new clients. It's a great opportunity for us to get to know each other and discuss your project in more detail."
    },
    {
      question: "What information should I include in my project inquiry?",
      answer: "To help me understand your needs, please include a brief overview of your project, your goals, your timeline, and your budget. The more information you can provide, the better."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! I have experience working with clients from all over the world. I'm comfortable with remote collaboration and flexible with time zones."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-primary border-primary/20 bg-primary/5">
              <Send className="w-4 h-4 mr-2" />
              Contact Me
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Let's Build Something <span className="text-primary">Amazing</span> Together
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              I'm thrilled you're here. Whether you have a project in mind, a question to ask, or just want to say hello, I'd love to hear from you. Let's start a conversation and see how we can work together to create something truly special.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
            
            <div className="animate-slide-in-right space-y-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4">My Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:vickashshivan.designer@gmail.com" className="text-sm text-muted-foreground hover:text-primary">vickashshivan.designer@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:+918667350673" className="text-sm text-muted-foreground hover:text-primary">+91 866 735 0673</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Location</div>
                        <p className="text-sm text-muted-foreground">Available Worldwide (Remote)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    My Working Hours (IST)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Monday - Friday</span>
                      <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Saturday</span>
                      <span className="text-sm font-medium">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sunday</span>
                      <span className="text-sm font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Connect With Me on <span className="text-primary">Social Media</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow me on my social media channels to see my latest work, get design tips, and stay up-to-date on my latest projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <social.icon className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-lg">{social.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{social.description}</p>
              </a>
            ))}
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
              Here are answers to some of the most common questions I receive. If you have any other questions, please don't hesitate to ask.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Start a <span className="text-primary">Project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm excited to learn about your project and how I can help you achieve your goals. Let's schedule a free consultation to discuss your ideas and see if we're a good fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <a href="#">
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule a Free Consultation
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <Link to="/portfolio">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  View My Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}