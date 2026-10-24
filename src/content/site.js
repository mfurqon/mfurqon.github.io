// ==== SEMUA KONTEN ADA DI FILE INI ====

export const site = {
    name: "Muhammad Furqon Prasetyo",
    role: "Web Development",
    intro: "Fresh graduate Informatika yang tertarik pada pengembangan web dan pengolahan data. Memiliki pengalaman mengembangkan aplikasi berbasis web menggunakan CodeIgniter, Bootstrap, dan REST API, serta mengolah data menggunakan berbagai perangkat lunak pendukung. Siap terus belajar dan berkontribusi dalam pengembangan solusi teknologi yang bermanfaat.",
    contactHeadline:
        "Tertarik bekerja sama atau menawarkan peluang karier? Mari terhubung.", // kalimat penutup di section Contact
    cvUrl: "cv/cv-publik.pdf", // letakkan file PDF di public/cv/
    year: new Date().getFullYear(),
};

// Setiap objek { } = satu proyek. Salin satu blok untuk menambah, hapus satu blok untuk mengurangi.
export const projects = [
    {
        title: "CI Klinik",
        description:
            "Sebuah aplikasi web kesehatan, dengan fitur mulai dari janji temu dokter, pemesanan obat, dan lainnya",
        image: "images/ci-klinik.png", // file di public/images/
        imageAlt: "Tangkapan layar web CI Klinik",
        tech: ["HTML", "CSS", "PHP", "Codeigniter", "Javascript", "MySQL"],
        repoUrl: "https://github.com/mfurqon/ci-klinik-v2.0", // isi dengan URL GitHub, atau biarkan '' agar tombolnya tidak tampil
        demoUrl: "", // isi dengan URL demo, atau biarkan ''
    },
    {
        title: "Aplikasi Pembayaran Listrik",
        description: "Sebuah aplikasi web pembayaran listrik serta company profile",
        image: "images/pln-bnsp.png",
        imageAlt: "Tangkapan layar web pembayaran listrik",
        tech: ["HTML", "CSS", "PHP", "CodeIgniter", "Javascript", "MySQL"],
        repoUrl: "",
        demoUrl: "",
    },
    {
        title: "Informatics University",
        description:
            "Sebuah aplikasi web dengan tipe landing page dan tema perguruan tinggi",
        image: "images/informatics-university.png",
        imageAlt: "Tangkapan layar web Informatics University",
        tech: ["HTML", "CSS", "Javascript"],
        repoUrl: "https://github.com/mfurqon/informatics-university",
        demoUrl: "",
    },
];

export const about = {
    profile:
        "Lulusan Informatika yang memiliki minat pada pengembangan aplikasi berbasis web dan pengolahan data. Saya senang mempelajari teknologi baru dan menerapkannya dalam proyek untuk mengembangkan kemampuan teknis serta pemecahan masalah.",
    education: [
        {
            title: "S-1 Informatika",
            place: "Universitas Bina Sarana Informatika",
            period: "2022-2026",
        },
    ],
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Codeigniter",
        "Bootstrap",
        "Git",
        "GitHub",
        "MySQL",
    ],
    goal: "Mengembangkan karier sebagai web developer dengan terus meningkatkan kemampuan dalam membangun dan memelihara aplikasi berbasis web.",
};

// Tautan kontak. Hapus baris yang tidak ingin ditampilkan.
// icon (logo merek): gmail | linkedin | github | whatsapp | instagram
// Nama lain, mis. 'mail', dipakai sebagai ikon Lucide biasa. Tombol "Kirim email" memakai baris yang href-nya diawali mailto:
export const contacts = [
    { label: "Email", href: "mailto:furqon.mfp@gmail.com", icon: "gmail" },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/furqon-mfp",
        icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/mfurqon", icon: "github" },
    { label: "WhatsApp", href: "https://wa.me/+6281311618664", icon: "whatsapp" },
    // { label: "Instagram", href: "https://instagram.com/username", icon: "instagram" },
];
