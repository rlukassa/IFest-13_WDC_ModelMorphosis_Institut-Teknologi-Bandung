import { Container, Row, Col, Accordion } from "react-bootstrap";

import { faq } from '../data/index'

const FaQComponent = () => {
  return (
    <div className="faq"> 
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold w-5"> Pertanyaan yang sering ditanyakan </h2>
          </Col>
        </Row>

        {/* panggil breakpoint dari react-bootstrap */}
        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-5">
           {/*merubah kolom di ukuran large keatas (992 keatas) menjadi 2 di row */}
          {faq.map((data) => {
            return (
              <Col key={data.id}> 
          <Accordion className="shadow-sm">
            <Accordion.Item eventKey={data.eventKey}>
            <Accordion.Header> {data.title} </Accordion.Header> 
            <Accordion.Body>  
            {data.desc}
            </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}



export default FaQComponent