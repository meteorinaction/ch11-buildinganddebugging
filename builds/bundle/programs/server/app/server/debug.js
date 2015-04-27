(function(){Meteor.startup(function () {
  var status = 'initialized';
  debugger;
  if (status === 'initialized') {
    status = 'done'
  }
  console.log('status is now ' + status);
});

})();
