import Footer from "@/app/Footer/Footer";
import Navbar from "@/app/Navbar/Navbar";
 
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}