import { AppRouter } from './routes';
import { Header, Footer } from './components';
import { useSelector } from 'react-redux';
import { StateToogle } from './interfaces';
import './App.scss';

function App() {
  const mode: boolean = useSelector((state: StateToogle) => state.mode.toggle);
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
