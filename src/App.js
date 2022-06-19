import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import SearchResult from './pages/search-result';
import Profile from './pages/profile';
import ReadMe from './pages/read-me';

function App() {
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="/"
              element={
                <>
                  <div className="content__body">
                    <span>You haven't seacrh anyone!</span>
                  </div>
                </>
              }
            />
            <Route
              path="/search"
              element={
                <>
                  <div className="content__body">
                    <span>You haven't seacrh anyone!</span>
                  </div>
                </>
              }
            />
            <Route path="/search/:query" element={<SearchResult />} />
          </Route>
          <Route path="/user/:profile" element={<Profile />} />
          <Route path="/user/:profile/:repo" element={<ReadMe />} />
        </Routes>

        <div className="content__foot">
          <div className="card card--blank">This App built for Test</div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
