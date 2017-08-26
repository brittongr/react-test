import React, { Component } from 'react';

export class Container extends Component
{
    static get defaultProps()
    {
        return {
            border: true
        };
    }

    render()
    {
        let classes = [];
        let props = Object.assign({}, this.props);

        if(this.props.className)
            classes.push(this.props.className);

        if(this.props.border)
            classes.push('border');

        delete props.border;

        props.className = classes.join(' ');

        return (
            <div {...props}>{this.props.children}</div>
        );
    }
}
