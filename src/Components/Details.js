import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    titulo: {
      fontSize: "17pt",
      color: "rgba(0,0,0,1)"
    },
    contenido: {
      fontFamily: "Low Emphasis",
      fontSize: "17pt",
      color: "#828282"
    }
}));

function Details({information}){
    const classes = useStyles();

    console.log('holaaaaa',information);

    return (
        <React.Fragment>
            <List className={classes.root} key={information.id}>
                <ListItem>
                    <ListItemText> <h2 className={classes.titulo}>General Information</h2> </ListItemText>                                       
                </ListItem>
                <ListItem divider>
                    <ListItemText> <h2 className={classes.contenido}>Eye Color</h2> </ListItemText>
                    <ListItemSecondaryAction>
                        <h2 className={classes.contenido}>{information.eyeColor}</h2>
                    </ListItemSecondaryAction>                   
                </ListItem>
                <ListItem divider>
                    <ListItemText> <h2 className={classes.contenido}>Hair Color</h2> </ListItemText>
                    <ListItemSecondaryAction>
                        <h2 className={classes.contenido}>{information.hairColor}</h2>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem divider>
                    <ListItemText> <h2 className={classes.contenido}>Skin Color</h2> </ListItemText>
                    <ListItemSecondaryAction>
                        <h2 className={classes.contenido}>{information.skinColor}</h2>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem divider>
                    <ListItemText> <h2 className={classes.contenido}>Birth Year</h2> </ListItemText>
                    <ListItemSecondaryAction>
                        <h2 className={classes.contenido}>{information.birthYear}</h2>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText> <h2 className={classes.titulo}>Vehicles</h2> </ListItemText>                                                         
                </ListItem>
               
            </List>   
        </React.Fragment>      
);  
}
 
export {Details};