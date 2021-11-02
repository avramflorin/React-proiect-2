import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import logo from '../../assets/logo/logo.png';
import './Header.css';
import {ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import {ReactComponent as Favorite } from '../../assets/icons/favorite.svg';

import {signOutAction} from '../../redux/User/Actions';


const Header = (props) => {
  //console.log('./components/Header.jsx', props);

  return (
    <header className="mb-2 border-bottom">
      <div className="container-fluid container-min-max-width d-flex justify-content-between align-items-center">
        <Link to="/" className="my-2"><img src={logo} alt="Magazinul meu" className="logo" /></Link>
        <div>
          { props.user
            ? <p>Salut, {props.user.displayName}!</p>
            : null
          }
          <div className="d-flex justify-content-end">
            {/* Daca avem user, afisam textul "delogare", altfel altfel afisam "logare" */}
            { props.user
              // La click pe buton se va apela metoda handleSignOut.
              ? <p className="logout h5" onClick={() => props.signOutWithDispatch()}>Delogare</p>
              : <Link to="/login" className="h5">Logare</Link>
            }
            <Link to="/cart"><ShoppingCart className="ml-2"/></Link>
            <p className="ml-1 mb-0">{ props.numberOfProducts }</p>
            <Link to="/favorites"><Favorite className="ml-2"/></Link>
            <p className="ml-1 mb-0">{ props.numberOfFavorites }</p>
          </div>
        </div>
      </div>
    </header>
      
  )
}

function mapStateToProps(state) {
  let numberOfProducts = 0;
  
  state.cart.products.map(value=> numberOfProducts += value.cantitate);
  
  return {
    user: state.user.data,
    numberOfProducts,
    numberOfFavorites: Object.keys(state.favorites).length
  }
}

// Avem nevoie de actiunea logoutUser, importata din redux/actions, care va face logarea efectiva a userului.
function mapDispatchToProps(dispatch) {
  return {
      signOutWithDispatch: () => dispatch(signOutAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);