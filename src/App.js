import React, {Component} from 'react';
import classes from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import UsersPage from "./components/UsersPage/UsersPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login/Login";
import Footer from "./components/Footer/Footer";
import DialogsPage from "./components/DialogsPage/DialogsPage";
import SplashScreen from "./components/common/SpalshScreen/SplashScreen";
import {compose} from "redux";
import {connect} from "react-redux";
import {appInitialize} from "./redux/appReducer";
import HomePage from "./components/HomePage/HomePage";
import MyProfilePage from "./components/ProfilePage/MyProfilePage";

class App extends Component {
    componentDidMount() {
        this.props.appInitialize()
    }

    render() {
        if (!this.props.isInitialized) {
            return <SplashScreen/>
        }

        return (
            <BrowserRouter>
                <div className={classes.background}/>
                <div className={classes.appWrapper}>
                    <Navbar/>
                    <div className={classes.mainWrapper}>
                        <Header/>
                        <div>
                            <div className={classes.content}>
                                <Switch>
                                    <Route path={'/'} exact component={HomePage}/>
                                    <Route path={'/profile'} exact component={MyProfilePage}/>
                                    <Route path={'/profile/:userId?'} component={ProfilePage}/>
                                    <Route path={'/dialogs/:userId?'} component={DialogsPage}/>
                                    <Route path={'/users'} component={UsersPage}/>
                                    <Route path={'/login'} component={Login}/>
                                </Switch>
                            </div>
                        </div>

                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>)
    }
}

const mapStateToProps = state => ({
    isInitialized: state.appReducer.isInitialized
})

export default compose(
    connect(mapStateToProps, {appInitialize})(App));