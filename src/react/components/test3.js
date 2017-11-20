/**
 * Created by zll on 2017/10/12.
 */
import React, { Component } from 'react';
import { Button} from 'antd';
export default class Test3 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <Button type="danger"  >
                    世纪文化
                </Button>
            </div>
        )
    }
};