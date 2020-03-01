import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import DialogsPage from "./components/DialogsPage/DialogsPage";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/profile'} render={ () => <ProfilePage state={props.state.profilePage} dispatch={props.dispatch} />}/>
                    <Route path={'/dialogs'} render={ () => <DialogsPage state={props.state.dialogsPage} dispatch={props.dispatch} />}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;