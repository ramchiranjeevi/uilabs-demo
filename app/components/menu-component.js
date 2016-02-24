import Ember from 'ember';

export default Ember.Component.extend({

  subMenuObj : [],


  mouseMove( event ){
    event.stopPropagation();
    var subMenus = this.get('menuItem.children');
    this.set('subMenuObj', subMenus);
    if(subMenus.length)
    {
      $(".ui.dropdown.item").addClass("active visible");
      $(".ui.dropdown.item .menu.transition" ).removeClass("hidden");
      $(".ui.dropdown.item .menu.transition").addClass("visible");
      $('#submenudiv').css({'position': 'absolute', 'display': 'block'});
    }
    else {
      $( ".ui.dropdown.item").removeClass("active visible");
      $( ".ui.dropdown.item .menu.transition" ).removeClass("visible");
      $(".ui.dropdown.item .menu.transition" ).addClass("hidden");
      $('#submenudiv').css({'display': 'none'});
    }
  }
});
