import Ember from 'ember';

export default Ember.Route.extend({

  model(){

    var mvc_obj = Ember.Object.create({'Model': 'The model directly manages the data, logic and rules of the application.'},
                    {'View': 'A view can be any output representation of information, such as a chart or a diagram. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.'},
                    {'Controller': 'The third part, the controller, accepts input and converts it to commands for the model or view.'});

    return mvc_obj;
  }

});
