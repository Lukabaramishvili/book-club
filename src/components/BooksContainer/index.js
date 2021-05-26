import React from 'react';
import {Container, H2, BookList} from './styles';
import Book from '../Book';

const BooksContainer = ({books}) => {
  return (
    <Container>
      <H2>All Books</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </BookList>
    </Container>
  );
};

export default BooksContainer;
