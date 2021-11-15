import React, {Component} from 'react';

class SkillsCounter extends Component {
    render() {
        let activeTree = this.props.activeTree;
        let tree1skillpts = this.props.tree1skillpts;
        let tree2skillpts = this.props.tree2skillpts;
        let tree3skillpts = this.props.tree3skillpts;
        
        if (activeTree === "tree1") {
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
        } else if (activeTree === "tree2") {
            return (
                <div className="skills-counter">
                    <div id="tree2skill1pts" className="pts">{tree2skillpts[0]}</div>
                    <div id="tree2skill2pts" className="pts">{tree2skillpts[1]}</div>
                    <div id="tree2skill3pts" className="pts">{tree2skillpts[2]}</div>
                    <div id="tree2skill4pts" className="pts">{tree2skillpts[3]}</div>
                    <div id="tree2skill5pts" className="pts">{tree2skillpts[4]}</div>
                    <div id="tree2skill6pts" className="pts">{tree2skillpts[5]}</div>
                    <div id="tree2skill7pts" className="pts">{tree2skillpts[6]}</div>
                    <div id="tree2skill8pts" className="pts">{tree2skillpts[7]}</div>
                    <div id="tree2skill9pts" className="pts">{tree2skillpts[8]}</div>
                    <div id="tree2skill10pts" className="pts">{tree2skillpts[9]}</div>
                </div>
            );
        } else if (activeTree === "tree3") {
            return (
                <div className="skills-counter">
                    <div id="tree3skill1pts" className="pts">{tree3skillpts[0]}</div>
                    <div id="tree3skill2pts" className="pts">{tree3skillpts[1]}</div>
                    <div id="tree3skill3pts" className="pts">{tree3skillpts[2]}</div>
                    <div id="tree3skill4pts" className="pts">{tree3skillpts[3]}</div>
                    <div id="tree3skill5pts" className="pts">{tree3skillpts[4]}</div>
                    <div id="tree3skill6pts" className="pts">{tree3skillpts[5]}</div>
                    <div id="tree3skill7pts" className="pts">{tree3skillpts[6]}</div>
                    <div id="tree3skill8pts" className="pts">{tree3skillpts[7]}</div>
                    <div id="tree3skill9pts" className="pts">{tree3skillpts[8]}</div>
                    <div id="tree3skill10pts" className="pts">{tree3skillpts[9]}</div>
                </div>
            );
        }        
    }
}

export default SkillsCounter;