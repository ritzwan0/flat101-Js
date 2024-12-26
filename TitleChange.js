<script>
window.onload = function() {

  var pageTitle = document.title;
  var attentionMessage = 'We miss you...';

  document.addEventListener('visibilitychange', function(e) {
    var isPageActive = !document.hidden;

    if(!isPageActive){
      document.title = attentionMessage;
    }else {
      document.title = pageTitle;
    }
  });
};
</script>