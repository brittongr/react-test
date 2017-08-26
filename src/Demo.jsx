import React, { Component } from 'react';
import { Container } from 'components';
import { TaskList } from 'components';

export class Demo extends Component
{
    getData()
    {
        let items = [];

        for(let i = 0; i <  10; i++)
            items.push({text: `Task ${i}`});

        return items;
    }

    render()
    {
        let tasks = this.getData();

        return (
            <Container id="application" style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                <Container id="main-header">Header</Container>
                <Container id="main-container" border={false} style={{display: 'flex', flex: 1}}>
                    <nav id="main-nav">Nav</nav>
                    <Container id="main-content" style={{flex: 1}}>
                        <TaskList tasks={tasks}/>
                    </Container>
                    <aside id="main-aside">
                        <img src="http://www.fondosdeescritorio10.com/wp-content/uploads/2009/05/porsche_cayman_s-300x240.jpg"/>
                    </aside>
                </Container>
                <Container id="main-footer">Footer</Container>
            </Container>
        );
    }
}
