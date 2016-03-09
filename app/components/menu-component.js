import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Component.extend( MenuMixin, {

  menuObj: [],
  tabObj: [],
  subMenuObj : [],
  isShowSubMenu: false,
  temp_index: 1,

   //RECURSIVE CALLING FOR MENUNODE

   displayedChildren: function() {
     var self =  this;
    return this.get("menuNode").filter(function(node) {
      return node.children;
    });
  }.property("node.children"),

   didInsertElement(){
     var self = this;
     $ = Ember.$;
     self.$("#createNew").attr({ tabindex: 1}), self.$("#createNew").focus();
     var menuObj = self.get('menuNode');
     self.set('menuObj', menuObj);
   },

   //KeyDown EVENT ACTION HANDLER

   keyDown(event){
     var self = this;
     var targetId = event.target.id,
     temp_model = self.get('menuObj'), // No I18N
     temp_index = self.get('temp_index');  // No I18N
     console.log(temp_model);
   },

  //CLICK EVENT ACTION HANDLER

  click(event){
    var self = this;
    event.stopPropagation();
    var menuAction = self.get('node.action');
    if(menuAction !== "")
    {
      self.send(menuAction);
    }
  },

  // MOUSEMOVE EVENT ACTION HANDLER

  mouseMove( event ){
    event.stopPropagation();
    var self = this,
    $ = Ember.$,
    targetId = event.target.id,
    isChildren = $("#"+targetId).attr("ischildren"),
    showmenudiv = $( "#showmenudiv" ),
    divHeight = "";
    $(".ui.vertical.menu.submenu").css({'display': 'none'});
    if(isChildren)
    {
      if(showmenudiv.height() > event.clientY)
      {
        divHeight = showmenudiv.height() - event.clientY;
      }
      else {
        var height = event.clientY - showmenudiv.height();
        divHeight = showmenudiv.height() + height;
      }
      self.set('isShowSubMenu', true);
      $("#"+targetId+"div").css({'top': divHeight, 'display': 'block'});
    }
    else {
      self.set('isShowSubMenu', false);
      $("#"+targetId+"div").css({'display': 'none'});
    }
  },


});
