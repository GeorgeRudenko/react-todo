import React from "react";
import s from './Main.module.css';

import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

import Header from './../Header/Header';

import Base from '../Pages/Base/Base';
import MyDay from './../Pages/MyDay/MyDay';
import Important from './../Pages/Important/Important';
import Planed from './../Pages/Planed/index';
import Tasks from './../Pages/Tasks/Tasks';
import Profile from './../Pages/Profile/Profile';
import Settings from './../Pages/Settings/Settings';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navMenuToggle: this.props.toggleStatus
        };
    }

    static getDerivedStateFromProps(nextProps){
        return {
            navMenuToggle: nextProps.toggleStatus
        };
    }

    render() {
        return (
            <div className={this.state.navMenuToggle ? `${s.main} ${s.toggle}` : `${s.main}`}>
                <Header isToggle={this.state.navMenuToggle} />
                <Switch>
                    <Route exact path="/" render={() => (
                        <Base />
                    )} />
                    <Route path="/my-day" render={() => (
                        <MyDay />
                    )} />
                    <Route path="/important" render={() => (
                        <Important />
                    )} />
                    <Route path="/planed" render={() => (
                        <Planed />
                    )} />
                    <Route path="/tasks" render={() => (
                        <Tasks />
                    )} />
                    <Route path="/profile" render={() => (
                        <Profile />
                    )} />
                    <Route path="/settings" render={() => (
                        <Settings />
                    )} />
                </Switch>
            </div>
        );
    }
}

export default Main;