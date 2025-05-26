// // main.tsx
// import './wdyr'; // MUST BE THE FIRST IMPORT (before React and other imports)
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import App from './App';
// import HomePage from './pages/index';
// import './index.css';
// import whyDidYouRender from '@welldone-software/why-did-you-render';

// // Initialize why-did-you-render in development
// if (process.env.NODE_ENV === 'development') {
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import HomePage from './pages/index';
import './index.css';

/* Why Did You Render Setup - Development Only */
if (import.meta.env.DEV) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    logOnDifferentValues: true,
    trackHooks: true,
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
  });
}

// Add a loading state for routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => ({ title: 'Home Page' }), // Example loader
      },
    ],
  },
]);

// Add suspense fallback
createRoot(rootElement).render(
  <StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  </StrictMode>
);

/* Application Routes Configuration */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Additional routes can be added here
      // { path: 'about', element: <AboutPage /> },
    ],
    errorElement: <div>Error Page Component</div>, // Consider adding a proper error boundary
  },
]);

/* Root Element Validation */
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found. Check your index.html file.');
}

/* Application Render */
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);