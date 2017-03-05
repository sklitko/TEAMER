import Mn from "backbone.marionette";
import _ from 'lodash';
import HeaderView from './HeaderView'
import BreadcrumbListView from './BreadcrumbView'
import breadcrumbCollection from '../models/BreadcrumbCollection';
import TableView from '../views/ProjectView';


const template_footer = _.template('FOOTER');
const footer = new Mn.View({template: template_footer});

const header = new HeaderView();




const breadcrumbView = new BreadcrumbListView({
    collection : breadcrumbCollection
});


//const t = new TableView();

const MainView = Mn.View.extend({
    el: '#todoapp',
    template: false,
    regions: {
        header: '#header',
        breadcrumbs: '#breadcrumbs',
        main: '#main',
        footer: '#footer'
    },
    onRender() {
        this.showChildView('header', header);
        this.showChildView('breadcrumbs', breadcrumbView);
        this.showChildView('main', new TableView());
        this.showChildView('footer', footer);
    }
});

export default MainView;