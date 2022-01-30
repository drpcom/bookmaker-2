import './App.css';
import Center from './components/Center';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex flex-col h-screen w-full">
      <header>
        <Header />
      </header>
      <main className="flex flex-col h-full md:flex-row">
        <Center />
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
