import React, {Component} from 'react';

class D2ClassName extends Component {
    render() {
        let activeClass = this.props.activeClass;

        return (
            <div className="d2class-name">{activeClass.toUpperCase()}</div>
        );
    }
}

export default D2ClassName;