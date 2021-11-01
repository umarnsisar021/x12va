import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/// Redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './redux/store.js'

// theme
import './Components/Theme.css'
import './Components/styles/spacing/index.css'

// components
import { ToastContainer } from 'react-toastify';
import FadeLoader from '@components/ContentLoader'
import  Routes from './Routes'
import  SiteConfig from './SiteConfig'

/// Custom css
import './Components/styles/custom.css'
import './Components/styles/responsive.css'
const {store, persistor} = configureStore();
function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <SiteConfig />
        <ToastContainer />
        <FadeLoader />
      </PersistGate>
    </Provider>
  );
}

export default App;
