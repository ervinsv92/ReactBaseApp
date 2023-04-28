import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App';
const Home = React.lazy(()=>import('../pages/Home'));
const ScreenOne = React.lazy(()=>import('../pages/ScreenOne'));
const ScreenDetail = React.lazy(()=>import('../pages/ScreenDetail'));

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
            <React.Suspense fallback={<>...</>}>
              <App />
            </React.Suspense>}
        >
            <Route path="home" element={
                <React.Suspense fallback={<>...</>}>
                    <Home />
                </React.Suspense>
            } />
            <Route path="screenone" element={
                <React.Suspense fallback={<>...</>}>
                    <ScreenOne />
                </React.Suspense>
            } />
            <Route path='screenone/:id' element={
                <React.Suspense fallback={<>...</>}>
                    <ScreenDetail />
                </React.Suspense>
            } />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter