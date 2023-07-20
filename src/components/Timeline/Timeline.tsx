import Card from '../Card/Card';
import { IStudies } from '../../interfaces';
import './Timeline.css';

interface Props {
    data: IStudies[];
}

const Timeline: React.FC<Props> = ({ data }) => {

    return (
        <div className='p-timeline p-timeline-alternate p-timeline-vertical'>
            {
                data.map((item, index) => {
                    const connector = index !== data.length - 1 && <div className='p-timeline-event-connector'></div>;
                    return (
                        <div key={index} className='p-timeline-event'>
                            <div className='p-timeline-event-opposite' />
                            <div className='p-timeline-event-separator'>
                                <span className='p-timeline-event-marker' style={{ backgroundColor: item.color }}>
                                    <i className={item.icon}></i>
                                </span>
                                {connector}
                            </div>
                            <div className='p-timeline-event-content'>
                                <Card
                                    bodyClassName='p-4 text-center text-md-start'
                                    title={item.formacion}
                                    subtitle={item.anio}
                                    text={item.institucion}
                                    degree={item.titulo}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Timeline