import React from 'react';

const HelloComponent = ({name}) => (<div>
    <h2>Hello, {name}</h2>
</div>);

export default (props) => <HelloComponent name={props.name} />