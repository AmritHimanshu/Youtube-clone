import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { selectIsMenuOpen } from './features/menuSlice';
import { auth } from './firebase';
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import SidebarClose from './SidebarClose';
import VideoSection from './VideoSection';
import FetchApiVideo from './fetchApiVideo'
import Search from './Search';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {

  const user = useSelector(selectUser);

  const menuOpen = useSelector(selectIsMenuOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [])

  return (

    <Router>

      {!user ? (<Login />) : (

        <div className="app">
          <Header />

          <div className="app__page">
            {(menuOpen) ? (<Sidebar />) : (<SidebarClose />)}

            <Routes>
              {/* <Route exact path='/' element={<FetchApiVideo />} /> */}
              <Route exact path='/' element={<VideoSection />} />
              <Route exact path='/search/:searchTerm' element={<Search />}></Route>
            </Routes>

          </div>

        </div>
      )}

    </Router>
  );
}

export default App;
