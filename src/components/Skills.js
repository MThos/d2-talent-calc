import React, {Component} from 'react';

class Skills extends Component {
    render() {
        let activeTree = this.props.activeTree;
        let tree1skillnames = this.props.tree1skillnames;
        let tree2skillnames = this.props.tree2skillnames;
        let tree3skillnames = this.props.tree3skillnames;

        if (activeTree === "tree1") {
            return (
                <div className="skills">
                    <img id="tree1skill1" className="skill" key="tree1skill1" src={"/images/amazon/" + tree1skillnames[0].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[0]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill2" className="skill" key="tree1skill2" src={"/images/amazon/" + tree1skillnames[1].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[1]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill3" className="skill" key="tree1skill3" src={"/images/amazon/" + tree1skillnames[2].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[2]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill4" className="skill" key="tree1skill4" src={"/images/amazon/" + tree1skillnames[3].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[3]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill5" className="skill" key="tree1skill5" src={"/images/amazon/" + tree1skillnames[4].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[4]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill6" className="skill" key="tree1skill6" src={"/images/amazon/" + tree1skillnames[5].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[5]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill7" className="skill" key="tree1skill7" src={"/images/amazon/" + tree1skillnames[6].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[6]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill8" className="skill" key="tree1skill8" src={"/images/amazon/" + tree1skillnames[7].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[7]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill9" className="skill" key="tree1skill9" src={"/images/amazon/" + tree1skillnames[8].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[8]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree1skill10" className="skill" key="tree1skill10" src={"/images/amazon/" + tree1skillnames[9].replace(/\s/g , "-") + ".webp"} alt={tree1skillnames[9]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                </div>
            );
        } else if (activeTree === "tree2") {
            return (
                <div className="skills">
                    <img id="tree2skill1" className="skill" key="tree2skill1" src={"/images/amazon/" + tree2skillnames[0].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[0]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill2" className="skill" key="tree2skill2" src={"/images/amazon/" + tree2skillnames[1].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[1]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill3" className="skill" key="tree2skill3" src={"/images/amazon/" + tree2skillnames[2].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[2]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill4" className="skill" key="tree2skill4" src={"/images/amazon/" + tree2skillnames[3].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[3]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill5" className="skill" key="tree2skill5" src={"/images/amazon/" + tree2skillnames[4].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[4]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill6" className="skill" key="tree2skill6" src={"/images/amazon/" + tree2skillnames[5].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[5]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill7" className="skill" key="tree2skill7" src={"/images/amazon/" + tree2skillnames[6].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[6]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill8" className="skill" key="tree2skill8" src={"/images/amazon/" + tree2skillnames[7].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[7]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill9" className="skill" key="tree2skill9" src={"/images/amazon/" + tree2skillnames[8].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[8]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree2skill10" className="skill" key="tree2skill10" src={"/images/amazon/" + tree2skillnames[9].replace(/\s/g , "-") + ".webp"} alt={tree2skillnames[9]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                </div>
            );
        } else if (activeTree === "tree3") {
            return (
                <div className="skills">
                    <img id="tree3skill1" className="skill" key="tree3skill1" src={"/images/amazon/" + tree3skillnames[0].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[0]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill2" className="skill" key="tree3skill2" src={"/images/amazon/" + tree3skillnames[1].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[1]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill3" className="skill" key="tree3skill3" src={"/images/amazon/" + tree3skillnames[2].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[2]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill4" className="skill" key="tree3skill4" src={"/images/amazon/" + tree3skillnames[3].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[3]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill5" className="skill" key="tree3skill5" src={"/images/amazon/" + tree3skillnames[4].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[4]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill6" className="skill" key="tree3skill6" src={"/images/amazon/" + tree3skillnames[5].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[5]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill7" className="skill" key="tree3skill7" src={"/images/amazon/" + tree3skillnames[6].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[6]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill8" className="skill" key="tree3skill8" src={"/images/amazon/" + tree3skillnames[7].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[7]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill9" className="skill" key="tree3skill9" src={"/images/amazon/" + tree3skillnames[8].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[8]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                    <img id="tree3skill10" className="skill" key="tree3skill10" src={"/images/amazon/" + tree3skillnames[9].replace(/\s/g , "-") + ".webp"} alt={tree3skillnames[9]} onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                </div>
            );
        }
    }
}

export default Skills;