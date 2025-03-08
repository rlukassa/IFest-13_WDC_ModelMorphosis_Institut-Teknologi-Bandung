// pakai vit, jadi pake jfx

// rafce, extension nya "dsznajder"

// React Bootstrap, 
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { navLinks } from '../data/index.js';
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false); 
  // changeColor adalah state yang akan digunakan untuk mengubah warna navbar
  // setChangeColor adalah fungsi yang akan digunakan untuk mengubah state changeColor
  const changeBackgroundColor = () => { // fungsi untuk mengubah warna navbar
    if (window.scrollY >= 10) { 
      setChangeColor(true); 
    } else { 
      setChangeColor(false); 
    }
  } // jadi window discroll kebawah ketika scrollY >= 10, maka warna navbar akan berubah, true tersimpan di changeColor


  // untuk menjalankan fungsi changeBackgroundColor ketika user melakukan scroll
  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });
  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>  
        <Container>
          <Navbar.Brand href="home" className="fs-3 fw-bold text-success">ModelMorphosis ♻️</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center"> {/* dari me ke mx agar ketengah */}
              {/* pakai api index.js */}
              { navLinks.map((link) => {
                return ( 
                  <div key={link.id} className="nav-link">
                    <NavLink to={link.path} className= {({ isActive, isPending }) => (isPending  ? "pending" : isActive ? "active text-success" : "text-success")} end> 
                      {link.text} </NavLink>
                  </div>
                )
              })}
            </Nav>

            {/* Button  */}
            <div className="text-center">
              <Button className="btn btn-outline-sm rounded-1"> Ikuti Kami! </Button>
              {/* jika dengan outline, maka hanya garis pinggir saja yang danger (mmerah) */}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;