import Backbone from "backbone";

const MainViewModel = Backbone.Model.extend({
    initialize(options){
        //TestApp.logger.system('MainViewModel initialize')
    },
    defaults: {
        //"view": "search",
        id: '1',
        title: '1'
    }
});

export default MainViewModel;