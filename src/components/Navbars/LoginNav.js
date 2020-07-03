import React from "react";
import {
  FormControl,
  Form,
  Button,
  Navbar,
  InputGroup,
  Nav,
} from "react-bootstrap";
import UkFlag from "../../images/uk.png";

import "./LoginNav.css";

const LoginNav = () => {
  return (
    <Navbar
      className=" justify-content-between login-nav"
      style={{ backgroundColor: "#333333" }}
    >
      <Form inline>
        <InputGroup style={{ width: "271px" }}>
          <FormControl
            style={{
              padding: "13px",
              borderRadius: "2px",
              fontFamily: "FontAwesome",
            }}
            className="text-css"
            placeholder="&#xf007; Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <FormControl
            style={{
              padding: "13px",
              borderRadius: "2px",
              fontFamily: "FontAwesome",
            }}
            className="text-css"
            placeholder="&#xf084; Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <a
          href="#help"
          style={{
            display: "block",
            width: "27px",
            height: "26px",
            border: "1px solid black",
            color: "white",
            margin: "0 10px",
            textAlign: "center",
          }}
        >
          ?
        </a>
        <Button
          style={{
            width: "81px",
            height: "26px",
            marginLeft: "5px",
            padding: "5px",
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "2px",
            fontWeight: "bold",
            paddingLeft: "13px",
          }}
          variant="warning"
        >
          LOGIN
        </Button>
        <Button
          style={{
            width: "107px",
            height: "26px",
            marginLeft: "10px",
            display: "inline-flex",
            alignItems: "center",
            borderRadius: "2px",
            fontWeight: "bold",
          }}
          variant="warning"
        >
          REGISTER
        </Button>
      </Form>

      <Nav className="mr-auto"></Nav>
      <div style={{}}>
        <i className="fa fa-facebook-square facebook-icon"></i>
        <i className="fa fa-instagram instagram-icon"></i>
      </div>
      <img src={UkFlag} alt="UK" />
      <select
        name="Eng"
        id="Eng"
        style={{
          backgroundColor: "transparent",
          color: "#AEAFB4",
          border: "none",
          outline: "none",
          display: "inline-block",
        }}
      >
        <option value="uk">Eng</option>
      </select>
    </Navbar>
  );
};

export default LoginNav;
