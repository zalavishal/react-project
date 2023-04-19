import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Headerfile = () => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const MenunObject = {"/": "Login","/registration":"Registration" }
  let content = Object.entries(MenunObject).map((data, key) => {
    return <MDBNavbarItem key={key}>
      <Link className='nav-link' to={data[0]}>{data[1]}</Link>
    </MDBNavbarItem>
  })
  return (
    <>
      <MDBNavbar expand='lg' dark style={{backgroundColor: "#01163d"}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/login'>Navbar</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              {content}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
};

export default Headerfile;