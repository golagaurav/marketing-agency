import React from 'react';
import { Route, Switch } from 'wouter';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import AboutServices from './pages/AboutServices';
import ContactUs from './pages/ContactUs';
import CancellationPolicy from './pages/CancellationPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import GetStarted from './pages/GetStarted'; // ✅ Import the new page
import './index.css';

function App() {
  return (
    <div className="min-h-screen pb-14 flex flex-col">
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/services" component={AboutServices} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/cancellation-policy" component={CancellationPolicy} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/get-started" component={GetStarted} /> {/* ✅ Added */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
