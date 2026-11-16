# MyPortfolio

Personal portfolio of Abu Rizal Alhafidz, a backend-focused web developer and university student.

Static site: HTML, CSS, vanilla JavaScript and Bootstrap 5. Based on the BootstrapMade "Style" template (credit kept in the footer).

## Run locally
Open `index.html` in a browser, or serve the folder with any static server, e.g. `python -m http.server`.

## Edit content
- Text, skills and projects: `index.html` (project cards are in the `#portfolio` section).
- Contact form: opens the visitor's email app. To send without one, connect a form service such as Formspree, Web3Forms or EmailJS in `assets/js/main.js`.

## Deploy
Any static host works (GitHub Pages, Netlify, Cloudflare Pages).

## Tambah konten
- **Sertifikat:** simpan gambar di `assets/img/certificates/` dengan nama seperti di kartu (mis. `huawei-ai.jpg`); gambar otomatis muncul. Untuk sertifikat baru, salin satu kartu di `#certificates`.
- **Proyek:** simpan screenshot di `assets/img/projects/` (mis. `livestock-app.jpg`).
- **Bahasa:** teks baru bisa diterjemahkan dengan menambah atribut `data-id="teks Indonesia"` pada elemennya.
- **Form kontak:** daftar di web3forms.com dengan email tujuan, lalu isi `data-access-key="..."` pada `<form id="contact-form">` di `index.html`.
