import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('article', 'Unit | Model | article', {
  needs: ['model:friend']
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});

test('friend relationship', function(assert) {
  const klass = this.subject({}).constructor;

  const relationship = Ember.get(klass, 'relationshipsByName').get('friend');

  assert.equal(relationship.key, 'friend');
  assert.equal(relationship.kind, 'belongsTo');
});
