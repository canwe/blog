(function($){

  'use strict';

  $(function(){

    function trimDate(postId){
      return postId.substr(postId.lastIndexOf('/') + 1);
    }

    if($('#post').length){
      mixpanel.track('post_load', {id : trimDate($('#postId').val())});
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

    $('.other-posts .previous a').on('click', function(){
      mixpanel.track('post_previous', {id : trimDate($(this).attr('id'))});
      return true;
    });

    $('.other-posts .next a').on('click', function(){
      mixpanel.track('post_next', {id : trimDate($(this).attr('id'))});
      return true;
    });

    $('.related a').on('click', function(){
      mixpanel.track('post_related', {id : trimDate($(this).attr('id'))});
      return true;
    });

  });

}(jQuery));