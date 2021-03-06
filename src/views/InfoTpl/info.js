
import React, { Component, PropTypes } from 'react';


class Info extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
       
    }
    
    render() {
        return (
            <p>             
                农业领域：<br/>
                1.科技惠农，高效安全<br/>
                “雨田一号”具有作业高度低，飘移少，可空中悬停，无需专用起降机场，可远距离遥控操作，提高了喷洒作业安全性等诸多优点。<br/>
                <br/>
                2.节约农药及用水量，降低成本<br/>
                无人直升机喷洒技术采用水雾喷洒的方式，至少可以节约20%以上的农药使用量，同比人工操作节水90%，极大的降低了使用成本。<br/>
                <br/>
                3.覆盖密度高，防治效果好<br/>
                喷雾药液在单位面积上覆盖密度越高、越均匀，防治效果就越好。在药液雾滴飘移试验反映了用无人机喷洒作业对农药飘失程度的一个优势，作业高度比较低，当药液雾滴从喷洒器喷出时被旋翼的向下气流加速形成气雾流，直接增加了药液雾滴对农作物的穿透性，减少了农药飘失程度，并且药液沉积量和药液覆盖率都优于常规，因而防治效果比传统的好，还可以防止农药对土壤造成污染。
                <br/><br/>
                工业领域：<br/>
                1.航拍航测<br/>
                利用携带摄像机装置的无人机，开展大规模航拍，实现空中俯瞰的效果。通过专业级的航拍来为某一领域提供资料，在未来工程测量领域得到广泛应用。<br/>
                <br/>
                2.电力巡检<br/>
                我国电网规模已跃居世界首位，国土幅员辽阔，地形相对复杂，气象条件的复杂多变。传统的人工巡检方式存在效率低下、难以管控、危险性高和受制于天气等问题。而通过无人机巡线，不仅可以对输电线路本体缺陷、通道隐患进行快速检测，还能在各种复杂地形、恶劣气候、灾害天气下，及时、准确、高效地获取现场信息，因此可代替人工去完成一些危险的任务。更重要的是，无人机巡线提高了电力维护检修的速度和效率，使许多工作能在完全带电的情况下迅速完成，比人工巡线效率高出40倍。
                <br/><br/>
                3.消防应用<br/>
                一直以来，火灾都是给人类生命财产安全带来巨大危害的灾难之一。一方面，无人机系统可以高效地完成巡护任务，及时发现火情隐患，为防火工作提供便利。另一方面，当火灾发生时，无人机可搭载红外和可见光摄像机监测火灾，经数控遥测电路实时传输到地面控制站，将火点、热点显示在地面站的数字地图上，经过识别系统确定是否是火点，并进行精确的火点定位，为地面消防部门第一时间提供火场地理坐标（经、纬度）。当无人机在火场上方飞行时，还可将火场的轮廓、面积、蔓延速度等数据实时传回地面控制中心，为地面扑火指挥提供可靠信息，使灭火指挥部门迅速有效地组织、布署灭火队伍，提高灭火作战效率，防止救火人员的伤亡。
                <br/><br/>
                4.环保应用<br/>
                无人机因为不受空间与地形限制，效性强，机动性好，巡查范围广等优点，执法部门能够轻易的利用它来找到污染源头和测试污染程度。并且能利用携带了催化剂和气象探测设的无人机在空中进行喷撒，与无人机播撒农药的工作原理一样，在一定区域内消除雾霾。
                <br/><br/>
                消费娱乐：<br/>
                1.VR游戏 <br />
                通过搭载高清摄像头及VR眼镜，能多角度拍摄俯瞰画面，达到身临其境的飞行体验。  <br/>
            </p>
        )
    }
    
}
/*
<Chart projectId={this.props.routeParams.projectId}/>
 */
Info.defaultProps = {
    type:1
}

export default Info;

//export default withRouter(OrderInfo);

//<div className="theme-img"></div>  <button><span className="step-download"></span></button>