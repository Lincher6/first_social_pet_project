import React from 'react';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/ProfilePage/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Auth/Login/LoginContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.appWrapper}>
                <Navbar/>
                <div className={classes.mainWrapper}>
                    <HeaderContainer/>
                    <div className={classes.content}>
                        <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                        <Route path={'/dialogs'} component={DialogsPage}/>
                        <Route path={'/users'} component={UsersContainer}/>
                        <Route path={'/login'} component={LoginContainer}/>
                    </div>
                    <footer>sdasad</footer>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;