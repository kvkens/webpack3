import React,{ Component } from "react";
import { Card } from 'antd';

class Home extends Component{
    componentDidMount(){
        console.log("首页 did mount");
        console.log(this.props);
    }
    render(){
        return <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="首页" bordered={true} style={{ width: 300 }}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
    }
}

export default Home;