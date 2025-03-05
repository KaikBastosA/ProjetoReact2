import { useParams } from 'react-router-dom';
import useBook from '../../Hooks/useBook';
import styles from './styles.module.css';
import ReturnArrow from '../../Components/ReturnArrow/returnarrow';

export default function Book() {
    const { id } = useParams<{ id: string }>();
    const { book, loading, error } = useBook('http://localhost:3001/livros', Number(id));

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!book) {
        return <p>Livro não encontrado</p>;
    }

    return (
        <>
            <div className={styles.header}>
                <ReturnArrow/>
                <h1>Detalhes do livro</h1>
            </div>
            <div className={styles.bookDetails}>
                <div className={styles.bookImage}><img src={book.capa} alt={book.titulo} /></div>
                <div className={styles.bookInfo}>
                    <h2>{book.titulo}</h2>
                    <h3>{book.autor}</h3>
                    <h4>Sinopse</h4>
                    <p>{book.sinopse}</p>
                </div>
            </div>
            <div className={styles.Btn}>
            <button className={styles.addToCartBtn}>
                <span className={styles.price}>R$ {book.preco.toFixed(2)}</span>
                <span>Adicionar ao carrinho</span>
            </button>
            </div>
        </>
    );
}