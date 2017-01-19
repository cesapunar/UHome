import 'core-js/fn/object/assign'

import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from 'stores/config'
import Root from 'stores/root'
import $ from 'actions'

import 'styles/app.less'
import 'stores/firebase'

const store = configureStore()
const syncedHistory = syncHistoryWithStore(browserHistory, store)

render( <Root history={syncedHistory} store={store}/>, $('app') )