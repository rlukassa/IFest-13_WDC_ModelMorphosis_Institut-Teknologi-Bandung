import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FaQComponent from "../components/FaQComponent";

const FaQPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="faq-page py-5">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col className="p-5 animate__animated animate__fadeInUp animate__delay-0.5s"> 
            <h1 className="text-center fw-bold">Formulir Pertanyaan</h1>
            <Form onSubmit={handleSubmit} className="p-3">
              <Form.Group controlId="formName" className="p-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama anda"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-3"
                  style={{ borderColor: "#DAAB77" }}
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="p-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan email anda"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3"
                  style={{ borderColor: "#DAAB77" }}
                />
              </Form.Group>
              <Form.Group controlId="formQuestion" className="p-3">
                <Form.Label>Pertanyaan</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Masukkan pertanyaan anda"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  className="p-2"
                  style={{ borderColor: "#DAAB77" }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="p-3"
                style={{ backgroundColor: "#DAAB77", borderColor: "#DAAB77" }}
              >
                Kirim
              </Button>
            </Form>
            <FaQComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaQPage;
