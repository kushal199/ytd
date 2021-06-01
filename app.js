const fs = require('fs');
const ytdl = require('ytdl-core');
const express = require("express");
const bodyParser = require("body-parser");
const fbvid = require('fbvideos');
//const videoUrlLink = require('video-url-link');
//const ejs = require("ejs");
//const cors = require('cors');
const app = express();
//app.use(cors());
var path= require('path');
const youtubeLinks = require("youtube-video-links");
const Youtube = require('youtube-stream-url');



//app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));



//app.get("/",function (req,res) {

//  res.render("home");

//});
let s;
let a;
let b;
app.get("/",function (req,res) {

 res.sendFile(path.join(__dirname, "public" ,"home.html"));

});
//app.get("/",function (req,res) {

// res.sendFile(__dirname,"public","home.html");

//});

app.post('/downloadmp4', (req,res) => {
 //console.log(req.query);
var URL = req.body.urly;
console.log("this is"+URL);
	let title;
  Youtube.getInfo({url: URL})
    .then(video => res.redirect(video.formats[0].url));
// youtubeLinks(URL).then(function(data) {
//       //data - video URLs in array of object format
//       console.log(data);
//   }).catch(function(error) {
//   	console.log(error);
//   });
});

// ytdl.getBasicInfo(URL, {
//     format: 'mp4'
//  }, (err, info) => {
//     title = info.player_response.videoDetails.title;
//      console.log(info.player_response.videoDetails);
//      res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
//   });
//  ytdl.getInfo(URL, (err, info) => {
//   if (err) throw err;
//   //console.log(info.player_response.videoDetails);
//   //let format = ytdl.chooseFormat(info.formats, { quality: '137' });
//   //if (format) {
//   //   s ="137";
//    //console.log(format.qualityLabel);
//   // }
//   //else {
//     let forma = ytdl.chooseFormat(info.formats, { quality: '247' });
//     if (forma) {
//        s ="247";
//      //console.log(format.qualityLabel);
//      }
//     else {
//       let form = ytdl.chooseFormat(info.formats, { quality: '18' });
//       if (form) {
//          s ="18";
//        //console.log(format.qualityLabel);
//        }
//       else {
//         s="lowestvideo";
//
//
//     }
//
//
//   //}
// }
//
// //console.log(s);
// //ytdl(URL, {
// //   format: 'mp4',
// //    }).pipe(res);
// //});
//
//
// });
//
//
//
//
// ytdl(URL, {
//     format: 'mp4',
//     }).pipe(res);
// });



//app.get('/downloadmp3', (req,res) => {
// console.log(req.query);
//var URL = req.query.oops;
//console.log("this is"+URL);
//	let title;
//  ytdl.getBasicInfo(URL, {
//      format: 'mp4'
  // }, (err, info) => {
  //    title = info.player_response.videoDetails.title;
  //     console.log(info.player_response.videoDetails.title);
  //     res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
  //  });
  //  ytdl(URL, {
    //    format: 'mp3',
        //quality: s
    //    filter: 'audioonly'
    //    }).pipe(res);
  //  });




app.post("/down",function(req,res){

   a = req.body.url;
   console.log(a);
  //p.getInfo(a).then(function(info){
  // b=info.download.sd;
  //console.log(b);
  fbvid.low(a).then(function(info){
  console.log(info);
  res.redirect(info.url);
});
//  res.redirect(b);
//});
});

app.post("/downhi",function(req,res){

   a = req.body.urlhi;
   console.log(a);
  //p.getInfo(a).then(function(info){
  // b=info.download.sd;
  //console.log(b);
  fbvid.high(a).then(function(info){
  console.log(info);
  res.redirect(info.url);
});
//  res.redirect(b);
//});
});



app.post("/downins",function(req,res){

   a = req.body.urlins;
   console.log(a);
  //p.getInfo(a).then(function(info){
  // b=info.download.sd;
  //console.log(b);
  dinstagram req.body.urlins;

});
//  res.redirect(b);
//});




  let port = process.env.PORT;
  if (port == null || port == "") {
    port = 3000;
  }
  app.listen(port, function() {
    console.log("Server started on port 3000");
  });
