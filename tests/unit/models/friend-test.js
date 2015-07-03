import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('friend', 'Unit | Model | friend', {
  needs: ['model:article']
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('fullName joins first and last name', function(assert) {
  const model = this.subject({firstName: 'Bob', lastName: 'Smith'});

  assert.equal(model.get('fullName'), 'Bob Smith');

  Ember.run(function() {
    model.set('firstName', 'Heidy');
  });

  assert.equal(model.get('fullName'), 'Heidy Smith', 'Updates fullName');
});

test('articles relationship', function(assert) {
  const klass = this.subject({}).constructor;

  const relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles');
  assert.equal(relationship.kind, 'hasMany');
});
