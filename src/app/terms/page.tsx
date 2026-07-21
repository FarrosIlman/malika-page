import { Container } from "@/components/shared/container";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan layanan Malika Digital.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-invert prose-blue">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Syarat & Ketentuan</h1>
          
          <div className="space-y-8 text-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Pengerjaan Proyek & Pembayaran</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pengerjaan proyek akan dimulai setelah klien melakukan pembayaran Uang Muka (Down Payment) sebesar minimal 50% dari total biaya proyek yang disepakati.</li>
                <li>Pelunasan wajib dilakukan setelah proyek selesai dan sebelum penyerahan aset (Source Code, Akses Server, atau File Master).</li>
                <li>Jika terjadi pembatalan sepihak oleh klien di tengah proses pengerjaan, Uang Muka (DP) tidak dapat dikembalikan (Non-refundable).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Revisi & Garansi</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Setiap paket layanan (Web Development & Desain) sudah termasuk jatah revisi minor gratis sebanyak 3 kali, kecuali ada kesepakatan khusus sebelumnya.</li>
                <li>Revisi mayor (perubahan struktur, alur sistem, atau ganti desain keseluruhan) akan dikenakan biaya tambahan sesuai tingkat kesulitan.</li>
                <li>Kami memberikan Garansi Bebas Bug selama 30 Hari sejak aplikasi diluncurkan ke server produksi. Garansi ini hangus jika ada pihak ketiga yang memodifikasi source code tanpa sepengetahuan kami.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Bimbingan Akademik & IT</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Layanan bimbingan (seperti pendampingan skripsi/tugas) murni ditujukan sebagai media pembelajaran dan *mentoring* teknis.</li>
                <li>Klien berhak mendapatkan penjelasan terkait kode (source code) dan alur sistem agar dapat memahami dan mempresentasikan karyanya secara mandiri.</li>
                <li>Malika Digital tidak bertanggung jawab secara akademis atas nilai atau kelulusan yang didapat oleh klien dari institusinya masing-masing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Hak Cipta & Kepemilikan</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Hak milik dan *Source Code* sepenuhnya menjadi milik klien setelah pelunasan diselesaikan 100%.</li>
                <li>Malika Digital berhak memasukkan hasil karya tersebut ke dalam portofolio kami (dengan izin tertulis jika ada kerahasiaan khusus/NDA).</li>
              </ul>
            </section>

            <div className="pt-8 border-t border-white/10 mt-12">
              <p className="text-sm">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</p>
              <p className="text-sm mt-2">Untuk pertanyaan lebih lanjut mengenai syarat dan ketentuan ini, hubungi kami via <a href={siteConfig.links.whatsapp} className="text-primary hover:underline">WhatsApp</a>.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
