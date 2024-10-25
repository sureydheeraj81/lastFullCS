import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import Introduction from "./pages/Introduction";
import Home from "./pages/Home";
import Usages from "./pages/Usages";
import Abbreviations from "./pages/Abbreviations";
import Advantages from "./pages/Advantages";
import Requirements from "./pages/Requirements";
import Connectionsettings from "./pages/Connectionsettings";
import Guidelines from "./pages/Guidelines";
import Videotutorial from "./pages/Videotutorial";
import Corsservices from "./pages/Corsservices";
import Subscriptioncharges from "./pages/Subscriptioncharges";
import Rti from "./pages/Rti"
import SoftwarePlugins from "./pages/SoftwarePlugins"
import AccessbilityStatement from "./pages/Accessbilitystatement"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import HyperlinkingPolicy from "./pages/HyperlinkingPolicy"
import CopyrightPolicy from "./pages/Copyrightpolicy"
import TermsConditions from "./pages/Termsconditions"
import Disclaimer from "./pages/Disclaimer"
import AccessbilityOptions from "./pages/Accessbilityoptions"
import ProactiveDisclosure from "./pages/Proactivedisclosure"
import Error404 from "./pages/Error404"
import AdminRegistration from "./admin/AdminRegistration"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Subscription from "./pages/Subscription"
import AdminDashboard from "./admin/AdminDashboard"
import Feedback from "./pages/Feedback"
import CorsPlans from "./admin/CorsPlans";
import UserCategory from "./admin/UserCategory";
import UserCategoryEdit from "./admin/UserCategoryEdit";
import SubsRejectionReason from "./admin/SubsRejectionReason";
import SubsRejectionReasonEdit from "./admin/SubsRejectionReasonEdit";
import RegisRejectionReason from "./admin/RegisRejectionReason";
import RegRejectionReasonEdit from "./admin/RegRejectionReasonEdit";
import Feedbacks from "./admin/Feedbacks";
import CorsPlansEdit from "./admin/CorsPlanEdit";
import TransferUserRegion from "./admin/TransferUserRegion";
import AdminLogin from "./admin/AdminLogin";
import Reg from "./pages/Reg";
import Profile from "./admin/Profile";
import ChangePassword from "./admin/ChangePassword";
import AdminBlocked from "./admin/AdminBlocked";
import AdminRequest from "./admin/AdminRequest";
import ActiveAdmins from "./admin/ActiveAdmins";
import AllAdmins from "./admin/AllAdmins";
import UpdateAdminStatus from "./admin/UpdateAdminStatus";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/introduction" element={<Introduction/>} />
        <Route path="/abbreviations" element={<Abbreviations />} />
        <Route path="/usages" element={<Usages />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/requirements" element={<Requirements />} />
        <Route path="/connection-settings" element={<Connectionsettings />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/video-tutorials" element={<Videotutorial />} />
        <Route path="/cors-services" element={<Corsservices />} />
        <Route path="/subscription-charges" element={<Subscriptioncharges />} />
        <Route path="/rti" element={<Rti />} />
        <Route path="/accessbilityStatement" element={<AccessbilityStatement />} />
        <Route path="/software-plugins" element={<SoftwarePlugins />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/hyperlinkingPolicy" element={<HyperlinkingPolicy />} />
        <Route path="/copyrightPolicy" element={<CopyrightPolicy />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/accessbilityOptions" element={<AccessbilityOptions />} />
        <Route path="/proactive-disclosure" element={<ProactiveDisclosure />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/register" element={<AdminRegistration/>} />
        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/admin/dashboard/all-admins" element={<AllAdmins/>} />
        <Route path="/admin/dashboard/active-admins" element={<ActiveAdmins/>} />
        <Route path="/admin/dashboard/admin-blocked" element={<AdminBlocked/>} />
        <Route path="/admin/dashboard/admin-request" element={<AdminRequest/>} />
        <Route path="/admin/dashboard/edit-status/:sno" element={<UpdateAdminStatus/>} />
        <Route path="/admin/user-transfer" element={<TransferUserRegion/>} />
        <Route path="/admin/services" element={<CorsPlans />} />
        <Route path="/admin/services/edit/:idx" element={<CorsPlansEdit />} />
        <Route path="/admin/reg-rejection" element={<RegisRejectionReason/>} />
        <Route path="/admin/reg-rejection/edit/:idx" element={<RegRejectionReasonEdit/>} />
        <Route path="/admin/sub-rejection" element={<SubsRejectionReason/>} />
        <Route path="/admin/sub-rejection/edit/:idx" element={<SubsRejectionReasonEdit/>} />
        <Route path="/admin/user-categories" element={<UserCategory/>} />
        <Route path="/admin/user-categories/edit/:idx" element={<UserCategoryEdit/>} />
        <Route path="/admin/feedbacks" element={<Feedbacks />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path='/admin/change-password' element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
