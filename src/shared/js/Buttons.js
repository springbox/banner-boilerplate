var Buttons = function(dbug) {
  var dbug = dbug;
  "use strict";
  this.enable = function(elements) {
    enableButtons(elements);
  }

  this.disable = function(elements) {
    disableButtons(elements);
  }

  function enableButtons(elements) {
    for (var i = 0; i < elements.length; i++) {
      var el = document.getElementById(elements[i]) || document.getElementsByClassName(elements)[0];
      if(dbug) console.log("[BUTTONS] Enabling:", el);
      el.style.cursor = "pointer";
      el.addEventListener("click", clicked, true); // For all major browsers,  except IE 8 and earlier
      el.addEventListener("mouseenter", onOver, false);
      el.addEventListener("mouseleave", onOut, false);
    }
  }

  function disableButtons(elements) {
    for (var i = 0; i < elements.length; i++) {
      var el = document.getElementById(elements[i]);
      el.removeEventListener("click", clicked); // For all major browsers,  except IE 8 and earlier
      el.removeEventListener("mouseenter", onOver, false);
      el.removeEventListener("mouseleave", onOut, false);
    }
  }

  function clicked(e) {
    // You'll want other parts of the ad to know when there has been a mouse over
    var event = document.createEvent('Event');
    event.initEvent("CLICKED", true, false);
    event.param = e.target.id || e.target.className;
    // The event dispatched carries the id name of the dispatecher
    if(dbug) console.log("[BUTTONS] You have clicked on:", event.param);
    window.dispatchEvent(event);
  }

  function onOver(e) {
    // You'll want other parts of the ad to know when there has been a mouse over
    var event = document.createEvent('Event');
    event.initEvent("MOUSE_OVER", true, false);
    event.param = e.target.id || e.target.className;
    // The event dispatched carries the id name of the dispatecher
    if(dbug) console.log("[BUTTONS] Over on:", event.param);
    window.dispatchEvent(event);
  }

  function onOut(e) {
    // You'll want other parts of the ad to know when there has been a mouse out
    var event = document.createEvent('Event');
    event.initEvent("MOUSE_OUT", true, false);
    event.param = e.target.id || e.target.className;
    // The event dispatched carries the id name of the dispatecher
    if(dbug) console.log("[BUTTONS] Out of:", event.param);
    window.dispatchEvent(event);
  }
};
/* End of Button.js */
