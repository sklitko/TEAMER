import Mn from "backbone.marionette";
import RowView from './RowView';

const BodyView = Mn.CollectionView.extend({
    tagName: 'tbody',
    childView: RowView
});

export default BodyView