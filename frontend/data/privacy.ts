import { LegalData } from "@/components/LegalPage";

export const privacyData = {
  title: "Kebijakan Privasi",
  description:
    "Komitmen Info Perumahan Properti Semarang dalam melindungi privasi dan data pribadi pengguna sesuai dengan Undang-Undang Perlindungan Data Pribadi (UU PDP) Republik Indonesia.",
  updatedAt: new Date().toLocaleDateString("id-ID"),

  sections: [
    {
      title: "Pendahuluan",
      content: [
        {
          type: "paragraph",
          text: "Kebijakan Privasi ini menjelaskan bagaimana Info Perumahan Properti Semarang ('kami') memperoleh, mengumpulkan, mengolah, menyimpan, dan melindungi data pribadi Anda melalui penggunaan Platform.",
        },
      ],
    },
    {
      title: "Data yang Kami Kumpulkan",
      content: [
        {
          type: "paragraph",
          text: "Kami mengumpulkan informasi yang dapat digunakan untuk mengidentifikasi pengguna, baik yang diberikan secara sukarela maupun otomatis:",
        },
        {
          type: "list",
          items: [
            "Data Identitas: Nama lengkap, alamat email, dan nomor telepon aktif.",
            "Data Autentikasi: Informasi dari pihak ketiga seperti Google (nama dan foto profil).",
            "Data Teknis: Alamat IP, jenis peramban (browser), dan data log aktivitas penggunaan.",
            "Data Properti: Foto, lokasi, dan detail properti yang diunggah oleh pengguna.",
          ],
        },
      ],
    },
    {
      title: "Tujuan Pemrosesan Data",
      content: [
        {
          type: "paragraph",
          text: "Data pribadi Anda akan digunakan secara bertanggung jawab untuk:",
        },
        {
          type: "list",
          items: [
            "Memfasilitasi transaksi dan komunikasi antara penjual dan pembeli.",
            "Melakukan verifikasi identitas untuk mencegah penipuan.",
            "Meningkatkan kualitas layanan melalui analisis aktivitas pengguna secara internal.",
            "Mengirimkan informasi penting terkait pembaruan layanan Info Perumahan Properti Semarang.",
          ],
        },
      ],
    },
    {
      title: "Hak-Hak Pengguna (Subjek Data)",
      content: [
        {
          type: "paragraph",
          text: "Sesuai dengan UU PDP, Anda memiliki hak untuk mengakses, memperbarui, atau meminta penghapusan data pribadi Anda yang tersimpan di sistem kami kapan saja melalui fitur pengaturan akun atau menghubungi layanan bantuan kami.",
        },
      ],
    },
    {
      title: "Keamanan Data",
      content: [
        {
          type: "paragraph",
          text: "Info Perumahan Properti Semarang menerapkan standar keamanan teknologi tinggi, termasuk enkripsi data dan sistem autentikasi aman, untuk melindungi informasi Anda dari akses yang tidak sah oleh pihak luar.",
        },
      ],
    },
    {
      title: "Kuki (Cookies)",
      content: [
        {
          type: "paragraph",
          text: "Platform kami menggunakan kuki (cookies) untuk mengenali sesi masuk (login) Anda dan menyimpan preferensi pencarian guna memberikan pengalaman navigasi yang lebih cepat dan personal.",
        },
      ],
    },
    {
      title: "Kontak Layanan",
      content: [
        {
          type: "paragraph",
          text: "Jika Anda memiliki pertanyaan lebih lanjut mengenai Kebijakan Privasi ini, silakan hubungi tim kami:",
        },
        {
          type: "list",
          items: [
            "Email: privacy@infoperumahanpropertisemarang.com",
            "Situs Web: www.infoperumahanpropertisemarang.com",
          ],
        },
      ],
    },
  ],
} satisfies LegalData;