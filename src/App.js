import './styles/app.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import GlobalContextProvider from './context/context.js';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
