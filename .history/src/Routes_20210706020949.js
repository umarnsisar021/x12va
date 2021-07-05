function Routes (props) {
    const history = useHistory();
    if(Object.keys(props.userData).length === 0){
      history.push('/')
    }
    
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
          <Route path="/orders" exact>
            <Navbar
              cName="navbar__color"
            />
            <ClientOrders/>
          </Route>
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
  

  export default connect(mapStateToProps,null)(Routes)