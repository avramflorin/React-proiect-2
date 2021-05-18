import React from 'react';

class BaseListSideBar extends React.Component {

  render() {
    return (
      <form onSubmit={(e)=>e.preventDefault()}>
        <p className="h5 text-center">Filtru pret</p>
        <ul className="list-group">
        {
          this.props.pricesFilter.map((value, key)=>{
            return (
              <li  className="list-group-item" key={'li_' + key}>
                <input type="checkbox" key={key} className="mr-2" 
                  onChange={(e)=>this.props.handleFilterPrice(e, key)} 
                />
                {value.min} - {value.max}
              </li>
            )
          })
        }
        </ul>
      </form>
    )
  }
}

export default BaseListSideBar;