import React, {Component} from 'react';
import classes from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/ProfilePage/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Auth/Login/LoginContainer";
import Footer from "./components/Footer/Footer";
import DialogsPageContainer from "./components/DialogsPage/DialogsPageContainer";
import SplashScreen from "./components/common/SpalshScreen/SplashScreen";
import {compose} from "redux";
import {connect} from "react-redux";
import {appInitialize} from "./redux/appReducer";
import Home from "./components/Home/Home";

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
                        <HeaderContainer/>
                        <div>
                            <div className={classes.content}>
                                <Route path={'/'} exact component={Home}/>
                                <Route path={'/profile/:userId?'} render={(props) => (
                                    <ProfileContainer key={props.match.params.userId} {...props}/>)}/>
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
}

const mapStateToProps = state => ({
    isInitialized: state.appReducer.isInitialized
})

export default compose(
    connect(mapStateToProps, {appInitialize})(App));