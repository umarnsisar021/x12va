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
import Navbar from './Components/Navbar'
import Home from './Components/Screens/Home screen/Home'
import Footer from './Components/Footer'
import Experts from './Components/Screens/Experts Screen/Experts'
import Verifiers from './Components/Screens/Verifiers Main Screen/Verifiers'
import ProfileManagement from './Components/Screens/Profile Screen/ProfileManagement';
import ClientProfile from './Components/Screens/Profile Screen/ClientProfile';
import Aboutus from './Components/Screens/About Screen/Aboutus';
import Help from './Components/Screens/Help Screen/Help';
import TrackOrder from './Components/Screens/Track order screen/TrackOrder';
import Work from './Components/Screens/Work for us screen/Work';
import VerifyOrders from './Components/Screens/Verifiers Orders Screen/VerifyOrders';
import TrackOrderFiles from './Components/Screens/Track order screen/TrackOrderFiles';
import UpdateOrder from './Components/Screens/Track order screen/UpdateOrder';
import UpdateOrderFile from './Components/Screens/Track order screen/UpdateOrderFile';
import ExpertResult from './Components/Screens/Experts Results Screen/ExpertResult';
import ExpertResultFound from './Components/Screens/Experts Results Screen/ExpertResultFound';
import CreditCardDetails from './Components/Screens/Credit Card Details Screen/CreditCardDetails';
import UserReferenceCode from './Components/Screens/User Reference Code Screen/UserReferenceCode';
import Signup from './Components/Screens/SignupScreen/Signup';
import { ToastContainer } from 'react-toastify';
import Congratulations from './Components/Screens/CongratulationsScreen/Congratulations';
import SupportUs from './Components/Screens/SupportUsScreen/SupportUs';
import SendProposal from './Components/Screens/PropossalScreen/SendProposal'
import Proposals from './Components/Screens/PropossalScreen/Proposals'
import ViewProposal from './Components/Screens/PropossalScreen/ViewProposal'
import ExpertPublicProfile from './Components/Screens/Profile Screen/ExpertPublicProfile'
import TaskAddedCongratulation from './Components/Screens/Experts Results Screen/OrderPlaced/Congratulations'
import  ClientOrders from './Components/Screens/Profile Screen/Client profile components/ClientOrders'
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
      </PersistGate>
    </Provider>
  );
}



function mapStateToProps(state) {
  const { auth } = state
  return { userData : auth.userData }
}

export default App;
