import Mn from "backbone.marionette"

const BreadcrumbView = Mn.View.extend({
    template  : '#link_template',
    className : 'breadcrumb'
});

const BreadcrumbListView = Mn.CollectionView.extend({
    initialize(){
        this.listenTo(this.collection, 'change', this.render );
    },
    childView  : BreadcrumbView,
});


export default BreadcrumbListView;