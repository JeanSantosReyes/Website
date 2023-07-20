import './Card.css';

interface Props {
    title?: string;
    subtitle?: string;
    text?: string | string[];
    degree?: string;
    cardClassName?: string;
    bodyClassName?: string;
    titleClassName?: string;
    textClassName?: string;
}

const Card: React.FC<Props> = ({
    title, subtitle, text, degree,
    cardClassName, bodyClassName, titleClassName, textClassName
}) => {

    const classNameCard = cardClassName ? `card border-style ${cardClassName}` : 'card border-style';
    const classNameBody = bodyClassName ? `card-body ${bodyClassName}` : 'card-body'
    const classNameTitle = titleClassName ? `card-title ${titleClassName}` : 'card-title';
    const classNameSubtitle = 'card-subtitle mb-3 fs-6 text-body-secondary';
    const classNameText = textClassName ? `card-text ${textClassName}` : 'card-text';
    const classNameDegree = 'fw-bold text-primary';
    const classNameList = 'list-group';
    const classNameListItem = 'list-group-item';

    return (
        <div className={classNameCard}>
            <div className={classNameBody}>
                <h5 className={classNameTitle}>{title}</h5>
                {subtitle && <h5 className={classNameSubtitle}>{subtitle}</h5>}
                <div className={classNameText}>
                    {
                        typeof text === 'string'
                            ? (
                                <>
                                    <span>{text}</span>
                                    {degree && (
                                        <>
                                            <br />
                                            <span className={classNameDegree}>TITULO OBTENIDO:</span><br />
                                            <span>{degree}</span>
                                        </>
                                    )}
                                </>
                            ) : (
                                <ul className={classNameList}>
                                    {text!.map((item, index) => (
                                        <li className={classNameListItem} key={index}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )
                    }
                </div>
            </div>
        </div>
    )
}
export default Card