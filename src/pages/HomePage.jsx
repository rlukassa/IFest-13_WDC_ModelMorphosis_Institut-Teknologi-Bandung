import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import {
  kelasTerbaru,
  dataSwiper,
  Video1,
  Video2,
  Video3,
} from "../data/index";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FaQComponent from "../components/FaQComponent";

const HomePage = () => {
  let navigate = useNavigate();

  const handleVideoEnded = (e) => {
    const currentVideo = e.target;
    setTimeout(() => {
      if (currentVideo.src.includes(Video1)) {
        currentVideo.src = Video2;
        currentVideo.play();
      } else if (currentVideo.src.includes(Video2)) {
        currentVideo.src = Video3;
        currentVideo.play();
      } else {
        currentVideo.src = Video1;
        currentVideo.play();
      }
    }, 10000); // 10 seconds delay
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <video controls onEnded={handleVideoEnded}>
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls onEnded={handleVideoEnded}>
          <source src={Video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay onEnded={handleVideoEnded}>
          <source src={Video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Container>
          <Row className="header-box d-flex align-items-center pt-lg-5">
            <Col lg="6">
              <h1
                className="mb-4 animate__animated animate__fadeInUp animate__delay-0.5s"
                style={{ color: "rgb(218, 203, 119)" }}
              >
                Yuk ! <br /> <span>Jelajahi, Berkreasi, dan Bertransformasi</span> <br /> bersama
                kami, ModelMorphosis !
              </h1>
              <p
                className="mb-4 animate__animated animate__fadeInUp animate__delay-0.8s"
                style={{ color: "rgb(218, 203, 119)" }}
              >
                ModelMorphosis adalah platform fashion berkelanjutan tempat anda dapat menukar, menjual, dan mengeksplorasi gaya tanpa merusak lingkungan. Saatnya bertransformasi dengan fashion yang lebih bijak, lebih kreatif, lebih hemat, dan lebih peduli pada bumi !
              </p>
              <button
                className="btn btn-success btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/kelas")}
              >
                {" "}
                Lihat Galeri{" "}
              </button>
              <button className="btn btn-outline-success btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate("/EduPage")}>
                {" "}
                Lihat Edukasi{" "}
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp overflow-hidden"
              />
            </Col>
          </Row>
        </Container>
      </header>

      <div className="tukar-jual-beli w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">
                {" "}
                Tukar dan Jual-Beli Pakaian{" "}
              </h1>
              <p className="text-center">
                Platform untuk mendukung fashion berkelanjutan melalui sistem
                tukar-menukar dan jual-beli pakaian preloved.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2 className="text-center fw-bold mt-4 mb-0">
                {" "}
                Pendaftaran Pakaian{" "}
              </h2>
              <Form className="p-3">
                <Form.Group controlId="formNamaBarang" className="p-3">
                  <Form.Label>Nama / Jenis Pakaian</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Nama / Jenis Pakaian"
                    className="p-3"
                  />
                </Form.Group>
                <Form.Group controlId="formKondisi" className="p-3">
                  <Form.Label>Kondisi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan kondisi barang"
                    className="p-3"
                  />
                </Form.Group>
                <Form.Group controlId="formDeskripsi" className="p-3">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Masukkan deskripsi barang"
                    className="p-2"
                  />
                </Form.Group>
                <Form.Group controlId="formFoto" className="p-3">
                  <Form.Label>Foto</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Form.Group controlId="formEstimasiHarga" className="p-3">
                  <Form.Label>Estimasi Harga</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan estimasi harga"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="p-3">
                  Daftarkan Pakaian
                </Button>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col>
              <h2 className="text-center fw-bold p-4"> Galeri Pakaian </h2>
              <div className="text-center my-4">
                <h4 className="fw-bold">Poin saya : 0🪙</h4>
              </div>
            </Col>
          </Row>

          <Row>
            {kelasTerbaru.map((kelas) => (
              <Col
                key={kelas.id}
                lg={4}
                md={6}
                sm={12}
                className="shadow rounded h-100 w-40 mb-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={kelas.delay}
              >
                <img
                  src={kelas.image}
                  alt=""
                  className="img-fluid p-4"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <div className="item-details mb-2 px-3">
                  <h5 className="p-3 fw-bold">{kelas.title}</h5>
                  <p>Kondisi: {kelas.condition}</p>
                  <p>{kelas.description}</p>
                  <p className="text-primary fw-bold">Harga: {kelas.price}</p>
                  <p>Poin Tukar: {kelas.points}🪙</p>
                  <Button variant="danger" className="rounded-1">
                    Tukar
                  </Button>
                  <Button variant="success" className="rounded-1 ms-2 m-2">
                    Beli
                  </Button>
                </div>
              </Col>
            ))}
          </Row>

          <Row>
            <Col className="text-center mt-2">
              <button
                className="btn btn-success rounded-5 p-3"
                onClick={() => navigate("/kelas")}
              >
                {" "}
                Lihat Semua Barang
                <i className="fa-solid fa-chevron-right ms-3"> </i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold w-5"> Testimoni </h1>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => (
                <SwiperSlide key={data.id} className="shadow">
                  <p className="desc"> {data.desc} </p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1"> {data.name} </h5>
                      <p className="m-0 fw-bold"> {data.skill} </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </div>
      <FaQComponent />
    </div>
  );
};

export default HomePage;
