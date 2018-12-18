import React, { Component } from 'react';
import {connect} from 'react-redux';

class SauceForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.hotSauce && this.props.hotSauce.title || '',
      subtitle: this.props.hotSauce && this.props.hotSauce.subtitle || '',
      imageURL: this.props.hotSauce && this.props.hotSauce.imageURL || '',
      description: this.props.hotSauce && this.props.hotSauce.description || '',
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submit = (e) => {
    e.preventDefault();
    let newSauce = { ...this.state };
    newSauce.id = this.props.hotSauce ? this.props.hotSauce.id : this.props.hotSauces.length;
    this.props.addSauce(newSauce);
    this.setState({
      title: '',
      subtitle: '',
      imageURL: '',
      description: '',
    });
    this.props.toggleForm();
  }
  render() {
    return (
      <div className='AddSauce-form-container' id='form-container' onClick={this.props.closeForm}>
        <form className={this.props.slideForm ? 'AddSauce-form' : 'AddSauce-form-hide'}>
          <label>
            Name:
            <input type="text" name='title' value={this.state.title} onChange={this.onChange} />
          </label>
          <label>
            Subtitle:
            <input type="text" name='subtitle' value={this.state.subtitle} onChange={this.onChange} />
          </label>
          <label>
            Image link:
            <input type="text" name='imageURL' value={this.state.imageURL} onChange={this.onChange} />
          </label>
          <label className='AddSauce-textarea-container'>
            Full Description:
            <textarea name="description" cols="30" rows="10" value={this.state.description} onChange={this.onChange}  ></textarea>
          </label>
          <button onClick={this.submit} className='AddSauce-submit-button'>submit</button>
          <button onClick={this.props.toggleForm} className='AddSauce-cancel-button'>cancel</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ hotSauces: state.hotSauceState });

export default connect(mapStateToProps)(SauceForm);