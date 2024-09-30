import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <FaSpinner className="animate-spin w-10 h-10 text-blue-500" />
    </div>
  );
}
