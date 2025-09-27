import Dashboard from "./components/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <DashboardProvider>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
        {/* Header */}
       <header className="w-full bg-white shadow-md py-6 mb-6 flex items-center justify-between px-6">
      <h1 className="text-3xl font-bold text-black tracking-tight">
         Dashboard
      </h1>
        <div className="w-1/3">
          <SearchBar />
        </div>
      </header>


        {/* Dashboard */}
        <main className="w-full max-w-6xl">
          <Dashboard />
          
        </main>
      </div>
      
    </DashboardProvider>
  );
}

export default App;
