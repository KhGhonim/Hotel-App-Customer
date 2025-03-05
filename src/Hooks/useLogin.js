import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { getSession, signIn } from "next-auth/react";
import { useDispatch } from "react-redux";
import { SignInSuccess } from "app/Redux/DashboardSlice";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = async (eo) => {
    eo.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
    }

    try {
      setIsLoading(true);

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!res.ok) {
        setIsLoading(false);
        toast.error("Wrong email or password");
        return;
      }

      if (res.ok) {
        toast.success("Login Successful");
        setIsLoading(false);
        const Session = await getSession();
        dispatch(SignInSuccess(Session?.user?.Role));
        router.push("/");
      }
      eo.target.reset();
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
    } finally {
      eo.target.reset();
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    setIsLoading,
    handleSubmit
  };

}

export default useLogin
