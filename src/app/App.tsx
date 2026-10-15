import { useEffect, useRef } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { AgiLayout } from '../features/agi/AgiLayout';
import { AgiDirectionHomePage } from '../features/agi/AgiDirectionHomePage';
import { AgiPage } from '../features/agi/AgiPage';
import { ApproachPage } from '../features/agi/pages/ApproachPage';
import { ResearchPage } from '../features/agi/pages/ResearchPage';
import { UnknownsPage } from '../features/agi/pages/UnknownsPage';
import { PhysicalAIPage } from '../features/physical-ai/PhysicalAIPage';
import { NeuralAiPage } from '../features/neural-ai/NeuralAiPage';
import { GamingAIPage } from '../features/gaming-ai/GamingAIPage';

const pageTitles: Record<string, string> = {
  '/deryk': 'DERYK',
  '/agi-direction': 'AGI Direction',
  '/deryk/approach': 'Our approach',
  '/deryk/research': 'Research areas',
  '/deryk/unknowns': 'Open questions',
  '/physical-ai': 'Physical AI',
  '/gaming-ai': 'Gaming AI',
  '/gaming/DERYK_Gaming_AI.html': 'Gaming AI',
  '/neural-ai': 'Neural AI — Research',
  '/deryk/neural-ai-v4': 'Neural AI — Research',
};

export function App() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    document.title =
      pathname === '/deryk' ? 'DERYK' : `${pageTitles[pathname] ?? 'Page not found'} — DERYK`;
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
          <Route path="/" element={<Navigate to="/deryk" replace />} />
          <Route
            path="/agi/*"
            element={<Navigate to={pathname.replace(/^\/agi(?=\/|$)/, '/deryk')} replace />}
          />
          <Route path="/physical-ai" element={<PhysicalAIPage />} />
          <Route path="/agi-direction" element={<AgiDirectionHomePage />} />
          <Route path="/gaming-ai" element={<GamingAIPage />} />
          <Route path="/gaming/DERYK_Gaming_AI.html" element={<GamingAIPage />} />
          <Route path="/deryk" element={<AgiLayout />}>
            <Route index element={<AgiPage />} />
            <Route path="approach" element={<ApproachPage />} />
            <Route path="research" element={<ResearchPage />} />
            <Route path="unknowns" element={<UnknownsPage />} />
          </Route>
          <Route path="/neural-ai" element={<NeuralAiPage />} />
          <Route path="/deryk/neural-ai-v4" element={<NeuralAiPage />} />
          <Route
            path="*"
            element={
              <section className="page-container state-section">
                <h1>Page not found</h1>
                <p>This page doesn’t exist. Return to the AGI overview to keep exploring.</p>
                <Link className="btn btn-outline outline-action" to="/deryk">
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
