import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'
import { useSelector, useDispatch } from 'react-redux'
const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)
