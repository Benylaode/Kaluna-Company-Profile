"use client";

import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { submitLead } from "../../src/lib/actions";
import CTAC from '../../src/components/CTAC';
import { ArrowRight, X } from "lucide-react"

export default function ContactPage() {

    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();
    
    async function action(formData: FormData) {
        const result = await submitLead(formData);
        if (result.success) {
            setShowPopup(true); 
        } else {
            alert("Terjadi kesalahan, silakan coba lagi.");
        }
    }

  return (
    <main className="min-h-screen bg-white text-[#0D2342]">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-18 px-4 md:px-10 mb-16">
        <div className="w-full h-[220px] bg-[#0D2342] rounded-[32px] flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-black text-white">Contact Us</h1>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-8">Let's Discuss Your Technology Needs</h2>
          <div className="mb-8">
            <h4 className="font-bold uppercase text-xs tracking-widest mb-2">Our Office</h4>
            {/* Teks alamat sudah diperbarui */}
            <p className="text-sm text-gray-600 leading-relaxed">
              Menara Rajawali, Jl. DR. Ide Anak Agung Gde Agung, RT.5/RW.2, Kuningan, 
              Kuningan Tim., Kecamatan Setiabudi, Kota Jakarta Selatan, 
              Daerah Khusus Ibukota Jakarta 12950, Indonesia
            </p>
          </div>
          
          {/* Implementasi Peta Google Maps (Iframe) */}
          <div className="w-full h-[250px] md:h-[300px] bg-gray-200 rounded-2xl mb-8 overflow-hidden shadow-sm border border-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=Menara%20Rajawali%2C%20Jl.%20DR.%20Ide%20Anak%20Agung%20Gde%20Agung%2C%20Jakarta%20Selatan&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form action={action} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="* Your Name" className="p-4 border rounded-xl w-full" required />
            <input name="company" placeholder="* Company Name" className="p-4 border rounded-xl w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="email" type="email" placeholder="* E-mail" className="p-4 border rounded-xl w-full" required />
            <input name="phone" placeholder="* Phone" className="p-4 border rounded-xl w-full" />
          </div>
          <select name="inquiry" className="p-4 border rounded-xl w-full">
            <option>Select Inquiry</option>
            <option value="system-dev">System Development</option>
            <option value="iot">IoT System</option>
          </select>
          <textarea name="message" placeholder="Message" className="p-4 border rounded-xl w-full h-32"></textarea>
          <button className="bg-[#0D2342] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#1E88E5] transition-colors">
            Submit Inquiry <ArrowRight size={18} />
          </button>
        </form>
      </section>
      <CTAC/>
      <Footer />

      {/* Pop Up */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-[32px] p-8 md:p-12 max-w-lg w-full text-center relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button onClick={() => setShowPopup(false)} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
            
            {/* Icon Checkmark */}
            <div className="w-24 h-24 bg-[#0D2342] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-3xl font-bold mb-4">Thank You for Reaching Out!</h2>
            <p className="text-gray-600 mb-8">
              Your form has been successfully submitted. Our team will get back to you as soon as possible. 
              Don’t forget to check your inbox and spam folder for our response.
            </p>
            
            <button 
              onClick={() => router.push("/")}
              className="bg-[#0D2342] text-white px-8 py-4 rounded-full flex items-center gap-2 mx-auto hover:bg-[#1E88E5] transition-colors"
            >
              Back to Home <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}