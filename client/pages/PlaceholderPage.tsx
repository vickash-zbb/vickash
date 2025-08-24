import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface PlaceholderPageProps {
  title: string;
  description: string;
  sectionId?: string;
}

export default function PlaceholderPage({ title, description, sectionId }: PlaceholderPageProps) {
  const scrollToSection = () => {
    if (sectionId) {
      // Navigate to home page and then scroll to section
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Construction className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                {description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Home
                  </Link>
                </Button>
                
                {sectionId && (
                  <Button 
                    variant="outline" 
                    onClick={scrollToSection}
                    className="border-primary/20 hover:border-primary hover:bg-primary/5"
                  >
                    View {title} Section
                  </Button>
                )}
              </div>
              
              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  💡 <strong>Want to see this page fully developed?</strong> Let me know what specific content 
                  or functionality you'd like to see here, and I'll build it out for you!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
