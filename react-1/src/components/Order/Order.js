import React from 'react';

/**
 * Component showing a user's order
 */
function Order({ name, value, isComplete }) {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>Value: {value}</h3>
            <h3>Complete?: {isComplete}</h3>
        </div>
    );
}

export default Order;