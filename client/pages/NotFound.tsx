import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="p-12">
            <CardContent className="p-0">
              <div className="text-6xl font-bold text-primary mb-4">404</div>

              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Page Not Found
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist.
                It might have been moved or deleted.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/">
                    <Home className="mr-2 w-4 h-4" />
                    Go Home
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

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground">
                  Looking for something specific? Try navigating from the homepage
                  or <Link to="/#contact" className="text-primary hover:underline">contact me</Link> directly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
