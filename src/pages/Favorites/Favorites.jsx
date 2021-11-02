import Layout from '../../components/Layout/Layout';
import {connect} from 'react-redux';

import {ReactComponent as Delete} from '../../assets/icons/trash.svg';
import './Favorites.css';

import addToFavorites from '../../redux/Favorites/Actions';

const Favorites = function(props) {

  
  return (
    <Layout>
      
      <div className="favorites container-fluid container-min-max-width">
        <div className="row">
          <h3 className="h4">Produse favorite</h3>
        </div>
        {
          Object.keys(props.favorites).length===0 
          ? <h3 className="h6">Nu exista produse favorite</h3>
          : Object.values(props.favorites).map(value=>{
            return (
              <div className="row my-4  justify-content-center" key={value.id}>
                <div className="border text-lg-left text-center col-lg-9 col-md align-self-center">
                  <img src={value.image} alt={value.name} className="w-25 mr-2" />
                  {value.name}
                </div>
                <div className="text-center col-md align-self-center">{value.price} {value.currency}</div>
                
                <div className="text-center col-md align-self-center">
                  <Delete role="button"  onClick={()=>{
                    props.propAddToFavorites({
                      id: value.id
                      // nu mai trimitem tot obiectul cu produs; trimitem ca stim sigur ca el deja exista deci va functiona ca o stergere
                      // value: product.name,
                      // value: product.price,
                      // value: product.currency,
                      // value: product.image
                    });
                  }} />
                </div>
              </div>
            )
          })
        }
        
      </div>
    </Layout>
  )
}

const mapStateToProps = function(state) {
  return state;
}

const mapDispatchToProps = function(dispatch) {
  return {
    propAddToFavorites: (payload) => dispatch(addToFavorites(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);