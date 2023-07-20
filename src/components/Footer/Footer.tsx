import { FC, useEffect } from 'react';
import { Tooltip } from 'bootstrap';
import { social_networks } from '../../data';
import './Footer.css';

const Footer: FC = () => {

    const year: number = new Date().getFullYear();

    useEffect(() => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            .map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl, { trigger: 'hover', placement: 'bottom', offset: [0, 10] }));
        return () => tooltipTriggerList.forEach(tooltip => tooltip.dispose());
    }, [])

    return (
        <footer className='container'>
            <div className='bg-light border-style text-center my-5 pt-4 pb-2'>
                <h3 className='fw-bold'>REDES SOCIALES</h3>
                <div>
                    {
                        social_networks.map(({ social_network, url, icon }) => (
                            <a
                                key={social_network}
                                href={url}
                                role='button'
                                className='mx-2'
                                target='_blank'
                                rel='noreferrer'
                                data-bs-toggle='tooltip'
                                data-bs-title={social_network}
                            >
                                <i className={icon} />
                            </a>
                        ))
                    }
                </div>
                <div className='my-2'>
                    <span>© {year} Copyright <img src='/favicon.ico' alt='Logo' height='40' className='align-center' /></span>
                </div>
            </div >
        </footer >
    )
}

export default Footer