import Navbar from "@/components/header";
import Footer from "@/components/Footer";



export default function RootLayout({children}) {

  return (
<>

<Navbar/>
<main>{children}</main>
<Footer/>


</>
   
  );
}