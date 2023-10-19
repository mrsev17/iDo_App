import { useSelector } from 'react-redux';
import { stateToogle } from '../../interfaces';
import './Footer.scss';

export const Footer = () => {
    const mode = useSelector((state:stateToogle) => state.mode.toggle)
    return (
        <footer className={mode ? 'fade-in dark-footer' : 'fade-in'}>
            <div className='footer__right-side'></div>
            <div className='footer__left-side'></div>
        </footer>
    )
}