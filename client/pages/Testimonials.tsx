import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  Search, 
  Quote,
  Heart,
  TrendingUp,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

// It's highly recommended to use a library like React Helmet to manage page titles and meta descriptions for SEO.
// Example:
// <Helmet>
//   <title>Testimonials | Vickash Shivan | Product Designer</title>
//   <meta name="description" content="Read what clients have to say about working with Vickash Shivan. Real feedback from real projects." />
// </Helmet>

/*
JSON-LD for SEO. This is an example and should be dynamically generated for each testimonial.
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson"
  },
  "reviewBody": "Vickash completely transformed our mobile app experience. The new design increased our user engagement by 60% and reduced support tickets by 40%. His attention to detail and user-centric approach was exceptional.",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "itemReviewed": {
    "@type": "Person",
    "name": "Vickash Shivan"
  }
}
</script>
*/

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechFlow Solutions",
      image: "https://i.pravatar.cc/150?u=sarahjohnson",
      rating: 5,
      category: "ui-ux",
      projectType: "Mobile App Redesign",
      content: "Vickash completely transformed our mobile app experience. The new design increased our user engagement by 60% and reduced support tickets by 40%. His attention to detail and user-centric approach was exceptional.",
      results: ["60% increase in user engagement", "40% reduction in support tickets", "4.8/5 app store rating"],
      date: "March 2024",
      featured: true,
      linkedIn: "https://linkedin.com/in/sarah-johnson"
    },
    // Add more testimonials here...
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
              Client Love
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-foreground">What My Clients</span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                Are Saying
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              I'm proud to have worked with some incredible clients. Here's what they have to say about our collaboration and the results we've achieved together.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="animate-scale-in">
                <div className="text-3xl font-bold text-primary flex items-center justify-center gap-1">
                  {averageRating.toFixed(1)}
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">{testimonials.length}+</div>
                <div className="text-sm text-muted-foreground">Client Reviews</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
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
              A few of my favorite collaborations that highlight the tangible impact of strategic, user-centered design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={`A portrait of ${testimonial.name}`}
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
                  
                  <Badge variant="secondary" className="mb-4">{testimonial.projectType}</Badge>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <blockquote className="text-muted-foreground italic pl-6">
                      <p>"{testimonial.content}"</p>
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
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
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
              Browse through all of my client testimonials. Use the filters to sort by project type or the search to find specific feedback.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by client, company, or keyword..."
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
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">{testimonial.projectType}</Badge>
                  </div>
                  
                  <blockquote className="text-sm text-muted-foreground italic mb-4 flex-1">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  
                  <div className="mt-auto pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
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
              <p className="text-muted-foreground">Try adjusting your search or filter to find what you're looking for.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Be My Next <span className="text-primary">Success Story?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm passionate about helping my clients succeed. If you're ready to create an exceptional digital experience that drives results, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 shadow-lg"
                asChild
              >
                <a href="/contact">
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Let's Work Together
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a href="/portfolio">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Explore My Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}