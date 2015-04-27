console.log('client/views/client.js loaded');
Template.settings.helpers({
  settings: function () {
    return [
      Meteor.settings.public.version
    ];
  }
});