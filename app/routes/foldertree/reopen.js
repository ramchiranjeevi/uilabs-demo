import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [
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
        ];
    }
});
