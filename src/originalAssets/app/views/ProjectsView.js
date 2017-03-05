import Mn from "backbone.marionette"

const RowView = Mn.View.extend({
    tagName: 'tr',
    template: '#row-template',

    events: {
        'click td': 'showTask'
    },

    showTask(e) {
        e.stopPropagation();
        this.triggerMethod('show:task', this.model);
    },
});


const BodyView = Mn.CollectionView.extend({
    tagName: 'tbody',
    childView: RowView,
    childViewTriggers: {
        'show:task': 'child:show:task',
    },


});


const ProjectView = Mn.View.extend({

    tagName: 'table',
    className: 'table table-hover project_title',
    template: '#table',


    ui: {
        delete: '#delete_project',
        showProject: 'th',
    },
    events: {
        'click @ui.delete': 'deleteProject',
        'click @ui.showProject': 'showProject',

    },

    showProject(e) {
        e.stopPropagation();
        //e.preventDefault();
        this.triggerMethod('showProject', this.model);
    },


    deleteProject(e) {
        //e.preventDefault();
        e.stopPropagation();
        this.triggerMethod('event:delete', this.model);
    },


    regions: {
        tree: {
            el: 'tbody',
            replaceElement: true
        }
    },


    onRender() {
        const tasks = this.model.get('tasks');
        if (tasks.length) {
            const treeView = new BodyView({
                collection: new Backbone.Collection(tasks)
            });
            this.showChildView('tree', treeView);
        }
    },

    childViewEvents: {
        'child:show:task': 'showTask'
    },

    showTask(model) {
        this.triggerMethod('showTask', model);
    },
});


const ProjectsView = Mn.CollectionView.extend({
    tagName: 'div',
    className: 'container-fluid',
    childView: ProjectView,
});

export default ProjectsView

