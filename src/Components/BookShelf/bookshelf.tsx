import { useNavigate, useLocation } from 'react-router-dom';
import useBooks from '../../Hooks/useBooks';
import styles from './styles.module.css';

interface BookShelfProps {
  category: string;
  endpoint: string;
}

const BookShelf: React.FC<BookShelfProps> = ({ category, endpoint }) => {
  const { books, loading, error } = useBooks(endpoint, category);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <p>Carregando Livros...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const handleBookClick = (id: number) => {
    navigate(`/book/${id}`, { state: { from: location.pathname } });
  };

  return (
    <div className={styles.shelf}>
      <div className={styles.header}>
        <h2>{category}</h2>
        <button className={styles.viewMore}>Ver mais</button>
      </div>
      <div className={styles.books}>
        {books && books.length > 0 ? (
          books.slice(0, 4).map(book => (
            <div key={book.id} className={styles.book} onClick={() => handleBookClick(book.id)}>
              <div className={styles.cape}><img src={book.capa} alt={book.titulo} /></div>
              <div className={styles.info}>
                <h3>{book.titulo}</h3>
                <p>{book.autor}</p>
                <p className={styles.bookPrice}>{book.preco !== undefined ? `R$ ${book.preco.toFixed(2)}` : 'Preço indisponível'}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum livro disponível</p>
        )}
      </div>
    </div>
  );
};

export default BookShelf;