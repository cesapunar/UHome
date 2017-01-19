import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Home, Main } from 'components'
import { Provider } from 'react-redux'

export default function Root({history, store}) {
	return (
    	<Provider store={store}>
    		<Router history={history}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home}/>
                </Route>
            </Router>
        </Provider>
    )
}

Root.propTypes = {
  	history: PropTypes.object.isRequired,
  	store: PropTypes.object.isRequired
}