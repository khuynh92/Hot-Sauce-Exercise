import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {removeSauce, addSauce, updateSauce} from '../lib/ducks/hotSauce.js';

import SauceForm from './SauceForm.js'; 

export class Card extends Component {

  constructor(props) {
    super(props);
    this.state ={
      showBtn: false,
      showForm: false,
      slideForm: false,
    };
  }

  mouseEnter = () => {
    this.setState({showBtn: true});
  }

  mouseExit = () => {
    this.setState({showBtn: false});
  }

  toggleForm = (e) => {
    this.setState({ showForm: !this.state.showForm });
    setTimeout(() => {
      this.setState({ slideForm: !this.state.slideForm });
    }, 50);
  }

  closeForm = (e) => {
    if (e.target.id === 'form-container') {
      this.setState({ showForm: false, slideForm: false });
    }
  }

  render() {
    let title = this.props.hotSauce.title.replace(/[^A-Za-z]/g, '');
    return (
      <Fragment>
        <div className='Card-grid-item' onMouseOver={this.mouseEnter} onMouseLeave={this.mouseExit}>

          <div className={this.state.showBtn ? 'Card-showEdit' : 'Card-hideEdit'} onClick={this.toggleForm}>
            <p>edit</p>
          </div>

          <div className={this.state.showBtn ? 'Card-showX' : 'Card-hideX'} onClick={() => this.props.removeSauce(this.props.hotSauce.id)}>
            <p>x</p>
          </div>

          <Link to={`/hot_sauce/${title}`}>
            <div className='Card-img-container'>
              <img className='Card-img' src={this.props.hotSauce.imageURL} alt={`picture of ${this.props.hotSauce.title} hot sauce`} />
            </div>
          </Link>

          <div className='Card-details'>
            <h4>{this.props.hotSauce.title}</h4>
            <p>{this.props.hotSauce.subtitle}</p>
          </div>
          
          <Link to={`/hot_sauce/${title}`} className='Card-more'>more...</Link>
        </div>

        {
          this.state.showForm &&
          <SauceForm
            hotSauce={this.props.hotSauce}
            addSauce={this.props.updateSauce} 
            slideForm={this.state.slideForm} 
            closeForm={this.closeForm} 
            toggleForm={this.toggleForm}
          />
        }
      </Fragment>
    );
  }
}

const mapDispatchToProps = {updateSauce, removeSauce};

export default connect(null, mapDispatchToProps)(Card);