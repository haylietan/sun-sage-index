import { gql } from '@apollo/client';

export const GET_SUNSCREENS = gql`
  query GetSunscreens {
    sunscreens {
      id
      name
      brand
      spf
      tag
      skinType
      finish
      isReefSafe
      isWaterResistant
      rating
    }
  }
`;
