import React from "react";

// --- Komponen Ikon (untuk kebersihan kode) ---
// Saya satukan semua ikon dalam satu komponen agar lebih rapi
const BiodataIcon = ({ label }) => {
  const iconSize = "w-5 h-5 mr-3 text-gray-400";
  const icons = {
    Nama: (
      <svg
        className={iconSize}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path>
      </svg>
    ),
    Email: (
      <svg
        className={iconSize}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    Telepon: (
      <svg
        className={iconSize}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        ></path>
      </svg>
    ),
    Alamat: (
      <svg
        className={iconSize}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
    "Tanggal Lahir": (
      <svg
        className={iconSize}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    "Jenis Kelamin": (
      <svg
        className={iconSize}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h6a6 6 0 016 6v1h-3"
        ></path>
      </svg>
    ),
  };
  return icons[label] || null;
};

const DownloadIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    ></path>
  </svg>
);

// --- DATA BIODATA ---
// Pisahkan data agar mudah diubah
const biodataDetails = [
  { label: "Nama", value: "Herawati" },
  { label: "Email", value: "khadijahhawa62@gmail.com" },
  { label: "Telepon", value: "+6282226359353" },
  { label: "Tanggal Lahir", value: "29 Agustus 2002" },
  { label: "Jenis Kelamin", value: "Perempuan" },
  {
    label: "Alamat",
    value: "Sukabumi, Indonesia",
  },
];

export default function BiodataPage({ ref }) {
  return (
    <section
      ref={ref}
      className="scroll-mt-[80px] w-full my-20 px-4 md:px-8 lg:px-16 xl:px-20 flex flex-col items-center space-y-12"
    >
      {/* Header Halaman */}
      <div className="max-w-2xl text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Tentang Saya</h1>
        <p className="text-gray-700">
          Sedikit cerita tentang latar belakang, keahlian, dan bagaimana cara
          menghubungi saya.
        </p>
      </div>

      {/* Konten Utama */}
      <div className="flex w-full max-w-6xl gap-8 md:gap-12 flex-col md:flex-row">
        {/* Kolom Kiri: Gambar */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src="https://res.cloudinary.com/ddji1ygzq/image/upload/v1757648578/bio-pic_wg6lcm_vk8dct.jpg"
            alt="Foto profil Herawati"
            className="rounded-lg w-full object-cover aspect-[3/4] shadow-lg"
          />
        </div>

        {/* Kolom Kanan: Detail Informasi */}
        <div className="w-full md:w-2/3 flex flex-col space-y-6">
          <h2 className="text-3xl font-bold text-[#47240E]">Herawati</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Saya adalah seorang desainer dan kreator muda yang bersemangat
              menggabungkan kreativitas, keterampilan teknis, dan nilai
              keberlanjutan dalam setiap karya. Berbekal latar belakang di
              bidang kriya tekstil dan fashion, saya menguasai desain digital
              maupun manual, perancangan produk kreatif, serta pengelolaan
              proyek. Saya senang dan antusias untuk terus belajar serta
              berkolaborasi dalam proyek-proyek yang menantang. Di luar
              pekerjaan dan studi, saya aktif mengajar dalam berbagai bidang,
              seperti mengaji, vokal, menggambar, dan melukis. Saya juga
              berpengalaman mengisi acara resmi maupun non-resmi, mulai dari
              membawakan pembukaan dengan lantunan ayat suci hingga bernyanyi
              sebagai pengisi acara. Kegiatan tersebut semakin mengasah
              kemampuan komunikasi, kepercayaan diri, serta keterampilan saya
              dalam berinteraksi dengan beragam audiens.
            </p>
          </div>

          {/* Daftar Detail Biodata yang Rapi */}
          <div className="border-t border-gray-200 pt-6">
            <dl>
              {biodataDetails.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center py-3 border-b border-gray-100"
                >
                  <dt className="w-1/3 md:w-1/4 font-semibold text-gray-800 flex items-center">
                    <BiodataIcon label={item.label} />
                    {item.label}
                  </dt>
                  <dd className="w-2/3 md:w-3/4 text-gray-600">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="pt-4">
            <a
              href="/files/cv.pdf" // Path ke file Anda di folder public
              download="CV_Herawati_2025.pdf" // Nama file yang akan disarankan saat diunduh
              className="bg-[#47240E] text-white py-3 px-6 inline-flex items-center justify-center rounded-lg font-medium hover:bg-[#5a3b1c] transition-colors cursor-pointer shadow-md hover:shadow-lg" // Semua class styling tetap sama
            >
              <DownloadIcon />
              Unduh CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
