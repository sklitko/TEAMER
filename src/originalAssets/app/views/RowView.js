import Mn from "backbone.marionette";

const RowView = Mn.View.extend({
    tagName: 'tr',
    template: '#row-template',
});

export default RowView