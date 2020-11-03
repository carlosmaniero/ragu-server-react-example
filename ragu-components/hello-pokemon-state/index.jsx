import React from 'react';

const HelloComponent = ({id, name}) => (<div>
    <h2>Hello, #{id} {name}</h2>
</div>);

export default (props, state) => <HelloComponent id={props.id} name={state.name} />