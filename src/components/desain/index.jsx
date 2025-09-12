"use client";

import React, { useState, useEffect, forwardRef } from "react";
import Image from "next/image";

// --- Komponen Kartu Desain (Tidak ada perubahan di sini) ---
const DesignCard = ({ src, alt, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="group relative" onClick={() => setIsModalOpen(true)}>
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-105"
            loading="lazy"
            placeholder="blur"
            blurDataURL={`${src}?w=10&q=10`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/400x400/FF0000/FFFFFF?text=Error";
            }}
          />
        </div>

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 rounded-lg">
          <p className="text-white text-center font-semibold">{title}</p>
        </div>
      </div>

      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 cursor-pointer"
        >
          <span className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300">
            &times;
          </span>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative p-2 bg-white rounded-lg shadow-xl cursor-default max-w-[90vw] max-h-[90vh]"
          >
            <Image
              src={src}
              alt={alt}
              width={900}
              height={900}
              className="rounded"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};

// --- Halaman Utama Rekap Desain ---
const DesainPage = forwardRef((props, ref) => {
  // --- DATA KATEGORI (SUMBER KEBENARAN TUNGGAL) ---
  const categories = [
    { id: "Digital", label: "Desain Digital" },
    { id: "Manual", label: "Desain Manual" },
    { id: "Hasil Kriya", label: "Hasil Kriya" },
    { id: "Moodboard", label: "Moodboard" },
    { id: "Pengalaman", label: "Pengalaman" },
    { id: "Grafis", label: "Grafis" },
  ];

  const [activeCategory, setActiveCategory] = useState("Digital"); // State awal menggunakan ID
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const [designDigital, setDesignDigital] = useState([]);
  const [designManual, setDesignManual] = useState([]);
  const [moodboardDesigns, setMoodboardDesigns] = useState([]);
  const [pengalamanDesigns, setPengalamanDesigns] = useState([]);
  const [kriyaDesigns, setKriyaDesigns] = useState([]);
  const [GrafisDesigns, setGrafisDesigns] = useState([]);

  // Ambil data dari Cloudinary (tidak ada perubahan)
  useEffect(() => {
    const fetchDesigns = async (folder, setState) => {
      try {
        const res = await fetch(
          `/api/get-images?folder=images/designs/${folder}`
        );
        const data = await res.json();
        const mapped = data.map((item, idx) => ({
          id: `${folder}-${idx}`, // Memberikan key yang lebih unik
          src: item.secure_url,
          alt: item.public_id.split("/").pop(),
          title: item.public_id.split("/").pop().replace(/_/g, " "), // Mengganti underscore dengan spasi
        }));
        setState(mapped);
      } catch (error) {
        console.error(`Failed to fetch designs for ${folder}:`, error);
        setState([]); // Set state ke array kosong jika gagal
      }
    };

    fetchDesigns("digital", setDesignDigital);
    fetchDesigns("manual", setDesignManual);
    fetchDesigns("moodboard", setMoodboardDesigns);
    fetchDesigns("pengalaman", setPengalamanDesigns);
    fetchDesigns("kriya", setKriyaDesigns);
    fetchDesigns("Grafis", setGrafisDesigns);
  }, []);

  // Subjudul menggunakan key yang konsisten dengan ID kategori
  const categorySubtitles = {
    Digital:
      "Desain digital akademik & profesional dengan CorelDRAW.",
    Manual:
      "Karya gambar dari masa kecil hingga kuliah.",
    "Hasil Kriya":
      "Kriya rancangan: aksesori, interior, pakaian, hingga Tugas Akhir.",
    Moodboard:
      "Referensi konsep, nuansa, warna, material, dan detail sebagai dasar pengembangan desain.",
    Pengalaman:
      "Pengalaman organisasi, qiroah, tutor, model, pameran seni, hingga KKN.",
    Grafis:
      "Karya desain grafis berupa poster, katalog, dan visual digital yang dibuat menggunakan Canva.",
  };


  // Logika switch sekarang bekerja dengan benar
  let displayedDesigns = []; // Inisialisasi sebagai array kosong
  switch (activeCategory) {
    case "Manual":
      displayedDesigns = designManual;
      break;
    case "Hasil Kriya":
      displayedDesigns = kriyaDesigns;
      break;
    case "Moodboard":
      displayedDesigns = moodboardDesigns;
      break;
    case "Pengalaman":
      displayedDesigns = pengalamanDesigns;
      break;
    case "Grafis":
      displayedDesigns = GrafisDesigns;
      break;
    case "Digital":
    default:
      displayedDesigns = designDigital;
      break;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayedDesigns.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(displayedDesigns.length / itemsPerPage);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Komponen tombol tidak perlu di-nest, bisa langsung di sini
  // untuk akses langsung ke state `activeCategory`
  const CategoryButton = ({ categoryId, categoryLabel }) => (
    <button
      onClick={() => handleCategoryChange(categoryId)}
      className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 ${
        activeCategory === categoryId // Perbandingan menggunakan ID yang konsisten
          ? "bg-[#47240E] text-white shadow-lg"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {categoryLabel}
    </button>
  );

  return (
    <section
      ref={ref}
      className="scroll-mt-[80px] w-full my-20 px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center space-y-10"
    >
      <div className="max-w-2xl text-center space-y-3">
        <h1 className="text-3xl font-bold">Rekap Desain Saya</h1>
        <p className="text-gray-700">
          Koleksi karya desain visual, Moodboard, dan proyek kreatif lainnya
          yang saya kerjakan. Silakan pilih kategori untuk melihat rekap desain.
        </p>
      </div>

      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* --- RENDER TOMBOL SECARA DINAMIS --- */}
          {categories.map((cat) => (
            <CategoryButton
              key={cat.id}
              categoryId={cat.id}
              categoryLabel={cat.label}
            />
          ))}
        </div>

        <div className="w-full max-w-2xl text-center mt-2 h-12 md:h-10">
          <p key={activeCategory} className="text-gray-600 animate-fade-in">
            {categorySubtitles[activeCategory]}
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {currentItems.map((design) => (
          <DesignCard
            key={design.id}
            src={design.src}
            alt={design.alt}
            title={design.title}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }
            disabled={currentPage === 1}
            className="bg-[#47240E] text-white py-2 px-4 rounded font-medium hover:bg-[#5a3b1c] disabled:opacity-50 transition-opacity"
          >
            Sebelumnya
          </button>
          <span className="font-semibold">
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            disabled={currentPage === totalPages}
            className="bg-[#47240E] text-white py-2 px-4 rounded font-medium hover:bg-[#5a3b1c] disabled:opacity-50 transition-opacity"
          >
            Berikutnya
          </button>
        </div>
      )}
    </section>
  );
});

DesainPage.displayName = "DesainPage";
export default DesainPage;
