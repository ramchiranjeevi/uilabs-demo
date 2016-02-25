import Ember from 'ember';

export default Ember.Component.extend({

  subMenuObj : [],

  mouseMove( event ){
    var self = this;
    event.stopPropagation();
    var subMenus = this.get('menuItem.children');
    this.set('subMenuObj', subMenus);
    if(subMenus.length){
      self.$(".ui.dropdown.item").addClass("active visible");
      self.$(".ui.dropdown.item .menu.transition" ).removeClass("hidden");
      self.$(".ui.dropdown.item .menu.transition").addClass("visible");
      self.$('#submenudiv').css({'position': 'absolute', 'display': 'block'});
    }
    else {
      self.$( ".ui.dropdown.item").removeClass("active visible");
      self.$( ".ui.dropdown.item .menu.transition" ).removeClass("visible");
      self.$(".ui.dropdown.item .menu.transition" ).addClass("hidden");
      self.$('#submenudiv').css({'display': 'none'});
    }
  }
});
