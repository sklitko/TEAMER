import Mn from "backbone.marionette";
import Controller from './Controller';

const Router = Mn.AppRouter.extend({
    controller: new Controller(),
    appRoutes: {
        '': 'showMain',
        'project/:id':'showProject',
        'project/:id/task_:id':'showTask',
    },


});

export default Router;