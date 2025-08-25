import { useState } from "react";
import { z } from "zod";
import { apiPost } from "@/lib/api";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validateField = (field: keyof ContactFormData, value: string) => {
    try {
      z.object({ [field]: contactFormSchema.shape[field] }).parse({ [field]: value });
      setErrors(prev => ({ ...prev, [field]: undefined }));
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [field]: error.errors[0]?.message }));
      }
      return false;
    }
  };

  const validateForm = () => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear success/error states when user starts typing
    if (formState.isSuccess || formState.isError) {
      setFormState(prev => ({ ...prev, isSuccess: false, isError: false, errorMessage: "" }));
    }
  };

  const submitForm = async (): Promise<boolean> => {
    if (!validateForm()) {
      return false;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, isError: false, errorMessage: "" }));

    try {
      // Make API call using utility function
      await apiPost('contact', formData);

      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isSuccess: true,
        isError: false,
        errorMessage: ""
      }));

      // Reset form data on success
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      return true;
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isError: true,
        isSuccess: false,
        errorMessage: error instanceof Error ? error.message : "Something went wrong. Please try again."
      }));
      return false;
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setErrors({});
    setFormState({
      isSubmitting: false,
      isSuccess: false,
      isError: false,
      errorMessage: ""
    });
  };

  return {
    formData,
    formState,
    errors,
    updateField,
    validateField,
    submitForm,
    resetForm
  };
}
