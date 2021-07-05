import { BrowserRouter, Route, Switch ,Link,useHistory,Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
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
import ClientOrders from './Components/Screens/Profile Screen/Client profile components/ClientOrders'


function Routes (props) {
    return(
      <div className="app">
      <BrowserRouter>       
        <Switch>
          
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route exact path="/experts" >
            <Navbar
              cName="navbar__color"
            />
            <Experts/>
          </Route>
          <Route path="/verifiers" exact>
            <Navbar
              cName="navbar__color"
            />
            <Verifiers/>
          </Route>
          <Route path="/verifyorders" exact>
            <Navbar
              cName="navbar__color"
            />
            <VerifyOrders/>
          </Route>
          <Route path="/profile" exact>
            <Navbar
              cName="navbar__color"
            />
            <ProfileManagement/>
          </Route>
          <Route path="/cprofile" exact>
            <Navbar
              cName="navbar__color"
            />
            <ClientProfile/>
          </Route>
          <Route path="/expert/:username" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertPublicProfile/>
          </Route>
          <Route path="/about" exact>
            <Navbar
              cName="navbar__color"
            />
            <Aboutus/>
          </Route>
          <Route path="/help" exact>
            <Navbar
              cName="navbar__color"
            />
            <Help/>
          </Route>
          <Route path="/trackorder" exact>
            <Navbar
              cName="navbar__color"
            />
            <TrackOrder/>
          </Route>
          <Route path="/trackorderfiles" exact>
            <Navbar
              cName="navbar__color"
            />
            <TrackOrderFiles/>
          </Route>
          <Route path="/updateorder" exact>
            <Navbar
              cName="navbar__color"
            />
            <UpdateOrder/>
          </Route>
          <Route path="/updateorderfile" exact>
            <Navbar
              cName="navbar__color"
            />
            <UpdateOrderFile/>
          </Route>
          <Route path="/workforus" exact>
            <Navbar
              cName="navbar__color"
            />
            <Work/>
          </Route>
          <Route path="/expertresults/:skill_id" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertResult/>
          </Route>
          <Route path="/expertresultsfound" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertResultFound/>
          </Route>
          <Route path="/carddetails" exact>
            <Navbar
              cName="navbar__color"
            />
            <CreditCardDetails/>
          </Route>
          <Route path="/referencecode" exact>
            <Navbar
              cName="navbar__color"
            />
            <UserReferenceCode/>
          </Route>
          <Route path="/signup" exact>
            <Navbar
              cName="navbar__color"
            />
            <Signup/>
          </Route>
          <Route path="/supportus" exact>
            <Navbar
              cName="navbar__color"
            />
            <SupportUs/>
          </Route>
  
          <Route path="/sendproposal" exact>
            <Navbar
              cName="navbar__color"
            />
            <SendProposal/>
          </Route>
          <Route path="/taskplaced/:task_id" exact>
            <Navbar
              cName="navbar__color"
            />
            <TaskAddedCongratulation/>
          </Route>
          <PrivateRoute path="/orders" exact component={ClientOrders}>
            <Navbar
              cName="navbar__color"
            />
            <ClientOrders/>
          </PrivateRoute>
              <Route path="/sendproposal" exact>
                <Navbar
                  cName="navbar__color"
                />
                <SendProposal />
              </Route>
              <Route path="/proposals" exact>
                <Navbar
                  cName="navbar__color"
                />
                <Proposals />
              </Route>
              <Route path="/proposal">
                <Navbar
                  cName="navbar__color"
                />
                <ViewProposal />
              </Route>
           </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
    )
  }
  
  export default Routes