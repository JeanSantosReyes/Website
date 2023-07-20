import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollTop.css';

const ScrollTop: FC = () => {

    const [visible, setVisible] = useState<boolean>(false);
    const { pathname } = useLocation();

    const toggleVisible = () => setVisible(window.scrollY >= 300 ? true : false);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)
        return () => window.removeEventListener('scroll', toggleVisible)
    }, [])

    useEffect(() => window.scrollTo(0, 0), [pathname]);

    return (
        <div className={`${visible ? 'p-scrolltop' : 'hide'}`} onClick={scrollToTop}>
            <i className='bi bi-chevron-up' />
        </div>
    );
}
export default ScrollTop