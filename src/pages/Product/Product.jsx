import React from 'react';
import Layout from '../../components/Layout/Layout';
import './Product.css';
import products from '../../utils/products.json';

import { connect } from 'react-redux';

import addToCart from '../../redux/Cart/Actions';
import addToFavorites from '../../redux/Favorites/Actions';

import {ReactComponent as Favorite } from '../../assets/icons/favorite.svg';
import {ReactComponent as FavoriteEmpty } from '../../assets/icons/favorite_empty.svg';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      product: []
    };
  }

  componentDidMount() {
    let product = [];
    Object.values(products).forEach(value=>{
      if(product.length === 0) {
        product = value.items.filter(row => {
          return row.id === Number(this.props.match.params.productId)
        });
      }
    });
    
    this.setState({
      product: product[0]
    });
  }

  render() {
    const {product} = this.state;
    //  console.log(product, this.props);

    return (
    <Layout>
      <div className="product-page content-min-height container-fluid container-min-max-width">
          {/* Adaugam markup-ul pentru pagina de produs */}
          <h1 className="my-5 h2">{product.name}</h1>
          {/* Am aduagat clase pentru stilizarea pe mobile */}
          <div className="product-info d-flex">
              <div className="image-wrapper d-flex mr-5">
                  <img src={product.image} alt="Product presentation"/>
              </div>
              <div className="product-details">
                  <p className="h3 text-danger">{product.price} {product.currency}</p>
                  <button
                      className="btn btn-dark mb-4 font-weight-bold"
                      // La click pe buton, adaugam in cart-ul din store.
                      onClick={() => {
                          this.props.propAddToCart({
                              product: {
                                  id: product.id,
                                  name: product.name,
                                  price: product.price,
                                  currency: product.currency,
                                  image: product.image
                              }
                          })
                      }}
                  >
                      Adaugă în coș
                  </button>

                  <button 
                    className="btn btn-outline-dark mb-4 ml-4"
                    onClick={
                      ()=> {
                        this.props.propAddToFavorites({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          currency: product.currency,
                          image: product.image
                        });
                      }
                    }
                  >
                    {this.props.favorites.[product.id] ? <Favorite/> : <FavoriteEmpty/>}
                  </button>
                  
                  <p><span className="font-weight-bold">Marime</span>: {product.size}</p>
                  <p><span className="font-weight-bold">Culoare</span>: {product.colour}</p>
                  <p><span className="font-weight-bold">Material</span>: {product.material}</p>
                  <p><span className="font-weight-bold">Brand</span>: {product.brand}</p>
                  <p className="font-weight-bold mb-1">Descriere:</p>
                  <p>{product.description}</p>
              </div>
          </div>
      </div>
    </Layout>
    )
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

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  }
}

//export default Product;
export default connect(mapStateToProps, mapDispatchToProps)(Product);