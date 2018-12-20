import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { addSauce, reorderSauces } from '../lib/ducks/hotSauce.js';

import Card from './Card.js';
import AddSauce from './AddSauce.js';

class Grid extends Component {

  sortSauces = (e) => {
    this.props.reorderSauces(e.target.value);
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