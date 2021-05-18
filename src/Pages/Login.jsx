import React from 'react';
import { Link } from 'react-router-dom';
// importam componente noi
import Logo from '../assets/logo/logo.png';
import { ReactComponent as Google } from '../assets/icons/google.svg';
//import { ReactComponent as Facebook } from '../assets/icons/facebook.svg';
import './Login.css'

import {signInWithGooleAction} from '../redux/actions/user';

import { connect } from 'react-redux';
// Importam actiunea loginUser, care se va ocupa le loginul userului(request asincron)
//import { loginUser } from '../redux/actions/user';

// echivalen, sa nu duci props de react-router-dom
//  import { useHistory } from "react-router-dom";
//  import { signInWithGoogle } from '../apis/firebase';
//  let history = useHistory();

class Login extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    //this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
  }

  componentDidUpdate(prevProps) {
    if(this.props.userData !== prevProps.userData) {
      this.props.history.push('/');
    }

  }
  
  // handleFacebookLogin() {
  //   console.log("handleFacebookLogin", this.props.signInWithFacebook);

  //   const {signInWithFacebook, history} = this.props;
  //   signInWithFacebook();
  //   history.push('/');
    
  // }

  handleGoogleLogin() {
    this.props.signInWithGooleWithDispatch();
  }

  render() {
    //  console.log(this.props);
    return (
      <div className="login-page">
        <Link to='/'>
          <img src={Logo} alt="logo" className="mb-5"/>
        </Link>
        <h1 className="h4 mb-4">Choose your destiny</h1>
        {/* <button onClick={this.handleFacebookLogin} className="mb-4 btn btn-outline-dark d-flex align-items-center">
          <Facebook className="mr-4" />
          <span className="text-nowrap">Loghează-te cu Facebook</span>
        </button> */}
        <button onClick={this.handleGoogleLogin} className="btn btn-outline-dark d-flex align-items-center">
          <Google className="mr-4"/>
          <span className="text-nowrap">Loghează-te cu Google</span>
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      // ATENTIE FOARTE MARE CE LUATI DIN STORE! Daca ati fi luat ca valoare pentru user doar
      // state.user.data, atunci de fiecare data cand se modifica valoarea lui user, store-ul
      // nu se actualiza!! Tineti minte mecanismul de comunicare a componentelor cu store-ul:
      // cand store-ul se actualizeaza, se verifica componentele care sunt conectate la store si
      // iau prin mapStateToProps FIX campurile care sunt actualizate in store. In cazul de fata
      // se modifica valoarea lui state.user.data.user, iar pentru store este diferit de
      // state.user.data, intrucat el verifica modficarile SHALLOW intamplate(pe primul nivel).
      userData: state.user.data
  }
}

// Vom vrea la click pe buton sa apelam functia de signin cu Google, adica sa dispatch-uim actiunea
// loginUser catre store.
const mapDispatchToProps = (dispatch) => {
  return {
    signInWithGooleWithDispatch: () => dispatch(signInWithGooleAction())
  }
}

// conectam Loginul la store
export default connect(mapStateToProps, mapDispatchToProps)(Login);

//  export default Login
