import Backbone from "backbone";
import Mn from "backbone.marionette";
import Router from './routers/Router';
import _ from 'lodash';
import MyView from './views/MyView';

const Task = Backbone.Model.extend({
    defaults: {
        id: 0,
        project_id: 0,
        title_task: '',
        completed: 0
    }
});

const TeamerApp = Mn.Application.extend({

    setRootLayout() {
        this.root = new MyView();
        this.root.render();
    },

    onStart() {


        this.setRootLayout();
        const router = new Router();
        Backbone.history.start();
    }
});

const teamer = new TeamerApp();

//window.TeamerApp = TeamerApp;
window.teamer = teamer;


export default TeamerApp;