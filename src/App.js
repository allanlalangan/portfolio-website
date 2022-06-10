import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import ProjectsPage from './pages/projects';

import { Layout } from './components';
import './App.module.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/*' element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
