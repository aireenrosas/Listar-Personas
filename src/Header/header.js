import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#121212',        
  },
  title: {
    fontWeight: '600',
  }
}));

function Header() {
  const classes = useStyles();
  return (    
    <div>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.root}>          
          <Typography className={classes.title} variant="h6" color="inherit">
              Ravn Star Wars Registry
          </Typography>
        </Toolbar>
      </AppBar>
    </div>     
  )
}

export default Header;