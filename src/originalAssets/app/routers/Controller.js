import Mn from "backbone.marionette"
import projects from '../initProjects';
import Backbone from "backbone";
import ProjectsView from '../views/ProjectsView';
import TaskView from '../views/TaskView';
import breadcrumbCollection from '../models/BreadcrumbCollection';



const Controller = Mn.Object.extend ({

    showMain(){
        document.title = `TEAMER`;
        const myTable = new ProjectsView({
            collection: projects,
        });
        breadcrumbCollection.reset({ name : 'Главная', url : '#' });
        teamer.root.showChildView('main', myTable);

    },
    showProject(id) {
        const project = projects.get(id);
        console.log(project.toJSON());
        const table = new ProjectsView({
            collection: new Backbone.Collection(project)
        });

        breadcrumbCollection.reset([{ name : 'Главная', url : '#' },{name: project.get('title'), url: '#project/'+id}]);

        teamer.root.showChildView('main', table);

    },

    showTask(id, task_id) {
        const project = projects.get(id);
        const tasks = project.get('tasks');
        const task = new Backbone.Collection(tasks);
        const table1 = new TaskView({
            model: task.get(task_id)
        });

        breadcrumbCollection.reset([{ name : 'Главная', url : '#' },{name: project.get('title'), url: '#project/'+id},{name: task.get(task_id).get('title'), url: '#project/'+id+'/'+'task_'+task_id}]);

        teamer.root.showChildView('main', table1);

    }

});


export default Controller;