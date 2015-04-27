(function(){Meteor.methods({
  // debugMethod
  'debugMethod': function () {
    console.log('Method.debugMethod called');
    debugger;
    var value1 = 1;
    var value2 = 2;
    debugger;
    var sum = value1 + value2;
    console.log('sum is ' + sum)
    return sum;
  }
});

})();
