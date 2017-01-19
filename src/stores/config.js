import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'

export default (initialState = {}) => {
	let middleware = applyMiddleware(thunk)

	if (process.env.NODE_ENV !== 'production') {
	   	// configure redux-devtools-extension
	   	const devToolsExtension = window.devToolsExtension;
	   	if (typeof devToolsExtension === 'function') {
	   		middleware = compose(middleware, devToolsExtension())
   		}
   	}

   	function reducer () { return true }
	const rootReducer = combineReducers({
		routing: routerReducer, reducer: reducer
	})

	const store = createStore(rootReducer, initialState, middleware)
	/*	
	if (module.hot) {
	   	module.hot.accept('../reducers', () => {
	   		store.replaceReducer(require('../reducers').default)
	   	})
	}*/
	return store
}