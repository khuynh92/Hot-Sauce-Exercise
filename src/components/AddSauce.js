import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { addSauce } from '../lib/ducks/hotSauce.js';
import SauceForm from './SauceForm.js';

class AddSauce extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      slideForm: false,
    };
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
    let { showForm } = this.state;
    return (
      <Fragment>
        <div className='AddSauce-button'>
          <p onClick={this.toggleForm}>+</p>
        </div>
        {
          showForm &&
          <SauceForm 
            addSauce={this.props.addSauce} 
            slideForm={this.state.slideForm} 
            closeForm={this.closeForm} 
            toggleForm={this.toggleForm}
          />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ hotSauces: state.hotSauceState });
const mapDispatchToProps = { addSauce };

export default connect(mapStateToProps, mapDispatchToProps)(AddSauce);