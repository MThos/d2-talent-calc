import React, {Component} from 'react';

class D2ClassPicker extends Component {
    render() {
        let activeClass = this.props.activeClass;
        let classes = this.props.classes;
        let onclick = this.props.onClick;

        return (
            classes.map(function(name) {
                if (activeClass === name) {
                    return <div id={name} className="d2class active" onClick={e => onclick(e)}>{name.toUpperCase()}</div>;
                } else {
                    return <div id={name} className="d2class" onClick={e => onclick(e)}>{name.toUpperCase()}</div>;
                }
            })
        );
    }
}

export default D2ClassPicker;