import Projects from './models/ProjectCollection'

const projects = new Projects(
    [
        {
        id: 1,
        title: 'Первый проект',
        tasks: [{
            id: 1,
            project_id: 1,
            title: 'Первая таска',
            completed: 0,
            messages: [{
                id: 1,
                task_id: 1,
                text: 'первое сообещине'
            },
            {
                id: 2,
                task_id: 1,
                text: 'Второе сообещине'
            }]
        },
        {
            id: 2,
            project_id: 1,
            title: 'Вторая таска',
            completed: 0,
            messages: []
        }]
    },
    {
        id: 2,
        title: 'Второй проект',
        tasks: [{
            id: 3,
            project_id: 2,
            title: 'Третья таска',
            completed: 0
        },]
    },
    {
        id: 3,
        title: 'Третий проект',
        tasks: [{
            id: 4,
            project_id: 3,
            title: 'Четвертая таска',
            completed: 0
        }]
    },
        {
            id: 4,
            title: 'Четвертый проект',
            tasks: []
        },
]
);

export default projects;