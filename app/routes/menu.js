import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var name = [{'action': 'createfolderAction', 'name':'Create New', 'children': [], 'icon' : 'edit icon'},
    {'action': 'openAction', 'name':'Open', 'children': [], 'icon' : 'globe icon'},
    {'action': 'shareAction', 'name':'Share', 'children': [], 'icon' : 'settings icon'},
    {'action': 'cutAction', 'name':'Cut', 'children': [], 'icon' : 'edit icon', 'type': 'cmd+x'},
    {'action': 'copyAction', 'name':'Copy', 'children': [],  'icon' : 'edit icon', 'type': 'cmd+c'},
    {'action': 'pasteAction', 'name':'Paste', 'children': [], 'icon' : 'globe icon', 'type': 'cmd+v'},
    {'action': 'renameAction', 'name':'Rename', 'children': [],'icon' : 'edit icon'},
    {'action': 'duplicateAction', 'name':'Duplicate', 'children': [], 'icon' : 'settings icon'},
    {'action': 'downloadAction', 'name':'Download', 'children': [], 'icon': 'globe icon' },
    {'action': '', 'name': 'More', 'arrowClass':'dropdown', 'icon' : 'icon',
    'children': [{'action':'readAction', 'name': 'Read Only' , 'isSubMenu': 'true', 'icon' : 'edit icon', 'arrowClass':'', 'type': '.ro', 'children': []},
    {'action':'readWriteAction', 'name': 'Read Write' ,  'isSubMenu': 'true', 'icon' : 'globe icon', 'arrowClass':'', 'type': '.rw', 'children': []},
    {'action':'coOwnerAction', 'name': 'Co Owner' , 'isSubMenu': 'true', 'icon' : 'settings icon', 'arrowClass':'', 'type': '.co','children': []},]}];
    return name;
  }
});
