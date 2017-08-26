import React, { Component } from 'react';
import { Task } from 'components';

export class TaskList extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            selection: []
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(task)
    {
        // We read the current selection from the state
        let selection = this.state.selection || [];
        let index = selection.indexOf(task.id);

        if(index == -1)
            selection.push(task.id);
        else
            selection.splice(index, 1);

        this.setState({selection: selection});
    }

    renderTask(item, index)
    {
        let active = this.state.selection.indexOf(index.toString()) != -1;

        return <Task key={'task-' + index}
                     id={index.toString()}
                     text={item.text}
                     active={active}
                     onClick={this.onClick} />;
    }

    renderTasks(tasks)
    {
        return tasks.map(this.renderTask.bind(this));
    }

    render()
    {
        console.log('TaskList.render');

        return (<ul>{this.renderTasks(this.props.tasks)}</ul>);
    }
}
