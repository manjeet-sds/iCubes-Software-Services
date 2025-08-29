import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'; 
import TermsAndConditions from './pages/TermsAndConditions.jsx'; 
import ThankYou from './pages/ThankYou.jsx'; 

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/privacy-policy', element: <PrivacyPolicy /> },
          { path: '/terms-and-conditions', element: <TermsAndConditions /> },
          { path: '/thank-you', element: <ThankYou /> },
          
        ],
      },
    ],
    {
      // basename: '/landing-page/web-design-agency-birmingham/', // 👈 important
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
