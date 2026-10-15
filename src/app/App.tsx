import { useEffect, useRef } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { AgiLayout } from '../features/agi/AgiLayout';
import { AgiPage } from '../features/agi/AgiPage';
import { ApproachPage } from '../features/agi/pages/ApproachPage';
import { ResearchPage } from '../features/agi/pages/ResearchPage';
import { UnknownsPage } from '../features/agi/pages/UnknownsPage';
import { PhysicalAIPage } from '../features/physical-ai/PhysicalAIPage';

const pageTitles: Record<string, string> = {
  '/agi': 'AGI Direction',
  '/agi/approach': 'Our approach',
  '/agi/research': 'Research areas',
  '/agi/unknowns': 'Open questions',
  '/physical-ai': 'Physical AI',
};

export function App() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    document.title = `${pageTitles[pathname] ?? 'Page not found'} — DERYK`;
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0);
      document.getElementById('main-content')?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Navigate to="/agi" replace />} />
          <Route path="/physical-ai" element={<PhysicalAIPage />} />
          <Route path="/agi" element={<AgiLayout />}>
            <Route index element={<AgiPage />} />
            <Route path="approach" element={<ApproachPage />} />
            <Route path="research" element={<ResearchPage />} />
            <Route path="unknowns" element={<UnknownsPage />} />
          </Route>
          <Route
            path="*"
            element={
              <section className="page-container state-section">
                <h1>Page not found</h1>
                <p>This page doesn’t exist. Return to the AGI overview to keep exploring.</p>
                <Link className="btn btn-outline outline-action" to="/agi">
                  Back to the overview
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
