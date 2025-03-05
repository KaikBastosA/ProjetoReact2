import { useEffect, useState } from 'react';
import axios from 'axios';

interface Book {
  id: number;
  titulo: string;
  autor: string;
  genero: string;
  preco: number;
  sinopse: string;
  capa: string;
}

const useBooks = (endpoint: string, category: string) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get(endpoint)
      .then(response => {
        const filteredBooks = response.data.filter((book: Book) => book.genero === category);
        setBooks(filteredBooks);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao buscar os livros');
        setLoading(false);
      });
  }, [endpoint, category]);

  return { books, loading, error };
};

export default useBooks;