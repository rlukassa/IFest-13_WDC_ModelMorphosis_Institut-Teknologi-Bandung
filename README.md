# ModelMorphosis

🚀 **ModelMorphosis** adalah proyek web yang dibuat untuk **Lomba Web Development Universitas Atma Jaya Yogyakarta**.  
📌 **Author**: Lukas Raja Agripa  

## 🛠 Persiapan Sebelum Menjalankan Proyek  

Karena proyek ini menggunakan **Vite** dan beberapa teknologi lainnya, pastikan kamu sudah menginstal beberapa alat berikut sebelum menjalankannya:  

### 1️⃣ **Install VS Code**  
Jika belum punya, silakan download dan install **Visual Studio Code** di [sini](https://code.visualstudio.com/).  

### 2️⃣ **Install Node.js**  
Pastikan **Node.js** sudah terinstall. Jika belum, download dan install dari [sini](https://nodejs.org/).  
Setelah install, cek apakah sudah terpasang dengan menjalankan perintah berikut di **Terminal/Command Prompt**:  

```sh
node -v
```

Jika muncul versi Node.js (misalnya `v18.x.x`), berarti sudah terpasang.  

### 3️⃣ **Install Git**  
Git diperlukan untuk mengelola proyek ini dengan lebih baik. Jika belum punya, download dan install dari [sini](https://git-scm.com/downloads).  

---

## 🏗 Langkah Menjalankan Proyek  

Setelah semua persiapan selesai, ikuti langkah-langkah berikut untuk menjalankan proyek ini di lokal:  

### 1️⃣ **Clone Repository (Opsional, jika dari GitHub)**  
Jika ingin mengunduh langsung dari GitHub, gunakan perintah:  
```sh
git clone <URL-REPO>
```
Atau bisa langsung **Download ZIP** dan ekstrak.  

### 2️⃣ **Buka Folder Proyek di VS Code**  
Buka **VS Code** dan pilih **File > Open Folder** lalu pilih folder proyek ini.  

### 3️⃣ **Install Dependensi**  
Di dalam VS Code, buka **Terminal** dan jalankan:  
```sh
npm install
```
Ini akan mengunduh semua dependensi yang diperlukan dari **package.json**.  

### 4️⃣ **Jalankan Server Lokal**  
Setelah dependensi terinstal, jalankan perintah berikut untuk menjalankan proyek:  
```sh
npm run dev
```
Proyek akan berjalan di **localhost**, biasanya di `http://localhost:5173/`.  

---

## 📁 **Struktur Proyek**  
Berikut adalah struktur utama dalam proyek ini:  
```
📂 modelmorphosis/
│-- 📂 src/                # Folder utama berisi kode sumber
│   ├── 📂 components/     # Komponen-komponen React
│   ├── 📂 pages/          # Halaman utama website
│   ├── 📂 assets/         # Gambar, ikon, dan file statis lainnya
│   ├── main.jsx           # Entry point React
│   └── App.jsx            # Root component
│-- 📂 public/             # File statis seperti favicon, manifest, dll.
│-- 📂 dist/               # Folder hasil build (jangan diubah)
│-- package.json           # File konfigurasi npm
│-- vite.config.js         # Konfigurasi Vite
│-- README.md              # Dokumentasi proyek
```

---

## 🔧 **Build untuk Produksi**  
Jika ingin membuat versi produksi, jalankan:  
```sh
npm run build
```
Hasil build akan tersimpan di folder **dist/** dan bisa langsung di-deploy ke hosting seperti **GitHub Pages, Vercel, atau Netlify**.  

---

## ❓ **Troubleshooting**  

### ❌ **Error: Command Not Found (npm atau node)**  
- Pastikan **Node.js** sudah terinstall dengan benar (`node -v` dan `npm -v` harus menampilkan versinya).  
- Restart komputer setelah menginstall Node.js jika masih bermasalah.  

### ❌ **Port 5173 Already in Use**  
- Jika mendapatkan error ini, coba jalankan:  
  ```sh
  npx vite --port 3000
  ```
  atau ubah port di **vite.config.js**.  

---

## 📌 **Kesimpulan**  
- Pastikan sudah install **VS Code, Node.js, dan Git**.  
- Jalankan `npm install` untuk install dependensi.  
- Gunakan `npm run dev` untuk menjalankan proyek di lokal.  
- Jika ada error, cek bagian **Troubleshooting** atau hubungi saya.  

🎉 **Selamat mencoba dan semoga sukses ! 🚀**  
