import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationQuiz } from './NavigationQuiz';
import { MainPage, Employees, Operations } from '../Pages';
import './AppRouter.scss';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/operations' element={<Operations />} />
      </Routes>
      <NavigationQuiz />
    </Router>
  );
};
