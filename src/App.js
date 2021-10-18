import React, { Component } from 'react';
import './App.css';
import Skills from './components/Skills';
import SkillsCounter from './components/SkillsCounter';

class App extends Component {
    constructor(){
        super();

        this.state = {
            jab: 0,
            powerStrike: 0,
            poisonJavelin: 0,
            impale: 0,
            lightningBolt: 0,
            chargedStrike: 0,
            plagueJavelin: 0,
            fend: 0,
            lightningStrike: 0,
            lightningFury: 0
        }
    }

    onClick = skill => {
        console.log(skill);
        skill.preventDefault();
        if (skill.target.id === "ama-jab") {
            if (skill.type === "click") {
                this.setState({
                    jab: this.state.jab + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.jab !== 0) {
                    this.setState({
                        jab: this.state.jab - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-power-strike") {
            if (skill.type === "click") {
                this.setState({
                    powerStrike: this.state.powerStrike + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.powerStrike !== 0) {
                    this.setState({
                        powerStrike: this.state.powerStrike - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-poison-javelin") {
            if (skill.type === "click") {
                this.setState({
                    poisonJavelin: this.state.poisonJavelin + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.poisonJavelin !== 0) {
                    this.setState({
                        poisonJavelin: this.state.poisonJavelin - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-impale") {
            if (skill.type === "click") {
                this.setState({
                    impale: this.state.impale + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.impale !== 0) {
                    this.setState({
                        impale: this.state.impale - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-lightning-bolt") {
            if (skill.type === "click") {
                this.setState({
                    lightningBolt: this.state.lightningBolt + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.lightningBolt !== 0) {
                    this.setState({
                        lightningBolt: this.state.lightningBolt - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-charged-strike") {
            if (skill.type === "click") {
                this.setState({
                    chargedStrike: this.state.chargedStrike + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.chargedStrike !== 0) {
                    this.setState({
                        chargedStrike: this.state.chargedStrike - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-plague-javelin") {
            if (skill.type === "click") {
                this.setState({
                    plagueJavelin: this.state.plagueJavelin + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.plagueJavelin !== 0) {
                    this.setState({
                        plagueJavelin: this.state.plagueJavelin - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-fend") {
            if (skill.type === "click") {
                this.setState({
                    fend: this.state.fend + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.fend !== 0) {
                    this.setState({
                        fend: this.state.fend - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-lightning-strike") {
            if (skill.type === "click") {
                this.setState({
                    lightningStrike: this.state.lightningStrike + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.lightningStrike !== 0) {
                    this.setState({
                        lightningStrike: this.state.lightningStrike - 1
                    })
                }                
            }
        } else if (skill.target.id === "ama-lightning-fury") {
            if (skill.type === "click") {
                this.setState({
                    lightningFury: this.state.lightningFury + 1
                })
            } else if (skill.type === "contextmenu") {
                if (this.state.lightningFury !== 0) {
                    this.setState({
                        lightningFury: this.state.lightningFury - 1
                    })
                }                
            }
        }
    };

    render() {
        return (
            <div>
                <div className="talent-calculator">
                    <div className="class-name">AMAZON</div>
                    <div className="builds">
                        <span id="javelin" class="build-btn left">JAVELIN AND SPEAR</span>
                        <span id="passive" class="build-btn">PASSIVE AND MAGIC</span>
                        <span id="bow" class="build-btn right">BOW AND CROSSBOW</span>
                    </div>
                    <div className="bg">
                        <Skills onClick={this.onClick} />
                        <SkillsCounter 
                            jab = {this.state.jab}
                            powerStrike = {this.state.powerStrike}
                            poisonJavelin = {this.state.poisonJavelin}
                            impale = {this.state.impale}
                            lightningBolt = {this.state.lightningBolt}
                            chargedStrike = {this.state.chargedStrike}
                            plagueJavelin = {this.state.plagueJavelin}
                            fend = {this.state.fend}
                            lightningStrike = {this.state.lightningStrike}
                            lightningFury = {this.state.lightningFury} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;