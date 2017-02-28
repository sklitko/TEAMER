import Backbone from "backbone";

const Project = Backbone.Model.extend({
    defaults: {
        id: 0,
        title_project: '',
        task: []
    }

});

export default Project;