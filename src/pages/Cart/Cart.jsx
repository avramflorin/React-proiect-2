import Layout from '../../components/Layout/Layout';
import {connect} from 'react-redux';

import {ReactComponent as Delete} from '../../assets/icons/trash.svg';
import './Cart.css';

import cartActions from '../../redux/Cart/Constants'; 

const Cart = function(props) {
  let quantOptions = [1,2,3,4,5,6,7,8,9,10];
  
  function handleChangeQuant(e, id) {
    props.editQuant({
      id,
      cantitate: e.target.value
    });
  }

  function handleDeleteItem(id) {
    props.deleteItem({
      id
    });
  }

  return (
    <Layout>
      
      <div className="cart container-fluid container-min-max-width">
        <div className="row">
          <h3 className="h4">Produse aflate in cos</h3>
        </div>
        {
          props.cart.products.length===0 
          ? <h3 className="h6">Nu exista produse in cos</h3>
          : props.cart.products.map(value=>{
            return (
              <div className="row my-4  justify-content-center" key={value.id}>
                <div className="border text-lg-left text-center col-lg-9 col-md align-self-center">
                  <img src={value.image} alt={value.name} className="w-25 mr-2" />
                  {value.name}
                </div>
                <div className="text-center col-md align-self-center">{value.price} {value.currency}</div>
                <div className="text-center col-md align-self-center">
                  <select className="custom-select custom-select-sm w-100" value={value.cantitate} onChange={(e)=>handleChangeQuant(e, value.id)}>
                    {
                      quantOptions.map(opt=><option key={opt} value={opt}>{opt}</option>)
                    }
                  </select>
                </div>
                <div className="text-center col-md align-self-center">
                  <Delete role="button"  onClick={()=>handleDeleteItem(value.id)} />
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
    editQuant: (payload) => dispatch({
      type: cartActions.patch,
      payload
    }),
    deleteItem: (payload) => dispatch({
      type: cartActions.delete,
      payload
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);