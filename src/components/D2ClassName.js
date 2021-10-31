import React, {Component} from 'react';

class D2ClassName extends Component {
    render() {
        let d2class = this.props.d2class;

        return (
            <div className="d2class-name">{d2class.toUpperCase()}</div>
        );
    }
}

export default D2ClassName;