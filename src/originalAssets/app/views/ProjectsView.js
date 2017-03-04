import Mn from "backbone.marionette"

const RowView = Mn.View.extend({
    tagName: 'tr',
    template: '#row-template',
});


const BodyView = Mn.CollectionView.extend({
    tagName: 'tbody',
    childView: RowView
});


const ProjectView = Mn.View.extend({

    tagName: 'table',
    className: 'table table-hover project_title',
    template: '#table',

    ui: {
        delete: '#delete_project'
    },
    events: {
        'click @ui.delete': 'onDeleteProject'
    },
    onDeleteProject() {
        //console.log(this.model.toJSON())
        //console.log(this.collection)
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
    }
});


const ProjectsView = Mn.CollectionView.extend({
    tagName: 'div',
    className: 'container-fluid',

    childView: ProjectView,

});

export default ProjectsView

