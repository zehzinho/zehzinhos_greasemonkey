// ==UserScript==
// @name           IDontCareWhereYouAre
// @namespace      dreamymonkey.com
// @description    Hides unuseful tweets from your  timeline
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @include        http://twitter.com/*
// @include        http://explore.twitter.com/*
// @include        https://twitter.com/*
// ==/UserScript==
$.ajax({
   complete: function() {
     $('.tweet-text').each(function(index) {
      var html = $(this).html();

      if (html.indexOf('foursquare') != -1 || html.indexOf('4sq') != -1) {
        $(this).parentsUntil('.stream-items').hide();
      }
    });
   }
 });


