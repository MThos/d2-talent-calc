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
            activeTree: "tree1",
            tree1: "",
            tree2: "",
            tree3: "",
            tree1skillpts: [0,0,0,0,0,0,0,0,0,0],
            tree2skillpts: [0,0,0,0,0,0,0,0,0,0],
            tree3skillpts: [0,0,0,0,0,0,0,0,0,0],
            tree1skillnames: ['','','','','','','','','',''],
            tree2skillnames: ['','','','','','','','','',''],
            tree3skillnames: ['','','','','','','','','','']
        }
    }

    componentDidMount() {
        require('./css/' + this.state.activeClass + '.css');

        fetch('./data/skills.json')
        .then((response) => response.json())
        .then(SkillsData => {
            this.setState({ skills: SkillsData });
            this.setState({ tree1: SkillsData[this.state.activeClass].tree1.name });
            this.setState({ tree2: SkillsData[this.state.activeClass].tree2.name });
            this.setState({ tree3: SkillsData[this.state.activeClass].tree3.name });
            this.setState({ tree1skillnames: SkillsData[this.state.activeClass].tree1.skills });
            this.setState({ tree2skillnames: SkillsData[this.state.activeClass].tree2.skills });
            this.setState({ tree3skillnames: SkillsData[this.state.activeClass].tree3.skills });
        })
        .catch(err => console.error(err));
    }

    onClick = skill => {
        skill.preventDefault();

        // classes
        if (skill.target.className === "d2class") {
            this.setState({ activeClass: skill.target.id })
            this.setState({ tree1: this.state.skills[skill.target.id].tree1.name });
            this.setState({ tree2: this.state.skills[skill.target.id].tree2.name });
            this.setState({ tree3: this.state.skills[skill.target.id].tree3.name });
        }

        // builds
        if (skill.target.id === "tree1") {
            this.setState({ activeTree: "tree1" })
        } else if (skill.target.id === "tree2") {
            this.setState({ activeTree: "tree2" })
        } else if (skill.target.id === "tree3") {
            this.setState({ activeTree: "tree3" })
        }

        // skills
        if (skill.type === "click") {
            let element = skill.target.id.substr(skill.target.id.length - 1, 1) - 1;            
            if (this.state.activeTree === "tree1") {
                let skillpts = this.state.tree1skillpts.slice();
                skillpts[element] = skillpts[element] + 1
                this.setState({ tree1skillpts: skillpts });
            } else if (this.state.activeTree === "tree2") {
                let skillpts = this.state.tree2skillpts.slice();
                skillpts[element] = skillpts[element] + 1
                this.setState({ tree2skillpts: skillpts });
            } else if (this.state.activeTree === "tree3") {
                let skillpts = this.state.tree3skillpts.slice();
                skillpts[element] = skillpts[element] + 1
                this.setState({ tree3skillpts: skillpts });
            }
        } else if (skill.type === "contextmenu") {
            let element = skill.target.id.substr(skill.target.id.length - 1, 1) - 1;
            if (this.state.activeTree === "tree1") {
                if (this.state.tree1skillpts[element] !== 0) {
                    let skillpts = this.state.tree1skillpts.slice();
                    skillpts[element] = skillpts[element] - 1
                    this.setState({ tree1skillpts: skillpts })
                }    
            } else if (this.state.activeTree === "tree2") {
                if (this.state.tree2skillpts[element] !== 0) {
                    let skillpts = this.state.tree2skillpts.slice();
                    skillpts[element] = skillpts[element] - 1
                    this.setState({ tree2skillpts: skillpts })
                }    
            } else if (this.state.activeTree === "tree3") {
                if (this.state.tree3skillpts[element] !== 0) {
                    let skillpts = this.state.tree3skillpts.slice();
                    skillpts[element] = skillpts[element] - 1
                    this.setState({ tree3skillpts: skillpts })
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
                        activeTree={this.state.activeTree}
                        tree1={this.state.tree1}
                        tree2={this.state.tree2}
                        tree3={this.state.tree3} />
                    <div className="tree">
                        <Skills 
                            onClick={this.onClick} 
                            tree1skillnames={this.state.tree1skillnames}
                            tree2skillnames={this.state.tree2skillnames}
                            tree3skillnames={this.state.tree3skillnames} />
                        <SkillsCounter 
                            tree1skillpts={this.state.tree1skillpts}
                            tree2skillpts={this.state.tree2skillpts}
                            tree3skillpts={this.state.tree3skillpts} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;