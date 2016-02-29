// import Ember from 'ember';
import FolderTreeItemComponent from './folder-tree-item';
import layout from '../templates/components/folder-tree-item';

export default FolderTreeItemComponent.extend({
    layout: layout,
    doubleClick( event ){
        event.stopPropagation();
        this.send( "toggleSubFolder" );
    }
});
