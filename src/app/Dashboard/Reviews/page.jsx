import ReviewsPageWrapper from "components/Dashboard/Wrappers/ReviewsPageWrapper/ReviewsPageWrapper";

export const metadata = {
  title: "Reviews Page",
  description: "Hotel system management software. Designed by Khaled Ghonim",
  icons: {
    icon: "/images/KGLogo.png",
  },
};
export default function page() {
  return <ReviewsPageWrapper />;
}
