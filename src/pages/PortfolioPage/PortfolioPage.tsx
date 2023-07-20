import { FC, useEffect } from 'react';
import { Masonry } from '../../components';
import { projects } from '../../data';
import './PortfolioPage.css';

interface Props {
    progress: number;
    setProgress: (value: number) => void;
}

const PortfolioPage: FC<Props> = ({ setProgress, progress }) => {

    useEffect(() => {
        setProgress(100);
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#000b76" d="M0,128L20,133.3C40,139,80,149,120,165.3C160,181,200,203,240,197.3C280,192,320,160,360,149.3C400,139,440,149,480,138.7C520,128,560,96,600,74.7C640,53,680,43,720,69.3C760,96,800,160,840,165.3C880,171,920,117,960,96C1000,75,1040,85,1080,101.3C1120,117,1160,139,1200,128C1240,117,1280,75,1320,64C1360,53,1400,75,1420,85.3L1440,96L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
            <div className="container mt-3 mt-md-0">
                {
                    progress === 0
                        ? (
                            <Masonry
                                items={projects}
                                config={{
                                    columns: [1, 2, 3],
                                    gap: [24, 12, 24],
                                    media: [640, 768, 1024],
                                }}
                                render={({ titulo, img, enlace }, idx) => (
                                    <div key={idx} className='card border-style portfolio' onClick={() => window.open(enlace, '_blank')}>
                                        <img src={img} className="card-img" alt={titulo} />
                                        <div className="card-img-overlay">
                                            <h3 className="card-title">{titulo}</h3>
                                        </div>
                                    </div>
                                )}
                            />
                        ) : (
                            <div className="container d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}
export default PortfolioPage