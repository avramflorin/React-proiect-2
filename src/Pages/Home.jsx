import React from 'react';
import HomeCategory from '../components/HomeCategory';
import Layout from '../components/Layout';
import products from '../utils/products.json';

class Home extends React.Component {
  constructor () {
    super();

    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    // salvez cheile ca sa pot parsa object-ul
    const categories = Object.keys(products);
    
    // de observat categories ~ categories: categories (ES6)
    this.setState({categories});
  }

  render() {
    //console.log("Home.jsx", this.props);
    return (
      <Layout>
        <div className="container-fluid container-min-max-width">
          <div className="row">
            {this.state.categories.map((value, key)=>
              <HomeCategory 
                key={key}
                route={value}
                title={products[value].name}
                description={products[value].description}
                image={products[value].image}
              />
            )}
          </div>
        </div>
      </Layout>
    )
  }
}


export default Home;