import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Details from './Details.js';

class Routes extends Component {
  render() {
    let {hotSauces} = this.props;
    return (
      hotSauces.map(hotSauce => {
        let title = hotSauce.title.replace(/[^A-Za-z]/g, '');
        return (
          <Route
            key={hotSauce.id}
            path={`/hot_sauce/${title}`}
            component={() => <Details hotSauce={hotSauce} />}
          />);
      })
    );
  }
}

const mapStateToProps = (state)=> ({hotSauces: state.hotSauceState});

export default withRouter(connect(mapStateToProps)(Routes));