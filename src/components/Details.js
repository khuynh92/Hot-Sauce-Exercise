import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
export default class Details extends Component {
  render() {
    let {hotSauce} = this.props;
    return (
      <Fragment>
        <div className='Details-grid-container'>
          <div className='Details-grid-title'>
            <div className='Details-back-button' >
              <Link to='/'>
                {`< BACK TO HOT SAUCE LIST`}
              </Link>
            </div>
            <p>{hotSauce.title}</p>
          </div>

          <div className='Details-grid-img'>
            <img src={hotSauce.imageURL} alt={`picture of ${hotSauce.title} hot sauce`}/>
          </div>

          <div className='Details-grid-description'>
            <p>{hotSauce.description}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}