import { useQuery } from '@apollo/client';
import { GET_ALL_PEOPLE } from '../GraphQL/Queries';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect, useState } from 'react';
import {Details} from './Details';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Update } from '@material-ui/icons';

function sendId(information){
    console.log(information);
    
}

function GetAllPeople() {
    const { loading, error, data , fetchMore} = useQuery(GET_ALL_PEOPLE,{
        variables : { 
            type:"PUBLIC".toUpperCase(), 
            offset:0 , 
            limit: 5 
        },
    });
    const [ person, setPerson] = useState ();
   
    
    const onclickFunction = (e) => {
        setPerson(e);
    }
     if(data){
         console.log(data);
     }

    const onLoading = () => {
        fetchMore({
            variables:{
                cursor: data.allPeople.pageInfo.endCursor
            },
            updateQuery: (prev, {fetchMoreResult}) => {
                const newPeople = fetchMoreResult.allPeople.people;
                const pageInfo = fetchMoreResult.allPeople.pageInfo;
                return newPeople.length ? {
                    allPeople: {
                        __typename: prev.allPeople.__typename,
                        people: [...prev.allPeople.people,...newPeople],
                        pageInfo
                    }
                }: prev;
            }
        })
    }


    if (loading) return 'Loading';
    if (error || !data) return `Error! ${error.message}`;

    return  <div>
                <Grid container>
                    <Grid item xs={3}>
                        <Box borderRight={1}> 
                            {data.allPeople.people.map(p=>{
                            return  <List>
                                        <ListItem button divider key={p.id} onClick={()=>onclickFunction(p)}>
                                            <ListItemText
                                                primary={p.name}
                                                secondary={p.species? p.species.name+' from '+p.homeworld.name :'Human from '+p.homeworld.name}
                                            />                                                                  
                                            <IconButton> 
                                                <ArrowForwardIosIcon /> 
                                            </IconButton>
                                        </ListItem>
                                    </List>                                                                          
                            }, onLoading())}  
                        </Box>         
                    </Grid> 
                    <Grid item xs={9}>                 
                        {person ? <Details information={person}/>: null}   
                    </Grid>
                </Grid>                 
            </div>   
  }


export {GetAllPeople};