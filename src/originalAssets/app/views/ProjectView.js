import Mn from "backbone.marionette";
import BodyView from './BodyView';

const ProjectView = Mn.View.extend({

    tagName: 'table',
    className: 'table table-hover project_title',
    template: '#table',

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

export default ProjectView;