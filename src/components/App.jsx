import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';

const HomePage = lazy(() => import('../pages/Home'));
const CountryPage = lazy(() => import('../pages/Country'));

export const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country" element={<CountryPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
