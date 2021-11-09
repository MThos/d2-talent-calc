import React, {Component} from 'react';

class SkillsCounter extends Component {
    render() {
        let tree1skillpts = this.props.tree1skillpts;
        //let tree2skillpts = this.props.tree2skillpts;
        //let tree3skillpts = this.props.tree3skillpts;
        
        return (
            <div className="skills-counter">
                <div id="tree1skill1pts" className="pts">{tree1skillpts[0]}</div>
                <div id="tree1skill2pts" className="pts">{tree1skillpts[1]}</div>
                <div id="tree1skill3pts" className="pts">{tree1skillpts[2]}</div>
                <div id="tree1skill4pts" className="pts">{tree1skillpts[3]}</div>
                <div id="tree1skill5pts" className="pts">{tree1skillpts[4]}</div>
                <div id="tree1skill6pts" className="pts">{tree1skillpts[5]}</div>
                <div id="tree1skill7pts" className="pts">{tree1skillpts[6]}</div>
                <div id="tree1skill8pts" className="pts">{tree1skillpts[7]}</div>
                <div id="tree1skill9pts" className="pts">{tree1skillpts[8]}</div>
                <div id="tree1skill10pts" className="pts">{tree1skillpts[9]}</div>
            </div>
        );
    }
}

export default SkillsCounter;