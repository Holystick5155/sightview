import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import { Col, Container, Row, Spinner, ListGroup } from "react-bootstrap";

import "./Home.css";
import RightSide from "../../components/RightSide/RightSide";
import Main from "../../components/main/homes/Main";
import Discover from "../../components/discover/Discover";
import Footer from "../../components/footer/Footer";


const Home = () => {

  return (
    <>
      <div className="Home">
          <Main />
          <Discover />
      </div>
      <Footer />
    </>
  );
};

export default Home;
