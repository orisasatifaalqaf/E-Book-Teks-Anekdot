document.addEventListener('DOMContentLoaded', function() {
    // 1. Inject Pages into DOM
    const flipbookEl = document.getElementById('flipbook');
    bookPages.forEach(pageHtml => {
        flipbookEl.insertAdjacentHTML('beforeend', pageHtml);
    });

    // 2. Initialize PageFlip
    const pageFlip = new St.PageFlip(flipbookEl, {
        width: 400, // base width (slightly narrower ratio)
        height: 650, // taller base height to fill bottom space
        size: "stretch",
        minWidth: 315,
        maxWidth: 600, // allow a bit more stretch on big screens
        minHeight: 420,
        maxHeight: 850, // increase max height so it can stretch fully on tall mobile screens
        maxShadowOpacity: 0.5,
        showCover: true,
        useMouseEvents: false, // Dimatikan 100% dari sistem bawaan agar tidak membajak layar
        mobileScrollSupport: false // Dimatikan dari sistem bawaan
    });

    // Load pages
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    
    // CUSTOM SWIPE DETECTION (Sangat presisi)
    let touchStartX = 0;
    let touchStartY = 0;
    
    flipbookEl.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, {passive: true});
    
    flipbookEl.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].screenX;
        let touchEndY = e.changedTouches[0].screenY;
        
        let deltaX = touchEndX - touchStartX;
        let deltaY = touchEndY - touchStartY;
        
        // Cek jika usapan LEBIH DARI 60px secara horizontal, DAN KURANG DARI 40px secara vertikal (bukan scroll atas/bawah)
        if (Math.abs(deltaX) > 60 && Math.abs(deltaY) < 40) {
            if (deltaX < 0) {
                // Usap ke kiri -> Selanjutnya
                pageFlip.flipNext();
            } else {
                // Usap ke kanan -> Sebelumnya
                pageFlip.flipPrev();
            }
        }
    }, {passive: true});

    // 3. UI Controls and Events
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const spanCurrentPage = document.getElementById('current-page');
    const spanTotalPages = document.getElementById('total-pages');

    // Update total pages
    spanTotalPages.innerText = pageFlip.getPageCount();

    // Event on page flip
    pageFlip.on('flip', (e) => {
        // e.data is the current page number (0-indexed)
        // Adjust for human readable (1-indexed)
        let displayPage = e.data + 1;
        
        // If in portrait mode (single page), it shows current.
        // If landscape (two pages), e.data is the left page.
        if (pageFlip.getOrientation() === 'landscape' && e.data > 0) {
            spanCurrentPage.innerText = e.data + "-" + (e.data + 1);
        } else {
            spanCurrentPage.innerText = displayPage;
        }

        // Disable/Enable buttons
        btnPrev.disabled = e.data === 0;
        btnNext.disabled = e.data === pageFlip.getPageCount() - 1;
        
        if(e.data === 0) btnPrev.style.opacity = '0.5';
        else btnPrev.style.opacity = '1';
        
        if(e.data >= pageFlip.getPageCount() - 2) btnNext.style.opacity = '0.5';
        else btnNext.style.opacity = '1';
    });

    // Navigation Buttons
    btnNext.addEventListener('click', () => {
        pageFlip.flipNext();
    });

    btnPrev.addEventListener('click', () => {
        pageFlip.flipPrev();
    });

    // 4. Modals (TOC and Info)
    const btnToc = document.getElementById('btn-toc');
    const btnInfo = document.getElementById('btn-info');
    const modalToc = document.getElementById('modal-toc');
    const modalInfo = document.getElementById('modal-info');
    const closeBtns = document.querySelectorAll('.close-modal');

    function openModal(modal) {
        modal.classList.add('active');
    }

    function closeModal() {
        document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
    }

    btnToc.addEventListener('click', () => openModal(modalToc));
    btnInfo.addEventListener('click', () => openModal(modalInfo));
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    });

    // 5. Generate TOC dynamically and handle click
    const tocList = document.getElementById('toc-list');
    const tocData = [
        { title: "Sampul Depan", page: 0 },
        { title: "Kata Pengantar", page: 2 },
        { title: "Daftar Isi", page: 3 },
        { title: "Pemantik", page: 4 },
        { title: "BAB 1: Mengenal Teks Anekdot", page: 5 },
        { title: "BAB 2: Struktur Teks Anekdot", page: 7 },
        { title: "BAB 3: Kaidah Kebahasaan", page: 9 },
        { title: "BAB 4: Contoh Anekdot", page: 11 },
        { title: "BAB 5: Kritik yang Santun", page: 13 },
        { title: "BAB 6: Langkah Menulis", page: 14 },
        { title: "BAB 7: Menyajikan Karya", page: 15 },
        { title: "BAB 8: Latihan & Refleksi", page: 16 },
        { title: "Penutup", page: 17 },
        { title: "Daftar Pustaka", page: 18 }
    ];

    tocData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.title}</span> <span><i class="ph ph-arrow-right"></i></span>`;
        li.addEventListener('click', () => {
            closeModal();
            pageFlip.turnToPage(item.page);
        });
        tocList.appendChild(li);
    });
});

// Global function for essay answer toggling
window.toggleAnswer = function(btn) {
    const essayContainer = btn.closest('.essay-question');
    const box = essayContainer.querySelector('.answer-box');
    if(box) {
        box.classList.toggle('active');
        if (box.classList.contains('active')) {
            btn.innerHTML = '<i class="ph ph-x"></i> Tutup';
        } else {
            btn.innerHTML = '<i class="ph ph-pencil-simple"></i> Jawab';
        }
    }
};

// Global function for showing text context
window.toggleTeks = function(btn) {
    const essayContainer = btn.closest('.essay-question');
    const box = essayContainer.querySelector('.teks-box');
    if(box) {
        if (box.style.display === 'none' || box.style.display === '') {
            box.style.display = 'block';
            btn.innerHTML = '<i class="ph ph-eye-slash"></i> Tutup Teks';
        } else {
            box.style.display = 'none';
            btn.innerHTML = '<i class="ph ph-book-open"></i> Lihat Teks';
        }
    }
};

// Saving and Loading Answers
window.saveAnswer = function(id, btn) {
    const textarea = document.getElementById(id);
    if (textarea) {
        localStorage.setItem('book_flip_' + id, textarea.value);
        
        // Visual feedback
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="ph ph-check"></i> Tersimpan!';
        btn.style.backgroundColor = '#2f855a'; // Darker green
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = ''; // Revert to CSS default
        }, 2000);
    }
};

window.saveMCQ = function(btn) {
    // Save all radio buttons
    for (let i = 1; i <= 6; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            localStorage.setItem(`book_flip_q${i}`, selected.value);
        }
    }
    
    // Visual feedback
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="ph ph-check"></i> Jawaban Disimpan!';
    btn.style.backgroundColor = '#2f855a';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.backgroundColor = '';
    }, 2000);
};

// Load saved answers on start
function loadSavedAnswers() {
    // Load textareas
    ['uraian-1', 'uraian-2', 'refleksi-1', 'refleksi-2', 'tugas-bab1-1', 'tugas-bab1-2', 'tugas-bab3-1', 'tugas-bab3-2'].forEach(id => {
        const saved = localStorage.getItem('book_flip_' + id);
        const textarea = document.getElementById(id);
        if (saved && textarea) {
            textarea.value = saved;
        }
    });
    
    // Load radio buttons
    for (let i = 1; i <= 6; i++) {
        const saved = localStorage.getItem(`book_flip_q${i}`);
        if (saved) {
            const radio = document.querySelector(`input[name="q${i}"][value="${saved}"]`);
            if (radio) {
                radio.checked = true;
            }
        }
    }
}

// Call load after a slight delay to ensure PageFlip DOM is ready
setTimeout(loadSavedAnswers, 500);
