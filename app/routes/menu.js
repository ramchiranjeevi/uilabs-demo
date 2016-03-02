import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var name = [{'action': 'createfolderAction', 'name':'Create New', 'children': []},
    {'action': 'OpenAction', 'name':'Open', 'children': []},
    {'action': 'ShareAction', 'name':'Share', 'children': []},
    {'action': 'CutAction', 'name':'Cut', 'children': []},
    {'action': 'CopyAction', 'name':'Copy', 'children': []},
    {'action': 'PasteAction', 'name':'Paste', 'children': []},
    {'action': 'RenameAction', 'name':'Rename', 'children': []},
    {'action': 'DuplicateAction', 'name':'Duplicate', 'children': []},
    {'action': 'DownloadAction', 'name':'Download', 'children': []},
    {'action': 'MoreAction', 'name': 'More', 'arrowClass':'l-arrow-icon',
    'children': [{'action':'readAction', 'subname': 'Read Only' , 'type': '.ro', 'children': []},
    {'action':'readWriteAction', 'subname': 'Read Write' , 'type': '.rw', 'children': []},
    {'action':'CoOwnerAction', 'subname': 'Co Owner' , 'type': '.co','children': []},]}];
    return name;
  }
});
