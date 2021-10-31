import React, {Component} from 'react';

class BuildTabs extends Component {
    render() {
        let activeBuild = this.props.activeBuild;
        let build1 = this.props.build1;
        let build2 = this.props.build2;
        let build3 = this.props.build3;

        if (activeBuild === "build1") {
            return (
                <div className="builds">
                    <span id="build1" class="build-btn active" onClick={e => this.props.onClick(e)}>{build1.toUpperCase()}</span>
                    <span id="build2" class="build-btn" onClick={e => this.props.onClick(e)}>{build2.toUpperCase()}</span>
                    <span id="build3" class="build-btn" onClick={e => this.props.onClick(e)}>{build3.toUpperCase()}</span>
                </div>
            );
        } else if (activeBuild === "build2") {
            return (
                <div className="builds">
                    <span id="build1" class="build-btn" onClick={e => this.props.onClick(e)}>{build1.toUpperCase()}</span>
                    <span id="build2" class="build-btn active" onClick={e => this.props.onClick(e)}>{build2.toUpperCase()}</span>
                    <span id="build3" class="build-btn" onClick={e => this.props.onClick(e)}>{build3.toUpperCase()}</span>
                </div>
            );
        } else if (activeBuild === "build3") {
            return (
                <div className="builds">
                    <span id="build1" class="build-btn" onClick={e => this.props.onClick(e)}>{build1.toUpperCase()}</span>
                    <span id="build2" class="build-btn" onClick={e => this.props.onClick(e)}>{build2.toUpperCase()}</span>
                    <span id="build3" class="build-btn active" onClick={e => this.props.onClick(e)}>{build3.toUpperCase()}</span>
                </div>
            );
        }
        
    }
}

export default BuildTabs;