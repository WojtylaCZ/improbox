import { Navbar, Container } from "react-bootstrap";
// import { SelectLocaleDropdown } from "./select-locale-dropdown";

export const HeaderBar = () => {
  return (
    <>
      <style type="text/css">
        {`
        .navbar-custom {
          background-color: #000000;
        }
        `}
      </style>

      <Navbar variant="custom">
        <Container
          style={{
            maxWidth: "1080px",
            width: "100%",
          }}
        >
          {/* <Navbar.Brand> */}
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <h3
              style={{
                fontFamily: "Jockey One",
                color: "#dd2822",
                fontSize: "64px",
                margin: "0px",
              }}
            >
              IMPROBOX.CZ
            </h3>
          </div>
          {/* </Navbar.Brand> */}

          {/* <SelectLocaleDropdown /> */}
        </Container>
      </Navbar>
    </>
  );
};
