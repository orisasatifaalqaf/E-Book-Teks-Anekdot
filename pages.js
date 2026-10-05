const bookPages = [
    // Page 0: Front Cover
    `
    <div class="page hard front-cover" style="position: relative; overflow: hidden; background-color: #1a365d;">
        <div style="position: absolute; top:0; left:0; width:100%; height:60%; background: url('cover-image.jpg') center/cover;"></div>
        
        <!-- Smooth gradient transition from image to solid color -->
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to bottom, rgba(26,54,93,0.1) 0%, rgba(26,54,93,0.85) 45%, rgba(26,54,93,1) 60%);"></div>
        
        <div class="cover-content" style="position: relative; z-index: 10; height: 100%; display: flex; flex-direction: column; padding: 40px 20px; text-align: center;">
            
            <div style="margin-top: auto;">
                <div style="display: inline-block; background-color: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 6px 16px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 15px; backdrop-filter: blur(4px);">
                    Bahan Ajar Interaktif
                </div>
                
                <h2 style="color: #cbd5e0; font-family: var(--font-serif); font-size: 1rem; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px;">Bahasa Indonesia</h2>
                
                <h1 style="font-family: var(--font-display); font-size: clamp(2.5rem, 10vw, 3.5rem); color: #fff; margin: 0 0 10px 0; line-height: 1.1; letter-spacing: 1px; text-shadow: 0 4px 10px rgba(0,0,0,0.3);">TEKS<br>ANEKDOT</h1>
                
                <div style="height: 3px; background: #ecc94b; width: 50px; margin: 15px auto;"></div>
                
                <p style="color: #e2e8f0; font-size: clamp(1rem, 4vw, 1.15rem); font-style: italic; line-height: 1.5; font-weight: 300;">Mengungkap Kritik Lewat<br>Tawa yang Santun</p>
            </div>

            <!-- Author Section at Bottom -->
            <div style="margin-top: auto; padding-top: 20px;">
                <span style="display:block; margin-bottom: 8px; color: #a0aec0; font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase;">Fase E • Kelas X • 2026/2027</span>
                <span style="font-size: 0.8rem; color: #cbd5e0;">Disusun oleh</span><br>
                <strong style="font-size: 1.2rem; letter-spacing: 0.5px; color: #fff; font-family: var(--font-sans); display: inline-block; margin: 2px 0;">Orisa Satifa Alqaf</strong><br>
                <span style="font-size: 0.85rem; color: #a0aec0;">SMA Muhammadiyah 2 Yogyakarta</span>
            </div>
            
        </div>
    </div>
    `,
    // Page 1: Inside Cover / Blank
    `
    <div class="page hard">
        <div class="page-content" style="justify-content: center; align-items: center; opacity: 0.1;">
            <i class="ph ph-book-open" style="font-size: 5rem;"></i>
        </div>
    </div>
    `,
    // Page 2: Kata Pengantar (ii)
    `
    <div class="page">
        <div class="page-content">
            <h1>Kata Pengantar</h1>
            <p>Puji syukur kami panjatkan atas selesainya penyusunan E-Book Teks Anekdot ini. E-book ini disusun sebagai bahan belajar mandiri bagi murid kelas X (Fase E) pada mata pelajaran Bahasa Indonesia di SMA Muhammadiyah 2 Yogyakarta, sebagai pendamping pembelajaran teks anekdot dengan pendekatan pembelajaran mendalam (deep learning) yang berkesadaran, bermakna, dan menggembirakan.</p>
            <p>Isi e-book disusun runtut, mulai dari mengenal anekdot, memahami struktur dan kaidah kebahasaannya, membedah contoh teks, belajar menyampaikan kritik secara santun dan bertanggung jawab, hingga menulis dan menyajikan karya sendiri dalam bentuk tulisan, komik potongan, atau lawakan tunggal. Di setiap bab tersedia kotak <strong>Coba Sendiri</strong> agar kamu tidak hanya membaca, tetapi juga langsung berlatih.</p>
            <p>Contoh-contoh yang dipakai sengaja dekat dengan kehidupan sehari-hari murid: sekolah, teman, dan lingkungan sekitar. Kami berharap e-book ini membantu kamu memahami bahwa anekdot bukan sekadar cerita lucu, tetapi cermin kehidupan yang mengajak kita berpikir kritis.</p>
            <p>Kritik dan saran untuk penyempurnaan e-book ini sangat kami harapkan. Selamat belajar dan berkarya.</p>
            <br>
            <p style="text-align: right;">Yogyakarta, 2026<br><strong>Penyusun</strong></p>
            
            <div class="page-footer"><span></span><span>ii</span></div>
        </div>
    </div>
    `,
    // Page 3: Daftar Isi (iii)
    `
    <div class="page">
        <div class="page-content">
            <h1>Daftar Isi</h1>
            <ul style="list-style: none; line-height: 2;">
                <li><strong>Kata Pengantar</strong> <span style="float: right;">ii</span></li>
                <li><strong>Daftar Isi</strong> <span style="float: right;">iii</span></li>
                <li><strong>Pemantik</strong> <span style="float: right;">iv</span></li>
                <li><strong>BAB 1</strong> Mengenal Teks Anekdot <span style="float: right;">1</span></li>
                <li><strong>BAB 2</strong> Struktur Teks Anekdot <span style="float: right;">3</span></li>
                <li><strong>BAB 3</strong> Kaidah Kebahasaan Teks Anekdot <span style="float: right;">5</span></li>
                <li><strong>BAB 4</strong> Contoh Anekdot dan Cara Membedahnya <span style="float: right;">7</span></li>
                <li><strong>BAB 5</strong> Kritik yang Santun dan Bertanggung Jawab <span style="float: right;">9</span></li>
                <li><strong>BAB 6</strong> Langkah-Langkah Menulis Anekdot <span style="float: right;">10</span></li>
                <li><strong>BAB 7</strong> Menyajikan Karya Anekdot <span style="float: right;">12</span></li>
                <li><strong>BAB 8</strong> Latihan dan Refleksi <span style="float: right;">14</span></li>
                <li><strong>Penutup dan Daftar Pustaka</strong> <span style="float: right;">16</span></li>
            </ul>
            <div class="page-footer"><span></span><span>iii</span></div>
        </div>
    </div>
    `,
    // Page 4: Pemantik (iv)
    `
    <div class="page">
        <div class="page-content" style="padding: 20px;">
            <h1 style="border:none; margin-bottom:10px; font-size:1.5rem; text-align:center; color: var(--primary-color);">Yuk, Simak Hal-Hal Berikut!</h1>
            <p style="text-align:center; margin-bottom: 20px; font-size: 0.9rem; color: #4a5568;">
                Perhatikan ketiga media di bawah ini. Adakah hal yang menurutmu lucu tapi juga menyindir?
            </p>
            
            <div style="margin-bottom: 25px;">
                <p style="font-weight: 600; margin-bottom: 10px; border-left: 3px solid #e53e3e; padding-left: 10px;">1. Video Anekdot</p>
                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); background-color: #000;">
                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/AbFyJlBTANs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <a href="https://youtu.be/AbFyJlBTANs" target="_blank" style="display: inline-flex; align-items: center; gap: 5px; margin-top: 10px; font-size: 0.85rem; color: #e53e3e; text-decoration: none; font-weight: bold;">
                    <i class="ph ph-arrow-square-out"></i> Buka di YouTube
                </a>
            </div>
            
            <div style="margin-bottom: 25px;">
                <p style="font-weight: 600; margin-bottom: 10px; border-left: 3px solid #3182ce; padding-left: 10px;">2. Komik Strip</p>
                <img src="komik-pemantik.png" alt="Komik Strip" style="width: 100%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); display: block;">
            </div>
            
            <div style="margin-bottom: 15px;">
                <p style="font-weight: 600; margin-bottom: 10px; border-left: 3px solid #38a169; padding-left: 10px;">3. Tulisan Anekdot</p>
                <div style="background-color: #f7fafc; padding: 15px; border-radius: 8px; font-size: 0.9rem;">
                    <h3 style="text-align: center; margin-bottom: 10px;">Komputer Paling Canggih</h3>
                    <p style="margin-bottom: 8px;">Pada jam pelajaran Biologi, suasana kelas X-A terasa sedikit mengantuk karena cuaca siang yang panas. Untuk membangkitkan semangat, Pak Guru memberikan penjelasan dengan suara lantang mengenai kehebatan organ tubuh manusia.</p>
                    <p style="margin-bottom: 8px;">"Anak-anak, kalian harus tahu bahwa otak manusia itu sangat luar biasa! Kapasitas memori dan kecepatan memproses informasinya bahkan jauh mengalahkan komputer paling canggih yang pernah diciptakan manusia di bumi ini," jelas Pak Guru dengan penuh semangat.</p>
                    <p style="margin-bottom: 8px;">Mendengar hal itu, Budi yang sejak tadi setengah tertidur di bangku belakang tiba-tiba mengangkat tangan. "Permisi, Pak! Kalau otak kita memang lebih canggih dari komputer, kenapa nilai ujian Matematika saya kemarin cuma dapat 30? Apakah otak saya sedang hang kena virus, atau perlu di-install ulang supaya pintar?"</p>
                    <p style="margin-bottom: 8px;">Seisi kelas yang tadinya mengantuk langsung tertawa terbahak-bahak mendengar pertanyaan Budi. Beberapa anak bahkan sampai memukul-mukul meja.</p>
                    <p style="margin-bottom: 0;">Pak Guru tersenyum masam sambil membetulkan letak kacamatanya. "Otakmu tidak perlu di-install ulang, Budi. Cukup kabel kemalasannya saja yang dicabut, dan tombol belajarnya dihidupkan." Kelas pun perlahan kembali hening, sementara Budi hanya bisa nyengir sambil menggaruk kepalanya yang tidak gatal.</p>
                </div>
            </div>
            
            <div class="page-footer"><span>Yuk, Simak Hal-Hal Berikut!</span><span>iv</span></div>
        </div>
    </div>
    `,
    // Page 4: BAB 1 (p1)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 1: Mengenal Teks Anekdot</h1>
            <p>Pernahkah kamu mendengar teman menyindir kebiasaan buruk kelas dengan candaan, dan semua orang tertawa sambil merasa "kena"? Nah, itulah kekuatan anekdot. Bab ini mengajakmu mengenal apa itu anekdot, apa saja cirinya, dan untuk apa anekdot ditulis.</p>
            
            <h3>A. Pengertian Anekdot</h3>
            <p><strong>Anekdot</strong> adalah cerita singkat yang menarik dan lucu, biasanya mengisahkan tokoh atau peristiwa yang dekat dengan kenyataan, dan mengandung <strong>kritik atau sindiran</strong> terhadap suatu keadaan. Kritik itu dibungkus dengan humor supaya lebih mudah diterima.</p>
            
            <h3>B. Ciri-Ciri Teks Anekdot</h3>
            <ol style="margin-left: 20px; margin-bottom: 12px;">
                <li><strong>Singkat.</strong> Ceritanya padat dan langsung menuju inti.</li>
                <li><strong>Lucu dan menarik.</strong> Ada kejadian atau ucapan yang mengundang tawa.</li>
                <li><strong>Mengandung kritik atau sindiran.</strong> Ada pesan yang ingin disampaikan, tersurat maupun tersirat.</li>
                <li><strong>Dekat dengan kenyataan.</strong> Tokoh, latar, dan peristiwanya terasa nyata.</li>
                <li><strong>Memiliki struktur.</strong> Tersusun atas orientasi, komplikasi, dan evaluasi.</li>
            </ol>
            
            <div class="block-alert tip">
                <div class="block-title">Tahukah Kamu?</div>
                Kata "anekdot" berasal dari bahasa Yunani <em>anekdota</em> yang berarti "hal-hal yang belum diterbitkan". Kata ini lama-kelamaan dipakai untuk cerita pendek tentang tokoh atau kejadian yang menarik dan menyimpan sindiran.
            </div>
            
            <div class="page-footer"><span>BAB 1 Mengenal Teks Anekdot</span><span>1</span></div>
        </div>
    </div>
    `,
    // Page 5: BAB 1 Lanjutan (p2)
    `
    <div class="page">
        <div class="page-content">
            <h3>C. Tujuan Teks Anekdot</h3>
            <p>Anekdot bertujuan <strong>menghibur</strong> pembaca, <strong>menyampaikan kritik</strong> terhadap perilaku atau keadaan secara halus, dan <strong>mengajak merenung</strong> serta memperbaiki diri.</p>
            
            <h3>D. Anekdot Berbeda dari Cerita Lucu Biasa</h3>
            <div class="table-wrapper">
                <table>
                    <tr>
                        <th>Pembeda</th>
                        <th>Cerita lucu biasa</th>
                        <th>Teks anekdot</th>
                    </tr>
                    <tr>
                        <td>Tujuan</td>
                        <td>Membuat tertawa</td>
                        <td>Membuat tertawa sekaligus menyadarkan</td>
                    </tr>
                    <tr>
                        <td>Isi pesan</td>
                        <td>Boleh tanpa pesan</td>
                        <td>Selalu ada kritik atau sindiran</td>
                    </tr>
                    <tr>
                        <td>Asal cerita</td>
                        <td>Bebas, sering murni khayalan</td>
                        <td>Berangkat dari perilaku atau keadaan nyata</td>
                    </tr>
                </table>
            </div>
            
            <div class="block-alert warning">
                <div class="block-title">Coba Sendiri</div>
                Ingat satu candaan yang pernah menyindir kebiasaan di kelas atau di rumahmu. Apa yang lucu, dan kritik apa yang sebenarnya disampaikan?
            </div>
            
            <h3>E. Tugas Pendalaman</h3>
            
            <div class="essay-question">
                <p>1. Cari <strong>satu anekdot</strong> dari buku, komik, video, atau cerita yang pernah kamu dengar, lalu tulis ringkasannya dalam 3-4 kalimat.</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="tugas-bab1-1" placeholder="Ketik ringkasan anekdot..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('tugas-bab1-1', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <div class="essay-question">
                <p>2. Tulis 2-3 kalimat yang menjelaskan mengapa teks itu termasuk anekdot, bukan cerita lucu biasa.</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="tugas-bab1-2" placeholder="Jelaskan alasanmu..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('tugas-bab1-2', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            <div class="page-footer"><span>BAB 1 Mengenal Teks Anekdot</span><span>2</span></div>
        </div>
    </div>
    `,
    // Page 6: BAB 2 (p3)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 2: Struktur Teks Anekdot</h1>
            <p>Anekdot yang baik tidak dibangun sembarangan. Ceritanya mengalir melalui tiga bagian yang saling berkaitan. Kenali bagian-bagian ini agar kamu mudah membedah anekdot yang kamu baca dan menyusun anekdotmu sendiri.</p>
            
            <div class="block-alert tip" style="border-left-color: #38a169; background-color: #f0fff4;">
                <div class="block-title">A. ORIENTASI</div>
                Bagian pembuka. Memperkenalkan tokoh, tempat, waktu, dan situasi awal sehingga pembaca tahu siapa berbuat apa di mana. Biasanya suasananya masih wajar dan tenang.
            </div>
            
            <div class="block-alert tip" style="border-left-color: #e53e3e; background-color: #fff5f5;">
                <div class="block-title">B. KOMPLIKASI (KRISIS)</div>
                Bagian tengah. Muncul masalah, kejadian tak terduga, atau ucapan yang aneh. Di sinilah lucunya memuncak, dan kritik mulai terasa. Bagian paling menegangkan atau paling janggal ini disebut krisis.
            </div>
            
            <div class="block-alert tip" style="border-left-color: #805ad5; background-color: #faf5ff;">
                <div class="block-title">C. EVALUASI</div>
                Bagian penutup. Berisi tanggapan tokoh, kesimpulan, atau kalimat pamungkas yang menegaskan sindiran. Pesan kritik biasanya paling jelas terasa di bagian ini.
            </div>
            
            <div class="page-footer"><span>BAB 2 Struktur Teks Anekdot</span><span>3</span></div>
        </div>
    </div>
    `,
    // Page 7: BAB 2 Lanjutan (p4)
    `
    <div class="page">
        <div class="page-content">
            <h3>D. Ringkasan Struktur</h3>
            <div class="table-wrapper">
                <table>
                    <tr>
                        <th>Bagian</th>
                        <th>Isi</th>
                        <th>Pertanyaan bantu</th>
                    </tr>
                    <tr>
                        <td>Orientasi</td>
                        <td>Tokoh, latar, situasi awal</td>
                        <td>Siapa, di mana, sedang apa?</td>
                    </tr>
                    <tr>
                        <td>Komplikasi</td>
                        <td>Masalah atau kejadian janggal, puncak lucu</td>
                        <td>Apa yang terjadi di luar dugaan?</td>
                    </tr>
                    <tr>
                        <td>Evaluasi</td>
                        <td>Tanggapan, penutup, penegasan sindiran</td>
                        <td>Apa kritik yang terasa di akhir?</td>
                    </tr>
                </table>
            </div>
            
            <div class="block-alert tip">
                <div class="block-title">Tahukah Kamu?</div>
                Beberapa buku pelajaran membagi struktur anekdot menjadi lima bagian, yaitu abstraksi, orientasi, krisis, reaksi, dan koda. Pembagian tiga bagian di e-book ini merupakan penyederhanaan: komplikasi memuat krisis, dan evaluasi memuat reaksi tokoh.
            </div>
            
            <div class="block-alert warning">
                <div class="block-title">Coba Sendiri</div>
                Ambil satu anekdot atau komik yang pernah kamu baca. Tandai kalimat terakhir orientasi dan kalimat yang menjadi puncak krisisnya.
            </div>
            
            <div class="page-footer"><span>BAB 2 Struktur Teks Anekdot</span><span>4</span></div>
        </div>
    </div>
    `,
    // Page 8: BAB 3 (p5)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 3: Kaidah Kebahasaan</h1>
            <p>Kaidah kebahasaan adalah ciri bahasa yang membuat anekdot terasa hidup, lucu, dan tajam. Ada tiga kaidah utama yang perlu kamu kuasai.</p>
            
            <h3>A. Pertanyaan Retoris</h3>
            <p>Pertanyaan retoris adalah pertanyaan yang tidak menuntut jawaban karena maksudnya sudah jelas. Fungsinya menyindir atau menegaskan.<br>
            Contoh: <em>"Siapa sih yang tidak ingin lulus tanpa belajar?"</em></p>
            
            <h3>B. Majas Sindiran</h3>
            <div class="table-wrapper">
                <table>
                    <tr>
                        <th>Majas</th>
                        <th>Pengertian</th>
                        <th>Contoh</th>
                    </tr>
                    <tr>
                        <td>Ironi</td>
                        <td>Menyatakan hal berlawanan, nada halus</td>
                        <td>"Rajin sekali kamu, baru datang pukul sembilan!"</td>
                    </tr>
                    <tr>
                        <td>Sinisme</td>
                        <td>Sindiran mencemooh atau tidak percaya</td>
                        <td>"Tentu saja rapat ini penting, sampai semua orang sibuk main HP."</td>
                    </tr>
                    <tr>
                        <td>Sarkasme</td>
                        <td>Sindiran langsung dan kasar</td>
                        <td>"Bicaramu sepanjang jalan tol, kerjamu sependek gang buntu."</td>
                    </tr>
                </table>
            </div>
            
            <div class="block-alert warning" style="border-left-color: #dd6b20;">
                <div class="block-title">Penting</div>
                Sarkasme paling mudah melukai perasaan. Gunakan ironi terlebih dahulu, dan pakai sarkasme hanya jika tetap sopan dan tidak menyerang pribadi seseorang.
            </div>
            
            <div class="page-footer"><span>BAB 3 Kaidah Kebahasaan</span><span>5</span></div>
        </div>
    </div>
    `,
    // Page 9: BAB 3 Lanjutan (p6)
    `
    <div class="page">
        <div class="page-content">
            <h3>C. Kata Kerja Material</h3>
            <p>Kata kerja material adalah kata kerja yang menunjukkan perbuatan fisik yang dapat dilihat, misalnya berlari, menyelip, menyapu, mengangkat, memungut, dan melangkah. Kata kerja ini membuat kejadian dalam cerita terasa nyata dan mudah dibayangkan.</p>
            
            <div class="block-alert tip">
                <div class="block-title">Tips</div>
                Dialog atau kalimat langsung membuat anekdot terasa seperti kejadian sungguhan. Kutip ucapan tokoh dengan tanda petik dan tanda baca yang tepat.
            </div>
            
            <div class="block-alert warning">
                <div class="block-title">Coba Sendiri</div>
                Ubah kalimat "Kamu terlambat lagi" menjadi sindiran ironi. Lalu buat satu pertanyaan retoris tentang kebiasaan membuang sampah sembarangan.
            </div>
            
            <h3>D. Tugas Pendalaman</h3>
            <p style="margin-bottom: 10px;">Kerjakan tugas ringan berikut:</p>
            
            <div class="essay-question">
                <p>1. Ubahlah tiga kalimat biasa berikut menjadi kalimat sindiran bermajas ironi: <br>
                (a) "Kamu belum mengerjakan PR." <br>
                (b) "Ruang kelas ini sangat kotor." <br>
                (c) "Rapat ini terlalu lama."</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="tugas-bab3-1" placeholder="Ketik kalimat ironi..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('tugas-bab3-1', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <div class="essay-question">
                <p>2. Tulis tiga kalimat bernuansa humor tentang suasana kantin saat jam istirahat dengan menggunakan kata kerja material.</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="tugas-bab3-2" placeholder="Ketik tiga kalimat..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('tugas-bab3-2', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <div class="page-footer"><span>BAB 3 Kaidah Kebahasaan</span><span>6</span></div>
        </div>
    </div>
    `,
    // Page 10: BAB 4 (p7)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 4: Contoh Anekdot</h1>
            <p>Bab ini berisi tiga contoh anekdot dengan tingkat kesulitan berbeda. Baca satu per satu, lalu bedah dengan langkah di akhir bab.</p>
            
            <h3>A. Contoh 1: Piket Kelas</h3>
            <div class="block-alert" style="background: #e6fffa; border-left:4px solid #319795; margin-bottom:0;"><strong>ORIENTASI</strong><br>
            Senin pagi, Bu Sari, wali kelas X E, masuk ke kelas. Papan tulis masih penuh coretan, dan lantai berserakan kertas. Di daftar piket tertulis lima nama, tetapi tak satu pun terlihat memegang sapu.</div>
            
            <div class="block-alert" style="background: #fff5f5; border-left:4px solid #e53e3e; margin-top:0; margin-bottom:0;"><strong>KOMPLIKASI</strong><br>
            "Siapa yang piket hari ini?" tanya Bu Sari. Lima anak saling menoleh. "Kami piket hari Jumat, Bu," jawab Dani. "Tapi sekarang hari Senin," kata Bu Sari. "Justru itu, Bu. Kami menyisakan sampah supaya hari Jumat nanti tidak bingung mau membersihkan apa," jawab Dani mantap. Seisi kelas tertawa.</div>
            
            <div class="block-alert" style="background: #faf5ff; border-left:4px solid #805ad5; margin-top:0;"><strong>EVALUASI</strong><br>
            Bu Sari tersenyum, lalu mengambil sapu dan menyerahkannya kepada Dani. "Alasan yang bagus. Karena kalian rajin menyimpan sampah, hari ini kalian juga yang menyimpannya ke tempat sampah." Lima anak itu pun bergegas menyapu.</div>
            
            <p><strong>Kritik:</strong> tanggung jawab piket sering ditunda dan dicarikan alasan.</p>
            
            <div class="page-footer"><span>BAB 4 Contoh Anekdot</span><span>7</span></div>
        </div>
    </div>
    `,
    // Page 11: BAB 4 Lanjutan (p8)
    `
    <div class="page">
        <div class="page-content">
            <h3>B. Contoh 2: Kantin Kejujuran</h3>
            <p><strong>ORIENTASI:</strong> Di sekolah Pak Hendra dibuka Kantin Kejujuran. Tidak ada penjaga; pembeli mengambil barang sendiri dan memasukkan uang ke dalam kotak. Di dinding terpasang spanduk besar: "Kejujuran Adalah Kunci."</p>
            <p><strong>KOMPLIKASI:</strong> Sebulan kemudian, pengurus OSIS menghitung hasil penjualan. Barang yang habis ada dua ratus buah, tetapi uang di kotak hanya cukup untuk lima puluh buah. Kotak itu bahkan berisi dua kancing baju dan sebutir permen bekas.</p>
            <p><strong>EVALUASI:</strong> "Wah, murid kita luar biasa," kata Pak Hendra sambil menggeleng. "Barangnya cepat habis, tetapi kejujurannya lebih cepat lagi menghilang." Keesokan harinya, ia memasang tulisan baru di kantin itu: "Stok Kejujuran Sedang Kosong."</p>
            <p><strong>Kritik:</strong> kejujuran tidak cukup hanya dipasang sebagai slogan.</p>
            
            <h3>C. Langkah Membedah Anekdot</h3>
            <ol style="margin-left: 20px;">
                <li>Baca teks sampai selesai, tentukan bagian yang membuatmu tertawa.</li>
                <li>Tandai orientasi, komplikasi, dan evaluasi.</li>
                <li>Cari kaidah kebahasaan: pertanyaan retoris, majas, kata kerja material.</li>
                <li>Rumuskan kritik yang tersirat.</li>
                <li>Simpulkan pesan dan nilai yang bisa kamu ambil.</li>
            </ol>
            
            <div class="block-alert warning">
                <div class="block-title">Coba Sendiri</div>
                Bedah teks "Piket Kelas" atau "Kantin Kejujuran". Temukan satu kalimat sindiran dan jelaskan maksud sebenarnya.
            </div>
            
            <div class="block-alert" style="text-align: center; margin-top: 15px; padding: 20px 15px; background-color: #ebf8ff; border-left-color: #3182ce; border-radius: 8px;">
                <p style="font-weight: 600; margin-bottom: 15px; color: #2c5282;">Sudah paham cara membedah teks anekdot?</p>
                <!-- Tombol Kuis Wordwall -->
                <a href="https://wordwall.net/id/resource/120565356?wwmethod=link" target="_blank" style="display: inline-flex; align-items: center; gap: 8px; background-color: #3182ce; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: all 0.2s;" onmouseover="this.style.backgroundColor='#2b6cb0'" onmouseout="this.style.backgroundColor='#3182ce'">
                    <i class="ph ph-game-controller" style="font-size: 1.2rem;"></i> Mulai Kuis Interaktif
                </a>
            </div>
            
            <div class="page-footer"><span>BAB 4 Contoh Anekdot</span><span>8</span></div>
        </div>
    </div>
    `,
    // Page 12: BAB 5 (p9)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 5: Kritik yang Santun</h1>
            <p>Kritik lewat humor tetap punya batas. Anekdot yang baik membuat orang tertawa dan sadar, bukan tersinggung atau terluka.</p>
            
            <h3>A. Fakta atau Opini?</h3>
            <p>Kritik yang bertanggung jawab berdasar pada <strong>fakta</strong>, bukan sekadar kesan pribadi. Fakta dapat dibuktikan; opini adalah pendapat atau penilaian.</p>
            <div class="table-wrapper">
                <table>
                    <tr>
                        <th>Jenis</th>
                        <th>Contoh</th>
                        <th>Bisa dibuktikan?</th>
                    </tr>
                    <tr>
                        <td>Fakta</td>
                        <td>Halaman sekolah dipenuhi gelas plastik setelah rapat.</td>
                        <td>Ya, dengan pengamatan/foto</td>
                    </tr>
                    <tr>
                        <td>Opini</td>
                        <td>OSIS memang tidak becus.</td>
                        <td>Tidak, penilaian pribadi</td>
                    </tr>
                </table>
            </div>
            
            <h3>B. Kiat Menyampaikan Kritik yang Santun</h3>
            <ol style="margin-left: 20px; font-size: 0.95rem;">
                <li>Kritiklah <strong>perilaku atau keadaan</strong>, bukan pribadi seseorang.</li>
                <li>Hindari isu SARA dan merendahkan kelompok tertentu.</li>
                <li>Gunakan tokoh rekaan atau nama samaran.</li>
                <li>Pakai ironi lebih dulu; sarkasme hanya bila perlu dan tetap sopan.</li>
            </ol>
            
            <div class="block-alert warning">
                <div class="block-title">Penting</div>
                Anekdot bukan alat untuk merundung atau menyebarkan kabar bohong. Kritik yang menyerang pribadi tidak pantas disebut anekdot.
            </div>
            
            <div class="page-footer"><span>BAB 5 Kritik yang Santun</span><span>9</span></div>
        </div>
    </div>
    `,
    // Page 13: BAB 6 (p10)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 6: Langkah Menulis</h1>
            <p>Sekarang saatnya menulis. Ikuti langkah berikut secara berurutan.</p>
            
            <ol style="margin-left: 20px; line-height: 1.5; font-size: 0.95rem;">
                <li><strong>Pilih Fenomena di Sekitarmu:</strong> Pilih kebiasaan nyata di sekolah atau lingkungan (misal: membuang sampah sembarangan).</li>
                <li><strong>Kumpulkan Fakta:</strong> Amati langsung, catat kejadiannya. Pastikan kritikmu berdasar kenyataan.</li>
                <li><strong>Tentukan Tokoh dan Latar:</strong> Buat tokoh rekaan yang wajar, lengkap dengan nama, tempat, dan waktu.</li>
                <li><strong>Susun Kerangka:</strong> Tulis satu atau dua kalimat untuk tiap bagian (orientasi, komplikasi, evaluasi). Tentukan kalimat sindiran.</li>
                <li><strong>Tulis Draf:</strong> Kembangkan kerangka menjadi cerita. Gunakan dialog, kata kerja material, dan majas sindiran.</li>
                <li><strong>Sunting Sendiri:</strong> Periksa struktur lengkap, kritik berdasar fakta, ejaan dan tanda baca tepat.</li>
                <li><strong>Minta Tanggapan Teman:</strong> Tukar draf dengan kelompok lain. Beri tanggapan santun dan spesifik.</li>
            </ol>
            
            <h3>A. Memanfaatkan AI sebagai Teman Berpikir</h3>
            <p>AI dapat membantu mencari ide dan memberi umpan balik, tapi AI bukan penulis penggantimu! Tulislah karya dengan kata-katamu sendiri.</p>
            
            <div class="page-footer"><span>BAB 6 Langkah Menulis</span><span>10</span></div>
        </div>
    </div>
    `,
    // Page 14: BAB 6 Lanjutan & BAB 7 (p11, p12)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 7: Menyajikan Karya</h1>
            <p>Anekdotmu dapat disajikan dalam tiga bentuk. Pilih sesuai minat dan kekuatan kelompokmu.</p>
            
            <h3>A. Teks Anekdot Tertulis</h3>
            <p>Ditulis sebagai cerita singkat, sekitar tiga sampai lima paragraf. Beri judul yang menarik dan pastikan kalimat sindiran di bagian evaluasi terasa jelas.</p>
            
            <h3>B. Komik Potongan (Comic Strip)</h3>
            <p>Cerita dipecah menjadi empat sampai enam panel bergambar dengan balon dialog. Gambar tidak harus bagus; yang penting ekspresi tokoh jelas dan panel terakhir memuat sindiran yang kuat.</p>
            
            <h3>C. Lawakan Tunggal (Stand-up Comedy)</h3>
            <ol style="margin-left: 20px; font-size: 0.95rem;">
                <li><strong>Pembuka:</strong> sapaan singkat dan situasi yang dikenal (orientasi).</li>
                <li><strong>Bangun cerita:</strong> ceritakan kejadian dengan ekspresi dan gerak (komplikasi).</li>
                <li><strong>Puncak:</strong> ucapkan kalimat sindiran dengan jeda sebelum kalimat kunci (krisis).</li>
                <li><strong>Penutup:</strong> tegaskan pesan dengan singkat dan santun (evaluasi).</li>
            </ol>
            
            <div class="block-alert tip">
                <div class="block-title">Tips</div>
                Berlatih di depan kelompok kecil dahulu sebelum tampil di kelas. Rasa gugup itu wajar. Bawakan dengan percaya diri dan penuh semangat.
            </div>
            
            <div class="page-footer"><span>BAB 7 Menyajikan Karya</span><span>11-12</span></div>
        </div>
    </div>
    `,
    // Page 15: BAB 8 Latihan (p14)
    `
    <div class="page">
        <div class="page-content">
            <h1>BAB 8: Latihan & Refleksi</h1>
            
            <h3>A. Pilihan Ganda</h3>
            
            <div class="quiz-question">
                <p>1. Cerita singkat yang lucu dan berisi sindiran terhadap suatu keadaan disebut ...</p>
                <ul class="quiz-options">
                    <li><label class="quiz-label"><input type="radio" name="q1" value="A"> A. Fabel</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q1" value="B"> B. Anekdot</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q1" value="C"> C. Legenda</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q1" value="D"> D. Cerpen</label></li>
                </ul>
            </div>
            
            <div class="quiz-question">
                <p>2. Bagian anekdot yang memperkenalkan tokoh dan latar disebut ...</p>
                <ul class="quiz-options">
                    <li><label class="quiz-label"><input type="radio" name="q2" value="A"> A. Orientasi</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q2" value="B"> B. Komplikasi</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q2" value="C"> C. Evaluasi</label></li>
                </ul>
            </div>
            
            <div class="quiz-question">
                <p>3. Bagian yang memuat kejadian janggal sehingga lucunya memuncak adalah ...</p>
                <ul class="quiz-options">
                    <li><label class="quiz-label"><input type="radio" name="q3" value="A"> A. Orientasi</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q3" value="B"> B. Evaluasi</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q3" value="C"> C. Komplikasi</label></li>
                </ul>
            </div>
            
            <div class="quiz-question">
                <p>4. "Wah, cepat sekali kamu datang, pelajaran sudah selesai dari tadi!" Kalimat ini memakai majas ...</p>
                <ul class="quiz-options">
                    <li><label class="quiz-label"><input type="radio" name="q4" value="A"> A. Hiperbola</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q4" value="B"> B. Personifikasi</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q4" value="C"> C. Ironi</label></li>
                </ul>
            </div>
            
            <div class="quiz-question">
                <p>5. Manakah kalimat yang berupa pertanyaan retoris?</p>
                <ul class="quiz-options">
                    <li><label class="quiz-label"><input type="radio" name="q5" value="A"> A. "Jam berapa upacara dimulai?"</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q5" value="B"> B. "Siapa sih yang tidak ingin nilainya bagus tanpa belajar?"</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q5" value="C"> C. "Di mana letak kantin sekolah?"</label></li>
                </ul>
            </div>
            
            <div class="quiz-question">
                <p>6. Kata berikut yang termasuk kata kerja material adalah ...</p>
                <ul class="quiz-options">
                    <li><label class="quiz-label"><input type="radio" name="q6" value="A"> A. Menyapu</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q6" value="B"> B. Merasa</label></li>
                    <li><label class="quiz-label"><input type="radio" name="q6" value="C"> C. Berharap</label></li>
                </ul>
            </div>
            
            <button class="btn-simpan-pg" onclick="window.saveMCQ(this)"><i class="ph ph-floppy-disk"></i> Simpan Pilihan Ganda</button>
            
            <div class="page-footer"><span>BAB 8 Latihan & Refleksi</span><span>14</span></div>
        </div>
    </div>
    `,
    // Page 16: BAB 8 Lanjutan (p15)
    `
    <div class="page">
        <div class="page-content">
            <h3>B. Uraian</h3>
            
            <div class="essay-question">
                <p>1. Sebutkan struktur, dua kaidah kebahasaan, dan kritik yang ingin disampaikan pada teks anekdot "Piket Kelas"!</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="uraian-1" placeholder="Ketik jawaban Anda di sini..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('uraian-1', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <div class="essay-question">
                <p>2. Tulislah anekdot singkat (tiga paragraf) tentang satu fenomena di sekolahmu. Pastikan strukturnya lengkap dan kritiknya santun.</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="uraian-2" placeholder="Ketik draf anekdot Anda di sini..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('uraian-2', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <h3>C. Refleksi</h3>
            
            <div class="essay-question">
                <p>1. Apa hal baru yang paling menarik bagimu dari belajar anekdot?</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="refleksi-1" placeholder="Tuliskan refleksi Anda..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('refleksi-1', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <div class="essay-question">
                <p>2. Topik kritik apa yang ingin kamu tulis, dan bagaimana kamu menjaganya tetap santun?</p>
                <button class="btn-jawab" onclick="window.toggleAnswer(this)"><i class="ph ph-pencil-simple"></i> Jawab</button>
                <div class="answer-box">
                    <textarea id="refleksi-2" placeholder="Tuliskan ide Anda..."></textarea>
                    <button class="btn-simpan" onclick="window.saveAnswer('refleksi-2', this)"><i class="ph ph-floppy-disk"></i> Simpan</button>
                </div>
            </div>
            
            <div class="page-footer"><span>BAB 8 Latihan & Refleksi</span><span>15</span></div>
        </div>
    </div>
    `,
    // Page 17: Penutup (p16)
    `
    <div class="page">
        <div class="page-content">
            <h1 style="border:none; margin-bottom:5px; font-size:1.5rem;">Penutup</h1>
            <p>Anekdot mengajarkan bahwa kritik tidak harus disampaikan dengan marah. Dengan humor yang cerdas, santun, dan berdasar fakta, kita dapat mengajak orang lain berkaca tanpa merasa dihakimi. Teruslah mengamati sekitarmu, menulis, dan berani menyampaikan gagasan.</p>
            
            <div class="page-footer"><span>Penutup</span><span>16</span></div>
        </div>
    </div>
    `,
    // Page 18: Daftar Pustaka (p17)
    `
    <div class="page">
        <div class="page-content">
            <h1 style="border:none; margin-bottom:5px; font-size:1.5rem;">Daftar Pustaka</h1>
            <p style="font-size: 0.95rem; line-height: 1.6;">
                Aulia, F. T., & Gumilar, S. I. (2021). <em>Cerdas Cergas Berbahasa dan Bersastra Indonesia untuk SMA/SMK Kelas X</em>. Kemendikbudristek.
            </p>
            
            <p style="text-align: center; font-style: italic; margin-top: 60px; color: var(--accent-color);">— Selamat belajar dan berkarya —</p>
            
            <div class="page-footer"><span>Daftar Pustaka</span><span>17</span></div>
        </div>
    </div>
    `,

    // Page 20: Inside Back Cover
    `
    <div class="page hard">
        <div class="page-content" style="justify-content: center; align-items: center; opacity: 0.1;">
            <i class="ph ph-bookmark-simple" style="font-size: 5rem;"></i>
        </div>
    </div>
    `,
    // Page 21: Back Cover
    `
    <div class="page hard back-cover">
        <div class="cover-content">
            <h2 style="font-family: var(--font-display); color: white; border: none;">Teks Anekdot</h2>
            <p style="color: #cbd5e0; font-style: italic; margin-bottom: 20px;">Mengungkap Kritik Lewat Tawa yang Santun</p>
            
            <div style="margin-top: auto; font-size: 0.9rem; color: #a0aec0;">
                <p>E-Book Interaktif<br>Bahasa Indonesia Kelas X</p>
                <div style="margin-top: 20px;">
                    <i class="ph ph-qr-code" style="font-size: 3rem; color: white;"></i>
                </div>
            </div>
        </div>
    </div>
    `
];
