import React from 'react';
import {Container, H2, BookList} from './styles';
import Book from '../Book';

const BooksContainer = ({books, pickBook, isPanelOpen}) => {
  return (
    <Container $isPanelOpen={isPanelOpen}>
      <H2>All Books</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  );
};

export default BooksContainer;
