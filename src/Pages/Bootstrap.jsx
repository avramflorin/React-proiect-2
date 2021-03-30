import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const Bootstrap = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  
  return (
  <Container className="p-3">
    <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>

    <form class="form-inline" onSubmit={(e)=>e.preventDefault()}>
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />

      <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
      <div class="input-group mb-2 mr-sm-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
      </div>

      <div class="form-check mb-2 mr-sm-2">
        <input class="form-check-input" type="checkbox" id="inlineFormCheck" />
        <label class="form-check-label" for="inlineFormCheck">
          Remember me
        </label>
      </div>

      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>


    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>
  </Container>
  );
}

export default Bootstrap;
