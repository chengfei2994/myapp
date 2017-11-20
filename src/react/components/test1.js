/**
 * Created by zll on 2017/10/12.
 */
import React, { Component } from 'react';
import { Button} from 'antd';
export default class Test1 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <Button type="danger"  >
                    介绍世纪
                </Button>
            </div>
        )
    }
};