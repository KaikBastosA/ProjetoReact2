import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import useBooks from '../../Hooks/useBooks';
import styles from './style.module.css';
import searchIcon from '../../assets/Search.png';
import ReturnArrow from '../../Components/ReturnArrow/returnarrow';

export default function BooksByCategory() {
    const { category } = useParams<{ category: string }>();
    const { books, loading, error } = useBooks('http://localhost:3001/livros', category || '');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleBookClick = (id: number) => {
        navigate(`/book/${id}`, { state: { from: location.pathname } });
    };

    const filteredBooks = books.filter(book =>
        book.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <p>Carregando Livros...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <div className={styles.searchBar}>
                    <img src={searchIcon} alt="search-icon" />
                    <input
                        type="text"
                        placeholder="Pesquisar por título"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
            </div>
            <div className={styles.header}>
                <ReturnArrow />
                <h1>{category}</h1>
            </div>
            <div className={styles.books}>
                {filteredBooks.length > 0 ? (
                    filteredBooks.map(book => (
                        <div key={book.id} className={styles.book} onClick={() => handleBookClick(book.id)}>
                            <div className={styles.cape}><img src={book.capa} alt={book.titulo} /></div>
                            <div className={styles.info}>
                                <h3>{book.titulo}</h3>
                                <div className={styles.description}>
                                    <p>{book.autor}</p>
                                    <p className={styles.bookPrice}>{book.preco !== undefined ? `R$ ${book.preco.toFixed(2)}` : 'Preço indisponível'}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Nenhum livro disponível</p>
                )}
            </div>
        </div>
    );
}