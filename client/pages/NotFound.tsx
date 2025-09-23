import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      `404 Error: User attempted to access a non-existent route: ${location.pathname}`
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-br from-primary-50 via-background to-primary-50/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12 shadow-2xl">
            <CardContent className="p-0">
              <div className="text-6xl font-bold text-primary mb-4">404</div>

              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Oops! It looks like you're lost.
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                The page you're looking for doesn't exist. It might have been moved, deleted, or maybe you just took a wrong turn.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild>
                  <Link to="/">
                    <Home className="mr-2 w-4 h-4" />
                    Go to Homepage
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="border-primary/20 hover:border-primary hover:bg-primary/5"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Go Back
                </Button>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                <h3 className="font-semibold mb-4">Here are some helpful links:</h3>
                <div className="flex justify-center gap-4 mb-4">
                    <Link to="/about" className="text-primary hover:underline">About Me</Link>
                    <Link to="/portfolio" className="text-primary hover:underline">My Work</Link>
                    <Link to="/contact" className="text-primary hover:underline">Contact Me</Link>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search my site..."
                    className="pl-10"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            // Implement your site search logic here
                            console.log('Search for:', e.currentTarget.value);
                        }
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;