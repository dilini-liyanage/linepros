import Image from "next/image";
import HomePage from "./home/page";
import AboutPage from "./about/page";
import ProductsPage from "./products/page";
import NewsPage from "./news/page";
import ContactsPage from "./contacts/page";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative w-full bg-green-200">
      <Image
        src="/1.png" // Path to your image
        layout="fill" // This will make the image fill its parent
        objectFit="cover" // This will scale the image to the parent width
        quality={100} // Optional: define the quality of the image
        alt="Background Image" // Optional: define a meaningful alt attribute
      />
      <div className="relative z-50">
        <Header />
        <section id="home" className="h-auto">
          <HomePage />
        </section>
        <section id="about" className="h-auto">
          <AboutPage />
        </section>
        <section id="products" className="h-auto">
          <ProductsPage />
        </section>
        <section id="news" className="h-auto">
          <NewsPage />
        </section>
        <section id="contacts" className="h-auto">
          <ContactsPage />
        </section>
        <section>
        <Footer/>
        </section>

        
      </div>
    </div>
  );
}
