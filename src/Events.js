var Events = {

  on: function(eventName, callbackFunction) {
    if (!this.events) {
      this.events = {};
    }
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callbackFunction);
  },

  trigger: function(eventName) {
    for (var i = 0, l = this.events[eventName].length; i < l; i++) {
      this.events[eventName][i]();
    }
  }
};
