import React, {Component} from 'react';

class Skills extends Component {
    render() {
        let tree1skillnames = this.props.tree1skillnames;
        //let tree2skillnames = this.props.tree2skillnames;
        //let tree3skillnames = this.props.tree3skillnames;

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
    }
}

export default Skills;