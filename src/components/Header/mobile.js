import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import links from './links'
import * as S from './styled'

const Header = () => {
  const router = useRouter()
  
  const [data, setData] = useState('')
  
  const handleSearchClick = (q) => {
    if (q) {
      window.location = '/search?q=' + q
    }
  }

  const handleKeyPress = (event) => {
    // This is perfectly safe in react, it correctly detect the keys
    if(event.key == 'Enter') {
      handleSearchClick(data)
    }
   }
  
  const expand = 'md'

  return (
    <Navbar bg="none" expand={expand} className="mb-3 align-items-center justify-content-md-between py-3 mb-4">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center col-md-3 mb-md-0 text-dark text-decoration-none">
          <Image src={'/assets/icons/deploy-de-sexta-coursive.png'} alt="Minha foto de avatar" width={150} height={41} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
          <S.Hamburger className="hamburger" data-v-dd9d64f0="">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-label="toggle mobile menu" className="svg-inline--fa fa-bars fa-w-14 fa-2x" data-v-dd9d64f0="">
              <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" data-v-dd9d64f0="" className=""></path>
            </svg>
          </S.Hamburger>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <Image src={'/assets/icons/deploy-de-sexta-coursive.png'} alt="Minha foto de avatar" width={150} height={41} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-5">
              {links.map((link, i) => (
                <li key={i}>
                  <Nav.Link 
                    href={link.url}
                    className={router.pathname === link.url ? 'nav-link px-2 link-secondary' : 'nav-link px-2 link-dark'}
                  >
                    {link.label}
                  </Nav.Link>
                </li>
              ))}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Explorar..."
                className="me-2"
                aria-label="Search"
                onChange={(ev) => setData(ev.target.value)}
                onKeyDown={handleKeyPress}
              />
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Header
