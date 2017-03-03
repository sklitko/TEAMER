import Mn from "backbone.marionette";
import _ from 'lodash';
import HeaderView from './HeaderView'
import BreadcrumbListView from './BreadcrumbView'
import breadcrumbCollection from '../models/BreadcrumbCollection';

const template3 = _.template('FOOTER');
const childView3 = new Mn.View({template: template3});

const header = new HeaderView();




const breadcrumbView = new BreadcrumbListView({
    collection : breadcrumbCollection
});

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
        this.showChildView('footer', childView3);
    }
});

export default MainView;