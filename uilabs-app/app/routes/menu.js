import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var name = [{'action': 'createfolderAction', 'name':'Create New', 'id': 'createNew', 'children': [], 'icon' : 'edit icon', 'tab_index' : 0 },
    {'action': '', 'name':'Open', 'id': 'open', 'arrowClass':'dropdown', 'icon' : 'globe icon', 'isSubMenu': 'true', 'tab_index' : 1,
    'children': [{'action':'openDocumentAction', 'name': 'Document' , 'id': 'open_doc', 'isSubMenu': 'true', 'icon' : 'globe icon', 'arrowClass':'', 'tab_index' : 0, 'type': 'oo', 'children': []},
    {'action':'openImageAction', 'name': 'Image' , 'id': 'open_img', 'isSubMenu': 'true', 'icon' : 'settings icon', 'arrowClass':'', 'tab_index' : 1, 'type': 'wo','children': []},]},
    {'action': '', 'name':'Share', 'id': 'share', 'isSubMenu': 'true', 'arrowClass':'dropdown', 'icon' : 'settings icon', 'tab_index' : 2,
    'children': [{'action':'readAction', 'name': 'Read Only' ,  'id': 'share_ro', 'isSubMenu': 'true', 'icon' : 'edit icon', 'arrowClass':'', 'tab_index' : 0, 'type': '.ro', 'children': []},
    {'action':'readWriteAction', 'name': 'Read Write' , 'id': 'share_rw', 'isSubMenu': 'true', 'icon' : 'globe icon', 'arrowClass':'', 'tab_index' : 1, 'type': '.rw', 'children': []},
    {'action':'coOwnerAction', 'name': 'Co Owner' , 'id': 'share_co', 'isSubMenu': 'true', 'icon' : 'settings icon', 'arrowClass':'', 'tab_index' : 2, 'type': '.co','children': []},]},
    {'action': 'cutAction', 'name':'Cut', 'id': 'cut', 'children': [], 'icon' : 'edit icon', 'type': '⌘X', 'tab_index' : 3},
    {'action': 'copyAction', 'name':'Copy', 'id': 'copy', 'children': [],  'icon' : 'edit icon', 'type': '⌘C', 'tab_index' : 4},
    {'action': 'pasteAction', 'name':'Paste', 'id': 'paste', 'children': [], 'icon' : 'globe icon', 'type': '⌘V', 'tab_index' : 5 },
    {'action': 'renameAction', 'name':'Rename', 'id': 'rename', 'children': [],'icon' : 'edit icon', 'tab_index' : 6 },
    {'action': 'duplicateAction', 'name':'Duplicate', 'id': 'duplicate', 'children': [], 'icon' : 'settings icon', 'tab_index' : 7},
    {'action': 'downloadAction', 'name':'Download', 'id': 'download', 'children': [], 'icon': 'globe icon', 'tab_index' : 8 },
    {'action': '', 'name': 'More',  'id': 'more', 'isSubMenu': 'true', 'arrowClass':'dropdown', 'icon' : 'grid layout icon', 'tab_index' : 9,
    'children': [{'action':'editAction', 'name': 'Edit' , 'id': 'more_edit', 'isSubMenu': 'true', 'icon' : 'edit icon', 'arrowClass':'', 'tab_index' : 0, 'type': '.ed', 'children': []},
    {'action':'languageAction', 'name': 'Language' ,  'id': 'more_lang', 'isSubMenu': 'true', 'icon' : 'globe icon', 'arrowClass':'', 'tab_index' : 1, 'type': '.ch', 'children': []},
    {'action':'settingsAction', 'name': 'Settings' , 'id': 'more_sett', 'isSubMenu': 'true', 'icon' : 'settings icon', 'arrowClass':'', 'tab_index' : 2, 'type': '.se','children': []},]}];
    return name;
  },

});
