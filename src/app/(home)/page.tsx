
import AboutUs from "./(components)/AboutUs";
import Banner from "./(components)/header/Banner";
import BestSellers from "./(components)/BestSellers";
import CakesAndSweets from "./(components)/CakesAndSweets";
import ClientTestimonials from "./(components)/ClientTestimonials";
import Footer from "./(components)/Footer";
import SpecialGallery from "./(components)/SpecialGallery";
import WhatMakesUsSpecial from "./(components)/WhatMakesUsSpecial";



export default function Home() {

  return (
    <main>
      <Banner />
      <AboutUs />
      <CakesAndSweets />
      <BestSellers />
      <WhatMakesUsSpecial />
      <ClientTestimonials />
      <SpecialGallery />
      <Footer />
    </main>
  );
}

