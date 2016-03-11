import Ember from 'ember';
import MenuMixin from '../mixins/menumixin';

export default Ember.Component.extend( MenuMixin, {

  menuObj: [],
  tabObj: [],
  subMenuObj : [],
  isShowSubMenu: false,
  childrenObj: [],

  //RECURSIVE CALLING FOR MENUNODE

  displayedChildren: function() {
    return this.get("menuNode").filter(function(node) {
      return node.children;
    });
  }.property("node.children"),

  didInsertElement(){
    var self = this;
    //    $ = Ember.$;
    //    self.$("#createNew").attr({ tabindex: 1}), self.$("#createNew").focus();
    var menuObj = self.get('menuNode');
    self.set('menuObj', menuObj);
    self.get("menuObj").forEach(function (obj){
      if(obj.children.length !== 0)
      {
        self.get('childrenObj').addObject(Ember.Object.create(obj)); // No I18N
      }
    }, this);
  },

  //CLICK EVENT ACTION HANDLER

  click(event){
    event.stopPropagation();
    var self = this,
    tabIndex = event.target.parentElement.tabIndex;
    var menuAction = self.get('menuNode')[tabIndex].action;
    if(menuAction !== "")
    {
      self.send(menuAction);
    }
  },

  // MOUSEMOVE EVENT ACTION HANDLER

  mouseMove(event){
    //    event.stopPropagation();
    var self = this,
    $ = Ember.$,
    targetId = event.target.id,
    targetChildren = event.target.children,
    targetParent = event.target.parentElement;
    if(targetId.split('_').length !== 1 || targetParent.id.split('_').length !== 1){  //IF SUBMENU TARGETED
      if(targetId === "")          //IF TARGETED ELEMENT IS CHILDREN
      {
        targetId = targetParent.id.split('_')[0];
      }
      else {            //IF TARGETED ELEMENT IS PARENT
        targetId = targetId.split('_')[0];
      }
      self.send("showSubMenu", targetId);
    }
    else {          //IF MENU TARGETED
      if(targetId === "")   // IF TARGETED ELEMENT IS CHILDREN
      {
        targetParent = event.target.parentElement;
        targetId = targetParent.id;
        targetChildren = targetParent.children;
      }
      if(targetChildren.length === 4)   //IF TARGETED ELEMENT IS PARENT WHICH HAS CHILDREN OBJ
      {
        targetChildren = targetChildren[3].id.split('_')[0];
        if(targetChildren === targetId)
        {
          self.send("showSubMenu", targetId);
        }
      }
      else    //IF TARGETED ELEMENT IS PARENT WHICH HAS NO CHILDREN OBJ
      {
        if(targetChildren !== targetId)
        {
          $(".ui.vertical.menu.submenu").css({'display' : 'none'});
        }
      }
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
