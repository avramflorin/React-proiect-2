//  import React from "react";

import Button from 'react-bootstrap/Button';

import Layout from "../Components/Layout";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <Layout>
      <Header />
      <div>
        <h1>Continut Home</h1>
        <div class="alert alert-danger" role="alert">
          <strong>Oh snap!</strong>
          <a href="#!" class="alert-link">Change a few things up</a>
          and try submitting again.
        </div>

        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-info">Primary</button>

        <Button variant="primary" >
          Launch demo modal
        </Button>
        <Button variant="info" >
          Launch demo modal
        </Button>

        
        
        
      </div>
      <Footer />
    </Layout>
  )
}

export default Home;