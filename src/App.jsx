import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProtectedRoute } from './components/auth/ProtectedRoute'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import JoinUs from './pages/JoinUs'
import NotFound from './pages/NotFound'

// Business Areas
import BusinessAreaDetail from './pages/BusinessAreaDetail'

// Admin pages
import AdminLogin from './pages/admin/AdminLogin'
import AdminRegister from './pages/admin/AdminRegister'
import Dashboard from './pages/admin/Dashboard'
import EditPhysicalSecurity from './pages/admin/EditPhysicalSecurity'
import EditElectronicSecurity from './pages/admin/EditElectronicSecurity'
import EditCentralMonitoring from './pages/admin/EditCentralMonitoring'
import EditSecurityConsulting from './pages/admin/EditSecurityConsulting'
import EditHomeBanner from './pages/admin/EditHomeBanner'
import EditAllServices from './pages/admin/EditAllServices'
import EditCompanyOverview from './pages/admin/EditCompanyOverview'
import EditLeadership from './pages/admin/EditLeadership'
import EditWhyChooseUs from './pages/admin/EditWhyChooseUs'
import EditFootprint from './pages/admin/EditFootprint'
import EditLifeAtFalcon from './pages/admin/EditLifeAtFalcon'
import EditFeaturedNews from './pages/admin/EditFeaturedNews'
import EditGallery from './pages/admin/EditGallery'

// What We Offer pages
import PhysicalSecurity from './pages/offer/PhysicalSecurity'
import ElectronicSecurity from './pages/offer/ElectronicSecurity'
import CentralMonitoring from './pages/offer/CentralMonitoring'
import SecurityConsulting from './pages/offer/SecurityConsulting'
import CashCustodial from './pages/offer/CashCustodial'
import FacilityManagement from './pages/offer/FacilityManagement'
import TechnicalServices from './pages/offer/TechnicalServices'
import HrOutsourcing from './pages/offer/HrOutsourcing'

// Range of Services pages
import CloseProtection from './pages/services/CloseProtection'
import SiteProtection from './pages/services/SiteProtection'
import QuickResponse from './pages/services/QuickResponse'
import EventManagement from './pages/services/EventManagement'
import SecuritySurvey from './pages/services/SecuritySurvey'
import SiteAssessment from './pages/services/SiteAssessment'
import RiskAssessment from './pages/services/RiskAssessment'
import ThreatAssessment from './pages/services/ThreatAssessment'
import VulnerabilityAssessment from './pages/services/VulnerabilityAssessment'
import ValuableTransit from './pages/services/ValuableTransit'
import DocumentArchiving from './pages/services/DocumentArchiving'
import DataArchiving from './pages/services/DataArchiving'
import Training from './pages/services/Training'
import FireAlarmSystems from './pages/services/FireAlarmSystems'
import CCTV from './pages/services/CCTV'

// News & Events pages
import FalconNews from './pages/news/FalconNews'
import Gallery from './pages/news/Gallery'
import GovernmentNews from './pages/news/GovernmentNews'
import SituationUpdates from './pages/news/SituationUpdates'
import NewsAwards from './pages/news/NewsAwards'
import BlogPage from './pages/news/BlogPage'

// Company sub-pages
import CompanyOverview from './pages/company/CompanyOverview'
import WhyChooseUs from './pages/company/WhyChooseUs'
import OurLeadership from './pages/company/OurLeadership'
import OurFootprint from './pages/company/OurFootprint'
import LifeAtFalcon from './pages/company/LifeAtFalcon'
import Awards from './pages/company/Awards'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Company sub-routes */}
          <Route path="company">
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<CompanyOverview />} />
            <Route path="why-choose-us" element={<WhyChooseUs />} />
            <Route path="leadership" element={<OurLeadership />} />
            <Route path="footprint" element={<OurFootprint />} />
            <Route path="life" element={<LifeAtFalcon />} />
            <Route path="awards" element={<Awards />} />
          </Route>

          <Route path="join-us" element={<JoinUs />} />

          {/* What We Offer sub-routes */}
          <Route path="what-we-offer">
            <Route index element={<Navigate to="physical-security" replace />} />
            <Route path="physical-security" element={<PhysicalSecurity />} />
            <Route path="electronic-security" element={<ElectronicSecurity />} />
            <Route path="central-monitoring" element={<CentralMonitoring />} />
            <Route path="security-consulting" element={<SecurityConsulting />} />
            <Route path="cash-custodial" element={<CashCustodial />} />
            <Route path="facility-management" element={<FacilityManagement />} />
            <Route path="technical-services" element={<TechnicalServices />} />
            <Route path="hr-outsourcing" element={<HrOutsourcing />} />
          </Route>

          {/* Range of Services sub-routes */}
          <Route path="services">
            <Route index element={<Navigate to="close-protection" replace />} />
            <Route path="close-protection" element={<CloseProtection />} />
            <Route path="site-protection" element={<SiteProtection />} />
            <Route path="quick-response" element={<QuickResponse />} />
            <Route path="event-management" element={<EventManagement />} />
            <Route path="security-survey" element={<SecuritySurvey />} />
            <Route path="site-assessment" element={<SiteAssessment />} />
            <Route path="risk-assessment" element={<RiskAssessment />} />
            <Route path="threat-assessment" element={<ThreatAssessment />} />
            <Route path="vulnerability-assessment" element={<VulnerabilityAssessment />} />
            <Route path="valuable-transit" element={<ValuableTransit />} />
            <Route path="document-archiving" element={<DocumentArchiving />} />
            <Route path="data-archiving" element={<DataArchiving />} />
            <Route path="training" element={<Training />} />
            <Route path="fire-alarm-systems" element={<FireAlarmSystems />} />
            <Route path="cctv" element={<CCTV />} />
          </Route>

          {/* Legacy redirect */}
          <Route path="range-of-services" element={<Navigate to="/services/close-protection" replace />} />

          {/* Business Areas */}
          <Route path="business-areas/:slug" element={<BusinessAreaDetail />} />

          {/* News & Events sub-routes */}
          <Route path="news-and-events">
            <Route index element={<Navigate to="news" replace />} />
            <Route path="news" element={<FalconNews />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="government" element={<GovernmentNews />} />
            <Route path="updates" element={<SituationUpdates />} />
            <Route path="awards" element={<NewsAwards />} />
            <Route path="blog" element={<BlogPage />} />
          </Route>

          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/home-banner"
          element={
            <ProtectedRoute>
              <EditHomeBanner />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/physical-security"
          element={
            <ProtectedRoute>
              <EditPhysicalSecurity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/electronic-security"
          element={
            <ProtectedRoute>
              <EditElectronicSecurity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/central-monitoring"
          element={
            <ProtectedRoute>
              <EditCentralMonitoring />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/security-consulting"
          element={
            <ProtectedRoute>
              <EditSecurityConsulting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/services"
          element={
            <ProtectedRoute>
              <EditAllServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/company-overview"
          element={
            <ProtectedRoute>
              <EditCompanyOverview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/leadership"
          element={
            <ProtectedRoute>
              <EditLeadership />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/why-choose-us"
          element={
            <ProtectedRoute>
              <EditWhyChooseUs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/footprint"
          element={
            <ProtectedRoute>
              <EditFootprint />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/life-at-falcon"
          element={
            <ProtectedRoute>
              <EditLifeAtFalcon />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/featured-news"
          element={
            <ProtectedRoute>
              <EditFeaturedNews />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit/gallery"
          element={
            <ProtectedRoute>
              <EditGallery />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
}

export default App
