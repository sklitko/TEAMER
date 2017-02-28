import Mn from "backbone.marionette"
import ProjectView from './ProjectView';

const MainView = Mn.CollectionView.extend({
    tagName: 'div',
    className: 'container-fluid',
    childView: ProjectView,

});

export default MainView

