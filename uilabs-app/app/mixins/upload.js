import Ember from 'ember';
import CustomDialogUtil from '../utils/custom-dialog';

const { Object, Mixin } = Ember;

export default Mixin.create({

    dialogInstance: null,
    selectedFolder: null,
    ownedTreeList: [],
    filesList: [],
    fileObjects: [],
    showProgress: false,
    recentFolders: ['Personal Folder', 'Share Folder', 'Org Shared Folder', 'Favorite Folder'],

    init(){

        this._super(...arguments);

        let newArray = this.get("recentFolders").map( (folderName, index) => {
            return Object.create({"label": folderName, "id":`recent_${index}`});
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
        CustomDialogUtil.hide(this.get("dialogInstance"));
        this.showProgressBar();
    },
    uploadFailureCallback(){
        CustomDialogUtil.hide(this.get("dialogInstance"));
    },
    showProgressBar(){

        let filesArray = this.get("filesList").map(( file ) => {
            let { name, size, webkitRelativePath } = file;
            return Object.create({ "label": name, "size": size, "path": webkitRelativePath, "color": 'teal', "value": 0, "showPercentInBar": true });
        });

        this.set( "fileObjects", filesArray );
        this.set( "showProgress", true );
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
			let dialogObject = CustomDialogUtil.show( 'upload-dialog', dialogOptions);
            this.set("dialogInstance", dialogObject);
		}
    }
});
