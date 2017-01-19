import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from 'actions'

function mapStateToProps(state) {
  	return { firebase: state.firebase }
}

function mapDispachToProps(dispatch) {
  	return bindActionCreators(actions, dispatch)
}

class App extends Component {
  	render() {
    	return (
      		<div>{this.props.children}</div>
    	)
  	}	
}

const Main = connect(mapStateToProps, mapDispachToProps)(App)

export default Main