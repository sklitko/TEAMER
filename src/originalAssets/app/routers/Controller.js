import Mn from "backbone.marionette"
import projects from '../initProjects';
import ProjectView from '../views/ProjectView';
import MainView from '../views/MainView';
import MyView from '../views/MyView';


const Controller = Mn.Object.extend ({

    showMain(){
        document.title = `TEAMER`;
        const myTable = new MainView({
            collection: projects,
        });

        // const myView = new MyView();
        // myView.render();ddd

        teamer.root.showChildView('main', myTable);

    },
    showProject(id) {
        const project = projects.get(id);
        console.log(project.toJSON());
        const table = new ProjectView({
            model: project
        });

        // const myView = new MyView();
        // myView.render();

        teamer.root.showChildView('main', table);

    },

    showTask(id, task_id) {
        console.log(id, task_id);

    }

});


export default Controller;