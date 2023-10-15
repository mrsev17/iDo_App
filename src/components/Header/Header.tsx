import { ToggleSwitch } from "../ToggleSwitch"
import './Header.scss';

export const Header = () => {
    return (
        <header className="fade-in">
            <div className='header__right-side'>
                <h2>Quiz App</h2>
            </div>
            <div className='header__left-side'>
                <ToggleSwitch />
            </div>
        </header>
    )
}