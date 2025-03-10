import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { kelasTerbaru } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaQComponent from "../components/FaQComponent";

const KelasPage = () => {
  let navigate = useNavigate();

  return (
    <div className="kelas-page">
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
            <Col className="animate__animated animate__fadeInUp animate__delay-0.5s">
              <h2 className="text-center fw-bold mt-4 mb-0">
                {" "}
                Pendaftaran Pakaian{" "}
              </h2>
              <Form className="p-3 animate__animated animate__fadeInUp animate__delay-0.5s">
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

          <Row className="animate__animated animate__fadeInUp animate__delay-0.5s">
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
        </Container>
      </div>
      <FaQComponent />
    </div>
  );
};

export default KelasPage;
