import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationQuiz } from './NavigationQuiz';
import { MainPage, HtmlCard, CssCard, JavaScriptCard } from '../Pages';
import './AppRouter.scss';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/html-quiz' element={<HtmlCard />} />
        <Route path='/css-quiz' element={<CssCard />} />
        <Route path='/javascript-quiz' element={<JavaScriptCard />} />
      </Routes>
      <NavigationQuiz />
    </Router>
  );
};
