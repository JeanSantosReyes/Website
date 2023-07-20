import { FC, useState } from 'react';
import Card from '../Card/Card';
import { skills } from '../../data';
import './Accordion.css';

const Accordion: FC = () => {

    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const toggleAccordion = (index: number) => setActiveIndex(activeIndex === index ? -1 : index);

    return (
        <div className='accordion accordion-flush' id='accordionWebsite'>
            {
                skills.map(({ title, icon, cont }, index) => (
                    <div className='accordion-item' key={index}>
                        <h2 className='accordion-header' id={`heading-${index}`}>
                            <button
                                className={`accordion-button fw-bold ${activeIndex === index ? '' : 'collapsed'}`}
                                type='button'
                                onClick={() => toggleAccordion(index)}
                            >
                                <i className={icon}>
                                    <span className='text-color-icon'> {title}</span>
                                </i>
                            </button>
                        </h2>
                        <div
                            id={`heading-${index}`}
                            className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                            aria-labelledby={`heading-${index}`}
                            data-bs-parent='#accordionWebsite'
                        >
                            <div className='accordion-body'>
                                <div className="row">
                                    {
                                        cont.map(({ title, body }, index) => (
                                            <div
                                                className={`${cont.length === 1 ? 'col-12' : 'col-lg-4 col-md-6 col-sm-12 my-2'}`}
                                                key={index}
                                            >
                                                {
                                                    body.length === 1
                                                        ? <Card cardClassName='text-center' title={title} text={body[0]} />
                                                        : <Card cardClassName='text-center' title={title} text={body} />
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion