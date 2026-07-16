# Dokumentasi Animasi UI: Carousel Logo Perusahaan (Infinite Scroll)

Dokumen ini disusun untuk kebutuhan presentasi, dokumentasi *handover* developer, atau modul penjelasan desain pada Kaluna Tech.

---

### **1. Konsep & Mekanisme Pergerakan**

Bagian *"Companies That Trust Our Solutions"* menggunakan animasi **Infinite Horizontal Scroll** (gulir horizontal tanpa batas) dengan sistem *looping* otomatis yang halus.

* **Arah Gerakan:** Seluruh logo bergerak secara konstan dari **kanan ke kiri**.
* **Kecepatan (Pacing):** Pergerakan diatur dengan kecepatan sedang yang konstan (*linear timing*). Hal ini memberikan waktu yang cukup bagi pengunjung web untuk mengidentifikasi setiap merek tanpa merusak kenyamanan visual.
* **Efek Looping:** Animasi dirancang tanpa ujung (*seamless loop*). Ketika deretan logo pertama sudah hampir habis bergeser ke area kiri, deretan logo yang sama akan kembali muncul secara berurutan dari sisi kanan untuk menciptakan kesan bahwa daftar mitra perusahaan sangat banyak.

---

### **2. Pengaturan Jarak & Pencegahan Tumpang Tindih (Anti-Overlap)**

Untuk memastikan visual tetap rapi dan tidak ada logo yang saling menimpa saat bergerak, diterapkan tiga prinsip teknis berikut:

* **Padding & Margin Spacing (Gap):** Setiap logo dibungkus dalam sebuah kotak komponen (*bounding box*) dengan ukuran seragam. Di antara kotak tersebut, diberikan jeda jarak kosong (*gap*) yang konsisten (berkisar antara 32px hingga 64px) sebagai "jeda visual".
* **Sistem Antrean Horizontal:** Menggunakan sistem *layout* horizontal (*Flexbox/Grid*). Sistem ini mengunci posisi setiap logo agar tetap berada di antreannya masing-masing. Logo di sebelah kiri harus bergerak maju terlebih dahulu sebelum logo di belakangnya mengambil alih ruang tersebut.
* **Efek Masking (Hidden Overflow):** Kontainer utama menggunakan fitur *clip content* / *hidden overflow*. Logo akan muncul secara perlahan saat memasuki batas kanan kontainer, dan langsung menghilang (*masked*) begitu melewati batas kiri kontainer. Jeda hilangnya logo diatur oleh jarak kosong (*space*) yang ikut bergerak bersama antrean.
