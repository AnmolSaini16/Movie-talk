import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieItem from './components/MovieItem';
import TVItem from './components/TvItem';
import { login, logout, selectuser } from './features/userSlice';
import { auth } from './Firebase';
import HomeScreen from './Pages/HomeScreen';
import LoginScreen from './Pages/LoginScreen';
import Movies from './Pages/Movies';
import SearchPage from './Pages/SearchPage';
import TVshows from './Pages/TVshows';

function App() {
  const user = useSelector(selectuser)
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if (userauth) {
        dispatch(login({
          name: userauth.displayName,
          email: userauth.email,
          profilePic: userauth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  })


  return (
    <div className="App">
        { !user ?
         ( <LoginScreen />)
          : 
         (
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/tvshows' element={<TVshows/>} />
              <Route path='/search'>
                <Route path=':searchId' element={<SearchPage />} />
              </Route>
              <Route path='/clickedmovieitem'>
                <Route path=':movieId' element={<MovieItem />} />
              </Route>
              <Route path='/clickedTvitem'>
                <Route path=':tvId' element={<TVItem />} />
              </Route>
           </Routes>
         )
        }  
      
    </div>
  );
}

export default App;
