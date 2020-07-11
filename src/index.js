import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter }  from "react-router-dom";

import './index.css';
import App from './App/App';

import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';

import * as serviceWorker from './serviceWorker';

// Для тестов авторизированный юзер ID: 0
let localeStore = {
    users: [
        {
            id: 0,
            name: 'John',
            login: 'big_john',
            password: '123123123',
            
        },
        {
            id: 1,
            name: 'Kate',
            login: 'pugLover',
            password: 'pug12556gup',
        },
    ],
    taskGroups: [
        {
            id: 0,
            userId: 0,
            name: 'My first task group',
        },
        {
            id: 1,
            userId: 0,
            name: 'Home work',
        },
        {
            id: 2,
            userId: 1,
            name: 'Job tasks',
        }
    ],
    groupLists: [
        {
            id: 0,
            groupId: 0,
            name: 'Marketing',
        },
        {
            id: 1,
            groupId: 0,
            name: 'Design',
        },
        {
            id: 2,
            groupId: 0,
            name: 'Front-end',
        },
        {
            id: 3,
            groupId: 0,
            name: 'Back-end',
        },
        {
            id: 4,
            groupId: 1,
            name: 'Cleaning',
        },
        {
            id: 5,
            groupId: 1,
            name: 'Add tasks',
        },
    ],
    tasks: [
        {
            id: 0,
            userId: 0,
            listId: 1,
            name: 'Update my notebook',
            completed: false,
            date: '2020-07-03 15:30'
        },
        {
            id: 1,
            userId: 0,
            listId: 1,
            name: 'Clean child room',
            completed: false,
            date: '2020-07-03 16:00'
        },
        {
            id: 2,
            userId: 1,
            listId: null,
            name: 'Write mail post and clean mail account',
            completed: false,
            date: '2020-07-03 12:00'
        },
        {
            id: 3,
            userId: 0,
            listId: 1,
            name: 'Call James',
            completed: false,
            date: '2020-07-03 18:30'
        }
    ],
}

const store = createStore(rootReducer, localeStore);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
