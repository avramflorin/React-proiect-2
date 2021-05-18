import React from 'react';

import Layout from '../components/Layout';

import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

import Cookies from 'universal-cookie';


class TermsConditions extends React.Component {
  
  constructor() {
    super();

    this.state = {cookieModal: true};

  }

  /**
   * daca a fost de acord, nu mai afisam modala
   */
  componentDidMount() {
    this.cookies = new Cookies();
    if(this.cookies.get('cookie_ok') === '1') {
      this.setState({cookieModal: false});
    }
  }

  /**
   * inchide modala; daca este de acord, salvsam cookie
   * @param {*} cookieModal 
   * @param {*} ok 
   */
  handleCookieModal(cookieModal, ok=0) {
    this.setState({cookieModal});
    if(ok === 1) {
      this.cookies.set('cookie_ok', '1', {path: '/'});
    }
    console.log(ok);
  }

  /**
   * Nu mai este de acord; il stresam din nou
   */
  handleCookie() {
    this.cookies.remove('cookie_ok');
    this.setState({cookieModal: true});
  }

  render() {
    return (
      <Layout>
        <div className="container-fluid container-min-max-width">
          <p className="h4">
            Termeni si conditii
          </p>
          <p>
            Trebuie sa fii de acord cu noi ca sa scapi de aceasta fereastra enervanta!
          </p>
          <p>
            <Button variant="danger" onClick={()=>this.handleCookie()}>Nu mai esti de acord!</Button>
          </p>
          <Modal animation={false} show={this.state.cookieModal} onHide={() => this.handleCookieModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Accepta cookie-urile!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="m-2">
            <p>Fii de acord cu mine!</p>
            <p>Fii de acord cu mine!</p>
            <p>Fii de acord cu mine!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.handleCookieModal(false)}>Inchide</Button>
            <Button variant="success" onClick={()=>this.handleCookieModal(false,1)}>Sunt de acord</Button>
          </Modal.Footer>
        </Modal>

        </div>
      </Layout>
    )

  }
}


export default TermsConditions;
