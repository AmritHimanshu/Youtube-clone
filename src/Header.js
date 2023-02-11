import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { closeMenu, openMenu, selectIsMenuOpen } from './features/menuSlice';
// import { closeMenu, openMenu, selectIsMenuOpen, logout, selectUser } from './features/userSlice';
import { Avatar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import CreateIcon from '@mui/icons-material/Create'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './Header.css'

function Header() {

    const [inputSearch, setInputSearch] = useState('');

    const user = useSelector(selectUser);

    const selectMenu = useSelector(selectIsMenuOpen);

    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logout());
    }

    const menuOpen = () => {

        // console.log(selectMenu)
        if (selectMenu == '1') {
            dispatch(closeMenu());
        }
        else {
            dispatch(openMenu());
        }
    }


    return (
        <div className='header'>

            <div className="header__left">
                <IconButton onClick={menuOpen}>
                    <MenuIcon />
                </IconButton>
                <Link to='/'>
                    <img className='header__logo' src='https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png' alt='' />
                </Link>
            </div>

            <div className="header__input">
                <input value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} placeholder='Search' type="text" />
                <Link to={`/search/${inputSearch}`} title='search'>
                    <SearchIcon className='header__input__searchIcon' />
                </Link>
            </div>

            <div className="header__right">
                <IconButton title='Create' >
                    <CreateIcon />
                </IconButton>
                <IconButton title='Notifications'>
                    <NotificationsNoneIcon />
                </IconButton>
                <Avatar src={user.photoURL} style={{ cursor: 'pointer', width: '35px', height: '35px', marginLeft: '10px' }} onClick={signOut}>{user.displayName[0]}</Avatar>
            </div>

        </div>
    )
}

export default Header