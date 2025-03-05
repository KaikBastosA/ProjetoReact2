import BookShelf from '../../Components/BookShelf/bookshelf';
import styles from './styles.module.css';

export default function Home() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.bannerContent}>
                    <h1 className={styles.yellow}>25% de desconto</h1>
                    <h1>nos livros do Paulo Coelho!</h1>
                </div>
            </div>
            <div>
                <BookShelf category="Best-sellers" endpoint="http://localhost:3001/livros" />
                <BookShelf category="Clássicos" endpoint="http://localhost:3001/livros" />
                <BookShelf category="Infantil" endpoint="http://localhost:3001/livros" />
                <BookShelf category="Suspense" endpoint="http://localhost:3001/livros" />
                <BookShelf category="Distopia" endpoint="http://localhost:3001/livros" />
                <BookShelf category="Ficção Científica" endpoint="http://localhost:3001/livros" />
                <BookShelf category="Fantasia" endpoint="http://localhost:3001/livros" />

            </div>
        </>
    );
}
