// new file added to directory
import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      skills
    }
  }
`;

// Important for Query Variables: To successfully execute this GraphQL query, you would need to provide a non-null ID value for the profileId argument. This value is passed using the $profileId variable, which represents the placeholder for the actual value in the query.
export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

// help from chatgpt here
export const GET_ME = gql`
  query GetMe {
    me {
      // specify the fields you want to retrieve here
    }
  }
`;