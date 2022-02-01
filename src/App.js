import './App.css';
import { ThemeProvider } from './context/themeContext';
import CollapseProvider from './context/collapseContext';
import CollapseSidebarProvider from './context/collapseSidebarContext';
import Center from './components/Center';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Accordian from './components/Accordian';

function App() {
  
  return (
    <ThemeProvider>
      <CollapseProvider>
      <CollapseSidebarProvider>
        <div className="flex flex-col h-screen w-full">
          <header>
            <Header />
            <Accordian />
          </header>
          <main className="flex flex-col h-full md:flex-row bg-violet-300 dark:bg-[#2e2e37] justify-center">
            <Center />
            <Sidebar />
          </main>
        </div>      
      </CollapseSidebarProvider>
      </CollapseProvider>
    </ThemeProvider>
  );
}

export default App;
