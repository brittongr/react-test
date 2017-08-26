import React, { Component } from 'react';
import { isEqual } from 'lodash';

export class Task extends Component
{
    constructor(props)
    {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event)
    {
        if(this.props.onClick)
            this.props.onClick(this.props);
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        return !isEqual(this.props, nextProps);
    }

    render()
    {
        console.log('Task.render ' + this.props.id);

        let classes = ['task'];

        if(this.props.active)
            classes.push('active');

        return <li id={this.props.id} data-index={this.props.id} className={classes.join(' ')} onClick={this.onClick}>{this.props.text}</li>;
    }
}
