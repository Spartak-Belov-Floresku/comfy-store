
import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import App from './App.jsx'
import { store } from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
