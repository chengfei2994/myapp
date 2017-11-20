/**
 * Created by DELL on 2017/10/16.
 */
import React from "react";
import ol from 'openlayers';


class OLayers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

    }}

    componentDidMount() {
        let map = new ol.Map({
            controls: ol.control.defaults({
                attributionOptions: ({
                    collapsible: false
                })
            }),
            // logo: false,     // 不显示logo
            // logo: 'face_monkey.png',     // 用一个图片 face_monkey.png 作为logo
            //logo: {src: '../img/face_monkey.png', href: 'http://www.openstreetmap.org/'},    // 点击能跳转到对应页面
            layers: [
                new ol.layer.Tile({source: new ol.source.OSM()})
            ],
            view: new ol.View({
                center: [0, 0],
                zoom: 2
            }),
            target: 'map'
        });
    }

    componentWillReceiveProps(nextProps){

    }

    render(){
        return (
                <div id="map" style={{display: "inline-block",height: '100%',width:'100%',margin: "40px 30px"}}></div>
        );
    }
}
export  default OLayers;

