import './App.css';
import { BrowserRouter, Route, Switch ,Link,useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
/// Redux
import { Provider,connect } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './redux/store.js'

// theme
import './Components/Theme.css'
import './Components/styles/spacing/index.css'

// components
import { ToastContainer } from 'react-toastify';
import FadeLoader from '@components/FadeLoader'
import  Routes from './Routes'

/// Custom css
import './Components/styles/custom.css'
const {store, persistor} = configureStore();
function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <ToastContainer />
        <FadeLoader />
      </PersistGate>
    </Provider>
  );
}

export default App;
