import React, { Component } from 'react';

export class Application extends Component
{
    render()
    {
        return <div>{this.props.children}</div>;
    }
}
