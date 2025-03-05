// import React, { useState } from 'react';
// import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import '../App.css'; // Import the CSS file

// const NavigationBar = () => {
//   const [resumeOpen, setResumeOpen] = useState(false);
//   const [futureTechOpen, setFutureTechOpen] = useState(false);
//   const [oracleOpen, setOracleOpen] = useState(false);

//   return (
//     <Navbar className="custom-navbar" expand="lg" sticky="top">
//       <Container>
//         {/* Move Logo to the Left */}
//         <Navbar.Brand href="#home" className="navbar-brand instil-logo">
//         Instil-IT
//         <span className="blue-wave">~</span>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//   <Nav className="ms-4 me-auto">  {/* Added 'ms-4' for spacing */}
//     <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
//     <NavDropdown
//       title="Resume Analysis"
//       id="resume-analysis-dropdown"
//       show={resumeOpen}
//       onMouseEnter={() => setResumeOpen(true)}
//       onMouseLeave={() => setResumeOpen(false)}
//       className="nav-dropdown"
//     >
//       <NavDropdown.Item href="#upload-resume">Upload Resume</NavDropdown.Item>
//       <NavDropdown.Item href="#sample-reports">Sample Reports</NavDropdown.Item>
//     </NavDropdown>

//     <NavDropdown
//       title="FutureTech Training"
//       id="futuretech-training-dropdown"
//       show={futureTechOpen}
//       onMouseEnter={() => setFutureTechOpen(true)}
//       onMouseLeave={() => setFutureTechOpen(false)}
//       className="nav-dropdown"
//     >
//       <NavDropdown.Item href="#ai-ml">AI & ML</NavDropdown.Item>
//       <NavDropdown.Item href="#blockchain">Blockchain</NavDropdown.Item>
//       <NavDropdown.Item href="#iot">IoT</NavDropdown.Item>
//     </NavDropdown>

//     <NavDropdown
//       title="Oracle Applications Product"
//       id="oracle-applications-dropdown"
//       show={oracleOpen}
//       onMouseEnter={() => setOracleOpen(true)}
//       onMouseLeave={() => setOracleOpen(false)}
//       className="nav-dropdown"
//     >
//       <NavDropdown.Item href="#product-overview">Product Overview</NavDropdown.Item>
//       <NavDropdown.Item href="#pricing">Pricing</NavDropdown.Item>
//     </NavDropdown>
//   </Nav>

//   {/* Login button remains on the right */}
//   <Nav className="ms-auto">
//     <Button href="#login" className="login-btn">Login</Button>
//   </Nav>
// </Navbar.Collapse>

//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;

import React, { useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../App.css'; // Import the CSS file

const NavigationBar = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [futureTechOpen, setFutureTechOpen] = useState(false);
  const [oracleOpen, setOracleOpen] = useState(false);

  return (
    <Navbar className="custom-navbar" expand="lg" sticky="top">
      <Container>
        {/* Logo Image */}
        <Navbar.Brand href="#home" className="navbar-brand">
  <img src="/images/logo.jpg" alt="Instil-IT Logo" className="navbar-logo" />
</Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-4 me-auto">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <NavDropdown
              title="Resume Analysis"
              id="resume-analysis-dropdown"
              show={resumeOpen}
              onMouseEnter={() => setResumeOpen(true)}
              onMouseLeave={() => setResumeOpen(false)}
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#upload-resume">Upload Resume</NavDropdown.Item>
              <NavDropdown.Item href="#sample-reports">Sample Reports</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="FutureTech Training"
              id="futuretech-training-dropdown"
              show={futureTechOpen}
              onMouseEnter={() => setFutureTechOpen(true)}
              onMouseLeave={() => setFutureTechOpen(false)}
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#ai-ml">AI & ML</NavDropdown.Item>
              <NavDropdown.Item href="#blockchain">Blockchain</NavDropdown.Item>
              <NavDropdown.Item href="#iot">IoT</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Products"
              id="oracle-applications-dropdown"
              show={oracleOpen}
              onMouseEnter={() => setOracleOpen(true)}
              onMouseLeave={() => setOracleOpen(false)}
              className="nav-dropdown"
            >
              <NavDropdown.Item href="#product-overview">Product Overview</NavDropdown.Item>
              <NavDropdown.Item href="#pricing">Pricing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact-us" className="nav-link">Contact Us</Nav.Link>

          </Nav>

          <Nav className="ms-auto">
            <Button href="#login" className="login-btn">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
