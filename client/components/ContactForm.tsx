import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
  variant?: "default" | "compact";
}

export default function ContactForm({ className, variant = "default" }: ContactFormProps) {
  const { formData, formState, errors, updateField, validateField, submitForm } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  const handleInputChange = (field: string, value: string) => {
    updateField(field as keyof typeof formData, value);
  };

  const handleBlur = (field: string, value: string) => {
    validateField(field as keyof typeof formData, value);
  };

  if (formState.isSuccess) {
    return (
      <Card className={cn("p-8", className)}>
        <CardContent className="p-0 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out! I'll get back to you within 24 hours.
          </p>
          <Button 
            onClick={() => window.location.reload()} 
            variant="outline"
            className="border-green-200 hover:border-green-300 hover:bg-green-50"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("p-8", className)}>
      <CardContent className="p-0">
        {variant === "default" && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Let's Start a Conversation</h3>
            <p className="text-muted-foreground">
              I'd love to hear about your project. Send me a message and I'll respond within 24 hours.
            </p>
          </div>
        )}

        {formState.isError && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {formState.errorMessage}
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <Input 
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                onBlur={(e) => handleBlur("name", e.target.value)}
                placeholder="Your full name"
                className={cn(
                  "transition-colors",
                  errors.name ? "border-red-300 focus:border-red-500" : "focus:border-primary"
                )}
                disabled={formState.isSubmitting}
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={(e) => handleBlur("email", e.target.value)}
                placeholder="your@email.com"
                className={cn(
                  "transition-colors",
                  errors.email ? "border-red-300 focus:border-red-500" : "focus:border-primary"
                )}
                disabled={formState.isSubmitting}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <Input 
              name="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              onBlur={(e) => handleBlur("subject", e.target.value)}
              placeholder="What's this about?"
              className={cn(
                "transition-colors",
                errors.subject ? "border-red-300 focus:border-red-500" : "focus:border-primary"
              )}
              disabled={formState.isSubmitting}
            />
            {errors.subject && (
              <p className="text-sm text-red-600">{errors.subject}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              onBlur={(e) => handleBlur("message", e.target.value)}
              placeholder="Tell me about your project, timeline, and any specific requirements..."
              rows={variant === "compact" ? 4 : 5}
              className={cn(
                "transition-colors resize-none",
                errors.message ? "border-red-300 focus:border-red-500" : "focus:border-primary"
              )}
              disabled={formState.isSubmitting}
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message}</p>
            )}
            <p className="text-xs text-muted-foreground">
              {formData.message.length}/20 characters minimum
            </p>
          </div>
          
          <Button 
            type="submit" 
            disabled={formState.isSubmitting}
            className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 w-4 h-4" />
                Send Message
              </>
            )}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            I typically respond within 24 hours. For urgent inquiries, please call directly.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
