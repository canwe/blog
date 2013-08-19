(function($){

  'use strict';

  $(function(){

    if($('#post').length){
      var postId = $('#postId').val();
      postId = postId.substr(postId.lastIndexOf('/'));
      mixpanel.track('post_load', {id : postId});
    }else{
      mixpanel.track('blog_load');
    }

    $('.elsewhere a').on('click', function(){
      mixpanel.track('elsewhere_click', {id : $(this).attr('id')});
      return true;
    });

    $('.details a').on('click', function(){
      mixpanel.track('details_click', {id : $(this).attr('id')});
      return true;
    });

  });

}(jQuery));