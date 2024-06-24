import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import LoginPage from './pages/LoginPage/LoginPage';
import NewsPage from './pages/NewsPage';
import Profile from './pages/Profile';
import { getAuth } from 'firebase/auth';
import ProtectedRoute from './app/routes/ProtectedRoute'

const user: any = getAuth().currentUser;

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LoginPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile2" element={
          <ProtectedRoute>
            <NewsPage />
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  </HashRouter>
)