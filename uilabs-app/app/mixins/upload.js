import Ember from 'ember';
import CustomDialog from '../utils/custom-dialog';

const { Object, Mixin } = Ember;

export default Mixin.create({

    dialogInstance: null,
    recentFolders: ['Personal Folder', 'Share Folder', 'Org Shared Folder', 'Favorite Folder'],
    ownedTreeList: [],

    init(){

        this._super(...arguments);

        let newArray = this.get("recentFolders").map( (folderName) => {
            return Object.create({"name": folderName});
        });

        this.set("recentFolders", newArray);

        // Load Tree List
        this.set("ownedTreeList", [
            Object.create({ "label":"My Folders", "id":"folder", "treeOpened":true, "hasSubfolder": true, "children":[
                    Object.create({ "label":"Documents", "id":"folder_1", "treeOpened":true, "hasSubfolder": true, "children": [
                            Object.create({ "label":"Document_1", "id":"folder_11", "children": []}),
                            Object.create({ "label":"Document_2", "id":"folder_12", "children": []}),
                            Object.create({ "label":"Document_3", "id":"folder_13", "children": []})
                        ]
                    }),
                    Object.create({ "label":"Spreadsheets", "id":"folder_2", "hasSubfolder": true, "children": [
                            Object.create({ "label":"Spreadsheet_1", "id":"folder_31", "children": []}),
                            Object.create({ "label":"Spreadsheet_2", "id":"folder_32", "children": []}),
                            Object.create({ "label":"Spreadsheet_3", "id":"folder_33", "children": []}),
                            Object.create({ "label":"Spreadsheet_4", "id":"folder_34", "children": []})
                        ]
                    }),
                    Object.create({ "label":"Presentations", "id":"folder_3", "treeOpened":true, "hasSubfolder": true, "children": [
                            Object.create({ "label":"Presentation_1", "id":"folder_31", "children": []}),
                            Object.create({ "label":"Presentation_2", "id":"folder_32", "children": []}),
                            Object.create({ "label":"Presentation_3", "id":"folder_33", "children": []}),
                            Object.create({ "label":"Presentation_4", "id":"folder_34", "children": []})
                        ]
                    }),
                    Object.create({ "label":"Folders", "id":"folder_4", "children": []})
                ]
            })
        ]);
    },
    uploadSuccessCallback(){
        CustomDialog.hide(this.get("dialogInstance"));
    },
    uploadFailureCallback(){
        CustomDialog.hide(this.get("dialogInstance"));
    },

    actions: {
        showUploadDialog(){

            let dialogOptions = {
                title: "Upload File",
                buttons: {
                    "Start Upload": ()=>{
                        this.uploadSuccessCallback();
                    },
                    "Cancel": ()=>{
                        this.uploadFailureCallback();
                    }
                }
            };

			let dialogObject = CustomDialog.show( 'upload-dialog', dialogOptions);
            this.set("dialogInstance", dialogObject);
		}
    }
});
