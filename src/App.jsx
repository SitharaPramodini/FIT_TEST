// import React, { useEffect, Suspense } from "react";
// import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
// import StoriesHome from "./Components/Stories/StoriesHome";
// import NIS from "./Pages/IndividualServices/NIS";
// import CS from "./Pages/IndividualServices/CS";
// import CyberS from "./Pages/IndividualServices/CyberS";
// import DCS from "./Pages/IndividualServices/DCS";
// import CollS from "./Pages/IndividualServices/CollS";
// import NGMS from "./Pages/IndividualServices/NGMS";
// import UCP from "./Pages/IndividualServices/UCP";
// import EN from "./Pages/IndividualServices/EN";
// import IC from "./Pages/IndividualServices/IC";
// import FS from "./Pages/IndividualServices/FS";
// import DHS from "./Pages/IndividualServices/DHS";
// import BackToTopButton from "./Components/BackToTopButton"; // Add this import

// // Lazy-loaded components
// const Home = React.lazy(() => import("./Pages/Home"));
// const Navbar = React.lazy(() => import("./Components/Navbar"));
// const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
// const Stage = React.lazy(() => import("./Components/Awards/Stage"));
// const Contact = React.lazy(() => import("./Pages/Contact"));
// const Services = React.lazy(() => import("./Pages/Services"));
// const DatacenterDivider = React.lazy(() => import("./Components/Services/DatacenterDivider"));

// function AppRoutes() {
//   const location = useLocation();

//   useEffect(() => {
//     // Reload only once when navigating to "/awards"
//     if (location.pathname === "/awards" && !sessionStorage.getItem("awardsPageReloaded")) {
//       sessionStorage.setItem("awardsPageReloaded", "true");
//       window.location.reload();
//     } else if (location.pathname !== "/awards") {
//       sessionStorage.removeItem("awardsPageReloaded");
//     }
//   }, [location]);

//   return (
//     <>
//       {/* Navbar displayed across all routes */}
//       <Navbar />

//       <Routes>
//         {/* Define all routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/stories" element={<StoriesHome />} />

//         <Route path="/service/Network-Information-Security" element={<NIS />} />
//         <Route path="/service/Consultancy-Service" element={<CS />} />
//         <Route path="/service/Cyber-Security" element={<CyberS />} />
//         <Route path="/service/Data-Center-Solution" element={<DCS />} />
//         <Route path="/service/Collaboration-Suites" element={<CollS />} />
//         <Route path="/service/NextGeneration-Managed-Services" element={<NGMS />} />
//         <Route path="/service/Unified-Communication-IPPABX" element={<UCP />} />
//         <Route path="/service/Enterprise-Networking" element={<EN />} />
//         <Route path="/service/Innovation-Centre" element={<IC />} />
//         <Route path="/service/Fintech-Solutions" element={<FS />} />
//         <Route path="/service/Digital-Healthcare-Solutions" element={<DHS />} />

//         <Route path="/slider" element={<DatacenterDivider />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/awards" element={<Stage />} />
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>

//       {/* Back to Top Button - Available on all pages */}
//       <BackToTopButton />
//     </>
//   );
// }

// function App() {
//   useEffect(() => {
    
//   }, []);

//   return (
//     <BrowserRouter>
//       <Suspense fallback={<div>Loading...</div>}>
//         <AppRoutes />
//       </Suspense>
//     </BrowserRouter>
//   );
// }

// export default App;










import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import StoriesHome from "./Components/Stories/StoriesHome";
import NIS from "./Pages/IndividualServices/NIS";
import CS from "./Pages/IndividualServices/CS";
import CyberS from "./Pages/IndividualServices/CyberS";
import DCS from "./Pages/IndividualServices/DCS";
import CollS from "./Pages/IndividualServices/CollS";
import NGMS from "./Pages/IndividualServices/NGMS";
import UCP from "./Pages/IndividualServices/UCP";
import EN from "./Pages/IndividualServices/EN";
import IC from "./Pages/IndividualServices/IC";
import FS from "./Pages/IndividualServices/FS";
import DHS from "./Pages/IndividualServices/DHS";
import BackToTopButton from "./Components/BackToTopButton";
import CookieConsentBanner from "./Components/Cookies/CookieConsentBanner";
import { CookieConsent, trackPageView } from "./Components/Cookies/cookieUtils";
import FAQPage from "./Pages/FAQ";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage";
import CookiePolicyPage from "./Pages/CookiePolicyPage";

// Lazy-loaded components
const Home = React.lazy(() => import("./Pages/Home"));
const Navbar = React.lazy(() => import("./Components/Navbar"));
const AboutUs = React.lazy(() => import("./Pages/AboutUs"));
const Stage = React.lazy(() => import("./Components/Awards/Stage"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const Services = React.lazy(() => import("./Pages/Services"));
const DatacenterDivider = React.lazy(() => import("./Components/Services/DatacenterDivider"));

function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Track page views for analytics (only if analytics cookies are enabled)
    trackPageView(location.pathname);

    // Reload only once when navigating to "/awards"
    if (location.pathname === "/awards" && !sessionStorage.getItem("awardsPageReloaded")) {
      sessionStorage.setItem("awardsPageReloaded", "true");
      window.location.reload();
    } else if (location.pathname !== "/awards") {
      sessionStorage.removeItem("awardsPageReloaded");
    }
  }, [location]);

  return (
    <>
      {/* Navbar displayed across all routes */}
      <Navbar />

      <Routes>
        {/* Define all routes */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/stories" element={<StoriesHome />} />
        <Route path="/FAQ" element={<FAQPage />} />

        {/* Service routes */}
        <Route path="/service/Network-Information-Security" element={<NIS />} />
        <Route path="/service/Consultancy-Service" element={<CS />} />
        <Route path="/service/Cyber-Security" element={<CyberS />} />
        <Route path="/service/Data-Center-Solution" element={<DCS />} />
        <Route path="/service/Collaboration-Suites" element={<CollS />} />
        <Route path="/service/NextGeneration-Managed-Services" element={<NGMS />} />
        <Route path="/service/Unified-Communication-IPPABX" element={<UCP />} />
        <Route path="/service/Enterprise-Networking" element={<EN />} />
        <Route path="/service/Innovation-Centre" element={<IC />} />
        <Route path="/service/Fintech-Solutions" element={<FS />} />
        <Route path="/service/Digital-Healthcare-Solutions" element={<DHS />} />

        {/* Other routes */}
        <Route path="/slider" element={<DatacenterDivider />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/awards" element={<Stage />} />
        
        {/* Legal pages */}
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Global components available on all pages */}
      <BackToTopButton />
      <CookieConsentBanner />
    </>
  );
}


function App() {
  useEffect(() => {
    // Initialize cookie system on app load
    const preferences = CookieConsent.getPreferences();
    
    // Setup cookies based on current preferences
    if (CookieConsent.hasConsent()) {
      CookieConsent.setupCookies(preferences);
    }

    // Initialize Google Analytics if you have it
    // Uncomment and add your GA measurement ID
    // initializeGoogleAnalytics('GA_MEASUREMENT_ID');

    // Check if consent is expired (optional)
    if (CookieConsent.hasConsent() && CookieConsent.isConsentExpired()) {
      // Reset consent to show banner again
      CookieConsent.resetConsent();
    }
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;