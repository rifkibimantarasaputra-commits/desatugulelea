/**
 * DATA DUMMY UNTUK DESA TUGU LELEA
 * Memisahkan data dari logika tampilan agar mudah dimodifikasi nantinya ke API / Database.
 */

const dummyData = {
    // 1. Data Statistik Ringkas
    stats: [
        { id: 1, label: "Penduduk", value: "4.520", icon: "groups" },
        { id: 2, label: "Kepala Keluarga", value: "1.234", icon: "family_restroom" },
        { id: 3, label: "Dusun / Blok", value: "6", icon: "holiday_village" },
        { id: 4, label: "RT / RW", value: "24 / 6", icon: "assignment" }
    ],

    // 2. Data Pemerintahan (Perangkat Desa)
    officials: [
        { id: 1, name: "H. Ahmad Dummy, S.E.", role: "Kepala Desa", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 2, name: "Budi Santoso", role: "Sekretaris Desa", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 3, name: "Siti Aminah", role: "Kaur Keuangan", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 4, name: "Rahmat Hidayat", role: "Kaur Umum & Tata Usaha", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 5, name: "Yusuf Maulana", role: "Kasi Pemerintahan", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 6, name: "Dewi Lestari", role: "Kasi Kesejahteraan", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 7, name: "Hasan Basri", role: "Kepala Dusun I", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300" },
        { id: 8, name: "Asep Sunandar", role: "Kepala Dusun II", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300" }
    ],

    // 3. Data Layanan Masyarakat
    services: [
        {
            id: 1,
            title: "Surat Keterangan Domisili",
            desc: "Layanan pembuatan surat keterangan domisili untuk warga yang tinggal di wilayah Desa Tugu Lelea.",
            est: "1 Hari Kerja",
            requirements: ["Fotokopi KTP", "Fotokopi KK", "Surat Pengantar RT/RW"]
        },
        {
            id: 2,
            title: "Surat Keterangan Usaha (SKU)",
            desc: "Surat legalitas bagi warga desa yang memiliki usaha skala mikro atau kecil untuk keperluan perbankan dan izin.",
            est: "1 Hari Kerja",
            requirements: ["Fotokopi KTP", "Fotokopi KK", "Foto Tempat Usaha", "Surat Pengantar RT/RW"]
        },
        {
            id: 3,
            title: "Surat Pengantar SKCK",
            desc: "Pengajuan surat pengantar dari desa sebagai syarat pembuatan Surat Keterangan Catatan Kepolisian di Polsek.",
            est: "1 Hari Kerja",
            requirements: ["Fotokopi KTP", "Fotokopi KK", "Pas Foto 4x6", "Surat Pengantar RT/RW"]
        },
        {
            id: 4,
            title: "Surat Keterangan Tidak Mampu (SKTM)",
            desc: "Surat keterangan untuk keperluan keringanan biaya pendidikan, kesehatan, dan bantuan sosial lainnya.",
            est: "1 - 2 Hari Kerja",
            requirements: ["Fotokopi KTP", "Fotokopi KK", "Surat Pernyataan RT/RW", "Foto Rumah Tampak Depan"]
        },
        {
            id: 5,
            title: "Surat Pengantar Nikah (N1-N4)",
            desc: "Dokumen pengantar untuk melangsungkan pernikahan yang ditujukan ke KUA setempat.",
            est: "2 Hari Kerja",
            requirements: ["Fotokopi KTP", "Fotokopi KK", "Fotokopi Akte Kelahiran", "Pas Foto Berdampingan", "Surat Pengantar RT/RW"]
        },
        {
            id: 6,
            title: "Surat Keterangan Kematian",
            desc: "Penerbitan surat keterangan bagi warga yang telah meninggal dunia, guna pengurusan BPJS dan perbankan.",
            est: "1 Hari Kerja",
            requirements: ["Fotokopi KTP Almarhum", "Fotokopi KK", "Fotokopi KTP Pelapor", "Surat Keterangan RS (Bila Ada)"]
        }
    ],

    // 4. Data Berita & Pengumuman
    news: [
        {
            id: 1,
            title: "Penyaluran Bantuan Langsung Tunai (BLT) Dana Desa Tahap I Berjalan Lancar",
            category: "Berita",
            date: "15 Mei 2026",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600&h=400",
            summary: "Pemdes Tugu Lelea kembali menyalurkan BLT Dana Desa kepada 120 Keluarga Penerima Manfaat (KPM). Acara berlangsung tertib di aula kantor desa.",
            content: "<p>Pemerintah Desa Tugu Lelea melaksanakan kegiatan penyaluran Bantuan Langsung Tunai (BLT) Dana Desa Tahap I tahun 2026. Penyaluran ini diberikan kepada warga yang kurang mampu untuk membantu memulihkan perekonomian warga desa pasca masa krisis.</p><p>Kepala Desa menghimbau agar dana tersebut dipergunakan sebaik mungkin untuk kebutuhan pokok keluarga.</p>"
        },
        {
            id: 2,
            title: "Kerja Bakti Rutin Menjelang Musim Penghujan di Blok Sukamaju",
            category: "Kegiatan",
            date: "10 Mei 2026",
            image: "https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=600&h=400",
            summary: "Warga desa bahu-membahu membersihkan saluran air dan gorong-gorong untuk mencegah terjadinya banjir lokal yang sering melanda tiap tahun.",
            content: "<p>Antisipasi banjir jelang musim penghujan, warga Blok Sukamaju bersama perangkat desa mengadakan kerja bakti dan gotong royong membersihkan saluran pembuangan air utama.</p><p>Ini adalah wujud kebersamaan warga dan bagian dari program Desa Tanggap Bencana.</p>"
        },
        {
            id: 3,
            title: "Pengumuman: Jadwal Pelayanan Perekaman E-KTP Keliling",
            category: "Pengumuman",
            date: "05 Mei 2026",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=400",
            summary: "Dinas Dukcapil Kab. Indramayu akan mengadakan perekaman E-KTP keliling di Balai Desa Tugu Lelea pada tanggal 20 Mei mendatang. Harap siapkan KK.",
            content: "<p>Diberitahukan kepada seluruh warga Desa Tugu Lelea yang belum melakukan perekaman E-KTP atau E-KTP-nya rusak, dimohon kehadirannya pada:</p><ul><li>Hari, Tanggal: Rabu, 20 Mei 2026</li><li>Waktu: 08.00 - 14.00 WIB</li><li>Tempat: Balai Desa Tugu Lelea</li></ul><p>Syarat membawa Fotokopi Kartu Keluarga (KK).</p>"
        }
    ],

    // 5. Data Galeri
    gallery: [
        { id: 1, thumb: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400&h=300", caption: "Kegiatan Posyandu Balita rutin bulanan" },
        { id: 2, thumb: "https://images.unsplash.com/photo-1577415124228-3f5f67566164?auto=format&fit=crop&q=80&w=400&h=300", caption: "Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes)" },
        { id: 3, thumb: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=300", caption: "Pembangunan rabat beton jalan dusun tahap 2" },
        { id: 4, thumb: "https://images.unsplash.com/photo-1595841696677-6479c530b5e1?auto=format&fit=crop&q=80&w=400&h=300", caption: "Panen raya padi bersama kelompok tani" },
        { id: 5, thumb: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=400&h=300", caption: "Pelatihan digital marketing untuk UMKM Desa" },
        { id: 6, thumb: "https://images.unsplash.com/photo-1533604149608-8e68eabb8e84?auto=format&fit=crop&q=80&w=400&h=300", caption: "Keceriaan warga pada lomba 17 Agustus" }
    ],

    // 6. Data Potensi Desa
    potentials: [
        {
            id: 1,
            title: "Sektor Pertanian Padi",
            icon: "agriculture",
            desc: "Mayoritas luas wilayah desa adalah lahan persawahan irigasi teknis yang menjadikan pertanian padi sebagai tulang punggung ekonomi desa. Hasil panen dipasok ke lumbung daerah."
        },
        {
            id: 2,
            title: "UMKM Makanan Olahan",
            icon: "storefront",
            desc: "Banyak ibu rumah tangga yang aktif memproduksi makanan ringan dan kerupuk khas daerah yang dipasarkan hingga luar kecamatan."
        },
        {
            id: 3,
            title: "Kesenian Tradisional",
            icon: "theater_comedy",
            desc: "Desa ini masih melestarikan seni budaya tradisional tarling dan sintren yang sering diundang ke berbagai acara hajatan warga."
        },
        {
            id: 4,
            title: "Peternakan Kambing",
            icon: "pets",
            desc: "Kelompok tani ternak desa berfokus pada pembesaran kambing etawa yang memanfaatkan limbah pertanian sebagai pakan alternatif."
        }
    ]
};
