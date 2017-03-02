import Mn from "backbone.marionette"

const RowView = Mn.View.extend({
    tagName: 'tr',
    template: '#message-template',
});


const BodyView = Mn.CollectionView.extend({
    tagName: 'tbody',
    childView: RowView
});


const ProjectView = Mn.View.extend({

    tagName: 'table',
    className: 'table table-hover project_title',
    template: '#task-template',

    regions: {
        tree: {
            el: 'tbody',
            replaceElement: true
        }
    },

    onRender() {
        console.log(this.model.get('messages'));
        const messages = this.model.get('messages');

        if (messages.length) {
            const treeView = new BodyView({
                collection: new Backbone.Collection(messages)
            });
            this.showChildView('tree', treeView);
        }
    }
});


const TaskView = Mn.CollectionView.extend({
    tagName: 'div',
    className: 'container-fluid',
    childView: ProjectView,

});

export default TaskView

