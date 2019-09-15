import React from 'react';
import { connect } from 'react-redux';

/**
 * Component showing a user's order
 */
function Order({ name, value, complete }) {
    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Value: {value}</h3>
            <h3>Complete?: {complete}</h3>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        name: state.order.name,
        value: state.order.value,
        complete: state.order.complete,
    }
}

export default connect(mapStateToProps)(Order);