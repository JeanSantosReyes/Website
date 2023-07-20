import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { Footer, Navbar, ScrollTop } from './components';
import { AboutPage, HomePage, PageNotFound, PortfolioPage } from './pages';

const App = () => {

  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar color='#f11946' height={4} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage setProgress={setProgress} />} />
        <Route path='/about' element={<AboutPage setProgress={setProgress} />} />
        <Route path='/portfolio' element={<PortfolioPage setProgress={setProgress} progress={progress} />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </>
  )
}
export default App