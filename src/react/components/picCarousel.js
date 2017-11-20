/**
 * Created by DELL on 2017/11/13.
 */
import React from 'react';
import styles from "./MyCss.css";
import { Carousel } from 'antd';
import lx1 from './../../public/images/lx1.png';
import lx2 from './../../public/images/lx2.jpg';
import lx3 from './../../public/images/lx3.jpg';
export default class PicCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }}
    componentDidMount() {

    }

    render(){
        return (
        <div>
            <Carousel autoplay className={styles.MyCss}>
                <img src={lx1}/><img src={lx2}/><img src={lx3}/>
            </Carousel>
        </div>
        );
    }
}