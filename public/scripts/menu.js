document.addEventListener('click', function(e) {
  e = e || window.event;
  //console.log(e);
  var target = e.target || e.srcElement;
  //console.log('target: ', target);
  if (target.parentElement.className.indexOf('has-submenu') > -1) {
    // Find All Previous Opened targets and close them
    var el = document.getElementsByClassName('prett open');
    if(el.length > 0)
    {
      for(var index = 0; index < el.length; index ++) {
        el[index].classList.toggle('open');
      }
    }
    // Open this target
    //console.log(e.target.classList);
    e.target.classList.toggle('open');
  }

  // Mobile Browsers
  if(is_touch_device()) {

   $('.bg').on('click', function(){

     $(this).toggleClass('activate');

     $(this).find('ul').slideToggle();
     return false;
   });
 }

}, false);

function is_touch_device() {
   return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
