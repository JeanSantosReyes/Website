import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <section className='notfound d-flex justify-content-center align-items-center'>
            <span />
            <span />
            <span />
            <span />
            <span />
            <div className='container text-center'>
                <h1 className='text-center codigo404'>404</h1>
                <h2 className='text-center fw-bold'>Lo sentimos,<br />¡Página no encontrada!</h2>
                <Link to='/' className='btn btn-outline-primary fs-5 my-4'>
                    <i className='bi bi-house-fill' ></i> Ir al inicio
                </Link>
            </div>
            <span />
            <span />
            <span />
            <span />
            <span />
        </section>
    )
}

export default PageNotFound