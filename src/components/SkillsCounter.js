import React, {Component} from 'react';

class SkillsCounter extends Component {
    render() {
        let jab = this.props.jab;
        let powerStrike = this.props.powerStrike;
        let poisonJavelin = this.props.poisonJavelin;
        let impale = this.props.impale;
        let lightningBolt = this.props.lightningBolt;
        let chargedStrike = this.props.chargedStrike;
        let plagueJavelin = this.props.plagueJavelin;
        let fend = this.props.fend;
        let lightningStrike = this.props.lightningStrike;
        let lightningFury = this.props.lightningFury;
        
        return (
            <div className="skills-counter">
                <div id="ama-jab-pts" className="pts">{jab}</div>
                <div id="ama-power-strike-pts" className="pts">{powerStrike}</div>
                <div id="ama-poison-javelin-pts" className="pts">{poisonJavelin}</div>
                <div id="ama-impale-pts" className="pts">{impale}</div>
                <div id="ama-lightning-bolt-pts" className="pts">{lightningBolt}</div>
                <div id="ama-charged-strike-pts" className="pts">{chargedStrike}</div>
                <div id="ama-plague-javelin-pts" className="pts">{plagueJavelin}</div>
                <div id="ama-fend-pts" className="pts">{fend}</div>
                <div id="ama-lightning-strike-pts" className="pts">{lightningStrike}</div>
                <div id="ama-lightning-fury-pts" className="pts">{lightningFury}</div>
            </div>
        );
    }
}

export default SkillsCounter;