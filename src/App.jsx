import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/site/theme.jsx'
import { SmoothScroll } from './components/site/smooth-scroll.jsx'
import { ScrollToTop } from './components/site/scroll-to-top.jsx'
import { SiteNav } from './components/site/site-nav.jsx'
import { SiteFooter } from './components/site/site-footer.jsx'
import HomePage from './pages/home.jsx'
import SolutionsPage from './pages/solutions.jsx'
import WorkPage from './pages/work.jsx'
import IndustriesPage from './pages/industries.jsx'
import AboutPage from './pages/about.jsx'
import CareersPage from './pages/careers.jsx'
import InsightsPage from './pages/insights.jsx'
import ContactPage from './pages/contact.jsx'
import NotFoundPage from './pages/not-found.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <ScrollToTop />
      <SiteNav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/blog" element={<InsightsPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </ThemeProvider>
  )
}
