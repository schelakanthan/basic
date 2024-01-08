import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import './index.css';
// import ScriptTag from 'react-script-tag';
// const Demo = props => (
// <ScriptTag type="text/javascript" src="/path/to/resource.js" />
// )
const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );

