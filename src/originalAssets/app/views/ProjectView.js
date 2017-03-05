import Mn from "backbone.marionette";
import ProjectsView from '../views/ProjectsView';
import TaskView from '../views/TaskView';


import projects from '../initProjects';

const TableModel = Backbone.Model.extend({
    defaults: {
        view: 'projects'
    }
});

const TableView = Mn.View.extend({
    //radio:

    initialize() {
        this.projects = projects;
    },

    model: new TableModel,


    template: '#mm',
    regions: {
        main: '#first-region',
    },

    onShowProject(e) {
        this.projects = e;

        this.model.set({view: 'project'});

    },

    onShowTask(e) {
        this.projects = e;
        this.model.set({view: 'task'});

    },

    onDeleteProject(e) {
        this.projects.remove(e);
        this.model.set({view: 'projects'});
    },


    onRender(){
        this.showChild();
        this.listenTo(this.model, 'change', this.showChild);
    },

    showChild(){
        let view = this.model.get('view');


//        console.log(view);
        if (view == 'projects') {
            this.showProjects()
        }
        else if (view == 'project') {
            this.showProject();
        } else if (view == 'task') {
            this.showTask()
        }
    },


    showProjects(){
        this.view = new ProjectsView({
            collection: this.projects,
        });


        this.showView();
    },
    showProject(){
        this.view = new ProjectsView({
            collection: new Backbone.Collection(this.projects)
        });
        this.showView();
    },
    showTask(){
        this.view = new TaskView({
            model: this.projects
        });
        this.showView();
    },




    showView(){
        this.showChildView('main', this.view);
        this.listenTo(this.view, 'childview:showProject', this.onShowProject);
        this.listenTo(this.view, 'childview:showTask', this.onShowTask);
        this.listenTo(this.view, 'childview:event:delete', this.onDeleteProject);
    }
});


export default TableView;