import Ember from 'ember';

export default Ember.Route.extend({
  model()
  {
    return [
                  Ember.Object.create({
                    "ftype":"image",
                    "res_name": "Image File",
                    "is_active":false,
                    "id":1
                  }),
                  Ember.Object.create({
                    "ftype":"pdf",
                    "res_name": "Pdf File",
                    "is_active":false,
                    "id":2
                  }),
                  Ember.Object.create({
                    "ftype":"audio",
                    "res_name": "Audio File",
                    "is_active":false,
                    "id":3
                  }),
                  Ember.Object.create({
                    "ftype":"video",
                    "res_name": "Video File",
                    "is_active":false,
                    "id":4
                  }),
                  Ember.Object.create({
                    "ftype":"zip",
                    "res_name": "Zip File",
                    "is_active":false,
                    "id":5
                  }),
                  Ember.Object.create({
                    "ftype":"developer",
                    "res_name": "Developer File",
                    "is_active":false,
                    "id":6
                  }),
                  Ember.Object.create({
                    "ftype":"writer",
                    "res_name": "Writer File",
                    "is_active":false,
                    "id":7
                  }),
               ];
 }
});
