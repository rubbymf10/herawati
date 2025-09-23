import React, { forwardRef } from "react"; // Tambahkan forwardRef di import

// --- DATA KARYA ILMIAH --- (tetap sama)
const scientificWorks = [
  {
    id: 1,
    title: "Analisis Proses Kreatif Pembuatan Batik Pendulum di Rumah Batik Komar",
    type: "Artikel Jurnal",
    publisher: "Jurnal ATRAT Vol. 11 No. 2",
    period: "2023",
    link: "https://jurnal.isbi.ac.id/index.php/atrat/article/view/2851",
    description: [
      "Menganalisis proses kreatif Komarudin Kudiya dalam menciptakan Batik Pendulum, Menggunakan metode kualitatif deskriptif dengan observasi, wawancara, dokumentasi, dan studi pustaka.",
    ],
  },
];

// Komponen untuk ikon centang (tetap sama)
const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    ></path>
  </svg>
);

// --- HALAMAN KARYA ILMIAH --- (wrap dengan forwardRef)
const IlmiahPage = forwardRef((props, ref) => { // Tambahkan forwardRef((props, ref) => {
  return (
    <section // Attach ref ke root <section>
      ref={ref} // Ini kunci: ref sekarang terhubung ke <section> ini
      id="ilmiah" // Tambahkan ID sebagai fallback (untuk href="#ilmiah" jika JS gagal)
      className="scroll-mt-[80px] w-full my-20 px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center"
    >
      {/* Header Halaman (tetap sama) */}
      <div className="max-w-3xl text-center space-y-3 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Karya Ilmiah</h1>
        <p className="text-gray-700">
          Berikut adalah karya ilmiah yang telah saya publikasikan selama menempuh pendidikan.
        </p>
      </div>

      {/* Container untuk Timeline (tetap sama) */}
      <div className="relative w-full max-w-4xl">
        {/* Garis Vertikal Timeline */}
        <div className="absolute left-4 top-2 h-full border-l-2 border-gray-200"></div>

        {/* Mapping data karya ilmiah */}
        <div className="space-y-12">
          {scientificWorks.map((work) => (
            <div key={work.id} className="relative pl-12">
              {/* Titik pada Timeline */}
              <div className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>

              {/* Konten Item */}
              <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-500 mb-2">{work.period}</p>

                {/* Judul dengan link */}
                <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
                  <a href={work.link} target="_blank" rel="noopener noreferrer">
                    {work.title}
                  </a>
                </h2>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-md font-semibold text-gray-700 mb-4">
                  <span>{work.publisher}</span>
                  <span className="text-gray-300">•</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {work.type}
                  </span>
                </div>

                {/* Deskripsi dalam bentuk list */}
                <ul className="space-y-2">
                  {work.description.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

IlmiahPage.displayName = 'IlmiahPage'; // Opsional, untuk debugging di React DevTools

export default IlmiahPage;
