import React from 'react';import {createRoot,hydrateRoot} from 'react-dom/client';import App from './App.jsx';import './styles.css';
const el=document.getElementById('root');
el.dataset.prerendered?hydrateRoot(el,<App/>):createRoot(el).render(<App/>);
