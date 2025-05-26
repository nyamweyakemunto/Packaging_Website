import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Why Did You Render configuration (only in development)
const whyDidYouRenderPlugin = process.env.NODE_ENV === 'development'
  ? [
      '@welldone-software/why-did-you-render',
      {
        trackAllPureComponents: true,
        // Add other options as needed
      }
    ]
  : null;

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ...(whyDidYouRenderPlugin ? [whyDidYouRenderPlugin] : [])
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});