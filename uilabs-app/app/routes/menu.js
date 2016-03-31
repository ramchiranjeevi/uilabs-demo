import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var name = [{'action': 'createfolderAction', 'name':'Create New', 'id': 'createNew', 'children': [], 'icon' : 'edit icon'},
    {'action': '', 'name':'Open', 'id': 'open', 'arrowClass':'dropdown', 'icon' : 'globe icon', 'isSubMenu': 'true',
    'children': [{'action':'openDocumentAction', 'name': 'Document' , 'id': 'open_doc', 'isSubMenu': 'true', 'icon' : 'globe icon', 'arrowClass':'', 'type': 'oo', 'children': []},
    {'action':'openImageAction', 'name': 'Image' , 'id': 'open_img', 'isSubMenu': 'true', 'icon' : 'settings icon', 'arrowClass':'', 'type': 'wo','children': []},]},
    {'action': '', 'name':'Share', 'id': 'share', 'isSubMenu': 'true', 'arrowClass':'dropdown', 'icon' : 'settings icon',
    'children': [{'action':'readAction', 'name': 'Read Only' ,  'id': 'share_ro', 'isSubMenu': 'true', 'icon' : 'edit icon', 'arrowClass':'', 'type': '.ro', 'children': []},
    {'action':'readWriteAction', 'name': 'Read Write' , 'id': 'share_rw', 'isSubMenu': 'true', 'icon' : 'globe icon', 'arrowClass':'', 'type': '.rw', 'children': []},
    {'action':'coOwnerAction', 'name': 'Co Owner' , 'id': 'share_co', 'isSubMenu': 'true', 'icon' : 'settings icon', 'arrowClass':'', 'type': '.co','children': []},]},
    {'action': 'cutAction', 'name':'Cut', 'id': 'cut', 'children': [], 'icon' : 'edit icon', 'type': '⌘X'},
    {'action': 'copyAction', 'name':'Copy', 'id': 'copy', 'children': [],  'icon' : 'edit icon', 'type': '⌘C'},
    {'action': 'pasteAction', 'name':'Paste', 'id': 'paste', 'children': [], 'icon' : 'globe icon', 'type': '⌘V'},
    {'action': 'renameAction', 'name':'Rename', 'id': 'rename', 'children': [],'icon' : 'edit icon'},
    {'action': 'duplicateAction', 'name':'Duplicate', 'id': 'duplicate', 'children': [], 'icon' : 'settings icon'},
    {'action': 'downloadAction', 'name':'Download', 'id': 'download', 'children': [], 'icon': 'globe icon'},
    {'action': '', 'name': 'More',  'id': 'more', 'isSubMenu': 'true', 'arrowClass':'dropdown', 'icon' : 'grid layout icon',
    'children': [{'action':'editAction', 'name': 'Edit' , 'id': 'more_edit', 'isSubMenu': 'true', 'icon' : 'edit icon', 'arrowClass':'', 'type': '.ed', 'children': []},
    {'action':'languageAction', 'name': 'Language' ,  'id': 'more_lang', 'isSubMenu': 'true', 'icon' : 'globe icon', 'arrowClass':'', 'type': '.ch', 'children': []},
    {'action':'settingsAction', 'name': 'Settings' , 'id': 'more_sett', 'isSubMenu': 'true', 'icon' : 'settings icon', 'arrowClass':'', 'type': '.se','children': []},]}];
    return name;
  },

});
