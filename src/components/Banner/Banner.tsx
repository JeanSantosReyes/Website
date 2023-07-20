import img from '../../assets/images/developer.png';
import './Banner.css';

const Banner: React.FC = () => {
    return (
        <section className='banner' >
            <div className='container'>
                <div className='row align-items-center text-white'>
                    <div className='col-md-6 text-center text-md-start animate__zoomIn'>
                        <h1 className='display-2'>
                            <span className='title'>Frontend Developer</span>
                            <span className='description lh-base'>Jean Santos Reyes</span>
                        </h1>
                        <div className='d-flex mt-3 gap-3 justify-content-center justify-content-md-start align-items-center'>
                            <a href='mailto:santosjeand@gmail.com' role='button'>
                                <img src='https://cdn-icons-png.flaticon.com/512/5968/5968534.png' alt='Gmail' style={{ width: '40px', height: '40px', animation: 'none' }} />
                            </a>
                            <a href='https://www.linkedin.com/in/jean-santos97' role='button' target='_blank' rel='noreferrer'>
                                <i className='bi bi-linkedin' />
                            </a>
                            <a href='https://github.com/JeanSantosReyes' role='button' target='_blank' rel='noreferrer'>
                                <i className='bi bi-github' />
                            </a>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3 mt-md-0 animate__zoomIn'>
                        <img src={img} alt='Code' />
                    </div>
                </div>
            </div>
            <svg className='hero-waves' xmlns='http://www.w3.org/2000/svg' viewBox='0 24 150 30' preserveAspectRatio='none'>
                <defs>
                    <path id='wave-path'
                        d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
                </defs>
                <g className='wave1'>
                    <use href='#wave-path' x='50' y='3' fill='rgba(255,255,255, .1)' />
                </g>
                <g className='wave2'>
                    <use href='#wave-path' x='50' y='0' fill='rgba(255,255,255, .2)' />
                </g>
                <g className='wave3'>
                    <use href='#wave-path' x='50' y='9' fill='#fff' />
                </g>
            </svg>
        </section>
    )
}
export default Banner