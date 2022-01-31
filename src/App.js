import './App.css';
import { ThemeProvider } from './context/themeContext';
import Center from './components/Center';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Accordian from './components/Accordian';

function App() {
  
  return (
    <ThemeProvider>
    <div className="flex flex-col h-screen w-full">
      <header>
        <Header />
        <Accordian />
      </header>
      <main className="flex flex-col h-full md:flex-row ">
        <Center />
        <Sidebar />
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
