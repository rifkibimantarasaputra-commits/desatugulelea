/**
 * MAIN.JS FOR DESA TUGU LELEA
 * Mengatur interaktif UI, render data, dan validasi form sederhana.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. PENGATURAN NAVBAR & SCROLL
    // ----------------------------------------------------
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navbarMenu = document.getElementById('navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTopBtn = document.getElementById('back-to-top');

    // Toggle Mobile Menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });

    // Close Mobile Menu saat link diklik
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });

    // Navbar effects on scroll
    window.addEventListener('scroll', () => {
        // Shadow navbar
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        // Back to top button
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        // Highlight active nav link (spy scroll simple)
        let current = '';
        const sections = document.querySelectorAll('section, header');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Back to top click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // ----------------------------------------------------
    // 2. RENDER DATA STATIS DARI DATA.JS
    // ----------------------------------------------------
    
    // Asumsi: Variabel 'dummyData' langsung tersedia karena diload sebelum main.js di index.html
    if (typeof dummyData !== 'undefined') {
        renderStats();
        renderOfficials();
        renderServices();
        renderNews();
        renderGallery();
        renderPotentials();
    } else {
        console.error("Data dummy tidak ditemukan. Pastikan data.js diload sebelum main.js");
    }

    function renderStats() {
        const container = document.getElementById('stats-container');
        if (!container) return;
        
        container.innerHTML = dummyData.stats.map(stat => `
            <div class="stat-card">
                <div class="stat-icon"><span class="material-symbols-outlined">${stat.icon}</span></div>
                <div class="stat-number">${stat.value}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    }

    function renderOfficials() {
        const container = document.getElementById('gov-container');
        if (!container) return;
        
        container.innerHTML = dummyData.officials.map(p => `
            <div class="gov-card">
                <div class="gov-img-wrapper">
                    <img src="${p.image}" alt="${p.name}" loading="lazy">
                </div>
                <div class="gov-info">
                    <h3 class="gov-name">${p.name}</h3>
                    <p class="gov-role">${p.role}</p>
                </div>
            </div>
        `).join('');
    }

    function renderServices() {
        const container = document.getElementById('services-container');
        if (!container) return;
        
        container.innerHTML = dummyData.services.map(srv => `
            <div class="service-card">
                <div class="service-icon"><span class="material-symbols-outlined">description</span></div>
                <h3 class="service-title">${srv.title}</h3>
                <p class="service-desc">${srv.desc}</p>
                <div class="service-meta">
                    <span style="display: flex; align-items: center; gap: 4px;"><span class="material-symbols-outlined" style="font-size: 1.1rem;">schedule</span> Estimasi: ${srv.est}</span>
                </div>
                <button class="btn btn-outline-primary w-100" onclick="openServiceModal(${srv.id})">Buka Syarat</button>
            </div>
        `).join('');
    }

    function renderNews() {
        const container = document.getElementById('news-container');
        if (!container) return;
        
        container.innerHTML = dummyData.news.map(n => `
            <div class="news-card">
                <img src="${n.image}" alt="${n.title}" class="news-img" loading="lazy">
                <div class="news-content">
                    <div class="news-meta">
                        <span class="news-category">${n.category}</span>
                        <span>${n.date}</span>
                    </div>
                    <h3 class="news-title">${n.title}</h3>
                    <p class="news-summary">${n.summary}</p>
                    <button class="btn btn-outline-primary" style="align-self: flex-start" onclick="openNewsModal(${n.id})">Baca Selengkapnya</button>
                </div>
            </div>
        `).join('');
    }

    function renderGallery() {
        const container = document.getElementById('gallery-container');
        if (!container) return;
        
        container.innerHTML = dummyData.gallery.map(g => `
            <div class="gallery-item" onclick="openLightbox('${g.thumb}', '${g.caption}')">
                <img src="${g.thumb}" alt="${g.caption}" loading="lazy">
                <div class="gallery-overlay">
                    <p>${g.caption}</p>
                </div>
            </div>
        `).join('');
    }

    function renderPotentials() {
        const container = document.getElementById('potensi-container');
        if (!container) return;

        container.innerHTML = dummyData.potentials.map(pot => `
            <div class="potensi-item">
                <div class="card-icon"><span class="material-symbols-outlined">${pot.icon}</span></div>
                <h3>${pot.title}</h3>
                <p class="mt-2 text-muted">${pot.desc}</p>
            </div>
        `).join('');
    }


    // ----------------------------------------------------
    // 3. MODAL & LIGHTBOX SYSTEM
    // ----------------------------------------------------
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalOverlay = document.getElementById('modal-overlay');

    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbCap = document.getElementById('lightbox-caption');
    const lbClose = document.getElementById('lightbox-close');

    // Fungsi Global agar bisa dipanggil dari inline HTML onclick
    window.openServiceModal = function(id) {
        const srv = dummyData.services.find(s => s.id === id);
        if(srv) {
            modalTitle.textContent = srv.title;
            
            let reqs = srv.requirements.map(req => `<li>✓ ${req}</li>`).join('');
            
            modalBody.innerHTML = `
                <p><strong>Deskripsi:</strong><br>${srv.desc}</p>
                <p class="mt-2"><strong>Estimasi Waktu:</strong> ${srv.est}</p>
                <div class="mt-4">
                    <h4>Persyaratan yang harus disiapkan:</h4>
                    <ul style="list-style: none; padding-left:0; margin-top: 10px; line-height: 1.8;">
                        ${reqs}
                    </ul>
                </div>
                <div class="mt-4" style="background:#fffbeb; padding:15px; border-radius:8px; border-left:4px solid #f59e0b; font-size:0.9rem;">
                    <strong>Catatan:</strong> Bawa persyaratan ke kantor balai desa pada jam kerja (Senin - Jumat, 08.00 - 15.00 WIB). Semua layanan desa ini <b>GRATIS</b> (Tidak dipungut biaya).
                </div>
            `;
            openModal();
        }
    }

    window.openNewsModal = function(id) {
        const n = dummyData.news.find(item => item.id === id);
        if(n) {
            modalTitle.textContent = n.title;
            modalBody.innerHTML = `
                <div style="font-size:0.85rem; color:#64748b; margin-bottom:15px;">Kategori: ${n.category} | ${n.date}</div>
                <img src="${n.image}" style="width:100%; border-radius:8px; margin-bottom:15px;" alt="${n.title}">
                <div style="line-height: 1.8;">${n.content}</div>
            `;
            openModal();
        }
    }

    window.openLightbox = function(src, caption) {
        lbImg.src = src;
        lbCap.textContent = caption;
        lightbox.classList.add('is-active');
    }

    // Modal Helpers
    function openModal() {
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // prevent bg scroll
    }

    function closeModal() {
        modal.classList.remove('is-active');
        document.body.style.overflow = 'auto';
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    
    lbClose.addEventListener('click', () => {
        lightbox.classList.remove('is-active');
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closeModal();
            lightbox.classList.remove('is-active');
        }
    });

    // ----------------------------------------------------
    // 4. FORM KONTAK SIMULASI
    // ----------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Frontend validation dihandle oleh HTML5 (required)
        // Ambil data form
        const name = document.getElementById('name').value;
        
        // Simulasi sukses
        showToast(`Halo, ${name}. Pesan Anda berhasil dikirim (Ini adalah simulasi statis).`);
        contactForm.reset();
    });

    function showToast(msg) {
        toastMessage.textContent = msg;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500); // Hide after 3.5s
    }

});
