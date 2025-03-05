import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { emailRegex, passwordRegex } from "../utils/Regex";

export const useRegister = () => {
  const [avatar, setAvatar] = useState(null);
  const [avatartoBE, setavatartoBE] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [ArrayData, setArrayData] = useState({});
  const [Isloading, setIsloading] = useState(false);
  const router = useRouter();
  const ArrayDatas = (eo) => {
    setArrayData({ ...ArrayData, [eo.target.name]: eo.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      setavatartoBE(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);

    if (!avatar || !avatartoBE) {
      toast.error("Please select an avatar");
      setIsloading(false);
      return;
    }

    if (ArrayData?.password !== ArrayData?.confirmPassword) {
      setPasswordError("Passwords do not match");
      setIsloading(false);
      return;
    }

    if (!emailRegex.test(ArrayData?.email)) {
      toast.error("Invalid email address");
      setIsloading(false);
      return;
    }

    if (!passwordRegex.test(ArrayData?.password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      setIsloading(false);
      return;
    }

    if (
      !ArrayData?.email ||
      !ArrayData?.password ||
      !ArrayData?.confirmPassword ||
      !ArrayData?.firstName ||
      !ArrayData?.lastName
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    if (avatartoBE) {
      formData.append("avatar", avatartoBE);
    }
    formData.append("email", ArrayData?.email);
    formData.append("password", ArrayData?.password);
    formData.append("firstName", ArrayData?.firstName);
    formData.append("lastName", ArrayData?.lastName);
    formData.append("phoneNumber", ArrayData?.phoneNumber);

    const res = await fetch(process.env.NEXT_PUBLIC_Register, {
      method: "POST",
      credentials: "include",
      cache: "no-store",
      body: formData,
    });

    try {
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        setIsloading(false);
        return;
      }

      toast.success("Registration successful. Redirecting to home page...");
      router.replace("/login");
      setIsloading(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
      console.log("Error:", error);
      setIsloading(false);
    } finally {
      setIsloading(false);
    }
  };

  return {
    avatar,
    handleAvatarChange,
    ArrayData,
    ArrayDatas,
    handleSubmit,
    passwordError,
    Isloading,
  };

}

export default useRegister
