import {VerifyOTP,UseFull,VolunteerAddSubmit2,VolunteerAddSubmit1,AddSupplier,VolunteerAgreement,AboutUs ,Navbar,INeedOxygen,FrontPage,IHaveOxygen,Submit1,Submit2,InstructionPage,HomeDelivery,CityVolunteer,VolunteerSubmit1,VolunteerSubmit2,UserAgreement} from "./containers";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserHaveProvider } from "./context/userHaveOxygen";
import { VolunteerProvider } from "./context/volunteer";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";


function App() {
  return (
    // <ErrorPage/>
    <I18nextProvider i18n={i18next}>
      <VolunteerProvider>
        <UserHaveProvider>
          <Router>
            <div>
              <Navbar />

              <Route path="/" exact component={FrontPage} />
              <Route path="/need" exact component={INeedOxygen} />
              <Route path="/have" exact component={IHaveOxygen} />
              {/* <Route path="/volunteer" exact component={Volunteer} /> */}
              <Route path="/verify" exact component={VerifyOTP} />
              <Route path="/have/submit1" exact component={Submit1} />
              <Route path="/have/submit2" exact component={Submit2} />
              <Route path="/have/agreement" exact component={UserAgreement} />
              <Route
                path="/volunteer/agreement"
                exact
                component={VolunteerAgreement}
              />
              <Route path="/have/delivary" exact component={HomeDelivery} />
              <Route path="/cityVolunteers" exact component={CityVolunteer} />
              <Route
                path="/VolunteerSubmit1"
                exact
                component={VolunteerSubmit1}
              />
              <Route
                path="/VolunteerSubmit2"
                exact
                component={VolunteerSubmit2}
              />
              <Route path="/AddSupplier" exact component={AddSupplier} />
              <Route
                path="/Volunteer/AddSubmit1"
                exact
                component={VolunteerAddSubmit1}
              />
              <Route
                path="/Volunteer/AddSubmit2"
                exact
                component={VolunteerAddSubmit2}
              />
              <UseFull></UseFull>
              <InstructionPage />
              <AboutUs />
            </div>
          </Router>
        </UserHaveProvider>
      </VolunteerProvider>
    </I18nextProvider>
  );
}

export default App;
