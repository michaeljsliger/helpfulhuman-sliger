import './styles/app.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import GlobalContextProvider from './context/context.js';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
