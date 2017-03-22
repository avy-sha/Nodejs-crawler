var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var mainlink="http://www.imdb.com";
var data=[];
var name="prisoners";
url = 'http://www.imdb.com/find?ref_=nv_sr_fn&q='+name+'&s=all';

request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, link;

      $('.result_text a').each(function(i, elem){
         data[i]= $(this);
      });
        title = data[0].text();
        link=   data[0].attr("href");
        mainlink=mainlink+link;

      }
    console.log(mainlink);
      request(mainlink, function(err, resp, htm){
          if(!error){
              var $ = cheerio.load(htm);

              $('.title_wrapper').each(function(i, elem){
                  data[i]= $(this);
              })
              ;
              console.log(data[0].children().first().text());

          }

      })
});

