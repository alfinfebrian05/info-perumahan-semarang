import { LegalData } from "@/components/LegalPage";

export const termsData = {
  title: "Syarat dan Ketentuan",
  description:
    "Ketentuan penggunaan layanan Info Perumahan Properti Semarang untuk memastikan pengalaman yang aman, transparan, dan saling percaya bagi seluruh pengguna.",
  updatedAt: new Date().toLocaleDateString("id-ID"),

  sections: [
    {
      title: "Ketentuan Umum",
      content: [
        {
          type: "paragraph",
          text: "Selamat datang di Info Perumahan Properti Semarang ('Platform'). Istilah 'kami' atau 'Platform' mengacu pada pengelola Info Perumahan Properti Semarang. Dengan mengakses dan menggunakan layanan kami, Anda mengakui bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat dan Ketentuan ini.",
        },
        {
          type: "paragraph",
          text: "Layanan ini mencakup situs web, aplikasi, dan media sosial yang dikelola oleh kami. Jika Anda tidak menyetujui ketentuan ini, mohon untuk segera menghentikan penggunaan Platform.",
        },
      ],
    },
    {
      title: "Definisi Istilah",
      content: [
        {
          type: "list",
          items: [
            "Pemilik: Individu atau entitas yang memiliki hak sah atas properti yang didaftarkan.",
            "Agen: Individu atau entitas yang bertindak sebagai perantara pemasaran properti.",
            "Pembeli/Penyewa: Individu yang mencari properti untuk dibeli atau disewa.",
            "Listing: Informasi atau daftar properti yang diunggah ke dalam Platform.",
          ],
        },
      ],
    },
    {
      title: "Tujuan dan Batasan Layanan",
      content: [
        {
          type: "paragraph",
          text: "Platform ini berfungsi sebagai sarana informasi dan penghubung (marketplace) bagi pihak yang ingin menjual, menyewa, atau mencari properti di wilayah Semarang dan sekitarnya. Kami tidak memiliki, mengoperasikan, atau mengendalikan unit properti yang terdaftar secara langsung, kecuali dinyatakan sebaliknya secara tertulis.",
        },
      ],
    },
    {
      title: "Keamanan Akun dan Informasi Pribadi",
      content: [
        {
          type: "paragraph",
          text: "Pengguna bertanggung jawab penuh atas kerahasiaan akun, kata sandi, dan seluruh aktivitas yang dilakukan melalui akun tersebut. Kami berhak melakukan tindakan berikut demi keamanan Platform:",
        },
        {
          type: "list",
          items: [
            "Memantau dan memeriksa informasi yang dikirimkan ke Platform.",
            "Menghapus atau menyensor konten yang melanggar hukum atau hak kekayaan intelektual.",
            "Melakukan pembatasan akses atau pengakhiran akun jika ditemukan indikasi pelanggaran.",
          ],
        },
      ],
    },
    {
      title: "Ketentuan Transaksi dan Verifikasi",
      content: [
        {
          type: "paragraph",
          text: "Untuk menjamin integritas program, Info Perumahan Properti Semarang menerapkan prosedur verifikasi sebagai berikut:",
        },
        {
          type: "subsection",
          title: "Bagi Pemilik dan Agen",
          content: [
            {
              type: "list",
              items: [
                "Wajib memberikan bukti identitas dan bukti kepemilikan unit yang sah.",
                "Menjamin bahwa informasi iklan akurat, sesuai kondisi sebenarnya, dan unit siap huni.",
                "Bertanggung jawab penuh atas kebenaran data rekening untuk keperluan administratif.",
              ],
            },
          ],
        },
        {
          type: "subsection",
          title: "Bagi Pembeli dan Penyewa",
          content: [
            {
              type: "list",
              items: [
                "Wajib memberikan identitas valid untuk menghindari sengketa hukum di kemudian hari.",
                "Memahami bahwa setelah transaksi selesai, tanggung jawab operasional berada pada hubungan antara Pemilik dan Penyewa/Pembeli.",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Kekayaan Intelektual",
      content: [
        {
          type: "paragraph",
          text: "Seluruh elemen dalam Platform, termasuk logo, kode program, desain, dan basis data, adalah milik eksklusif Info Perumahan Properti Semarang yang dilindungi oleh Undang-Undang Hak Cipta dan Merek Republik Indonesia.",
        },
      ],
    },
    {
      title: "Tanggung Jawab Terbatas",
      content: [
        {
          type: "paragraph",
          text: "Kami tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan informasi dari pihak ketiga atau keadaan memaksa (Force Majeure) seperti bencana alam, gangguan teknis massal, atau kebijakan pemerintah.",
        },
      ],
    },
  ],
} satisfies LegalData;