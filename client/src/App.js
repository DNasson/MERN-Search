import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient, HttpLink } from '@apollo/react-hooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    Navbar: {
      ...Navbar,
      authorization: token ?  `Bearer ${token}` : '',
    }
  }
})
const client = new ApolloClient({
  link: authLink.concat(HttpLink),
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<SearchBooks />} 
          />
          <Route 
            path='/saved' 
            element={<SavedBooks />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;

// create apollo provider to make every request work with the apollo server