import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var name = [{'action': 'createfolderAction', 'name':'Create New', 'id': 'createNew', 'children': [], 'icon' : 'edit icon', 'tab_index' : 0 },
    {'action': 'openAction', 'name':'Open', 'id': 'open', 'children': [], 'icon' : 'globe icon', 'tab_index' : 1 },
    {'action': 'shareAction', 'name':'Share', 'id': 'share', 'children': [], 'icon' : 'settings icon', 'tab_index' : 2 },
    {'action': 'cutAction', 'name':'Cut', 'id': 'cut', 'children': [], 'icon' : 'edit icon', 'type': '⌘X', 'tab_index' : 3},
    {'action': 'copyAction', 'name':'Copy', 'id': 'copy', 'children': [],  'icon' : 'edit icon', 'type': '⌘C', 'tab_index' : 4},
    {'action': 'pasteAction', 'name':'Paste', 'id': 'paste', 'children': [], 'icon' : 'globe icon', 'type': '⌘V', 'tab_index' : 5 },
    {'action': 'renameAction', 'name':'Rename', 'id': 'rename', 'children': [],'icon' : 'edit icon', 'tab_index' : 6 },
    {'action': 'duplicateAction', 'name':'Duplicate', 'id': 'duplicate', 'children': [], 'icon' : 'settings icon', 'tab_index' : 7},
    {'action': 'downloadAction', 'name':'Download', 'id': 'download', 'children': [], 'icon': 'globe icon', 'tab_index' : 8 },
    {'action': '', 'name': 'More',  'id': 'more', 'arrowClass':'dropdown', 'icon' : 'grid layout icon', 'tab_index' : 9,
    'children': [{'action':'readAction', 'name': 'Read Only' , 'isSubMenu': 'true', 'icon' : 'edit icon', 'arrowClass':'', 'tab_index' : 0, 'type': '.ro', 'children': []},
    {'action':'readWriteAction', 'name': 'Read Write' ,  'isSubMenu': 'true', 'icon' : 'globe icon', 'arrowClass':'', 'tab_index' : 1, 'type': '.rw', 'children': []},
    {'action':'coOwnerAction', 'name': 'Co Owner' , 'isSubMenu': 'true', 'icon' : 'settings icon', 'arrowClass':'', 'tab_index' : 2, 'type': '.co','children': []},]}];
    return name;
  },

});
