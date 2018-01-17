import React from "react";
import { NavLink } from "mirrorx";
import { Menu, Icon } from "antd";


const Header = ({location}) => (
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
        style={{ lineHeight: '64px' }}
    >
        <Menu.Item key="/">
            <NavLink to="/"><Icon type="home" />首页</NavLink>
        </Menu.Item>
        <Menu.Item key="/xn">
            <NavLink to="/xn"><Icon type="laptop" />性能</NavLink>
        </Menu.Item>
        <Menu.Item key="/fw">
            <NavLink to="/fw"><Icon type="customer-service" />服务</NavLink>
        </Menu.Item>
    </Menu>
);

export default Header;