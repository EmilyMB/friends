import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../helpers/start-app';

let application;

module('Acceptance | friends/new', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });
});

test('Creating a new friend', function(assert) {
  visit('/');
  click('a[href="/friends/new"]');
  andThen(function() {
    assert.equal(currentPath(), 'friends.new');
  });

  fillIn('input[placeholder="First Name"]', 'Stuff');
  fillIn('input[placeholder="Last Name"]', 'Mylastname');
  fillIn('input[placeholder="email"]', 'stuff@example.com');
  fillIn('input[placeholder="twitter"]', 'stuff');
  click('input[value="save"]');

  andThen(function() {
    assert.equal(
      currentRouteName(),
      'friends.show.index',
      'Redirects to friends.show after create'
    );
  });
});

test('Clicking save without filling fields', function(assert) {
  visit('friends/new');
  click('input[value="save"]');
  andThen(function() {
    assert.equal(
      currentRouteName(),
      'friends.new',
      'Stays on new page'
    );
    assert.equal(
      find('h2:contains(All fields must be filled in)').length,
      1,
      'Displays error message'
    );
  });
});
