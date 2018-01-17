import React, { Component } from 'react';
import { Button } from 'antd';
import { actions } from 'mirrorx';

const User = (props) => {
    return <div>
        User {props.value}
        <p>
            <Button onClick={()=>(actions.users.add(1))} type="danger">给我加</Button>
        </p>
        </div>
}

export default User;
