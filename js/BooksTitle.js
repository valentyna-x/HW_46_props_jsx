import './BooksTitle';

const BooksTitle = (props) => {
    return (
        <h1 id='title' className='books__title'>{props.title}</h1>
    );
}

export default BooksTitle;
