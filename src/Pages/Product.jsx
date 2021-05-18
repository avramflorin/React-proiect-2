import React from 'react';
import Layout from '../components/Layout';
import './Product.css';
import products from '../utils/products.json';

class Product extends React.Component {

  componentDidMount() {
    //console.log(products, Object.values(products));
    Object.values(products).forEach(value=>{
      value.items.find(row => {
        row.id === this.props.match.params.productId;
      });
      //console.log(value);
    });


  }

  render() {
    console.log(this.props);
    return (
    <Layout>
      Product: {this.props.match.params.productId}
    </Layout>
    )
  }
}

export default Product;