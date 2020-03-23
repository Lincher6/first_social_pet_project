import React from 'react';
import classes from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/ProfilePage/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import Footer from "./components/Footer/Footer";
import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.background}/>
            <div className={classes.appWrapper}>
                <Navbar/>
                <div className={classes.mainWrapper}>
                    <HeaderContainer/>
                    <div>
                        <div className={classes.content}>
                            <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                            <Route path={'/dialogs'} component={DialogsPageContainer}/>
                            <Route path={'/users'} component={UsersContainer}/>
                            <Route path={'/login'} component={LoginContainer}/>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;