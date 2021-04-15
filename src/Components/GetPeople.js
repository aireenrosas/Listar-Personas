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
import { makeStyles } from '@material-ui/core/styles';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },  
    title:{
        fontSize: '20px',
        fontWeight: '750',
    },
    loadding: {
        fontSize: '15px',
        color: "#828282",
    },
    fail: {
        fontSize: '15px',
        color: "#EC5757",
    }
}));

function GetAllPeople() {
    const { loading, error, data , fetchMore} = useQuery(GET_ALL_PEOPLE,{
        variables : { 
            type:"PUBLIC".toUpperCase(), 
            offset:0 , 
            limit: 5 
        },
    });
    const [ person, setPerson] = useState ();
    const classes = useStyles();
    
    const onclickFunction = (e) => {
        setPerson(e);
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


    if (loading) 
    {
        return (
            <Grid container>
                <Grid item xs={3} style={{paddingLeft:'7%'}}>
                    <Box borderRight={1}>
                        <ListItem classes={classes.loadding}>
                            <RotateLeftIcon/>
                            <ListItemText classes={{primary:classes.title}} 
                                primary="Loading" />
                        </ListItem>
                    </Box>
                </Grid>
            </Grid>
        );
    }

    if (error || !data) 
    {
        return (
            <Grid container>
                <Grid item xs={3} style={{paddingLeft:'7%'}}>
                    <Box borderRight={1}>
                        <ListItem classes={classes.fail}>
                            <RotateLeftIcon/>
                            <ListItemText classes={{primary:classes.title}} 
                                primary="Failed to Load Data" />
                        </ListItem>
                    </Box>
                </Grid>
            </Grid>
        );
    }

    return  <div>
                <Grid container>
                    <Grid item xs={3}>
                        <Box borderRight={1}> 
                            {data.allPeople.people.map((p)=>(
                                <List>
                                    <ListItem button divider key={p.id} onClick={()=>onclickFunction(p)}>
                                        <ListItemText classes={{primary:classes.title}}
                                            primary={p.name}
                                            secondary={p.species? p.species.name+' from '+p.homeworld.name :'Human from '+p.homeworld.name}
                                        />                                                                  
                                        <IconButton> 
                                            <ArrowForwardIosIcon /> 
                                        </IconButton>
                                    </ListItem>
                                </List>                                                                          
                            ), onLoading())}  
                        </Box>         
                    </Grid> 
                    <Grid item xs={9}>                 
                        {person ? <Details information={person}/>: null}   
                    </Grid>
                </Grid>                 
            </div>   
    }

export {GetAllPeople};