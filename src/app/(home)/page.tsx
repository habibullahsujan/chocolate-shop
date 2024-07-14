'use client'
import Navbar from "./(components)/Navbar";
import Header from "./(components)/Header";
import { useEffect, useState } from "react";
import Image1 from '@/assets/images/image-1.webp'


export default function Home() {
  const [selectImage, setSelectImage] = useState({});
  useEffect(() => {
    setSelectImage(Image1)
  }, [])
  return (
    <main>
      <section className="px-16 header-section h-screen transition-all" style={{ backgroundImage: `url(${selectImage?.src})`, backgroundSize: 'cover' }}>
        <Navbar />
        <Header selectImage={selectImage} setSelectImage={setSelectImage} />
      </section>
    </main>
  );
}

