import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <img id="ama-jab" className="skill" src="/images/amazon/jab.webp" alt="Jab" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-power-strike" className="skill" src="/images/amazon/power-strike.webp" alt="Power Strike" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-poison-javelin" className="skill" src="/images/amazon/poison-javelin.webp"  alt="Poison Javelin" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-impale" className="skill" src="/images/amazon/impale.webp" alt="Impale" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-lightning-bolt" className="skill" src="/images/amazon/lightning-bolt.webp" alt="Lightning Bolt" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-charged-strike" className="skill" src="/images/amazon/charged-strike.webp" alt="Charged Strike" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-plague-javelin" className="skill" src="/images/amazon/plague-javelin.webp" alt="Plague Javelin" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-fend" className="skill" src="/images/amazon/fend.webp" alt="Fend" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-lightning-strike" className="skill" src="/images/amazon/lightning-strike.webp" alt="Lightning Strike" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
                <img id="ama-lightning-fury" className="skill" src="/images/amazon/lightning-fury.webp" alt="Lightning Fury" onClick={e => this.props.onClick(e)} onContextMenu={e => this.props.onClick(e)} />
            </div>
        );
    }
}

export default Skills;