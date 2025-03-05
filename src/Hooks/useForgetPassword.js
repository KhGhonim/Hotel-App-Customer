import { useState } from "react";

export const useForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isloading, setisloading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return {
    email,
    setEmail,
    handleSubmit,
    isSubmitted,
    isloading,
    setIsSubmitted,
  };
};

export default useForgetPassword;
