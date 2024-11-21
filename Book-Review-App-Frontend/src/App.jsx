import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import ReviewPage from './components/ReviewPage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/review/:id" element={<ReviewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

