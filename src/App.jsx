import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import ProjectsPage from './pages/projects';
import AboutPage from './pages/me';

import Layout from './components/Layout/Layout';
import './App.module.scss';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/*' element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
