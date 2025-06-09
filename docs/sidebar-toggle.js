$(document).ready(function() {
  $('.toggle-sidebar-btn').click(function() {
    $('.sidebar').toggleClass('collapsed');
    $('.main').toggleClass('expanded');
  });
});
