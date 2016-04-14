import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-tabs-with-content', 'Integration | Component | ui tabs with content', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{ui-tabs-with-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#ui-tabs-with-content}}
      template block text
    {{/ui-tabs-with-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
