import React, { Component } from 'react';
import './App.css';
import Skills from './components/Skills';
import SkillsCounter from './components/SkillsCounter';
import BuildTabs from './components/BuildTabs';
import D2ClassName from './components/D2ClassName';
import D2ClassPicker from './components/D2ClassPicker';

class App extends Component {
    constructor() {
        super();

        this.state = {
            skills: [],
            classes: ['amazon','assassin','barbarian','druid','necromancer','paladin','sorceress'],
            activeClass: "amazon",
            activeBuild: "build1",
            build1: "",
            build2: "",
            build3: "",
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

    componentDidMount() {
        require('./css/' + this.state.activeClass + '.css');

        fetch('./data/skills.json')
        .then((response) => response.json())
        .then(SkillsData => {
            this.setState({ skills: SkillsData });
            this.setState({ build1: SkillsData.amazon.build1.name });
            this.setState({ build2: SkillsData.amazon.build2.name });
            this.setState({ build3: SkillsData.amazon.build3.name });
        })
        .catch(err => console.error(err));
    }

    onClick = skill => {
        skill.preventDefault();

        // classes
        if (skill.target.className === "d2class") {
            this.setState({ activeClass: skill.target.id })
        }

        // builds
        if (skill.target.id === "build1") {
            this.setState({ activeBuild: "build1" })
        } else if (skill.target.id === "build2") {
            this.setState({ activeBuild: "build2" })
        } else if (skill.target.id === "build3") {
            this.setState({ activeBuild: "build3" })
        }

        // skills
        if (skill.target.id === "ama-jab") {
            if (skill.type === "click") {
                this.setState({ jab: this.state.jab + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.jab !== 0) {
                    this.setState({ jab: this.state.jab - 1 })
                }                
            }
        } else if (skill.target.id === "ama-power-strike") {
            if (skill.type === "click") {
                this.setState({ powerStrike: this.state.powerStrike + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.powerStrike !== 0) {
                    this.setState({ powerStrike: this.state.powerStrike - 1 })
                }                
            }
        } else if (skill.target.id === "ama-poison-javelin") {
            if (skill.type === "click") {
                this.setState({ poisonJavelin: this.state.poisonJavelin + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.poisonJavelin !== 0) {
                    this.setState({ poisonJavelin: this.state.poisonJavelin - 1 })
                }                
            }
        } else if (skill.target.id === "ama-impale") {
            if (skill.type === "click") {
                this.setState({ impale: this.state.impale + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.impale !== 0) {
                    this.setState({ impale: this.state.impale - 1 })
                }                
            }
        } else if (skill.target.id === "ama-lightning-bolt") {
            if (skill.type === "click") {
                this.setState({ lightningBolt: this.state.lightningBolt + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.lightningBolt !== 0) {
                    this.setState({ lightningBolt: this.state.lightningBolt - 1 })
                }                
            }
        } else if (skill.target.id === "ama-charged-strike") {
            if (skill.type === "click") {
                this.setState({ chargedStrike: this.state.chargedStrike + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.chargedStrike !== 0) {
                    this.setState({ chargedStrike: this.state.chargedStrike - 1 })
                }                
            }
        } else if (skill.target.id === "ama-plague-javelin") {
            if (skill.type === "click") {
                this.setState({ plagueJavelin: this.state.plagueJavelin + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.plagueJavelin !== 0) {
                    this.setState({ plagueJavelin: this.state.plagueJavelin - 1 })
                }                
            }
        } else if (skill.target.id === "ama-fend") {
            if (skill.type === "click") {
                this.setState({ fend: this.state.fend + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.fend !== 0) {
                    this.setState({ fend: this.state.fend - 1 })
                }                
            }
        } else if (skill.target.id === "ama-lightning-strike") {
            if (skill.type === "click") {
                this.setState({ lightningStrike: this.state.lightningStrike + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.lightningStrike !== 0) {
                    this.setState({ lightningStrike: this.state.lightningStrike - 1 })
                }                
            }
        } else if (skill.target.id === "ama-lightning-fury") {
            if (skill.type === "click") {
                this.setState({ lightningFury: this.state.lightningFury + 1 })
            } else if (skill.type === "contextmenu") {
                if (this.state.lightningFury !== 0) {
                    this.setState({ lightningFury: this.state.lightningFury - 1 })
                }                
            }
        }
    };

    render() {
        return (
            <div>
                <div className="class-picker">
                    <D2ClassPicker 
                        onClick={this.onClick}
                        classes={this.state.classes}
                        activeClass={this.state.activeClass} />
                </div>
                <div className="talent-calculator"> 
                    <D2ClassName activeClass={this.state.activeClass} />
                    <BuildTabs 
                        onClick={this.onClick}
                        activeBuild={this.state.activeBuild}
                        build1={this.state.build1}
                        build2={this.state.build2}
                        build3={this.state.build3} />
                    <div className="tree">
                        <Skills onClick={this.onClick} />
                        <SkillsCounter 
                            jab={this.state.jab}
                            powerStrike={this.state.powerStrike}
                            poisonJavelin={this.state.poisonJavelin}
                            impale={this.state.impale}
                            lightningBolt={this.state.lightningBolt}
                            chargedStrike={this.state.chargedStrike}
                            plagueJavelin={this.state.plagueJavelin}
                            fend={this.state.fend}
                            lightningStrike={this.state.lightningStrike}
                            lightningFury={this.state.lightningFury} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;