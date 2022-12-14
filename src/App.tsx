import React, {Component} from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store, { persistor } from "./Redux/redux-store";
import {WeatherHomepage} from "./components/WeatherHomepage/WeatherHomepage";
import { PersistGate } from 'redux-persist/integration/react';
import {WeatherInfo} from "./components/WeatherInfo/WeatherInfo";
import "antd/dist/antd.css";
import {Layout, Menu} from 'antd';
import {Link} from "react-router-dom";

const {Header, Content, Sider} = Layout;

const items = [
    {label: <Link to='/weather'>Home</Link>, key: 'item-1'}
];

class App extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{minHeight: "100vh"}}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo">
                    </div>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                        style={{marginTop: "60px"}}
                    >
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
                    <Content style={{margin: '24px 16px 0'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Switch>
                                <Route exact path='/'
                                       render={() => <Redirect to={"/weather"}/>}/>
                                <Route path='/weather'>
                                    <WeatherHomepage/>
                                </Route>
                                <Route path='/details'>
                                    <WeatherInfo/>
                                </Route>
                            </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = () => ({})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {})
)(App);

const WeatherApp: React.FC = () => {
    return <HashRouter>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppContainer/>
            </PersistGate>
        </Provider>
    </HashRouter>
}

export default WeatherApp;