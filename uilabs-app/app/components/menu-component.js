import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Component.extend( MenuMixin, {

  menuObj: [],
  tabObj: [],
  subMenuObj : [],
  isShowSubMenu: false,
  childrenObj: [],
  temp_index: 1,
  showId: '',

  //RECURSIVE CALLING FOR MENUITEM

  displayedChildren: function() {
    return this.get("menuNode").filter(function(node) {
      return node.children;
    });
  }.property("node.children"),

  didInsertElement(){
    var self = this,
    $ = Ember.$;
    $("#createNew").attr({ tabindex: 0});
    $("#createNew").focus();
    var menuObj = self.get('menuNode');
    self.set('menuObj', menuObj);
    var top_y = "20px";
    var left_x = "0px";
    // if(event.clientY !== undefined || event.clientX !== undefined)
    // {
    //   top_y = event.clientY;      //Have to get from contextmenu event handler
    //   left_x = event.clientX;     //Have to get from contextmenu event handler
    // }
    // else{
    //   top_y = "20px";
    //   left_x = "0px";
    // }
    self.get("menuObj").forEach(function (obj){
      if(obj.children.length !== 0)
      {
        self.get('childrenObj').addObject(Ember.Object.create(obj));
      }
    }, this);
    $('#showmenudiv').css({'margin-top': top_y , 'margin-left': left_x}); // No I18N
  },

  //CLICK EVENT ACTION HANDLER

  click(event){
    event.stopPropagation();
    var self = this,
    tabIndex = "";
    if(event.target.id === ""){
      tabIndex = event.target.parentElement.tabIndex;
    }
    else {
      tabIndex = event.target.tabIndex;
    }
    var menuAction = self.get('menuNode')[tabIndex].action;
    if(menuAction !== "")
    {
      self.send(menuAction);
    }
  },

  //KEYBOARD NAVIGATION FOR TABINDEX AND ACTION HANDLER

  keyDown(event){
    var self = this,
    $ = Ember.$,
    temp_model = self.get('menuObj'),
    temp_index = self.get('temp_index'),
    temp_tab_model = temp_model[event.target.tabIndex],
    current_index = temp_tab_model.tab_index,
    temp_current_index = "",
    target_model = "",
    target_id = "";
    if(event.keyCode === 37)     //LEFT KEY ACTION HANDLER
    {
      var sub_id = event.target.id.split("_")[0];
      $("#"+sub_id+"_div").css("display","none");
      temp_current_index = $("#"+sub_id)[0].tabIndex;
      if(temp_current_index > temp_model.length)
      {
        return;
      }
    }
    if (event.keyCode === 40)    //KEY DOWN ACTION HANDLER
    {
      event.stopPropagation();
      temp_current_index = temp_index + current_index;
      if(temp_current_index === temp_model.length)
      {
        temp_current_index = 0;
      }
    }
    if (event.keyCode === 38)   //KEY UP ACTION HANDLER
    {
      event.stopPropagation();
      temp_current_index = current_index - temp_index;
      if(temp_current_index === -1)
      {
        temp_current_index = temp_model.length - 1;
      }
    }
    if( event.keyCode === 13 || event.keyCode === 39)    //KEY ENTER AND RIGHT KEY ACTION HANDLER
    {
      event.stopPropagation();
      var enter_model = temp_model[current_index];
      if(enter_model.action !== "")      //KEY BOARD NAVIGATION MENU ACTION HANDLER
      {
        self.send(enter_model.action);
        return;
      }
      else{                  //KEY BOARD NAVIGATION SUBMENU ACTION HANDLER

        $("#"+enter_model.id+"_div").css("display","block");
        target_id = $("#" + enter_model.id + "_div")[0].children[0].children[0].children[0].id;
        temp_current_index = $("#" + enter_model.id + "_div")[0].children[0].children[0].children[0].tabIndex;
        temp_model = self.get("childrenObj");
        $("#"+target_id).attr({ tabindex: temp_current_index});
        $("#"+target_id).focus();
        return;
      }
    }
    target_model = temp_model[temp_current_index];
    target_id = target_model.id;
    var isChildren = $("#"+target_id)[0].attributes["ischildren"];
    var isShowSubMenu = self.get("isShowSubMenu");
    if(isChildren)
    {
      var position = $("#"+target_id).position();
      console.log(position);
      self.send("showSubMenu", target_id);
      $("#"+target_id+"_div").css({'position':'absolute', 'top': position.top , 'left': '254px', 'display': 'block'}); // No I18N
      self.set("showId", target_id);
      self.set("isShowSubMenu", true);
    }
    $("#"+target_id).attr({ tabindex: temp_current_index});
    $("#"+target_id).focus();
  },

  // MOUSEMOVE EVENT ACTION HANDLER

  mouseMove(event){
    event.stopPropagation();
    var self = this,
    $ = Ember.$,
    target_Parent = event.target.parentElement,
    target_Id = target_Parent.id,
    topY = event.clientY,
    leftX = event.clientX,
    isChildren = event.target.parentElement.attributes["ischildren"],
    isShowSubMenu = self.get("isShowSubMenu");
    if(event.target.id)
    {
      target_Id = event.target.id;
      var isSubMenu = $("#"+target_Id)[0].attributes["ischildren"];
      $("#"+target_Id+"_div").css({'display': 'block'}); // No I18N
    }
    if(isChildren || isSubMenu)     //IF PARENT HAVE CHILDREN OBJ
    {
      if(target_Id.split("_").length === 2)   //IF SUBMENU TARGETED
      {
        $("#"+target_Id+"_div").css({'display': 'block'}); // No I18N
        return;
      }
      if(isShowSubMenu && target_Id === self.get("showId"))   //FIX FOR TRIGGERING MOUSEMOVE
      {
        return;
      }
      self.send("showSubMenu", target_Id);
      $("#"+target_Id+"_div").css({'position':'absolute', 'top': topY - 20 , 'left': '254px', 'display': 'block'}); // No I18N
      self.set("showId", target_Id);
      self.set("isShowSubMenu", true);
    }
    else {  //IF PARENT HAVE NO CHILDREN OBJ
      self.send("showSubMenu", target_Id);
    }
  },

  actions:{
    showSubMenu:function(toggleId)
    {
      var self = this,
      $ = Ember.$;
      self.get('childrenObj').forEach(function (obj){
        if(obj.id === toggleId)
        {
          $("#"+toggleId+"_div").css("display","block");
        }
        else
        {
          $("#"+obj.id+"_div").css("display","none");
        }
      }, this);

    }
  }
});
