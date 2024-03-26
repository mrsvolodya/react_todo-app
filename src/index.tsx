import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import { App } from './App';
import { TodosProvider } from './components/TodosContext';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <BrowserRouter>
    <TodosProvider>
      <App />
    </TodosProvider>
  </BrowserRouter>,
);