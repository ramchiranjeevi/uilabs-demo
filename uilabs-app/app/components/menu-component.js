import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Component.extend( MenuMixin, {

  classNameBindings: ["menuList"],
  displayedItem: true,
  menuList: Ember.computed.alias('displayedItem'),
  menuObj: [],
  tabObj: [],
  subMenuObj : [],
  isShowMenus: false,
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
    var temp_index = self.get('temp_index');
    self.get("menuObj").forEach(function (obj){
      temp_index = temp_index - 1;
      $("#"+obj.id).attr({ tabindex: temp_index});
      temp_index = self.get('temp_index') + 1;
      self.set("temp_index", temp_index);
      if(obj.children.length !== 0)
      {
        self.get('childrenObj').addObject(Ember.Object.create(obj));
      }
    }, this);
    self.set("temp_index", 1);
    $('#showmenudiv').css({'top': top_y , 'left': left_x});
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

  //CONTEXTMENU EVENT ACTION HANDLER

  contextMenu(event){
    event.preventDefault();
    event.stopPropagation();
    var self = this,
    $ = Ember.$;
    var top = event.clientY;
    var left = event.clientX;
    var isShowMenus = self.get("isShowMenus");
    if(!isShowMenus)
    {
      self.toggleProperty('isShowMenu');
    }
    $("#showmenudiv").css({'position':'absolute', 'top': top - 23 , 'left': left - 238, 'display': 'block'});
  },

  //KEYBOARD NAVIGATION FOR TABINDEX AND ACTION HANDLER

  keyDown(event){
    var self = this,
    $ = Ember.$,
    temp_model = self.get('menuObj'),
    temp_index = self.get('temp_index'),
    temp_tab_model = temp_model[event.target.tabIndex],
    current_index = $("#"+temp_tab_model.id)[0].tabIndex,
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
    if(temp_current_index === 0)
    {
      self.set("showId", '');    //RESET THE VALUE
    }
    target_id = target_model.id;
    var isChildren = $("#"+target_id)[0].attributes["ischildren"],
    isShowSubMenu = self.get("isShowSubMenu"),
    target_pos = $("#"+target_id).position(),
    pos_menu = $("#showmenudiv").position(),
    leftX = pos_menu.left + $("#showmenudiv").width();
    if(isChildren)
    {
      if(target_id.split("_").length === 2)   //IF SUBMENU TARGETED
      {
        $("#"+target_id.split("_")[0]+"_div").css({'display': 'block'});
      }
      else if(isShowSubMenu && target_id === self.get("showId"))   //FIX FOR TRIGGERING MOUSEMOVE
      {
        $("#"+target_id.split("_")[0]+"_div").css({'display': 'none'});
      }
      else {

        self.send("setSubMenuPosition", target_id, target_pos.top, leftX );  //POSITIONING SUBMENU
      }
    }
    else {
      self.send("showSubMenu", target_id);
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
    target_id = target_Parent.id,
    topY = event.clientY,
    pos_menu = $("#showmenudiv").position(),
    leftX = pos_menu.left + $("#showmenudiv").width(),
    isChildren = event.target.parentElement.attributes["ischildren"],
    isShowSubMenu = self.get("isShowSubMenu");
    if(event.target.id)
    {
      target_id = event.target.id;
      isChildren = $("#"+target_id)[0].attributes["ischildren"];
      $("#"+target_id+"_div").css({'display': 'block'});
    }
    if(isChildren)     //IF PARENT HAVE CHILDREN OBJ
    {
      if(target_id.split("_").length === 2)   //IF SUBMENU TARGETED
      {
        $("#"+target_id.split("_")[0]+"_div").css({'display': 'block'});
        return;
      }
      else if(isShowSubMenu && target_id === self.get("showId"))   //FIX FOR TRIGGERING MOUSEMOVE
      {
        return;
      }
      else
      {
        self.send("setSubMenuPosition", target_id, topY - 20, leftX);  //POSITIONING SUBMENU
      }
    }
    else {  //IF PARENT HAVE NO CHILDREN OBJ
      self.send("showSubMenu", target_id);
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
    },

    setSubMenuPosition:function(toggleId, pos_top, pos_left)
    {
      var self = this,
      $ = Ember.$;
      self.$().children().closest($("#"+toggleId+"_div")).children().removeClass("menu-list");   //REMOVE MENU LIST CLASS FOR SUBMENU
      self.send("showSubMenu", toggleId);
      $("#"+toggleId+"_div").css({'position':'absolute', 'top': pos_top , 'left': pos_left, 'display': 'block'});
      self.set("showId", toggleId);
      self.set("isShowSubMenu", true);
    }
  }
});
