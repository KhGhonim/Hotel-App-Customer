import ForgetPasswordWrapper from "components/Dashboard/Wrappers/ForgetPasswordWrapper/ForgetPasswordWrapper";

export const metadata = {
  title: "LuxeStay Hotel - Forget Password",
  description: "Know more about our rooms. Designed by Khaled Ghonim",

  icons: {
    icon: "/images/KGLogo.png",
  },
};


function page() {
  return (
    <>
      <ForgetPasswordWrapper />
    </>
  );
}

export default page;
