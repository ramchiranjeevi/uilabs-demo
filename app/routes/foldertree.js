import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [
            Ember.Object.create({
                "res_name":"My Folders",
                "res_id":"folder",
                "is_opened":true,
                "subfolder": true,
                "is_myfolder": true,
                "children":[
                    Ember.Object.create({
                        "res_name": "Documents",
                        "res_id": "folder_1",
                        "is_opened": true,
                        "subfolder": true,
                        "children": [
                            Ember.Object.create({
                                "res_name": "Document_1",
                                "res_id": "folder_11",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Document_2",
                                "res_id": "folder_12",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Document_3",
                                "res_id": "folder_13",
                                "is_opened": false,
                                "subfolder": false,
                                "selected": true,
                                "children": []
                            })
                        ]
                    }),
                    Ember.Object.create({
                        "res_name": "Spreadsheets",
                        "res_id": "folder_2",
                        "is_opened": false,
                        "subfolder": true,
                        "children": [
                            Ember.Object.create({
                                "res_name": "Spreadsheet_1",
                                "res_id": "folder_31",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Spreadsheet_2",
                                "res_id": "folder_32",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Spreadsheet_3",
                                "res_id": "folder_33",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Spreadsheet_4",
                                "res_id": "folder_34",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            })
                        ]
                    }),
                    Ember.Object.create({
                        "res_name": "Presentations",
                        "res_id": "folder_3",
                        "is_opened": true,
                        "subfolder": true,
                        "children": [
                            Ember.Object.create({
                                "res_name": "Presentation_1",
                                "res_id": "folder_31",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Presentation_2",
                                "res_id": "folder_32",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Presentation_3",
                                "res_id": "folder_33",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Presentation_4",
                                "res_id": "folder_34",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            })
                        ]
                    }),
                    Ember.Object.create({
                        "res_name": "Folders",
                        "res_id": "folder_4",
                        "is_opened": false,
                        "subfolder": false,
                        "children": []
                    })

                ]
            })
        ];
    }
});
