import { ThemeProvider } from "./context/themeContext";
import CollapseProvider from "./context/collapseContext";
import CollapseSidebarProvider from "./context/collapseSidebarContext";
import DocsProvider from "./context/docsContext";
import SidebarViewProvider from "./context/sidebarViewContext";
import Center from "./components/Center";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Accordion from "./components/Accordion";

function App() {
  return (
    <ThemeProvider>
      <CollapseProvider>
        <CollapseSidebarProvider>
          <DocsProvider>
            <SidebarViewProvider>
              <div className="flex flex-col w-full">
                <header>
                  <Header />
                  <Accordion />
                </header>
                <main className="flex flex-col h-full md:flex-row bg-violet-300 dark:bg-[#2e2e37] justify-center">
                  <Center />
                  <Sidebar />
                </main>
              </div>
            </SidebarViewProvider>
          </DocsProvider>
        </CollapseSidebarProvider>
      </CollapseProvider>
    </ThemeProvider>
  );
}

export default App;
