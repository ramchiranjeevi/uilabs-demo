import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('previews/pdf-component', 'Integration | Component | previews/pdf component', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{previews/pdf-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#previews/pdf-component}}
      template block text
    {{/previews/pdf-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
