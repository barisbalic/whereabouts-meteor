Devices = new Meteor.Collection('devices');

if (Meteor.isClient) {
  Session.setDefault('mongoSearch', '');
  Session.setDefault('mongoSort', 'connected');

  // Template.deviceDetails.unnamedDevice = function() {
  //   console.log('Show new: ' + headers.get('x-forwarded-for'));
  //   // Devices.find({})
  //   // console.log(headers.get());
  // };

  Template.deviceList.devices = function () {
    var filters = Session.get('mongoSearch');
    var mongoSearch = {username: new RegExp(filters, 'i')};

    // var order = Session.get('mongoSort');
    // var mongoSort = {};
    // mongoSort[order] = -1;

    // return Devices.find(mongoSearch, { sort: mongoSort });
    return Devices.find(mongoSearch, { sort: {connected: -1, connectedAt: -1} });
  };

  Template.deviceList.isBasement = function(location) {
    return location == 'Basement';
  }

  Template.filters.rendered = function() {
    Session.set('mongoSearch', '');
    $('input#user').focus();
  };

  Template.filters.events({
    'keyup input#user': function (evt) {
      var search = evt.srcElement.value;
      Session.set('mongoSearch', search);
    }
  });
}