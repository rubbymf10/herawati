"use client";

// Ganti 'useState' menjadi { useState, useEffect } jika Anda punya logika scroll-hide
import { useState } from "react";
import { Roboto_Slab } from "next/font/google";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

// 1. Modifikasi MenuItems untuk menerima 'onScroll' dan 'closeDrawer'
const MenuItems = ({ isMobile = false, onScroll, closeDrawer = () => {} }) => {
  const linkClass = isMobile
    ? "block py-2 text-lg hover:text-white/80"
    : "hover:text-white/80 font-medium cursor-pointer transition-colors duration-300";
  const containerClass = isMobile
    ? "flex flex-col space-y-4 items-start"
    : "flex space-x-6 items-center";

  // Fungsi helper agar tidak mengulang kode onClick
  const handleClick = (sectionId) => {
    onScroll(sectionId); // Panggil fungsi scroll
    closeDrawer(); // Tutup drawer jika di mobile
  };

  return (
    <div className={containerClass}>
      {/* 2. Ganti 'href' dengan 'onClick' yang memanggil fungsi scroll */}
      <button onClick={() => handleClick("home")} className={linkClass}>
        Beranda
      </button>
      <button onClick={() => handleClick("biodata")} className={linkClass}>
        Biodata
      </button>
      <button onClick={() => handleClick("desain")} className={linkClass}>
        Desain
      </button>
      <button onClick={() => handleClick("sertifikat")} className={linkClass}>
        Sertifikat
      </button>
      <button onClick={() => handleClick("organisasi")} className={linkClass}>
        Organisasi
      </button>
      <button onClick={() => handleClick("kerja")} className={linkClass}>
        Kerja
      </button>
      <button onClick={() => handleClick("ilmiah")} className={linkClass}>
        Karya Ilmiah
      </button>
    </div>
  );
};

// 3. Terima props 'onScrollToSection' di komponen Navbar utama
export default function Navbar({ onScrollToSection }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Saya asumsikan navbar Anda tidak lagi punya logika scroll-hide,
  // Jika masih ada, pastikan tidak konflik.
  // Kode ini berfokus pada navigasi klik.

  return (
    <nav className="fixed left-0 right-0 top-0 flex items-center justify-between p-4 bg-[#47240E] text-white px-4 md:px-8 lg:px-16 xl:px-20 py-4 z-50 shadow-md">
      {/* Brand/Logo */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onScrollToSection("home");
        }}
        className={`${roboto_slab.className} text-2xl font-bold tracking-wide`}
      >
        Herawati, S.Sn
      </a>

      {/* 4. Kirim fungsi ke MenuItems */}
      <div className="hidden md:flex">
        <MenuItems onScroll={onScrollToSection} />
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsDrawerOpen(true)} aria-label="Buka menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
          <div
            className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-[#47240E] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
              isDrawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4">
              <h6 className="font-medium tracking-wide">Daftar Menu</h6>
              <button
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Tutup menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4">
              {/* 5. Kirim fungsi 'onScroll' dan 'closeDrawer' ke MenuItems di mobile */}
              <MenuItems
                isMobile={true}
                onScroll={onScrollToSection}
                closeDrawer={() => setIsDrawerOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
