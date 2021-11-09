import React, {Component} from 'react';

class BuildTabs extends Component {
    render() {
        let activeTree = this.props.activeTree;
        let tree1 = this.props.tree1;
        let tree2 = this.props.tree2;
        let tree3 = this.props.tree3;

        if (activeTree === "tree1") {
            return (
                <div className="builds">
                    <span id="tree1" className="build-btn active" onClick={e => this.props.onClick(e)}>{tree1.toUpperCase()}</span>
                    <span id="tree2" className="build-btn" onClick={e => this.props.onClick(e)}>{tree2.toUpperCase()}</span>
                    <span id="tree3" className="build-btn" onClick={e => this.props.onClick(e)}>{tree3.toUpperCase()}</span>
                </div>
            );
        } else if (activeTree === "tree2") {
            return (
                <div className="builds">
                    <span id="tree1" className="build-btn" onClick={e => this.props.onClick(e)}>{tree1.toUpperCase()}</span>
                    <span id="tree2" className="build-btn active" onClick={e => this.props.onClick(e)}>{tree2.toUpperCase()}</span>
                    <span id="tree3" className="build-btn" onClick={e => this.props.onClick(e)}>{tree3.toUpperCase()}</span>
                </div>
            );
        } else if (activeTree === "tree3") {
            return (
                <div className="builds">
                    <span id="tree1" className="build-btn" onClick={e => this.props.onClick(e)}>{tree1.toUpperCase()}</span>
                    <span id="tree2" className="build-btn" onClick={e => this.props.onClick(e)}>{tree2.toUpperCase()}</span>
                    <span id="tree3" className="build-btn active" onClick={e => this.props.onClick(e)}>{tree3.toUpperCase()}</span>
                </div>
            );
        }
        
    }
}

export default BuildTabs;