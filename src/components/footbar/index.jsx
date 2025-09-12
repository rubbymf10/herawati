import React from "react";
import { Roboto_Slab } from "next/font/google";
import {
  FaBehanceSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

// Menggunakan font yang sama dengan Navbar untuk konsistensi
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["700"], // Cukup ambil weight 'bold' untuk nama
  variable: "--font-roboto",
});

// --- KOMPONEN FOOTER UTAMA ---
export default function Footer() {
  // Mendapatkan tahun saat ini secara dinamis
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#47240E] text-white py-6">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        {/* Container utama dengan Flexbox */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Elemen 1: Nama Portofolio */}
          <div className="text-center md:text-left">
            <a
              href="/"
              className={`${roboto_slab.className} text-xl font-bold tracking-wide`}
            >
              Herawati, S.Sn
            </a>
          </div>

          {/* Elemen 2: Copyright */}
          <div className="text-center text-sm text-gray-300">
            <p>Copyright © {currentYear} Herawati. All Rights Reserved.</p>
          </div>

          {/* Elemen 3: Logo Media Sosial */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/herawati.art?igsh=dXo4aGM3bW5hNW5p"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@herrrraw?_t=ZS-8zCLTF91QLY&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.behance.net/anaksahawat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaBehanceSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/anak-sarbini-hawat-398514337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
