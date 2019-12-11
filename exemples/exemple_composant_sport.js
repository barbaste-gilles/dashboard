import React from 'react'

class Sport extends React.Component {

    render() {
        console.log ('props', this.props);
        return (
            <p>{ this.props.sport}</p>
        )
    }
}

export default Sport