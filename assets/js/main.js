/* Based on the BootstrapMade "Style" template; rewritten lean (no jQuery, no unused plugins). */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const body = document.body;
  const ID = {"Skip to content": "Lewati ke konten", "Home": "Beranda", "About": "Tentang", "Skills": "Keahlian", "Projects": "Proyek", "Certificates": "Sertifikat", "Contact": "Kontak", "Creative": "Kreatif", "I’m a university student and a passionate developer with a strong focus on backend development. I enjoy building scalable, secure, and efficient web applications that bring ideas to life.": "Saya mahasiswa dan pengembang yang antusias dengan fokus kuat pada pengembangan backend. Saya senang membangun aplikasi web yang skalabel, aman, dan efisien untuk mewujudkan ide.", "View My Work": "Lihat Karya Saya", "Get In Touch": "Hubungi Saya", "Database": "Basis Data", "Creative Ideas": "Ide Kreatif", "Learn more about who I am and what I do.": "Kenali siapa saya dan apa yang saya kerjakan.", "Building meaningful digital experiences through creative code.": "Membangun pengalaman digital yang bermakna lewat kode yang kreatif.", "Hi, I'm Abu Rizal Alhafidz - a Creative Developer": "Hai, saya Abu Rizal Alhafidz - Pengembang Kreatif", "I’m an Informatics Engineering student at Buana Perjuangan Karawang University (class of 2027), interested in technology and administration. I have built a data application during an internship and led student organizations, and I enjoy creating reliable, secure systems that support great digital experiences.": "Saya mahasiswa Teknik Informatika di Universitas Buana Perjuangan Karawang (angkatan 2027) yang tertarik pada teknologi dan administrasi. Saya pernah membangun aplikasi data saat magang dan memimpin organisasi mahasiswa, serta senang membuat sistem yang andal dan aman untuk pengalaman digital yang baik.", "Backend Development": "Pengembangan Backend", "Builds secure and scalable server-side applications.": "Membangun aplikasi sisi server yang aman dan skalabel.", "Designs and manages efficient data systems.": "Merancang dan mengelola sistem data yang efisien.", "Web Development": "Pengembangan Web", "Creates responsive and functional web applications.": "Membuat aplikasi web yang responsif dan fungsional.", "Graduated from SMPI Fathanul Burhan": "Lulus dari SMPI Fathanul Burhan", "Graduated from MA Fathanul Burhan (Science track)": "Lulus dari MA Fathanul Burhan (jurusan IPA)", "Started Informatics Engineering at Buana Perjuangan Karawang University": "Mulai kuliah Teknik Informatika di Universitas Buana Perjuangan Karawang", "Internship at the Karawang Department of Agriculture and Food Security": "Magang di Dinas Pertanian dan Ketahanan Pangan Kabupaten Karawang", "Became Head of Racana Council, UKM Pramuka": "Menjadi Ketua Dewan Racana, UKM Pramuka", "Download CV": "Unduh CV", "The tools and technologies I work with.": "Alat dan teknologi yang saya gunakan.", "Frontend Development": "Pengembangan Frontend", "What I Work With": "Yang Saya Kerjakan", "I build server-side web applications with PHP and Laravel on top of MySQL, and I use Git for version control. I am also learning cloud and DevOps tools such as AWS and Docker.": "Saya membangun aplikasi web sisi server dengan PHP dan Laravel di atas MySQL, dan memakai Git untuk version control. Saya juga mempelajari alat cloud dan DevOps seperti AWS dan Docker.", "Tech Stack": "Teknologi", "Work experience, organizations and education.": "Pengalaman kerja, organisasi, dan pendidikan.", "Work Experience": "Pengalaman Kerja", "Hands-on experience in data handling and application development.": "Pengalaman langsung dalam pengelolaan data dan pengembangan aplikasi.", "Intern": "Magang", "Aug 2025 – Dec 2025": "Agu 2025 – Des 2025", "Built a livestock data application to record farm, health and birth data in a structured way.": "Membangun aplikasi pendataan hewan ternak untuk mencatat data peternakan, kesehatan, dan kelahiran secara terstruktur.", "Entered field report data into the existing system, keeping records complete and accurate.": "Menginput data laporan lapangan ke sistem yang ada dengan teliti agar data lengkap dan akurat.", "Joined field visits and on-site checks to understand local needs and verify data accuracy.": "Mengikuti kunjungan dan pengecekan langsung ke lapangan untuk memahami kebutuhan dan memastikan kesesuaian data.", "Cooperative Administrator": "Admin Koperasi", "Recorded and audited students’ daily pocket money in Excel to keep financial records accurate.": "Menginput dan mengaudit uang saku santri setiap hari dengan Excel agar pencatatan keuangan akurat.", "Managed cooperative stock (uniforms, clothing, stationery, daily necessities) so items stayed available.": "Mengatur stok koperasi (seragam, pakaian, ATK, kebutuhan sehari-hari) agar barang tetap tersedia.", "Recorded the foundation’s income and expenses as part of its admin team.": "Mencatat pemasukan dan pengeluaran dana yayasan sebagai anggota tim admin.", "Organizations": "Organisasi", "Leadership and teamwork outside the classroom.": "Kepemimpinan dan kerja sama di luar kelas.", "Head of Racana Council (KDR)": "Ketua Dewan Racana (KDR)", "Jan 2026 – Present": "Jan 2026 – Sekarang", "Oct 2026 – Present": "Okt 2026 – Sekarang", "Lead and coordinate all organizational activities.": "Memimpin dan mengoordinasikan seluruh kegiatan organisasi.", "Chair meetings and draft work programs with the Racana Council.": "Memimpin rapat dan menyusun program kerja bersama Dewan Racana.", "Assign tasks and evaluate member performance.": "Membagi tugas serta mengevaluasi kinerja anggota.", "Manage internal affairs and relations with other organizations.": "Mengelola urusan internal dan hubungan dengan organisasi lain.", "University Unit Coordinator": "Koordinator Unit Universitas", "Coordinate and liaise between members of the university unit and the central coordinator.": "Menjembatani anggota unit Universitas dengan Koordinator Pusat.", "Education": "Pendidikan", "Formal education.": "Pendidikan formal.", "Informatics Engineering (Teknik Informatika)": "Teknik Informatika", "Active student focusing on technology and web development.": "Mahasiswa aktif dengan fokus pada teknologi dan pengembangan web.", "Science Track (IPA)": "Jurusan IPA", "Senior high school.": "Sekolah menengah atas.", "Languages: English. Interests: hiking and automotive.": "Bahasa: Inggris. Minat: hiking dan otomotif.", "Communication": "Komunikasi", "Leadership": "Kepemimpinan", "Teamwork": "Kerja sama tim", "Adaptability": "Adaptabilitas", "Problem solving": "Pemecahan masalah", "Time management": "Manajemen waktu", "Responsibility": "Tanggung jawab", "Initiative": "Inisiatif", "Selected work. The full list is on my GitHub.": "Karya pilihan. Daftar lengkap ada di GitHub saya.", "Internship Project": "Proyek Magang", "Livestock Data Application": "Aplikasi Pendataan Hewan Ternak", "An application that records livestock, health and birth data in a structured way, built during my internship at the Karawang Department of Agriculture and Food Security (Aug – Dec 2025).": "Aplikasi pencatatan data peternakan, kesehatan, dan kelahiran hewan ternak secara terstruktur, dibuat saat magang di Dinas Pertanian dan Ketahanan Pangan Kabupaten Karawang (Agu – Des 2025).", "This responsive personal portfolio, built with HTML, CSS, JavaScript and Bootstrap and hosted from a Git repository.": "Portofolio pribadi yang responsif ini dibuat dengan HTML, CSS, JavaScript, dan Bootstrap, serta disimpan di repositori Git.", "View source on GitHub": "Lihat kode di GitHub", "More projects": "Proyek lainnya", "My backend and web development projects, including coursework and experiments, are published in my repositories.": "Proyek backend dan pengembangan web saya, termasuk tugas kuliah dan eksperimen, tersedia di repositori saya.", "Browse my repositories": "Jelajahi repositori saya", "Training and certificates I have completed.": "Pelatihan dan sertifikat yang telah saya selesaikan.", "Training": "Pelatihan", "Professional Certificate": "Sertifikat Profesional", "Certificate": "Sertifikat", "Have a question or an opportunity? Send me a message.": "Punya pertanyaan atau peluang? Kirimkan pesan kepada saya.", "Contact Info": "Info Kontak", "I am open to internships and collaboration on web and backend projects.": "Saya terbuka untuk magang dan kolaborasi pada proyek web dan backend.", "Location": "Lokasi", "Karawang, West Java, Indonesia": "Karawang, Jawa Barat, Indonesia", "Phone": "Telepon", "Chat on WhatsApp": "Chat lewat WhatsApp", "Email Address": "Alamat Email", "Fill in the form and your message will be delivered straight to my email.": "Isi formulir dan pesanmu akan dikirim langsung ke email saya.", "Send message": "Kirim pesan", "All Rights Reserved": "Hak Cipta Dilindungi", "Designed by": "Didesain oleh", "Your Name": "Nama Anda", "Your Email": "Email Anda", "Subject": "Subjek", "Message": "Pesan", "Back to top": "Kembali ke atas", "Sending…": "Mengirim…", "Message sent. Thank you!": "Pesan terkirim. Terima kasih!", "Please fill in every field and enter a valid email address.": "Mohon isi semua kolom dan masukkan email yang valid.", "Could not send your message. Please try again or email me directly.": "Pesan gagal dikirim. Coba lagi atau email saya langsung.", "Your email app should now open with your message ready to send.": "Aplikasi email Anda akan terbuka dengan pesan siap dikirim."};

  /* Scroll state + scroll-top button */
  const scrollTop = $('.scroll-top');
  const onScroll = () => {
    const past = window.scrollY > 100;
    body.classList.toggle('scrolled', past);
    if (scrollTop) scrollTop.classList.toggle('active', past);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (scrollTop) scrollTop.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* Mobile navigation (keyboard accessible) */
  const toggle = $('.mobile-nav-toggle');
  const toggleNav = () => {
    body.classList.toggle('mobile-nav-active');
    toggle.classList.toggle('bi-list');
    toggle.classList.toggle('bi-x');
    toggle.setAttribute('aria-expanded', body.classList.contains('mobile-nav-active'));
  };
  if (toggle) {
    toggle.setAttribute('role', 'button');
    toggle.setAttribute('tabindex', '0');
    toggle.setAttribute('aria-label', 'Toggle navigation');
    toggle.addEventListener('click', toggleNav);
    toggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleNav(); }
    });
  }
  $$('#navmenu a').forEach(a => a.addEventListener('click', () => {
    if (body.classList.contains('mobile-nav-active')) toggleNav();
  }));

  /* Animations */
  const formEl = $('#contact-form');
  if (formEl) formEl.removeAttribute('data-aos'); /* already inside an animated card */
  if (window.AOS) AOS.init({ duration: 600, easing: 'ease-in-out', once: true, mirror: false });
  /* Re-measure animated elements whenever the page height changes (images hidden, language switched),
     otherwise AOS keeps stale positions and elements near the bottom can stay invisible. */
  if (window.AOS && window.ResizeObserver) {
    let t;
    new ResizeObserver(() => { clearTimeout(t); t = setTimeout(() => AOS.refresh(), 120); }).observe(document.body);
    window.addEventListener('load', () => AOS.refresh());
  }
  let lang = 'en';
  try { lang = localStorage.getItem('lang') === 'id' ? 'id' : 'en'; } catch (e) {}
  const T = s => (lang === 'id' && ID[s]) || s;
  const typedEl = $('.typed');
  let typed;
  const startTyped = () => {
    if (!typedEl || !window.Typed) return;
    if (typed) typed.destroy();
    const items = lang === 'id' ? 'Backend Developer, Mahasiswa' : typedEl.dataset.typedItems;
    typed = new Typed('.typed', { strings: items.split(',').map(s => s.trim()), loop: true, typeSpeed: 100, backSpeed: 50, backDelay: 2000 });
  };

  /* Skill bars fill when visible */
  const barObserver = new IntersectionObserver((entries, obs) => entries.forEach(e => {
    if (!e.isIntersecting) return;
    $$('.progress-bar', e.target).forEach(b => { b.style.width = b.getAttribute('aria-valuenow') + '%'; });
    obs.unobserve(e.target);
  }), { rootMargin: '0px 0px -20% 0px' });
  $$('.skills-animation').forEach(el => barObserver.observe(el));

  /* Scrollspy */
  const links = $$('#navmenu a[href^="#"]').filter(a => a.hash.length > 1 && $(a.hash));
  const spy = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.hash === '#' + e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  links.forEach(l => spy.observe($(l.hash)));

  /* Language switch (EN default, ID optional). Add data-id="Teks Indonesia" to any new element to translate it. */
  const orig = new WeakMap();
  const norm = t => t.replace(/\s+/g, ' ').trim();
  function applyLang(l) {
    lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.documentElement.lang = l;
    const w = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
    while (w.nextNode()) {
      const n = w.currentNode, el = n.parentElement;
      if (!el || /^(SCRIPT|STYLE)$/.test(el.tagName) || el.closest('.typed,[data-id]')) continue;
      if (!orig.has(n)) {
        const k = norm(n.nodeValue);
        if (!k || !Object.hasOwn(ID, k)) continue;
        orig.set(n, [n.nodeValue, k]);
      }
      const [o, k] = orig.get(n);
      n.nodeValue = l === 'id' ? (/^\s/.test(o) ? ' ' : '') + ID[k] + (/\s$/.test(o) ? ' ' : '') : o;
    }
    $$('[data-id]').forEach(el => {
      if (el.dataset.en === undefined) el.dataset.en = el.textContent;
      el.textContent = l === 'id' ? el.dataset.id : el.dataset.en;
    });
    $$('[placeholder],[aria-label]').forEach(el => ['placeholder', 'aria-label'].forEach(a => {
      if (!el.hasAttribute(a)) return;
      el._o = el._o || {};
      if (!(a in el._o)) el._o[a] = el.getAttribute(a);
      const k = el._o[a];
      if (Object.hasOwn(ID, k)) el.setAttribute(a, l === 'id' ? ID[k] : k);
    }));
    $$('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
    startTyped();
  }
  $$('.lang-switch button').forEach(b => b.addEventListener('click', () => applyLang(b.dataset.lang)));
  applyLang(lang);

  /* Certificate / project images: zoom in a modal; hide thumbnails whose file does not exist yet */
  $$('.cert-thumb img, .project-thumb img').forEach(img => {
    const remove = () => img.closest('a').remove();
    if (img.complete && img.naturalWidth === 0) remove(); else img.addEventListener('error', remove, { once: true });
  });
  const modalEl = $('#imgModal');
  if (modalEl && window.bootstrap) {
    const modal = new bootstrap.Modal(modalEl);
    document.addEventListener('click', e => {
      const a = e.target.closest('a.zoomable');
      if (!a) return;
      e.preventDefault();
      $('img', modalEl).src = a.href;
      $('img', modalEl).alt = a.dataset.title || '';
      $('.modal-title', modalEl).textContent = a.dataset.title || '';
      modal.show();
    });
  }

  /* Contact form: sends through Web3Forms when data-access-key is set; otherwise opens the visitor's email app. */
  const form = $('#contact-form');
  if (form) form.addEventListener('submit', async e => {
    e.preventDefault();
    const ok = $('.sent-message', form), err = $('.error-message', form), btn = $('button[type="submit"]', form);
    const show = (el, msg) => { el.textContent = T(msg); el.classList.add('d-block'); };
    ok.classList.remove('d-block'); err.classList.remove('d-block');
    if (!form.checkValidity()) return show(err, 'Please fill in every field and enter a valid email address.');
    const d = new FormData(form), key = form.dataset.accessKey;
    if (!key) {
      const text = d.get('message') + '\n\n' + d.get('name') + ' <' + d.get('email') + '>';
      window.location.href = 'mailto:aburizal4771@gmail.com?subject=' + encodeURIComponent(d.get('subject')) + '&body=' + encodeURIComponent(text);
      show(ok, 'Your email app should now open with your message ready to send.');
      form.reset();
      return;
    }
    d.append('access_key', key);
    d.append('from_name', 'Portfolio website');
    btn.disabled = true;
    show(ok, 'Sending…');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: d });
      const out = await res.json();
      if (!out.success) throw new Error(out.message);
      show(ok, 'Message sent. Thank you!');
      form.reset();
    } catch (x) {
      ok.classList.remove('d-block');
      show(err, 'Could not send your message. Please try again or email me directly.');
    } finally { btn.disabled = false; }
  });
})();
