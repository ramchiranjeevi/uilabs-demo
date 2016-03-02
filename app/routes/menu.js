import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var name = [{'action': 'createfolderAction', 'name':'Create New', 'children': []},
    {'action': 'openAction', 'name':'Open', 'children': []},
    {'action': 'shareAction', 'name':'Share', 'children': []},
    {'action': 'cutAction', 'name':'Cut', 'children': []},
    {'action': 'copyAction', 'name':'Copy', 'children': []},
    {'action': 'pasteAction', 'name':'Paste', 'children': []},
    {'action': 'renameAction', 'name':'Rename', 'children': []},
    {'action': 'duplicateAction', 'name':'Duplicate', 'children': []},
    {'action': 'downloadAction', 'name':'Download', 'children': []},
    {'action': 'moreAction', 'name': 'More', 'arrowClass':'dropdown icon',
    'children': [{'action':'readAction', 'subname': 'Read Only' , 'type': '.ro', 'children': []},
    {'action':'readWriteAction', 'subname': 'Read Write' , 'type': '.rw', 'children': []},
    {'action':'coOwnerAction', 'subname': 'Co Owner' , 'type': '.co','children': []},]}];
    return name;
  }
});
