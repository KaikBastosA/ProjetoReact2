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

const useBook = (endpoint: string, id: number) => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`${endpoint}/${id}`)
      .then(response => {
        setBook(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erro ao buscar o livro');
        setLoading(false);
      });
  }, [endpoint, id]);

  return { book, loading, error };
};

export default useBook;