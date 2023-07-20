import { FC, useEffect } from 'react';
import { Card, Timeline } from '../../components';
import { experience, header_info, studies } from '../../data';
import './AboutPage.css';

interface Props {
    setProgress: (value: number) => void;
}

const AboutPage: FC<Props> = ({ setProgress }) => {

    const { title, presentacion } = header_info;

    useEffect(() => {
        setProgress(100);
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {/* HEADER */}
            <header className='seccion-perfil-usuario  '>

                <div className='perfil-usuario-header '>
                    <div className='perfil-usuario-portada '>
                        <div className='perfil-usuario-avatar '>
                            <div className="scene">
                                <div className="blob"></div>
                            </div>
                        </div>
                        <div className="particle particle-1"></div>
                    </div>
                </div>

                <div className='perfil-usuario-body'>
                    <div className='perfil-usuario-bio'>
                        <h3 className='w-100 my-2 fs-3 fw-bold'>{title}</h3>
                        <p className='fs-6 text-body'>{presentacion}</p>
                    </div>
                </div>
            </header>

            {/* Experience */}
            <section className='container py-4'>
                <h2 className='text-center fw-bold'>Experiencia</h2>
                <div className='row'>
                    {
                        experience.map(({ lugar, tareas, color, icon }) => (
                            <div key={color} className='col-lg-4 col-md-6 col-sm-12 my-2 text-center'>
                                <div className='pb-1 pb-md-3'>
                                    <i className={icon} style={{ color, fontSize: '2.5rem' }} />
                                </div>
                                <Card title={lugar} text={tareas} />
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* TIMELINE */}
            <section style={{ backgroundColor: '#F0F2F5' }}>
                <div className='container py-5'>
                    <h2 className='text-center fw-bold'><i className='bi bi-book-half' /> Formación Académica</h2>
                    <Timeline data={studies} />
                </div>
            </section>
        </>
    )
}
export default AboutPage