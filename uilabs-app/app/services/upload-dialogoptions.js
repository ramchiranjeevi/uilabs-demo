import Ember from 'ember';
import CustomDialog from '../utils/custom-dialog';

export default Ember.Service.extend({
    dialogObject: {},
    filesList: [],
    dailogInstance: '',
    recentFolders: ['Personal Folder', 'Share Folder', 'Org Shared Folder', 'Favorite Folder'],
    ownedTreeList: [],
    initialisation: function(){
        let _this = this;
        let recentFolders = _this.get("recentFolders");

        // Load Tree List
        _this.set("ownedTreeList", [
            Ember.Object.create({ "label":"My Folders", "id":"folder", "treeOpened":true, "hasSubfolder": true, "children":[
                    Ember.Object.create({ "label":"Documents", "id":"folder_1", "treeOpened":true, "hasSubfolder": true, "children": [
                            Ember.Object.create({ "label":"Document_1", "id":"folder_11", "children": []}),
                            Ember.Object.create({ "label":"Document_2", "id":"folder_12", "children": []}),
                            Ember.Object.create({ "label":"Document_3", "id":"folder_13", "children": []})
                        ]
                    }),
                    Ember.Object.create({ "label":"Spreadsheets", "id":"folder_2", "hasSubfolder": true, "children": [
                            Ember.Object.create({ "label":"Spreadsheet_1", "id":"folder_31", "children": []}),
                            Ember.Object.create({ "label":"Spreadsheet_2", "id":"folder_32", "children": []}),
                            Ember.Object.create({ "label":"Spreadsheet_3", "id":"folder_33", "children": []}),
                            Ember.Object.create({ "label":"Spreadsheet_4", "id":"folder_34", "children": []})
                        ]
                    }),
                    Ember.Object.create({ "label":"Presentations", "id":"folder_3", "treeOpened":true, "hasSubfolder": true, "children": [
                            Ember.Object.create({ "label":"Presentation_1", "id":"folder_31", "children": []}),
                            Ember.Object.create({ "label":"Presentation_2", "id":"folder_32", "children": []}),
                            Ember.Object.create({ "label":"Presentation_3", "id":"folder_33", "children": []}),
                            Ember.Object.create({ "label":"Presentation_4", "id":"folder_34", "children": []})
                        ]
                    }),
                    Ember.Object.create({ "label":"Folders", "id":"folder_4", "children": []})
                ]
            })
        ]);

        // Converting as Ember Object
        let newArray = recentFolders.map( (folderName) => {
            return Ember.Object.create({"name": folderName});
        });

        _this.set("recentFolders", newArray);

        //  Dialog Option settings
        _this.set("dialogObject", {
            title: "Upload File",
            successLabel: "Start Upload",
            width: 550,
            buttons: {
                Upload(){
                    CustomDialog.hide(_this.get("dailogInstance"));
                },
                cancel(){
                    CustomDialog.hide(_this.get("dailogInstance"));
                }
            }
        });
    }.on("init"),
    willDestroy(){
        console.log("destroy");
    }
});
