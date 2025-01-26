import { Provider } from 'jotai';
import HeaderSection from "./components/HeaderFilters";
import Layout from "./Layout";

function App() {
  return (
    <Provider>
      <div className="flex flex-col h-screen overflow-hidden" dir="rtl">
        {/* Header Section */}
        <HeaderSection className="shrink-0 h-16 border-b bg-white shadow-sm" />
        
        {/* Main Content Area */}
        <main className="flex-1 flex overflow-hidden">
          <div className="w-full">
            <Layout/>
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;