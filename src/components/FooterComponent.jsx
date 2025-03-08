
import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container> 
        {/* Baris pertama tiga kolomm baris kedua 1 kolom (copyright) */}
        <Row className ="d-flex justify-content-between"> 
          <Col lg="5">
          <h3 className="fw-bold">
            {/* JuduL */} ModelMorphosis ♻️
          </h3>
          <p className="desc text-justify-inter-word"> ModelMorphosis adalah platform digital yang bertujuan mendukung fashion berkelanjutan melalui sistem tukar-menukar dan jual-beli pakaian preloved, serta tantangan pengurangan pembelian pakaian baru. Website ini dibuat dengan konsep statis tanpa backend, menggunakan teknologi berbasis client-side.</p>
          <div className="no mb-1 mt-4"> 
            <Link className="text-decoration-none">
            <i className= "fa-brands fa-whatsapp"></i>
            <p className="m-0"> +62 081-123-789</p>
            </Link>
          </div>
          <div className="mail">
            <Link className="text-decoration-none">
            <i className='fa-regular fa-envelope'></i>
            <p className="m-0">agripalukas@gmail.com</p>
            </Link>
          </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold"> Menu </h5>
          <Link to="">Home</Link>
          <Link to="kelas">Tukar & Jual-Beli</Link>
          <Link to="EduPage">Edukasi</Link>
          <Link to="faq">FAQ</Link>
          <Link to="syarat-ketentuan">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5"> 
          <h5 className="fw-bold"> Cari info menarik lainnya ! </h5>
          <div className="subscribe">
            <input type="text" placeholder="Subscribe.." />
            <button className="btn btn-danger rounded-end rounded-0"> Submit </button>
          </div>
          <div className="social mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          </Col>
        </Row>

        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright 2025 by <span className="fw-bold">ModelMorphosis</span>. All Right Reserved</p>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default FooterComponent