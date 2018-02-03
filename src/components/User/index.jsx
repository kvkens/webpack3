import React, { Component } from 'react';
import { Button, Table, Row, Col } from 'antd';
import { actions } from 'mirrorx';


const User = (props) => {
    console.log(props);
    const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    }];
    return <div>
        <Row>
            <Col span={24}>
                <Table dataSource={props.list} columns={columns} />
            </Col>
        </Row>
    </div>
}

export default User;
