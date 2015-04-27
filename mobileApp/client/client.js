Meteor.startup(function () {
  Geolocation.currentLocation();
});

Template.location.helpers({
  currentPosition: function () {
    return Geolocation.currentLocation();
  }
});

Template.select.events({
  'change #platform': function (evt) {
    var selectedPlatform = evt.currentTarget.value;
    if (Meteor.isCordova) {
      navigator.notification.alert(
        'You picked ' + selectedPlatform, // message
        null, // callback
        'Your choice', // title
        'I know' // buttonName
      );
      navigator.notification.alert(
        'You selected',
        selectedPlatform
      );
    } else {
      console.log('selected ' + selectedPlatform)
    }
  }
});