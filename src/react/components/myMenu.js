/**
 * Created by DELL on 2017/11/14.
 */
import React from 'react';
import { Router , Switch } from 'react-router';
import {Route,Link ,BrowserRouter} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import axios from "axios";
import {config} from "./../../baseConfig"
import PicCarousel from './picCarousel';
import Test1 from './test1';
import Test2 from './test2';
import Test3 from './test3';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class MyMenu extends React.Component {
    constructor(props) {
        super(props);
        let leftSubMenu = [];
        this.state = {
            headerMenuKeys:['1'],
            //默认左侧栏内容
            leftSubMenu:leftSubMenu,
        }
    }
    render() {
        debugger
        return (
            <Layout>
                <Header className="header" style={{height:'40px'}}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={this.state.headerMenuKeys}
                        style={{ lineHeight: '40px' }}
                        onClick={this.headerMenuSelectChange}
                    >
                        <Menu.Item key="1">
                            <BrowserRouter ><Link to="/test">首页</Link></BrowserRouter>
                        </Menu.Item>
                        <Menu.Item key="2" >关于世纪</Menu.Item>
                        <Menu.Item key="3">世纪风采</Menu.Item>
                        <Menu.Item key="4">资质荣誉</Menu.Item>
                        <Menu.Item key="5">联系我们</Menu.Item>
                    </Menu>
                </Header>
                <PicCarousel />
                <Content style={{ padding: '0 50px' }}>

                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff', float: 'left'}}>
                            <Menu
                                mode="inline"
                                selectedKeys={this.state.layoutMenuSelectedKeys}
                                openKeys={this.state.layoutMenuOpenKeys}
                                style={{ height: '100%' }}
                                onClick={this.layoutMenuSelectChange}
                            >
                                {this.state.leftSubMenu}
                            </Menu>
                        </Sider>

                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <ContentRoute />
                        </Content>

                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    HUAINING SHIJI ©2016 Created by HUAINING SHIJI
                </Footer>
            </Layout>
        );
    }

    headerMenuSelectChange = (value) => {
        let newlayoutMenuSelectKeys = [];
        let newlayoutMenuOpenKeys = [];
        let newleftSubMenu = [];
        switch (value.key) {
            case "2":
                newleftSubMenu.push(
                    <SubMenu key="sub1" title={<span><Icon type="laptop" />关于世纪</span>}>
                        <Menu.Item key="6">
                            <BrowserRouter ><Link to="/test1">介绍世纪</Link></BrowserRouter>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <BrowserRouter ><Link to="/test2">发展历程</Link></BrowserRouter>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <BrowserRouter ><Link to="/test3">世纪文化</Link></BrowserRouter>
                        </Menu.Item>
                    </SubMenu>
                );
                newlayoutMenuSelectKeys.push("6");
                newlayoutMenuOpenKeys.push("sub1");
                break;
            case "3":
                newleftSubMenu.push(
                    <SubMenu key="sub2" title={<span><Icon type="camera-o" />世纪风采</span>}>
                        <Menu.Item key="9">职工天地</Menu.Item>
                        <Menu.Item key="10">园区角落</Menu.Item>
                    </SubMenu>
                );
                newlayoutMenuSelectKeys.push("9");
                newlayoutMenuOpenKeys.push("sub2");
                break;
            case "4":
                newleftSubMenu.push(
                    <SubMenu key="sub3" title={<span><Icon type="notification" />资质荣誉</span>}>
                        <Menu.Item key="11">企业资质</Menu.Item>
                        <Menu.Item key="12">优质合作商</Menu.Item>
                    </SubMenu>
                );
                newlayoutMenuSelectKeys.push("11");
                newlayoutMenuOpenKeys.push("sub3");
                break;
            case "5":
                newleftSubMenu.push(
                    <SubMenu key="sub4" title={<span><Icon type="phone" />联系我们</span>}>
                        <Menu.Item key="13">联系我们</Menu.Item>
                    </SubMenu>
                );
                newlayoutMenuSelectKeys.push("13");
                newlayoutMenuOpenKeys.push("sub4");
                break;
            default:
        }
        this.setState({
            layoutMenuSelectedKeys: newlayoutMenuSelectKeys,
            layoutMenuOpenKeys: newlayoutMenuOpenKeys,
            leftSubMenu:newleftSubMenu,
        })
    }
    layoutMenuSelectChange = (value) => {
        debugger;
        this.getUserAccount();
        let newLayoutMenuSelectKey = [value.key];
        this.setState({
            layoutMenuSelectedKeys: newLayoutMenuSelectKey,
        })
    }

    getUserAccount = ()=> {
        debugger
        //axios.get('http://192.168.10.194:8080/hello?name=haha')
        //    .then(function (res) {
        //        debugger
        //        console.log("axios请求成功"+res.data);
        //    })
        //    .catch(function(err){
        //        console.log("axios请求异常"+err);
        //    })

        //axios.get("/hello?name=hello",config)
        //    .then(function(res){
        //        console.log("axios请求成功"+res.data.result);
        //    })
        //    .catch(function(err){
        //        console.log("axios请求异常"+err);
        //    })
        //
        //axios.post("/getInfo",{params:{name:'hello'}},config)
        //    .then(function(res){
        //        console.log("axios请求成功"+res.data.result.id);
        //    })
        //    .catch(function(err){
        //        console.log("axios请求异常"+err);
        //    })

        //axios请求返回的也是一个promise,跟踪错误只需要在最后加一个catch就可以了。
        //下面是关于同时发起多个请求时的处理
        function get1() {
            return axios.get("/hello?name=hello",config)
        }
        function get2() {
            return axios.post("/getInfo",{params:{name:'hello'}},config)
        }
        //先后顺序？？？
        axios.all([get1(), get2()])
            .then(axios.spread(function (res1, res2) {
                console.log("axios请求成功"+res1+res2);
            }))
            .catch(function(err){
                  alert(err);
            });
    }
}

export  class ContentRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <BrowserRouter >
                <Switch>
                    <Route path="/test" component={null}/>
                    <Route path="/test1" component={Test1}/>
                    <Route path="/test2" component={Test2}/>
                    <Route path="/test3" component={Test3}/>
                </Switch>
                </BrowserRouter>
            </Content>
        );
    }
}