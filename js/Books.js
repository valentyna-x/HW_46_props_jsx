export const Book = (props) => {
    return (
        <div className='block__item'>
            <h3>{props.name}</h3>
            <p>{props.year}</p>
            <p>{props.price}</p>
        </div>
    );
};

