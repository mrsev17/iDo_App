import { AppRouter } from './routes';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { useSelector } from 'react-redux';
import { stateToogle } from './interfaces';
import './App.scss';

function App() {
  const mode: boolean = useSelector((state: stateToogle) => state.mode.toggle);
  return (
    <div className={mode ? 'app app-dark-body' : 'app'}>
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
