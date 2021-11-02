import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './ProductItem.css';

import addToCart from '../../redux/Cart/Actions';
import addToFavorites from '../../redux/Favorites/Actions';

import {ReactComponent as Favorite } from '../../assets/icons/favorite.svg';
import {ReactComponent as FavoriteEmpty } from '../../assets/icons/favorite_empty.svg';

const ProductItem = (props) => {
  const {id, name, description, image, price, currency} = props.product;
  
  // console.log('multe', id, props);
  

  return (
    <div className=" product-item col-12 col-md-6 col-xl-4 align-items-center d-flex flex-column">
        <Link to={`/product/${id}`}>
          <img src={image} alt="productPhoto" className="mb-2 w-100"/>
          <h3 className="mb-1 h5">{ name }</h3>
        </Link>
        <p className="text-center p-2 btn-success">{ price + " " + currency }</p>
        <p className="mb-1">{ description }</p>
        <button 
          className="btn btn-outline-dark mb-4"
          onClick={
            ()=> {
              props.propAddToCart({
                product: {
                  id,
                  name,
                  price,
                  currency,
                  image
                }
              });
            }
          }
        >
          {props.cartIds.includes(id) ? 'Adauga +1' : 'Adauga in cos'}
        </button>

        <button 
          className="btn btn-outline-dark mb-4"
          onClick={
            ()=> {
              props.propAddToFavorites({
                id,
                name,
                price,
                currency,
                image
              });
            }
          }
        >
          {props.favorites.[id] ? <Favorite/> : <FavoriteEmpty/>}
        </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
    cartIds: state.cart.products.map(value=>value.id)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    propAddToCart: (payload) => dispatch(addToCart(payload)),
    propAddToFavorites: (payload) => dispatch(addToFavorites(payload))
  };
  // return {
  //   propAddToCart: (payload) => {
  //     dispatch({
  //       type: 'post',
  //       payload
  //     })
  //   }
  // }
}

//  export default ProductItem;
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);