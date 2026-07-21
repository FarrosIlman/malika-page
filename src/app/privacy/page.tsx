import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi layanan Malika Digital.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-invert prose-blue">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Kebijakan Privasi</h1>
          
          <div className="space-y-8 text-muted leading-relaxed">
            <p>
              Di Malika Digital, privasi dan keamanan data Anda adalah prioritas utama kami. 
              Dokumen Kebijakan Privasi ini menguraikan jenis informasi pribadi yang diterima 
              dan dikumpulkan oleh Malika Digital serta bagaimana informasi tersebut digunakan.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Pengumpulan Data</h2>
              <p>Kami hanya mengumpulkan data yang secara sukarela Anda berikan melalui formulir kontak atau saat berkonsultasi via WhatsApp. Data ini dapat meliputi:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Nama lengkap atau nama institusi/perusahaan</li>
                <li>Nomor telepon (WhatsApp)</li>
                <li>Detail dan ruang lingkup proyek yang dikerjakan</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Penggunaan Data</h2>
              <p>Informasi yang kami kumpulkan semata-mata digunakan untuk:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Menghubungi Anda kembali untuk keperluan konsultasi proyek.</li>
                <li>Memahami kebutuhan sistem atau desain yang Anda inginkan.</li>
                <li>Pemberitahuan administratif terkait progres pengembangan proyek.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Keamanan Data Klien & Source Code</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Kami menerapkan langkah-langkah keamanan ketat untuk melindungi kerahasiaan *Source Code*, *Database*, maupun ide bisnis Anda dari akses yang tidak sah.</li>
                <li>Bila diperlukan, kami bersedia menandatangani perjanjian kerahasiaan atau *Non-Disclosure Agreement* (NDA) sebelum pengerjaan proyek dimulai.</li>
                <li>Kami **TIDAK AKAN PERNAH** menjual, menyebarkan, atau menukar informasi pribadi serta basis data klien kepada pihak ketiga mana pun dengan alasan komersial.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Analitik (Vercel Analytics)</h2>
              <p>
                Website kami menggunakan layanan pihak ketiga (seperti Vercel Analytics) untuk memonitor trafik jaringan dan performa situs. 
                Data yang direkam bersifat *anonymous* (anonim) dan tidak dapat melacak identitas spesifik pengunjung. 
                Hal yang dicatat mencakup tipe peramban (*browser*), lokasi secara umum (negara/kota), dan waktu kunjungan.
              </p>
            </section>

            <div className="pt-8 border-t border-white/10 mt-12">
              <p className="text-sm">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</p>
              <p className="text-sm mt-2">Jika Anda membutuhkan informasi lebih lanjut atau memiliki pertanyaan tentang kebijakan privasi kami, silakan hubungi kami via <a href={siteConfig.links.whatsapp} className="text-primary hover:underline">WhatsApp</a>.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
