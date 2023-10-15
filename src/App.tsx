import {AppRouter} from './routes';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AppRouter/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
