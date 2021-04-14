import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import {GetAllPeople} from './Components/GetPeople';
import Header from './Header/header'
import React, { useEffect, useState } from 'react';


function App() {
 
  return (
    <div>
      <Header/>
      <React.Fragment>
        <ApolloProvider client={client}>
          
                  <GetAllPeople/>        
                
        </ApolloProvider>
      </React.Fragment>  
    </div>     
  );
}

export default App;
