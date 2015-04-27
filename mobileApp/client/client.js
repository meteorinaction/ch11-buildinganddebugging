Meteor.startup(function () {
  Geolocation.currentLocation();
});

Template.location.helpers({
  currentPosition: function () {
    return Geolocation.currentLocation();
  }
});