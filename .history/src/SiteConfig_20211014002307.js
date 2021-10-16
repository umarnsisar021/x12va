import { BrowserRouter, Route, Switch ,Link,useHistory,Redirect } from 'react-router-dom';
function SiteConfig (props) {
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
          <AuthRoute path="/experts/proposals/view/:id" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertProposalView />
          </AuthRoute>
          <AuthRoute path="/experts/orders" exact>
            <Navbar
              cName="navbar__color"
            />
            <ExpertNewTasks />
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
  
  export default SiteConfig