import './App.css';
import ScenarioSelector from './components/ScenarioSelector/ScenarioSelector';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <NavBar />
      <main className="MainContent"> {/* Add space for NavBar and Footer */}
        <ScenarioSelector />
      </main>
      <Footer />
    </div>
  );
}

export default App;
