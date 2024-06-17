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
        src="/1.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background Image"
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
      </div>
    </div>
  );
}
