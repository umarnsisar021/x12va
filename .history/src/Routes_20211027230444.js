import { BrowserRouter, Route, Switch ,Link,useHistory,Redirect } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import Navbar from './Components/Navbar'
import Home from './Components/Screens/Home/Home'
import Footer from './Components/Footer'
import Experts from './Components/Screens/Experts/Experts'
import Verifiers from './Components/Screens/VerifiersMain/Verifiers'
import ProfileManagement from './Components/Screens/Profile/ProfileManagement';
import ClientProfile from './Components/Screens/Profile/ClientProfile';
import Aboutus from './Components/Screens/About/Aboutus';
import Help from './Components/Screens/Help/Help';
import TrackOrder from './Components/Screens/TrackOrder/TrackOrder';
import Work from './Components/Screens/WorkForUs/Work';
import TrackOrderFiles from './Components/Screens/TrackOrder/TrackOrderFiles';
import UpdateOrder from './Components/Screens/TrackOrder/UpdateOrder';
import ExpertResult from './Components/Screens/ExpertsResults/ExpertResult';
import ExpertResultFound from './Components/Screens/ExpertsResults/ExpertResultFound';
import CreditCardDetails from './Components/Screens/CreditCardDetails/CreditCardDetails';
import UserReferenceCode from './Components/Screens/UserReferenceCode/UserReferenceCode';
import RegisterExpert from './Components/Screens/Profile/RegisterExpert';
import ExpertSkillForm from './Components/Screens/Profile/ExpertSkillForm';
import TestDetails from './Components/Screens/Profile/TestDetails';
import TestForm from './Components/Screens/Profile/TestForm';
import TestCompleted from './Components/Screens/Profile/TestCompleted';
import Signup from './Components/Screens/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import Congratulations from './Components/Screens/Congratulations/Congratulations';
import SupportUs from './Components/Screens/SupportUs/SupportUs';
import SendProposal from './Components/Screens/Propossal/SendProposal'
import Proposals from './Components/Screens/Propossal/Proposals'
import ViewProposal from './Components/Screens/Propossal/ViewProposal'
import ExpertPublicProfile from './Components/Screens/Profile/ExpertPublicProfile'
import TaskAddedCongratulation from './Components/Screens/ExpertsResults/OrderPlaced/Congratulations'
import ClientOrders from '@screens/Profile/ClientProfileComponents/ClientOrders'
import ClientOrderPlaced from '@screens/Profile/ClientProfileComponents/ClientOrderPlaced'
import ExpertNewTasks from '@screens/Profile/Orders/ExpertNewTasks'
import ExpertViewOrder from '@screens/Profile/ExpertViewOrder'
import ExpertsSendProposal from '@screens/Profile/ExpertsSendProposal'
import ExpertProposalSubmitCongratulations from '@screens/Profile/ExpertProposalSubmitCongratulations'
import ExpertProposalView from '@screens/Propossal/ExpertProposalView'
import WalletDetails from '@screens/Profile/WalletDetails'
import OrderHistory from '@screens/Profile/OrderHistory'
import BecomeVerifier from '@screens/Profile/BecomeVerifier'
import VerifyOrders from '@screens/Profile/VerifyOrders/VerifyOrders'



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
          {/*  */}
          <AuthRoute path="/profile" exact>
            <Navbar
              cName="navbar__color"
            />
            <ProfileManagement/>
          </AuthRoute>
          <AuthRoute path="/cprofile" exact>
            <Navbar
              cName="navbar__color"
            />
            <ClientProfile/>
          </AuthRoute>
          <AuthRoute path="/wallet" exact>
            <Navbar
              cName="navbar__color"
            />
            <WalletDetails/>
          </AuthRoute>
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
          <AuthRoute path="/usereferencecode" exact>
            <Navbar
              cName="navbar__color"
            />
            <UserReferenceCode/>
          </AuthRoute>
          <AuthRoute path="/user/expert/register" exact>
            <Navbar
              cName="navbar__color"
            />
            <RegisterExpert/>
          </AuthRoute>
          <AuthRoute path="/expert/skill/create" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertSkillForm/>
          </AuthRoute>
          <AuthRoute path="/expert/skill/test/details/:skill_id" exact>
            <Navbar
              cName="navbar__color"
            />
            <TestDetails />
          </AuthRoute>
          <AuthRoute path="/expert/skill/test/form" exact>
            <Navbar
              cName="navbar__color"
            />
            <TestForm />
          </AuthRoute>
          <AuthRoute path="/expert/skill/test/completed" exact>
            <Navbar
              cName="navbar__color"
            />
            <TestCompleted />
          </AuthRoute>
          <AuthRoute path="/experts/orders/:type" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertNewTasks />
          </AuthRoute>
          <AuthRoute path="/experts/orders" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertNewTasks />
          </AuthRoute>
          {/*  */}
          <AuthRoute path="/experts/verify/orders" exact>
            <Navbar
              cName="navbar__color"
            />
            <VerifyOrders />
          </AuthRoute>
          <AuthRoute path="/experts/verify/orders" exact>
            <Navbar
              cName="navbar__color"
            />
            <VerifyOrders />
          </AuthRoute>
          <AuthRoute path="/experts/proposals/view/:id" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertProposalView />
          </AuthRoute>
          
          <AuthRoute path="/experts/order/view" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertViewOrder />
          </AuthRoute>
          <AuthRoute path="/experts/order/view/history/:task_id" exact>
            <Navbar cName="navbar__color" />
            <OrderHistory />
          </AuthRoute>
          <AuthRoute path="/order/view/history/:task_id" exact>
            <Navbar cName="navbar__color" />
            <OrderHistory />
          </AuthRoute>
          <AuthRoute path="/register/verifier" exact>
            <Navbar cName="navbar__color" />
            <BecomeVerifier />
          </AuthRoute>
          <AuthRoute path="/experts/order/view/sendproposal" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertsSendProposal />
          </AuthRoute>
          <AuthRoute path="/experts/order/view/sendproposal/success" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertProposalSubmitCongratulations />
          </AuthRoute>
         
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
            <AuthRoute path="/orders" exact>
                <Navbar
                cName="navbar__color"
                />
                <ClientOrders/>
            </AuthRoute>
            <AuthRoute path="/order/placed" exact>
                <Navbar
                cName="navbar__color"
                />
                <ClientOrderPlaced/>
            </AuthRoute>
              <Route path="/sendproposal" exact>
                <Navbar
                  cName="navbar__color"
                />
                <SendProposal />
              </Route>
              <Route path="/proposals/:task_id" exact>
                <Navbar
                  cName="navbar__color"
                />
                <Proposals />
              </Route>
              <AuthRoute path="/proposal/view/:id" >
                <Navbar
                  cName="navbar__color"
                />
                <ViewProposal />
              </AuthRoute>
           </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
    )
  }
  
  export default Routes