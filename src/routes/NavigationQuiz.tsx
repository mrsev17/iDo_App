import { Link, useLocation } from "react-router-dom"
import './AppRouter.scss';

export const NavigationQuiz = () => {
    const location = useLocation();
    return (
        <nav className="nav-wrapper">
            <Link className={location.pathname === "/javascript-quiz" ? "active" : ""} to='/javascript-quiz'>JavaScript</Link>
            <Link className={location.pathname === "/html-quiz" ? "active" : ""} to='/html-quiz'>HTML</Link>
            <Link className={location.pathname === "/css-quiz" ? "active" : ""} to='/css-quiz'>CSS</Link>
            <Link className={location.pathname === "/" ? "active" : ""} to='/'>Instruction</Link>
        </nav>
    )
}