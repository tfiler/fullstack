/*import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/

import ReactDOMClient from 'react-dom/client'
import App from './App'

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(<App />)
