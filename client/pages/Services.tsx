import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Palette,
  Users,
  Code,
  Target,
  Search,
  CheckCircle,
  ArrowRight,
  Calendar,
  Zap,
  Star,
  MessageSquare,
  FileText,
  Lightbulb,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

// It's highly recommended to use a library like React Helmet to manage page titles and meta descriptions for SEO.
// Example:
// <Helmet>
//   <title>Services | Vickash Shivan | Product Designer</title>
//   <meta name="description" content="Discover the design services offered by Vickash Shivan, including UI/UX design, user research, and design systems. Let's build something amazing together." />
// </Helmet>

/*
JSON-LD for SEO. This is an example and should be dynamically generated based on the service.
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "UI/UX Design",
  "provider": {
    "@type": "Person",
    "name": "Vickash Shivan"
  },
  "description": "Transform your ideas into beautiful, functional designs that users love. I focus on creating intuitive interfaces that balance aesthetics with usability, ensuring your product not only looks great but also provides an exceptional user experience."
}
</script>
*/

export default function Services() {
  const services = [
    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      shortDescription: "Crafting intuitive and beautiful digital experiences.",
      description:
        "I transform your ideas into beautiful, functional, and user-friendly designs. My focus is on creating intuitive interfaces that not only look stunning but also provide an exceptional user experience that drives engagement and retention.",
      features: [
        "User Interface (UI) Design",
        "User Experience (UX) Design",
        "Wireframing & Prototyping",
        "Visual Design & Branding",
        "Responsive & Mobile-First Design",
        "Accessibility (WCAG) Compliance",
      ],
      process: [
        "Discovery & Research",
        "User Journey Mapping",
        "Wireframing & Prototyping",
        "Visual Design",
        "Testing & Iteration",
        "Developer Handoff",
      ],
      deliverables: [
        "High-Fidelity Mockups",
        "Interactive Prototypes",
        "Comprehensive Style Guide",
        "Design Specifications",
        "All Necessary Assets",
      ],
    },
    {
      id: "user-research",
      icon: Search,
      title: "User Research",
      shortDescription:
        "Uncovering deep insights to inform your product strategy.",
      description:
        "I help you understand your users on a deeper level through comprehensive research. I conduct user interviews, surveys, and usability testing to provide you with actionable insights that drive design decisions and improve user satisfaction.",
      features: [
        "User Interviews & Surveys",
        "Usability Testing",
        "Competitive Analysis",
        "Persona Development",
        "User Journey Mapping",
        "Data Analysis & Insights",
      ],
      process: [
        "Research Planning",
        "Participant Recruitment",
        "Data Collection",
        "Analysis & Synthesis",
        "Insight Generation",
        "Actionable Recommendations",
      ],
      deliverables: [
        "Detailed Research Report",
        "User Personas",
        "Journey Maps",
        "Usability Findings",
        "Strategic Recommendations",
      ],
    },
    {
      id: "design-systems",
      icon: Code,
      title: "Design Systems",
      shortDescription:
        "Building scalable design systems for brand consistency.",
      description:
        "I create scalable and maintainable design systems that ensure consistency across your entire product ecosystem. I develop comprehensive component libraries, style guides, and documentation that empower your team to build better products, faster.",
      features: [
        "Component Library Development",
        "Design Token Implementation",
        "Comprehensive Style Guides",
        "Pattern & Asset Libraries",
        "Accessibility Guidelines",
        "Implementation Support & Training",
      ],
      process: [
        "Design Audit & Analysis",
        "Component & Token Design",
        "Documentation & Guidelines",
        "Implementation & Integration",
        "Team Training & Onboarding",
        "Ongoing Maintenance",
      ],
      deliverables: [
        "Complete Component Library",
        "Design Tokens",
        "Interactive Style Guide",
        "Comprehensive Documentation",
        "Implementation Guide",
      ],
    },
    {
      id: "usability-testing",
      icon: Target,
      title: "Usability Testing",
      shortDescription: "Validating your designs with real users.",
      description:
        "I help you optimize your product's usability through systematic testing and analysis. I design and conduct usability tests, analyze user behavior, and provide you with actionable recommendations to improve the user experience and achieve your business goals.",
      features: [
        "Test Planning & Design",
        "Moderated & Unmoderated Testing",
        "A/B & Preference Testing",
        "Heuristic Evaluation",
        "Analytics & Data Analysis",
        "Performance Metrics & KPIs",
      ],
      process: [
        "Test Planning & Scripting",
        "Participant Recruitment",
        "Test Execution & Moderation",
        "Data Analysis & Synthesis",
        "Findings & Recommendations Report",
        "Presentation of Results",
      ],
      deliverables: [
        "Detailed Test Plan",
        "Video Recordings of Sessions",
        "Comprehensive Analysis Report",
        "Actionable Recommendations",
        "Prioritized Improvement Roadmap",
      ],
    },
  ];

  const packages = [
    {
      id: "starter",
      name: "Starter",
      description: "Ideal for small projects and startups.",
      price: "$2,500",
      duration: "2-4 weeks",
      features: [
        "UI/UX design for up to 10 screens",
        "Basic user research",
        "2 rounds of revisions",
        "Core design system elements",
        "Mobile responsive design",
        "Developer handoff assets",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      id: "professional",
      name: "Professional",
      description: "A comprehensive solution for growing businesses.",
      price: "$5,500",
      duration: "4-8 weeks",
      features: [
        "UI/UX design for up to 25 screens",
        "In-depth user research",
        "User personas & journey maps",
        "3 rounds of revisions",
        "Complete design system",
        "Usability testing session",
        "Mobile & desktop design",
        "Developer handoff support",
      ],
      popular: true,
      cta: "Choose Professional",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "A full-scale design partnership for large organizations.",
      price: "Custom",
      duration: "Ongoing",
      features: [
        "Unlimited screen design",
        "Continuous user research",
        "Multiple user personas & flows",
        "Unlimited revisions & iterations",
        "Advanced, scalable design system",
        "Comprehensive usability testing",
        "Multi-platform design strategy",
        "Team training & workshops",
        "Dedicated ongoing support",
      ],
      popular: false,
      cta: "Contact for a Quote",
    },
  ];

  const testimonials = [
    {
      text: "Vickash delivered an exceptional UI/UX design that transformed our user engagement. He is professional, creative, and completely results-driven.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFlow",
      rating: 5,
    },
    {
      text: "The design system Vickash created has been instrumental in scaling our product across multiple platforms with remarkable efficiency and consistency.",
      author: "Michael Chen",
      role: "CTO",
      company: "DataFlow Inc.",
      rating: 5,
    },
    {
      text: "The user research insights Vickash provided were outstanding and completely reshaped our product strategy for the better. I can't recommend him enough!",
      author: "Emily Rodriguez",
      role: "Founder",
      company: "StartupXYZ",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What is your design process like?",
      answer:
        "My design process is collaborative and iterative. It typically includes a discovery phase, user research, ideation and design, prototyping and testing, and finally, developer handoff and support. I tailor the process to fit the specific needs of each project.",
    },
    {
      question: "How many revisions are included in a project?",
      answer:
        "The number of revisions depends on the package you choose. The Starter package includes 2 major revisions, the Professional package includes 3, and the Enterprise package includes unlimited revisions. I always ensure we have plenty of opportunities for feedback and iteration.",
    },
    {
      question: "Do you work with development teams?",
      answer:
        "Absolutely. I provide detailed design specifications, assets, and prototypes to ensure a smooth handoff to your development team. I'm also happy to collaborate directly with them to ensure a pixel-perfect implementation.",
    },
    {
      question: "What tools do you use for your design work?",
      answer:
        "I primarily use Figma for all my design and prototyping work. I also use a variety of other tools for research, testing, and project management, including Maze, Optimal Workshop, and Notion.",
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer:
        "Yes, I can seamlessly integrate with your existing brand guidelines to ensure consistency. I can also help you evolve and improve your brand identity if needed.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "I typically require a 50% deposit to begin a project, with the remaining 50% due upon completion. I'm also open to discussing other payment structures for larger or ongoing projects.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <Badge
              variant="outline"
              className="mb-6 text-primary border-primary/20 bg-primary/5"
            >
              <Zap className="w-4 h-4 mr-2" />
              My Services
            </Badge>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">Design Services to</span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Elevate Your Business
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              From initial concept to final implementation, I provide a complete
              suite of design services that will transform your ideas into
              exceptional user experiences that your customers will love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <a href="#packages">Explore Packages</a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary/20 hover:border-primary hover:bg-primary/5"
                  >
                    <MessageSquare className="mr-2 w-4 h-4" />
                    Book a Free Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <ContactForm variant="compact" />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What I <span className="text-primary">Can Do For You</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a range of design services to cover every aspect of the
              user experience, from initial research and strategy to final
              implementation and optimization.
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

                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.shortDescription}
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-white hover:border-primary transition-all"
                      >
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

      {/* Packages Section */}
      {/* <section id="packages" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Flexible Packages for{" "}
              <span className="text-primary">Every Need</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer a range of flexible packages designed to meet your
              specific project needs and budget. Every package includes my
              signature attention to detail and unwavering commitment to
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={pkg.id}
                className={`relative p-8 hover:shadow-xl transition-all duration-300 animate-scale-in ${pkg.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""}`}
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
                    <p className="text-muted-foreground mb-4">
                      {pkg.description}
                    </p>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {pkg.duration}
                    </div>
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
                        className={`w-full ${pkg.popular ? "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700" : ""}`}
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        {pkg.cta}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">
                          Get Started with the {pkg.name} Package
                        </h3>
                        <p className="text-muted-foreground">
                          Ready to begin your project? Fill out the form below
                          and I'll get back to you within 24 hours to discuss
                          the next steps.
                        </p>
                        <ContactForm variant="compact" />
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              My Proven Design <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I follow a proven and systematic methodology to ensure that every
              project I work on is a success. My process is built on
              collaboration, transparency, and a relentless focus on quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: Search,
                title: "1. Discovery",
                description:
                  "We start by understanding your business, your goals, and your users.",
              },
              {
                icon: Users,
                title: "2. Research",
                description:
                  "I conduct in-depth research to understand your users' needs, behaviors, and pain points.",
              },
              {
                icon: FileText,
                title: "3. Strategy",
                description:
                  "I develop a clear strategy and roadmap for the project, including information architecture and user flows.",
              },
              {
                icon: Palette,
                title: "4. Design",
                description:
                  "I create stunning visual designs and interactive prototypes that bring your ideas to life.",
              },
              {
                icon: Eye,
                title: "5. Testing",
                description:
                  "I validate my designs with real users to ensure they are intuitive, effective, and enjoyable to use.",
              },
              {
                icon: Code,
                title: "6. Handoff",
                description:
                  "I provide your development team with everything they need for a smooth and efficient implementation.",
              },
            ].map((step, index) => (
              <Card
                key={step.title}
                className="p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              What My <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm proud to have worked with some amazing clients. Here's what
              they have to say about our collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.author}
                className="p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Here are answers to some of the most common questions I receive.
              If you have any other questions, please don't hesitate to get in
              touch.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={faq.question}
                className="p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
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
              Ready to Build Something{" "}
              <span className="text-primary">Amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm currently available for new projects and would love to hear
              about yours. Let's discuss how I can help you create an
              exceptional digital experience that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                  >
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule a Free Consultation
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
                <Link to="/portfolio">See My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ServiceModal({ service }: { service: any }) {
  return (
    <div className="space-y-6 p-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
          <service.icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold">{service.title}</h2>
      </div>
      <p className="text-muted-foreground">{service.description}</p>

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
          <h3 className="font-semibold mb-3">My Process</h3>
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
        <h3 className="font-semibold mb-3">Key Deliverables</h3>
        <div className="flex flex-wrap gap-2">
          {service.deliverables.map((deliverable: string) => (
            <Badge key={deliverable} variant="secondary">
              {deliverable}
            </Badge>
          ))}
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
