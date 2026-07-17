"use client";

import React, { useState, use } from "react";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import Button from "../../../src/components/ui/Button";
import { 
  ChevronDown, 
  ChevronUp, 
  Upload, 
  Plus, 
  Minus, 
  Info, 
  CheckCircle,
  FileText,
  Trash2
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  // Resolve params
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Mock product data for X-Banner Wisuda
  const product = {
    title: "X-Banner Wisuda / Graduation",
    subtitle: "Media promosi stand banner wisuda dengan konstruksi kaki X kokoh. Free custom template desain.",
    basePrice: 25000,
    originalPrice: 35000,
    images: [
      "/image/projects/x-banner-default.webp", // Fallback if local image not loaded
      "/image/projects/x-banner-detail-1.webp",
      "/image/projects/x-banner-detail-2.webp"
    ],
    materials: [
      { id: "albatros", name: "Albatros (Best Seller)", priceOffset: 5000 },
      { id: "flexi-340", name: "Flexi Frontlite 340", priceOffset: 0 },
      { id: "flexi-440", name: "Flexi Frontlite Korea 440", priceOffset: 10000 },
      { id: "easy-banner", name: "Easy Banner (Kaku & Anti-Lengkung)", priceOffset: 15000 }
    ]
  };

  // State Management
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0].id);
  const [quantity, setQuantity] = useState(12); // Default to 12 as per figma
  const [activeImage, setActiveImage] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Accordion Tabs States
  const [accordionOpen, setAccordionOpen] = useState({
    info: true,
    pengerjaan: true,
    keterangan: true,
    spesifikasi: true
  });

  // Toggle Accordion Tab
  const toggleAccordion = (tab: keyof typeof accordionOpen) => {
    setAccordionOpen((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };

  // Price Calculations
  const selectedMaterialData = product.materials.find(m => m.id === selectedMaterial);
  const pricePerUnit = product.basePrice + (selectedMaterialData?.priceOffset || 0);
  const totalPrice = pricePerUnit * quantity;

  // Handle file upload emulation
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 10;
        });
      }, 100);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D] font-sans antialiased overflow-x-hidden pt-24">
      <Navbar />

      {/* Main Container */}
      <div className="kaluna-layout-container py-10 md:py-16">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 text-xs font-semibold tracking-wider text-[#7A7A7A] uppercase flex items-center gap-2">
          <a href="/" className="hover:text-[#299EED] transition">Home</a>
          <span>/</span>
          <a href="/works" className="hover:text-[#299EED] transition">Products</a>
          <span>/</span>
          <span className="text-[#0E2A54]">{product.title}</span>
        </div>

        {/* 12-Column Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Image Showcase & Specs (7 Columns on Large Screens) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Image Slider Wrapper */}
            <div className="relative w-full aspect-[979/711] overflow-hidden rounded-[24px] bg-[#0E2A54] shadow-md border border-[#neutral-200]/20">
              
              {/* Product Main Showcase Image */}
              <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-gray-100">
                {/* Fallback mockup UI visual using standard graphics */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0E2A54] via-[#203560] to-[#2C87B8] flex items-center justify-center p-8">
                  <div className="relative text-center z-10 text-white max-w-md">
                    <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#EDAE20] bg-white/10 px-3 py-1.5 rounded-full inline-block mb-3">
                      GRADUATION PRINTING SHOWCASE
                    </span>
                    <h3 className="text-3xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-sm opacity-80 mb-6">High Quality Banner Material & Vivid Ink Output</p>
                    <div className="h-44 w-32 border-2 border-dashed border-white/40 rounded-lg mx-auto flex items-center justify-center bg-white/5">
                      <span className="text-xs font-bold opacity-60">X-STAND MOCKUP</span>
                    </div>
                  </div>
                  {/* Absolute positioning pattern matching Figma specs */}
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-[#203560] skew-x-12 opacity-25" />
                  <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#2C87B8] -skew-x-12 opacity-35" />
                </div>
              </div>

              {/* Slider Dots/Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeImage ? "w-8 bg-[#299EED]" : "w-2.5 bg-[#C3C3C3]"
                    }`}
                  />
                ))}
              </div>

              {/* Slide Nav buttons */}
              <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                <button 
                  onClick={() => setActiveImage(prev => prev === 0 ? product.images.length - 1 : prev - 1)}
                  className="pointer-events-auto h-10 w-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#0E2A54] shadow-md transition duration-300 active:scale-95"
                >
                  ←
                </button>
                <button 
                  onClick={() => setActiveImage(prev => prev === product.images.length - 1 ? 0 : prev + 1)}
                  className="pointer-events-auto h-10 w-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#0E2A54] shadow-md transition duration-300 active:scale-95"
                >
                  →
                </button>
              </div>
            </div>

            {/* PRODUCT SPECIFICATIONS ACCORDION (Figma layout structure) */}
            <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
              
              {/* Header Title */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                <Info className="w-5 h-5 text-[#0E2A54]" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#0E2A54]">
                  Informasi Detail Produk
                </h3>
              </div>

              {/* Lama Pengerjaan */}
              <div className="border-b border-gray-100 pb-5">
                <button 
                  onClick={() => toggleAccordion("pengerjaan")}
                  className="flex items-center justify-between w-full text-left font-bold text-sm tracking-wide text-[#3F3F3F] hover:text-[#0E2A54] transition"
                >
                  <span>LAMA PENGERJAAN</span>
                  {accordionOpen.pengerjaan ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {accordionOpen.pengerjaan && (
                  <div className="mt-3 text-xs leading-6 text-[#7A7A7A] whitespace-pre-line font-medium">
                    {`• Order 1 - 50 pcs : 1 Hari Kerja\n• Order > 50 pcs : 2 Hari Kerja\n\nCatatan:\n* File desain wajib sudah siap cetak (Ready to Print)\n* Lama pengerjaan belum termasuk durasi pengiriman/delivery\n* Hari libur nasional & Hari Minggu tidak dihitung sebagai hari kerja\n* Untuk kebutuhan Urgent / Jumlah besar, silakan hubungi CS via WhatsApp.`}
                  </div>
                )}
              </div>

              {/* Keterangan Produk */}
              <div className="border-b border-gray-100 pb-5">
                <button 
                  onClick={() => toggleAccordion("keterangan")}
                  className="flex items-center justify-between w-full text-left font-bold text-sm tracking-wide text-[#3F3F3F] hover:text-[#0E2A54] transition"
                >
                  <span>KETERANGAN PRODUK</span>
                  {accordionOpen.keterangan ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {accordionOpen.keterangan && (
                  <p className="mt-3 text-xs leading-6 text-[#7A7A7A] font-medium">
                    X-Banner Wisuda / Graduation adalah media promosi praktis yang digunakan untuk menampilkan ucapan selamat wisuda, nama wisudawan, maupun detail acara. Hadir dengan konstruksi penyangga berbentuk silang "X" berbahan fiber hitam fleksibel agar banner bisa berdiri dengan tegak dan stabil. Free desain template yang bisa disesuaikan secara instan!
                  </p>
                )}
              </div>

              {/* Spesifikasi Bahan */}
              <div className="pb-2">
                <button 
                  onClick={() => toggleAccordion("spesifikasi")}
                  className="flex items-center justify-between w-full text-left font-bold text-sm tracking-wide text-[#3F3F3F] hover:text-[#0E2A54] transition"
                >
                  <span>SPESIFIKASI BAHAN</span>
                  {accordionOpen.spesifikasi ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {accordionOpen.spesifikasi && (
                  <div className="mt-3 text-xs leading-6 text-[#7A7A7A] font-medium">
                    {`• Ukuran Standar: 60 cm x 160 cm dan 80 cm x 180 cm\n• Pilihan Bahan Terbaik:\n  - Flexi Frontlite 340 gsm (Standar ekonomis)\n  - Flexi Frontlite Korea 440 gsm (Lebih tebal & hasil warna doff)\n  - Albatros (Bahan kertas premium semi-glossy, halus, wajib laminasi) [Best Seller]\n  - Easy Banner (Bahan fiber kaku, ujung kanan-kiri anti melengkung, super premium)`}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Ordering Config Panel (5 Columns on Large Screens) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
            <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col gap-6">
              
              {/* Product Header Info */}
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#299EED] uppercase bg-[#EAF3FF] px-3 py-1 rounded-full inline-block mb-3">
                  Custom Order Configuration
                </span>
                <h1 className="text-2xl font-bold text-[#0E2A54] leading-snug">
                  {product.title}
                </h1>
                <p className="text-xs text-[#7A7A7A] mt-2 font-medium">
                  {product.subtitle}
                </p>
              </div>

              {/* Price Panel */}
              <div className="bg-[#FAFAFA] rounded-[16px] p-4 border border-gray-100 flex justify-between items-center">
                <div>
                  <span className="text-xs text-[#7A7A7A] block font-bold uppercase tracking-wider">Harga per Unit</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-2xl font-bold text-[#FC2965]">
                      Rp {pricePerUnit.toLocaleString("id-ID")}
                    </span>
                    <span className="text-xs text-[#CCCCCC] line-through">
                      Rp {product.originalPrice.toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#7A7A7A] block font-bold uppercase tracking-wider">Total Est.</span>
                  <span className="text-2xl font-bold text-[#0E2A54] block mt-1">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              {/* Material Dropdown Selector */}
              <div className="relative">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4D4D4D] mb-2">
                  Pilih Bahan (Material)
                </label>
                
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full h-[50px] px-5 rounded-full border border-[#DBDBDB] bg-white text-sm font-medium text-[#0E2A54] hover:border-[#0E2A54] transition duration-300"
                >
                  <span>{selectedMaterialData?.name}</span>
                  <ChevronDown className={`w-4 h-4 text-[#888888] transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Options */}
                {isDropdownOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-white border border-[#neutral-200] rounded-[16px] shadow-lg z-50 overflow-hidden animate-fade-in">
                    {product.materials.map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => {
                          setSelectedMaterial(m.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`flex items-center justify-between w-full px-5 py-3.5 text-left text-sm transition duration-150 ${
                          selectedMaterial === m.id 
                            ? "bg-[#EAF3FF] text-[#0E2A54] font-semibold" 
                            : "hover:bg-gray-50 text-[#3F3F3F]"
                        }`}
                      >
                        <span>{m.name}</span>
                        {m.priceOffset > 0 && (
                          <span className="text-xs text-[#299EED] font-bold">
                            +{m.priceOffset === 0 ? "" : `Rp ${m.priceOffset.toLocaleString("id-ID")}`}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4D4D4D] mb-2">
                  Jumlah Cetak (QTY)
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-full border border-[#DBDBDB] p-1.5 bg-white">
                    <button
                      type="button"
                      disabled={quantity <= 1}
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#7A7A7A] hover:bg-gray-100 active:scale-90 disabled:opacity-30 disabled:pointer-events-none transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center text-sm font-bold text-[#0E2A54]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[#7A7A7A] hover:bg-gray-100 active:scale-90 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-[#7A7A7A] font-semibold">
                    *Min. order 1 pcs (Rekomendasi {quantity} pcs)
                  </span>
                </div>
              </div>

              {/* Design File Upload Section */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4D4D4D] mb-2">
                  Upload File Desain Banner (.PDF, .PNG, .TIFF)
                </label>

                {!uploadedFile ? (
                  /* Upload Drag-and-Drop Area */
                  <div className="relative border-2 border-dashed border-[#DBDBDB] hover:border-[#299EED] rounded-[16px] p-6 text-center cursor-pointer transition-colors duration-300">
                    <input 
                      type="file" 
                      accept=".pdf,.png,.jpg,.jpeg,.tiff"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <Upload className="w-8 h-8 text-[#CCCCCC] mx-auto mb-2 group-hover:text-[#299EED]" />
                    <span className="block text-xs font-semibold text-[#0E2A54] mb-1">
                      Klik atau Tarik file desain ke sini
                    </span>
                    <span className="text-[10px] text-[#7A7A7A] block font-medium">
                      Ukuran file maksimal 100MB (Pastikan resolusi 150 DPI siap cetak)
                    </span>
                  </div>
                ) : (
                  /* Upload Progress/Success Card */
                  <div className="border border-gray-100 bg-[#FAFAFA] rounded-[16px] p-4 flex flex-col gap-3 relative overflow-hidden animate-fade-in">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-[#299EED]" />
                        <div className="max-w-[200px] sm:max-w-xs md:max-w-md">
                          <span className="block text-xs font-bold text-[#0E2A54] truncate">
                            {uploadedFile.name}
                          </span>
                          <span className="text-[10px] text-[#7A7A7A] block font-medium">
                            {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 rounded-full hover:bg-red-50 text-red-500 transition active:scale-95"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Progress Bar */}
                    {isUploading ? (
                      <div>
                        <div className="flex justify-between text-[10px] font-bold text-[#7A7A7A] mb-1">
                          <span>Mengupload file...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="bg-[#299EED] h-full rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#10B981]">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Desain berhasil diunggah!</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Button: Checkout / Hubungi Admin */}
              <Button
                variant="primary"
                label="Pesan & Cetak Sekarang"
                onClick={() => {
                  alert(`Memproses pemesanan X-Banner sebanyak ${quantity} pcs dengan bahan ${selectedMaterialData?.name}. Total: Rp ${totalPrice.toLocaleString("id-ID")}`);
                }}
                className="w-full mt-4 h-14"
              />

              {/* Safety notice */}
              <p className="text-[10px] text-center text-[#7A7A7A] font-medium leading-relaxed">
                Untuk desain kustom silakan hubungi Customer Service. Kami menjamin ketelitian cetak dan kerapian hasil akhir sebelum dikirim ke ekspedisi.
              </p>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
