import { FC, useEffect } from 'react';
import { Accordion, Banner } from '../../components';
import './HomePage.css';

interface Props {
    setProgress: (value: number) => void;
}

const HomePage: FC<Props> = ({ setProgress }) => {

    useEffect(() => {
        setProgress(100);
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {/* Banner */}
            <Banner />

            {/* LISTA DE SERVICIOS - ACORDEON*/}
            <div className='container'>
                <div className='bg-light border-style'>
                    <h3 className='text-center fw-bold'>CONOCIMIENTOS</h3>
                    <div className='container-acordeon my-3 my-md-4'>
                        <Accordion />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage