import Backbone from "backbone";
import Project from './ProjectModel'

const Projects = Backbone.Collection.extend({

    //url: '/projects',
    model: Project,
    initialize() {
        //this.fetch();
    }
});

export default Projects;