import { Book } from "./Books.js";
import { BooksTitle } from "./BooksTitle.js";



const App = () => {
    return (
        <section className='block'>
            <BooksTitle title='Books List' />
            <Book name='HTML5 for Children' year={2015} price='30$' />
            <Book name='CSS3 for Student' year={2019} price='20$' />
            <Book name='JS for Student' year={2021} price='50$' />
        </section>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
