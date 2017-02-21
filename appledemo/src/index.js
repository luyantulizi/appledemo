import React from 'react'
import ReactDOM from 'react-dom'
import AppleBasket from './containers/appleBasket'
import { Provider } from 'react-redux'
import configureStore from './store/store'
const store = configureStore()

ReactDOM.render(
  <Provider store={store} >
     <AppleBasket/ >
  </Provider>,
  document.getElementById('app')
)
