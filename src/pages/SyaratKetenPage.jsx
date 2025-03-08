import { Container, Col, Row } from 'react-bootstrap';
import FaQComponent from '../components/FaQComponent';

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container className='animate__animated animate__fadeInUp animate__delay-0.5s'>
          <Row className="py-3">
            <Col>
              <h1 className="fw-bold text-center mb-2"> Syarat & Ketentuan </h1>
              <p className="text-center"> Selamat datang di ModelMorphosis! Berikut adalah syarat dan ketentuan yang berlaku saat Anda menggunakan layanan kami. Harap baca dengan seksama.</p>
            </Col>
          </Row>

          <Row className="pt-5 fw-bold"> 
            <Col>
              <p> 
                Kami sangat senang Anda bergabung dengan komunitas kami. Untuk memastikan pengalaman terbaik bagi semua pengguna, kami memiliki beberapa aturan dasar yang harus diikuti. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan berikut.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h4>1. Penggunaan Layanan</h4>
              <p> Layanan kami dirancang untuk membantu Anda menemukan dan berbagi inspirasi fashion yang berkelanjutan. Anda diharapkan menggunakan layanan ini dengan cara yang bertanggung jawab dan tidak melanggar hukum. Jangan gunakan layanan kami untuk tujuan yang tidak sah atau merugikan orang lain.</p> 
              <p> Kami berhak untuk menghentikan atau membatasi akses Anda ke layanan kami jika Anda melanggar syarat dan ketentuan ini. Kami juga berhak untuk menghapus konten yang dianggap tidak pantas atau melanggar aturan kami.</p>
              <p> Kami berusaha untuk menjaga layanan kami tetap aman dan bebas dari gangguan. Namun, kami tidak dapat menjamin bahwa layanan kami akan selalu tersedia atau bebas dari kesalahan. Kami tidak bertanggung jawab atas kerugian yang timbul akibat penggunaan layanan kami.</p>
            </Col>
          </Row>

          <Row className="py-3"> 
            <Col>
              <h4 className='fw-bold'>2. Konten Pengguna</h4>
              <p> Anda bertanggung jawab atas konten yang Anda unggah atau bagikan melalui layanan kami. Pastikan konten Anda tidak melanggar hak cipta, merek dagang, atau hak kekayaan intelektual lainnya. Jangan unggah konten yang mengandung unsur kekerasan, pornografi, atau diskriminasi.</p>
              <p> Dengan mengunggah konten ke layanan kami, Anda memberikan kami hak untuk menggunakan, menampilkan, dan mendistribusikan konten tersebut. Kami berhak untuk mengedit atau menghapus konten yang melanggar syarat dan ketentuan ini.</p>
              <p> Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Silakan baca kebijakan privasi kami untuk informasi lebih lanjut tentang bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.</p>
            </Col>
          </Row>

          <Row className="py-3"> 
            <Col>
              <h4 className='fw-bold'>3. Perubahan Syarat & Ketentuan</h4>
              <p> Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu untuk mencerminkan perubahan dalam layanan kami atau peraturan yang berlaku. Kami akan memberi tahu Anda tentang perubahan tersebut melalui email atau pemberitahuan di situs web kami.</p>
              <p> Dengan terus menggunakan layanan kami setelah perubahan tersebut berlaku, Anda setuju untuk mematuhi syarat dan ketentuan yang diperbarui. Jika Anda tidak setuju dengan perubahan tersebut, Anda dapat berhenti menggunakan layanan kami.</p>
            </Col>
          </Row>

          <Row className="py-3"> 
            <Col>
              <h4 className='fw-bold'>4. Hubungi Kami</h4>
              <p> Jika Anda memiliki pertanyaan atau kekhawatiran tentang syarat dan ketentuan ini, jangan ragu untuk menghubungi kami. Kami di sini untuk membantu Anda dan memastikan pengalaman Anda dengan ModelMorphosis menyenangkan dan bermanfaat.</p>
              <p> Terima kasih telah menggunakan layanan kami dan menjadi bagian dari komunitas ModelMorphosis. Kami berharap Anda menikmati pengalaman Anda dan menemukan banyak inspirasi fashion yang berkelanjutan!</p>
            </Col>
          </Row>
        </Container>
      </div>
      <FaQComponent />
    </div>
  );
};

export default SyaratKetenPage;