import Mn from "backbone.marionette"
import projects from '../initProjects';
import Backbone from "backbone";
import ProjectsView from '../views/ProjectsView';
import TaskView from '../views/TaskView';
import _ from 'lodash';


const Controller = Mn.Object.extend ({

    showMain(){
        document.title = `TEAMER`;
        const myTable = new ProjectsView({
            collection: projects,
        });

        // const myView = new MyView();
        // myView.render();ddd

        teamer.root.showChildView('main', myTable);

    },
    showProject(id) {
        const project = projects.get(id);
        console.log(project.toJSON());
        const table = new ProjectsView({
            //model: project
            collection: new Backbone.Collection(project)
        });

        // const myView = new MyView();
        // myView.render();

        teamer.root.showChildView('main', table);

    },

    showTask(id, task_id) {
        const project = projects.get(id);
        //const coll = new Backbone.Collection(project);
        //console.log(id, task_id);

        const tasks = project.get('tasks');
        const task = new Backbone.Collection(tasks);
        console.log(project.toJSON());
            const table1 = new TaskView({
            //model: project
            collection: new Backbone.Collection(task.get(task_id))
            //model: task.get(task_id)
        });

        teamer.root.showChildView('main', table1);

    }

});


export default Controller;