// Exercise 1: Building a Form Management Custom Hook
// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// How to create a reusable form management hook with TypeScript
// How to handle form validation with proper typing
// How to manage multiple input types in a single form
// Time Needed: 20 minutes

// Instructions:
// Create a custom hook called useForm that manages form state
// Implement validation for email and password fields
// Add type checking for form values and errors
// Create a registration form component using the hook
// Success Criteria:

// Hook properly manages form state with TypeScript types
// Validation works for all required fields
// Error messages display appropriately
// Form submission handles both success and error cases



import { useRef, useState } from "react";

interface FormValues {
  [key: string]: string;
}

interface Errors {
  [key: string]: string | null;
}

const useForm = (
  initialValues: FormValues,
  validate: (values: FormValues) => Errors
) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const fieldsRef = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, callback: () => void) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(); // Trigger form submission logic
    } else {
      // Focus the first invalid field
      const firstErrorField = Object.keys(validationErrors)[0];
      fieldsRef.current[firstErrorField]?.focus();
    }
  };

  const registerField = (name: string) => {
    return {
      ref: (el: HTMLInputElement) => (fieldsRef.current[name] = el), // Assign input to ref
      name,
      onChange: handleChange,
      value: values[name] || "",
    };
  };

  return { values, errors, registerField, handleSubmit };
};

export default useForm;