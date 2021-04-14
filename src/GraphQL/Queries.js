import { gql } from '@apollo/client';

export const GET_ALL_PEOPLE = gql`
    query GetAllPeople($cursor: String){
        allPeople (first: 5, after:$cursor){
            people {
                id
                name
                homeworld {
                    id
                    name
                }
                species {
                    id
                    name
                } 
                eyeColor
                hairColor
                skinColor
                birthYear
                vehicleConnection{
                  vehicles {
                    name
                  }
                }
            }
            pageInfo{
                endCursor
                hasNextPage
            }
        }
    }
`;
