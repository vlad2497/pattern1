import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app'
import { store } from './store'
// import { worker } from "./mocks/browser";
// import { MOCKER } from "./config/api";
import './index.css'

// Запуск моккера
// if (MOCKER) worker.start();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
