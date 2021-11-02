import React from 'react';
import Layout from '../../components/Layout/Layout';
import ProductList from '../../components/ProductList/ProductList';
import BaseListSideBar from '../../components/BaseListSideBar/BaseListSideBar';

import products from '../../utils/products.json';
import './Category.css';

let filtersNo = 3;  // in cate filtre se impart

class Category extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      category: [],
      pricesFilter: [],
      refresh: false  // folosit la componentDidUpdate
    };

    
    this.handleFilterPrice = this.handleFilterPrice.bind(this);
  }

  componentDidMount() {
    let category = products[this.props.match.params.categoryLabel];
    

    // doar la componentDidMount, aflam valoarea minima si valoarea maxima, sa facem 3 filtre
    let minPrice = null;
    let maxPrice = null;
    let pricesFilter = [];
    category.items.forEach(value=>{
      maxPrice = (value.price > maxPrice || !maxPrice) ? value.price : maxPrice;
      minPrice = (value.price < minPrice || !minPrice) ? value.price : minPrice;
    });

    // schimbare de plan; daca nu sunt produse cate filtre sunt?
    filtersNo = Math.min(filtersNo, category.items.length);

    let interval = (maxPrice-minPrice)/filtersNo;

    for(let i=1; i<=filtersNo; i++) {
      let val = Math.min(Math.ceil(minPrice+interval), maxPrice);
      pricesFilter.push({min: minPrice, max: val});
      minPrice = val+1;
    }

    this.setState({
      category,
      categoryItems: category.items,
      pricesFilter
    });
  }

  componentDidUpdate() {
    if(this.state.refresh === true) {
      // noua lista filtrata; 
      let categoryItems = [];
      
      /**
       * verificam daca exista vreun filtru selectat;
       * nu ne luam dupa faptul daca s-au gasit sau nu rezultate; pot fi filtre bifate si totusi sa nu se gaseasca rezultate
       */
      let activeFilters = this.state.pricesFilter.some(filterRow=>filterRow.checked === true);

      categoryItems = this.state.category.items.filter(value=>{
        // initial itemul curent nu se returneaza
        let found = false; 
        // se parseaza filtrele de pret
        this.state.pricesFilter.some(filterRow=>{
          // aceasta este conditia daca un item merita afisat
          found = 
            filterRow.checked === true && 
            filterRow.min <= value.price &&
            filterRow.max >= value.price;
          // daca merita afisat, se iese din bucla, nu merita/trebuie sa se mai itereze (ca poate dupa ultima conditie este false)
          return found === true;
        });

        // in functie de ce s-a gasit ca si conditie, se paseaza sau nu
        return found;
      });

      //console.log(activeFilters);
      this.setState({
        categoryItems: activeFilters ? categoryItems : this.state.category.items, 
        refresh: false
      });
    }
  }

  handleFilterPrice(e, id) {
    let row = this.state.pricesFilter; 
    row[id].checked = e.target.checked;

    this.setState({pricesFilter: row, refresh: true});
    //console.log(e, e.target.checked, id, row);
  } 

  render() {
    return (
      <Layout>
        <div className="container-fluid container-min-max-width d-flex">
          <div className="mr-4 left-menu">
            <BaseListSideBar pricesFilter={this.state.pricesFilter} handleFilterPrice={this.handleFilterPrice} />
          </div>
          <div className="flex-grow-1 ">
            <p className="h4">{this.state.category.name}</p>
            <ProductList products={this.state.categoryItems} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Category;