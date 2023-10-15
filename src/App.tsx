import {AppRouter} from './routes';
import './App.scss';
import { ToggleSwitch } from './components/ToggleSwitch';

function App() {
  return (
    <div className="app">
      <header>
        <div className='header__right-side'></div>
        <div className='header__left-side'>
          <ToggleSwitch />
        </div>
      </header>
      <AppRouter/>
    </div>
  );
}

export default App;
