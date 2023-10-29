// new file added
// Important for useMutation: We bring in gql from the @apollo/client library to allow us to parse mutations (and queries) as template literals   
import { gql } from '@apollo/client';

export const Login_User = gql`
  mutation loginUser($name: String!) {
    loginUser(input: {name: $name}) {
      _id
      name
    }
  }
`;

export const Add_User = gql`
  mutation addUser($name: String!) {
    loginUser(input: {name: $name}) {
      _id
      name
    }
  }
`;

export const Save_Book = gql`
  mutation saveBook($title: String!) {
    loginUser(input: {title: $title}) {
      _id
      title
    }
  }
`;

export const Remove_Book = gql`
  mutation removeBook($title: String!) {
    removeBook(input: {title: $title}) {
      _id
      title
    }
  }
`;