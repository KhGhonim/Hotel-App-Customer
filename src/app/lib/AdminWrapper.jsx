import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function AdminWrapper({ children }) {
  const router = useRouter();

  // @ts-ignore
  const { IsAdmin } = useSelector((state) => state.Users);

  // If the user is not an admin, redirect to the home page
  if (IsAdmin !== true) {
    router.push("/");
    return null;
  }

  return <>{children}</>;
}
