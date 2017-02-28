import Mn from "backbone.marionette"
import _ from 'lodash';

const HeaderView = Mn.View.extend({
    template: '#header-template',
    ui: {
        add: '#add'
    },
    events: {
        'click @ui.add': 'onAddBtnClick'
    },
    onAddBtnClick() {
        console.log('work!')
    }
});

export default HeaderView;