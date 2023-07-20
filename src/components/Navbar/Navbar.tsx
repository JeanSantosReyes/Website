import { FC, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: FC = () => {

    const [navbar, setNavbar] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();
    const color: string = navbar ? 'black' : 'white';

    const changeBackground = () => window.scrollY >= 50 ? setNavbar(true) : setNavbar(false);

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, [navbar])

    useEffect(() => {
        document.getElementById('navbarMenu')?.classList.remove('show');
        setIsOpen(false);
    }, [location])

    return (
        <nav className={`${navbar ? 'navbar scroll' : 'navbar'} navbar-expand-lg fixed-top`}>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <i className='bi bi-fire bi-xl' style={{ color }} />
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarMenu' aria-controls='navbarMenu' aria-expanded='false' aria-label='Toggle navigation' onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen
                            ? <i className='bi bi-x-square-fill bi-xl' style={{ color }} />
                            : <i className='bi bi-list bi-xl' style={{ color }} />
                    }
                </button>
                <div className='collapse navbar-collapse' id='navbarMenu'>
                    <div className='navbar-nav me-auto mb-2 mb-lg-0' />
                    <div className='navbar-nav gap-4 row-gap-2'>
                        <NavLink className='nav-link' to='/'><i className='bi bi-house-fill me-2' />Inicio</NavLink>
                        <NavLink className='nav-link' to='/about'><i className='bi bi-info-circle-fill me-2' />Acerca de mí</NavLink>
                        <NavLink className='nav-link' to='/portfolio'><i className='bi bi-microsoft me-2' />Portfolio</NavLink>
                    </div>
                </div>
            </div>
        </nav >
    )
}
export default Navbar