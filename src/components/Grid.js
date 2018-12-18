import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { addSauce, reorderSauces } from '../lib/ducks/hotSauce.js';

import Card from './Card.js';
import AddSauce from './AddSauce.js';

class Grid extends Component {

  sortSauces = (e) => {
    let {hotSauces, reorderSauces} = this.props;
    let hotSaucesCopy = [...hotSauces];
    switch(e.target.value){
      case 'az': return reorderSauces(hotSaucesCopy.sort((a,b) => a.title < b.title ? -1 : 1));
      case 'za': return reorderSauces(hotSaucesCopy.sort((a,b) => a.title > b.title ? -1 : 1));
      case 'newest': return reorderSauces(hotSaucesCopy.sort((a,b) => b.id - a.id));
      case 'oldest': return reorderSauces(hotSaucesCopy.sort((a,b) => a.id - b.id));
      default: return reorderSauces(hotSaucesCopy.sort((a,b) => a.id - b.id));
    }
  }

  render() {
    let { hotSauces } = this.props;
    return (
      <Fragment>
        <h1 className='Grid-title'>Hot Sauce List</h1>
        <div className="Grid-sort-container" >
          <select onChange={this.sortSauces}>
            <option value="0">Sort By</option>
            <option value="az">Name (ascending)</option>
            <option value="za">Name (descending)</option>
            <option value="newest">Date Added (newest)</option>
            <option value="oldest">Date Added (oldest)</option>
          </select>
        </div> 
        <div className='Grid-container'>
          {hotSauces.map(hotSauce => <Card key={hotSauce.id} hotSauce={hotSauce} />)}
          <AddSauce />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({ hotSauces: state.hotSauceState });
const mapDispatchToProps = { addSauce, reorderSauces };

export default connect(mapStateToProps, mapDispatchToProps)(Grid);