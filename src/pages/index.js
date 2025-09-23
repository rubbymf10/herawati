// Wajib karena kita menggunakan hooks (useRef)
"use client";

import { useRef } from "react";

// Impor semua komponen section Anda
import BiodataPage from "@/components/bio";
import CertificatePage from "@/components/certificate";
import DesainPage from "@/components/desain";
import Footer from "@/components/footbar";
import HomePage from "@/components/home";
import Navbar from "@/components/navbar";
import OrganisasiPage from "@/components/organizations";
import PengalamanKerjaPage from "@/components/works";
import IlmiahPage from "@/components/scientificWorks";

export default function Home() {
  // 1. Buat satu useRef untuk setiap section
  const homeRef = useRef(null);
  const biodataRef = useRef(null);
  const desainRef = useRef(null);
  const certificateRef = useRef(null);
  const organisasiRef = useRef(null);
  const kerjaRef = useRef(null);
  const ilmiahRef = useRef(null);

  // 2. Buat fungsi untuk menangani scroll
  const handleScrollToSection = (sectionId) => {
    const sectionRefs = {
      home: homeRef,
      biodata: biodataRef,
      desain: desainRef,
      sertifikat: certificateRef,
      organisasi: organisasiRef,
      kerja: kerjaRef,
      ilmiah: ilmiahRef,
    };

    const ref = sectionRefs[sectionId];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* 3. Kirim fungsi scroll ke Navbar sebagai props */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* 4. Lampirkan setiap ref ke komponen section yang sesuai */}
      <HomePage ref={homeRef} />
      <BiodataPage ref={biodataRef} />
      <DesainPage ref={desainRef} />
      <CertificatePage ref={certificateRef} />
      <OrganisasiPage ref={organisasiRef} />
      <PengalamanKerjaPage ref={kerjaRef} />
      <IlmiahPage ref={ilmiahRef} /> 
      <Footer />
    </>
  );
}
