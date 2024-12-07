import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!, $email: String!) {
    login(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
        bookCount
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation CreateUser($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
        password
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
        bookCount
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation SaveBook($book: BookInput!) {
    saveBook(book: $book) {
      _id
      username
      email
      password
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
      bookCount
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation DeleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      password
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
      bookCount
    }
  }
`;
