import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var name = [{'action': 'createfolderAction', 'name':'Create New', 'children': [], 'isShowMenu': false},
    {'action': 'OpenAction', 'name':'Open', 'children': [], "isShowMenu" : false},
    {'action': 'ShareAction', 'name':'Share', 'children': [], "isShowMenu" : false},
    {'action': 'CutAction', 'name':'Cut', 'children': [], "isShowMenu" : false},
    {'action': 'CopyAction', 'name':'Copy', 'children': [], "isShowMenu" : false},
    {'action': 'PasteAction', 'name':'Paste', 'children': [], "isShowMenu" : false},
    {'action': 'RenameAction', 'name':'Rename', 'children': [], "isShowMenu" : false},
    {'action': 'DuplicateAction', 'name':'Duplicate', 'children': [], "isShowMenu" : false},
    {'action': 'DownloadAction', 'name':'Download', 'children': [], "isShowMenu" : false},
    {'action': 'MoreAction', 'name': 'More', 'arrowClass':'l-arrow-icon' , "isShowMenu" : false,
    'children': [{'action':'readAction', 'subname': 'Read Only' , 'type': '.ro', 'children': []},
    {'action':'readWriteAction', 'subname': 'Read Write' , 'type': '.rw', 'children': []},
    {'action':'CoOwnerAction', 'subname': 'Co Owner' , 'type': '.co','children': []},]}];
    return name;
  }
});
