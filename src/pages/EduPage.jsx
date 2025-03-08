import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Accordion,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import { Vid1, Vid2, Vid3, Vid4, Vid5 } from "../data/index.js";

const EduPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    photo: null,
    name: "",
    color: "",
    style: "",
    description: "",
  });

  const [userPoints, setUserPoints] = useState(100); // Example user points

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="edupage py-5">
      <Container className="my-5">
        <Row>
          <Col>
            <h1 className="text-center fw-bold">EduPage</h1>
            <p className="text-center">
              Platform edukasi tentang fashion berkelanjutan.
            </p>
          </Col>
        </Row>

        {/* Artikel Sederhana */}
        <Row className="py-5 animate__animated animate__fadeInUp animate__delay-0.5s">
          <Col>
            <h2 className="text-center fw-bold">Artikel</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                992: { slidesPerView: 3, spaceBetween: 50 },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card className="my-3">
                  <Card.Body>
                    <Card.Title>
                      Fakta Fashion Saat Ini dan Dampaknya pada Lingkungan
                    </Card.Title>
                    <Card.Text>
                      Industri fashion adalah salah satu industri terbesar di
                      dunia, tetapi juga salah satu yang paling merusak
                      lingkungan. Setiap tahun, jutaan ton pakaian dibuang ke
                      tempat pembuangan sampah, dan proses produksi pakaian
                      menghasilkan emisi karbon yang signifikan. Selain itu,
                      penggunaan bahan kimia berbahaya dalam produksi tekstil
                      dapat mencemari air dan tanah.
                      <br />
                      <br />
                      Menurut laporan dari Ellen MacArthur Foundation, industri
                      fashion bertanggung jawab atas 10% emisi karbon global dan
                      merupakan penyumbang terbesar kedua polusi air di dunia.
                      Oleh karena itu, penting bagi kita untuk mulai memikirkan
                      cara-cara untuk membuat fashion lebih berkelanjutan dan
                      ramah lingkungan.
                    </Card.Text>
                    <Button
                      variant="link"
                      onClick={() => navigate("/artikel/fakta-fashion")}
                      className="text-decoration-none cursor-pointer"
                    >
                      Baca Selengkapnya..
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="my-3">
                  <Card.Body>
                    <Card.Title>Tips Mengurangi Limbah Fashion</Card.Title>
                    <Card.Text>
                      Mengurangi limbah fashion bisa dimulai dari
                      langkah-langkah kecil dalam kehidupan sehari-hari. Berikut
                      beberapa tips yang bisa Anda terapkan:
                      <ul>
                        <li>Membeli pakaian berkualitas yang tahan lama.</li>
                        <li>Menghindari tren fashion yang cepat berubah.</li>
                        <li>
                          Mendaur ulang atau menyumbangkan pakaian yang tidak
                          terpakai.
                        </li>
                        <li>
                          Menggunakan kembali bahan pakaian lama untuk membuat
                          barang baru.
                        </li>
                      </ul>
                      Dengan menerapkan tips-tips ini, Anda bisa membantu
                      mengurangi limbah fashion dan mendukung keberlanjutan
                      lingkungan.
                    </Card.Text>
                    <Button
                      variant="link"
                      onClick={() => navigate("/artikel/tips-limbah-fashion")}
                      className="text-decoration-none cursor-pointer"
                    >
                      Baca Selengkapnya..
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="my-3">
                  <Card.Body>
                    <Card.Title>Inovasi dalam Fashion Berkelanjutan</Card.Title>
                    <Card.Text>
                      Inovasi dalam fashion berkelanjutan terus berkembang.
                      Beberapa inovasi terbaru termasuk penggunaan bahan daur
                      ulang, pengembangan tekstil ramah lingkungan, dan
                      penerapan teknologi canggih untuk mengurangi limbah
                      produksi. Misalnya, beberapa perusahaan fashion kini
                      menggunakan serat dari botol plastik daur ulang untuk
                      membuat pakaian.
                      <br />
                      <br />
                      Selain itu, ada juga inovasi dalam proses pewarnaan
                      tekstil yang menggunakan lebih sedikit air dan bahan
                      kimia. Dengan terus mendukung dan mengadopsi
                      inovasi-inovasi ini, kita bisa membantu menciptakan
                      industri fashion yang lebih berkelanjutan dan ramah
                      lingkungan.
                    </Card.Text>
                    <Button
                      variant="link"
                      onClick={() => navigate("/artikel/inovasi-fashion")}
                      className="text-decoration-none cursor-pointer"
                    >
                      Baca Selengkapnya..
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              {/* Tambahkan SwiperSlide lainnya sesuai kebutuhan */}
            </Swiper>
          </Col>
        </Row>

        {/* Reuse dan Recycle */}
        <Row className="my-5 animate__animated animate__fadeInUp animate__delay-0.5s">
          <Col>
            <h2 className="text-center fw-bold">Reuse dan Recycle</h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                992: { slidesPerView: 3, spaceBetween: 50 },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card className="my-3">
                  <Card.Body>
                    <Card.Title>Tutorial Daur Ulang Pakaian</Card.Title>
                    <Card.Text>
                      Tutorial berbentuk artikel atau video tentang cara mendaur
                      ulang atau merekayasa bahan pakaian lama menjadi barang
                      baru. Mini workshop online tentang DIY fashion dari sisa
                      bahan pakaian.
                    </Card.Text>
                    <Button
                      variant="link"
                      onClick={() => navigate("/tutorial/daur-ulang")}
                      className="text-decoration-none cursor-pointer"
                    >
                      Lihat Tutorial
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className="my-3">
                  <Card.Body>
                    <Card.Title>Video Tutorial DIY Fashion</Card.Title>
                    <Card.Text>
                      Video tutorial tentang cara membuat barang baru dari bahan
                      pakaian lama. Pelajari cara membuat tas, aksesori, dan
                      barang-barang lainnya dari sisa bahan pakaian.
                    </Card.Text>
                    <Button
                      variant="link"
                      onClick={() => navigate("/tutorial/diy-fashion")}
                      className="text-decoration-none cursor-pointer"
                    >
                      Lihat Video
                    </Button>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              {/* Tambahkan SwiperSlide lainnya sesuai kebutuhan */}
            </Swiper>
          </Col>
        </Row>

        {/* Mix and Match */}
        <Row className="my-5 animate__animated animate__fadeInUp animate__delay-0.5s">
          <Col>
            <h2 className="text-center fw-bold">Mix and Match</h2>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>Unggah Foto Pakaian</Card.Title>
                <Card.Text>
                  Fitur untuk mengunggah foto pakaian yang dimiliki. Sistem akan
                  memberikan saran kombinasi pakaian berdasarkan warna dan gaya
                  untuk memaksimalkan penggunaan pakaian yang sudah dimiliki.
                </Card.Text>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formPhoto" className="mb-3">
                    <Form.Label>Foto Pakaian</Form.Label>
                    <Form.Control
                      type="file"
                      name="photo"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Nama Pakaian</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Masukkan nama pakaian"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formColor" className="mb-3">
                    <Form.Label>Warna Pakaian</Form.Label>
                    <Form.Control
                      type="text"
                      name="color"
                      placeholder="Masukkan warna pakaian"
                      value={formData.color}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formStyle" className="mb-3">
                    <Form.Label>Gaya Pakaian</Form.Label>
                    <Form.Control
                      type="text"
                      name="style"
                      placeholder="Masukkan gaya pakaian"
                      value={formData.style}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formDescription" className="mb-3">
                    <Form.Label>Deskripsi Pakaian</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="description"
                      placeholder="Masukkan deskripsi pakaian"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Unggah Foto
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Video Pendek (Microlearning) */}
        <Row className="my-5 animate__animated animate__fadeInUp animate__delay-0.5s">
          <Col>
            <h2 className="text-center fw-bold">
              Video Pendek (Microlearning)
            </h2>
            <Row>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Wasted: Fast fashion is fueling our ecological crisis</Card.Title>
                    <video controls className="video-responsive">
                      <source src={Vid1} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Can Fashion Be Sustainable? </Card.Title>
                    <video controls className="video-responsive">
                      <source src={Vid2} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Recycling fashion: The town turning waste into clothes</Card.Title>
                    <video controls className="video-responsive">
                      <source src={Vid3} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Fesyen Ramah Lingkungan</Card.Title>
                    <video controls className="video-responsive">
                      <source src={Vid4} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title>Youths Support Sustainable Fashion                    </Card.Title>
                    <video controls className="video-responsive">
                      <source src={Vid5} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Tantangan Edukasi */}
        <Row className="my-5 animate__animated animate__fadeInUp animate__delay-0.5s">
          <Col>
            <h2 className="text-center fw-bold">Tantangan Edukasi</h2>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>Mini Challenge Berbasis Kuis</Card.Title>
                <Card.Text>
                  Pengguna yang menyelesaikan kuis mendapatkan poin yang dapat
                  digunakan di fitur tukar-menukar.
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="primary"
                    onClick={() => navigate("/tantangan-edukasi")}
                  >
                    Mulai Kuis
                  </Button>
                  <span className="fw-bold">🪙 Poin Saya: {userPoints}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sumber Terbuka */}
        <Row className="my-5 animate__animated animate__fadeInUp animate__delay-0.5s">
          <Col>
            <h2 className="text-center fw-bold">Sumber Terbuka</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Daftar Link Referensi</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <a
                        href="https://www.routledge.com/Sustainable-Fashion-and-Textiles-Design-Journeys/Fletcher/p/book/9781844076877"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Fletcher, K. (2008). Sustainable Fashion and Textiles:
                        Design Journeys. Earthscan.
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.amazon.com/Eco-Chic-Fashion-Paradox-Sandy-Black/dp/1845410148"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Black, S. (2011). Eco-Chic: The Fashion Paradox. Black
                        Dog Publishing.
                      </a>
                    </li>
                    {/* Tambahkan link lainnya sesuai kebutuhan */}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>E-Book Gratis</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        E-Book 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        E-Book 2
                      </a>
                    </li>
                    {/* Tambahkan e-book lainnya sesuai kebutuhan */}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Komunitas Global</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <a
                        href="https://www.fashionrevolution.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Fashion Revolution
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.sustainablefashionforum.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sustainable Fashion Forum
                      </a>
                    </li>
                    {/* Tambahkan komunitas lainnya sesuai kebutuhan */}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EduPage;
