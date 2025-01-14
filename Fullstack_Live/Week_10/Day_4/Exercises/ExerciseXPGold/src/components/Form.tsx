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

import useForm from "./useForm";

const Form = () => {
  const validate = (values: { email: string; password: string }) => {
    const errors: { email?: string; password?: string } = {};

    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid.";
    }

    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
  };

  const { errors, registerField, handleSubmit } = useForm(
    { email: "", password: "" },
    validate
  );

  const onSubmit = () => {
    console.log("Form submitted successfully");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" {...registerField("email")} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...registerField("password")} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
