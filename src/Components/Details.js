import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        paddingTop: '0px',
    },
    titulo: {
        fontSize: "17pt",
        color: "#333333",
        padding: '(0,0,0,0)'
    },
    contenido: {
        fontSize: "17pt",
        color: "#828282",
        fontWeight: '700',
        padding: '(0,0,0,0)'
    },
   
}));

function Details({information}){
    const classes = useStyles();

    return (
        <React.Fragment>
            <List className={classes.root} key={information.id}>
                <ListItem>
                    <h2 className={classes.titulo}>General Information</h2>                                        
                </ListItem>
                <ListItem divider>
                    <h2 className={classes.contenido}>Eye Color</h2> 
                    <ListItemSecondaryAction>
                        <h4 className={classes.contenido}>{information.eyeColor}</h4>
                    </ListItemSecondaryAction>                   
                </ListItem>
                <ListItem divider>
                    <h2 className={classes.contenido}>Hair Color</h2> 
                    <ListItemSecondaryAction>
                        <h4 className={classes.contenido}>{information.hairColor}</h4>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem divider>
                    <h2 className={classes.contenido}>Skin Color</h2> 
                    <ListItemSecondaryAction>
                        <h4 className={classes.contenido}>{information.skinColor}</h4>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem divider>
                    <h2 className={classes.contenido}>Birth Year</h2> 
                    <ListItemSecondaryAction>
                        <h4 className={classes.contenido}>{information.birthYear}</h4>
                    </ListItemSecondaryAction>
                </ListItem>
                <br/>
                <br/>
                <ListItem>
                    <h2 className={classes.titulo}>Vehicles</h2>                                                          
                </ListItem>
                {information.vehicleConnection.vehicles.map( (v) =>(
                    <ListItem divider>
                        <h4 className={classes.contenido}>{v.name}</h4>                                
                    </ListItem>
                ))}
            </List>   
        </React.Fragment>      
);  
}
 
Details.propTypes = {
    information: PropTypes.shape({
        eyeColor: PropTypes.string,
        hairColor: PropTypes.string,
        skincolor: PropTypes.string,
        birthYear: PropTypes.string,
    })
}

export {Details};