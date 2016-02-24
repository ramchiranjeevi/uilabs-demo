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
                        "res_name": "Folder 1",
                        "res_id": "folder_1",
                        "is_opened": false,
                        "subfolder": true,
                        "children": [
                            Ember.Object.create({
                                "res_name": "Folder 11",
                                "res_id": "folder_11",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Folder 12",
                                "res_id": "folder_12",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Folder 13",
                                "res_id": "folder_13",
                                "is_opened": false,
                                "subfolder": false,
                                "selected": true,
                                "children": []
                            })
                        ]
                    }),
                    Ember.Object.create({
                        "res_name": "Folder 2",
                        "res_id": "folder_2",
                        "is_opened": false,
                        "subfolder": false,
                        "children": []
                    }),
                    Ember.Object.create({
                        "res_name": "Folder 3",
                        "res_id": "folder_3",
                        "is_opened": false,
                        "subfolder": true,
                        "children": [
                            Ember.Object.create({
                                "res_name": "Folder 31",
                                "res_id": "folder_31",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Folder 32",
                                "res_id": "folder_32",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Folder 33",
                                "res_id": "folder_33",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            }),
                            Ember.Object.create({
                                "res_name": "Folder 34",
                                "res_id": "folder_34",
                                "is_opened": false,
                                "subfolder": false,
                                "children": []
                            })
                        ]
                    }),
                    Ember.Object.create({
                        "res_name": "Folder 4",
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
