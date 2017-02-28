import Mn from "backbone.marionette";
import _ from 'lodash';
import HeaderView from './HeaderView'

const template3 = _.template('FOOTER');
const childView3 = new Mn.View({template: template3});

const header = new HeaderView();

const MyView = Mn.View.extend({
    el: '#todoapp',
    template: false,
    regions: {
        header: '#header',
        main: '#main',
        footer: '#footer'
    },
    onRender() {
        this.showChildView('header', header);
        this.showChildView('footer', childView3);
    }
});

export default MyView;