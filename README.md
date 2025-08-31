
# Desa Wisata Silungkang Oso — Static Web (GitHub Pages Ready)

Proyek ini adalah website statis untuk **Desa Wisata Silungkang Oso**. Anda bisa langsung unggah ke GitHub, aktifkan **GitHub Pages**, lalu situs siap diakses publik.

## Fitur
- Halaman lengkap: Beranda, Profil Desa, Destinasi, Budaya, UMKM, Paket Wisata, Galeri, dan Kontak.
- Data destinasi & paket terpisah dalam berkas JSON (mudah diedit).
- Desain responsif (Tailwind via CDN).
- Komponen kartu, grid, dan pencarian destinasi.
- Workflow **GitHub Actions** untuk auto-deploy ke GitHub Pages.

## Struktur Folder
```
.
├── index.html
├── pages/
│   ├── profil-desa.html
│   ├── destinasi.html
│   ├── budaya.html
│   ├── umkm.html
│   ├── paket-wisata.html
│   ├── galeri.html
│   └── kontak.html
├── data/
│   ├── destinasi.json
│   ├── paket.json
│   └── umkm.json
├── assets/
│   ├── css/styles.css
│   ├── js/app.js
│   └── img/ (taruh gambar di sini)
└── .github/workflows/pages.yml
```

## Cara Pakai
1. Buat repo baru di GitHub, misal: `desa-wisata-silungkang-oso`.
2. Ekstrak ZIP ini, lalu **commit & push** seluruh isi folder ke repo tersebut.
3. Buka **Settings → Pages**:
   - Source: **GitHub Actions** (recommended).
4. GitHub akan otomatis membuild & deploy lewat workflow `pages.yml`.
5. Akses situs pada URL: `https://<username>.github.io/<repo>/`

## Konfigurasi Dasar
- Ganti teks dan data di folder `data/*.json` sesuai kebutuhan.
- Taruh gambar destinasi dan UMKM di `assets/img/`, lalu referensikan lewat `data/*.json`.
- Jika Anda menaruh repo di subpath, pastikan path relatif tetap benar (kita menggunakan path relatif agar aman).

## Pengembangan Lokal
Karena ini website statis murni (tanpa bundler), Anda cukup buka `index.html` di browser. Jika perlu server lokal:
```
# Python 3
python -m http.server 5500
# lalu buka http://localhost:5500
```

Selamat mengembangkan! 🚀
