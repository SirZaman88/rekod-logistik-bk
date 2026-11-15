# Rekod Logistik BK — Aplikasi (PWA)

Kulit aplikasi (Progressive Web App) bagi sistem **Rekod Logistik BK**, Bahagian Keselamatan UTM.
Ia membolehkan sistem dipasang pada telefon atau komputer seperti aplikasi biasa: ikon sendiri, tetingkap
sendiri tanpa bar alamat, dan mesej mesra bila tiada internet.

Sistem sebenar kekal di Google Apps Script. Halaman ini hanya membuka sistem itu di dalamnya, jadi
**tiada data disimpan di sini**. Semua rekod dan log masuk masih melalui sistem UTM (emel @utm.my + kata laluan).

## Fail
| Fail | Fungsi |
|---|---|
| `index.html` | Halaman aplikasi: skrin pembuka, membuka sistem, mesej luar talian, jemputan pasang |
| `manifest.webmanifest` | Nama, warna dan ikon aplikasi |
| `sw.js` | Service worker: simpan fail kulit sahaja (bukan data) |
| `icons/` | Ikon logo Bahagian Keselamatan |

## Cara pasang (pengguna)
- **Android / Chrome / Edge:** buka pautan aplikasi, tekan **Pasang** pada jemputan (atau menu ⋮ → *Install app*).
- **iPhone / iPad (Safari):** tekan ikon Kongsi (□↑) → *Add to Home Screen*.
- Jika log masuk Google tidak muncul di dalam aplikasi, tekan butang kecil **↗** di bucu kiri bawah untuk membuka sistem terus dalam pelayar.

## Kemas kini
Jika pautan sistem Apps Script berubah, kemas kini pemboleh ubah `SISTEM` dalam `index.html`.
Jika `index.html`, ikon atau manifest diubah, naikkan nombor `CACHE` dalam `sw.js` (cth. `logistik-bk-v2`).
