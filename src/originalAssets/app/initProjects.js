import Projects from './models/ProjectCollection'

const projects = new Projects(
    [
    {
        id: 1,
        title_project: 'Первый проект',
        tasks: [{
            id: 1,
            project_id: 1,
            title_task: 'Первая таска',
            completed: 0
        },
            {
                id: 2,
                project_id: 1,
                title_task: 'Вторая таска',
                completed: 0
            }]
    },
    {
        id: 2,
        title_project: 'Второй проект',
        tasks: [{
            id: 3,
            project_id: 2,
            title_task: 'Третья таска',
            completed: 0
        },]
    },
    {
        id: 3,
        title_project: 'Третий проект',
        tasks: [{
            id: 4,
            project_id: 3,
            title_task: 'Четвертая таска',
            completed: 0
        }]
    },
        {
            id: 4,
            title_project: 'Четвертый проект',
            tasks: []
        },
]
);

export default projects;