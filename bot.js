

const Discord = require('discord.js');
const bot = new Discord.Client();
const token = '';

const Anime = require('malapi').Anime;

const nani = require('nani').init('', '');

const ss = require('anime-scraper').Anime

const randomPuppy = require('random-puppy');

const randomAnimeWallpapers = require('random-anime-wallpapers')

const aq = require('animequote');

const malScraper = require('mal-scraper')

const kote = require('kote-api');

const request = require('request');

var daily = [];

bot.login(token);

bot.on('ready', () =>{
    console.log('ready!');
});


bot.on('message', (message) => {


  if(message.content == '>>flashy'){
    var myRole = message  .guild.roles.find("name", "Rainbow")
    for(var i = 0; i < 1000; i++){
      myRole.setColor('#000000')
      myRole.setColor('#ffffff')
      myRole.setColor('#ff0000')
      myRole.setColor('#008080')
      myRole.setColor('#ffe4el')
      myRole.setColor('#00ffff')
      myRole.setColor('#40e0d0')
      myRole.setColor('#191919')
      myRole.setColor('#ff7f50')
      myRole.setColor('#afeeee')
    }
  }
//PLEASE REMEMBER TO LIST THE SWITCH CASES FROM MOST HEAVY TASKS TO LEAST.
  var rec = message.content.toUpperCase().split(' ');
  var lrec = message.content.split(' ')

  switch(rec[0]){
    case ">>MAL":
    rec.shift()
    Anime.fromName(rec.join(' ')).then(anime => {

      message.reply("**" + anime.title + ":**\n" + anime.synopsis + '\n**Episodes: **' + anime.episodes +
      '\n**Status: **' + anime.status + '\n**Aired: **' + anime.aired + '\n**Type: **' + anime.type +
      '\n**Rating: **' + anime.statistics.score.value + "/10" + "\n**Genres: **" + anime.genres +
      '\n**More Info: **' + anime.detailsLink + '\n');
    });
    break;

    case ">>ANI":
      rec.shift();
      nani.get('anime/search/' + rec.join(' '))
        .then(data => {
      var show = data.map(u => u.title_romaji);
      var desc = data.map(u => u.description);
      var ep = data.map(u => u.total_episodes);
      var status = data.map(u => u.airing_status);
      var start = data.map(u => u.start_date);
      var end = data.map(u => u.end_date);
      var type = data.map(u => u.series_type);
      var rating = data.map(u => u.average_score);
      var genre = data.map(u => u.genres);
      var poster = data.map(u => u.image_url_lge);
      message.reply('**' + show[0] + ':**\n' + desc[0] + '\n**Episodes: **' + ep[0] + '\n**Status: **' +
                    status[0] + '\n**Aired: **' + start[0] + ' to ' + end[0] + '\n**Type: **' + type[0] +
                    '\n**Rating: **' + rating[0] + '\n**Genres: **' + genre[0] + '\n' + poster[0]);
    })
    break;

    case ">>SUGGEST":

    Anime.fromName(aq().quoteanime).then(anime => {

      message.reply("**" + anime.title + ":**\n" + anime.synopsis + '\n**Episodes: **' + anime.episodes +
      '\n**Status: **' + anime.status + '\n**Aired: **' + anime.aired + '\n**Type: **' + anime.type +
      '\n**Rating: **' + anime.statistics.score.value + "/10" + "\n**Genres: **" + anime.genres +
      '\n**More Info: **' + anime.detailsLink + '\n');
    });

    break;

    //YOU DISGUSTING CREEP
    case ">>FUTA":
      randomPuppy('futanari')
      .then(url => {
          message.channel.sendFile(url);
      })
    break;

    case ">>FUTABOMB":
    for(var i = 0; i < 5; i++){
      randomPuppy('futanari')
      .then(url => {
          message.channel.sendFile(url);
      })
    }

    break;

    case ">>STOCKINGS":
      randomPuppy('animelegwear')
      .then(url => {
          message.channel.sendFile(url);
      })
    break;

    case ">>STOCKINGSBOMB":
      for(var i = 0; i < 5; i++){
        randomPuppy('animelegwear')
        .then(url => {
            message.channel.sendFile(url);
        })
      }
    break;

    case ">>LOLI":
      request('http://konachan.com/post.json?tags=loli+order%3Arandom+rating%3AExplicit&limit=1', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var lewd = JSON.parse(body)
          var url = lewd.map(u => u.jpeg_url).join(' ');
          message.channel.sendFile('https:' + url)
        }
      })
    break;

    case ">>LOLIBOMB":
      request('http://konachan.com/post.json?tags=loli+order%3Arandom+rating%3AExplicit&limit=5', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var lewd = JSON.parse(body)
          var url = lewd.map(u => u.jpeg_url)
          for(var i = 0; i < url.length; i ++){
            message.channel.sendFile('https:' + url[i])
          }
        }
      })
    break;


    case ">>MOE":
        randomPuppy('awwnime')
        .then(url => {
            message.channel.sendFile(url);
        })
    break;

    case ">>MOEBOMB":
        for(var i = 0; i < 5; i++){
              randomPuppy('awwnime')
              .then(url => {
                  message.channel.sendFile(url);
              })
        }
    break;

    case ">>SMUG":
        randomPuppy('smuganimegirls')
        .then(url => {
            message.channel.sendFile(url);
        })
    break;

    case ">>SMUGBOMB":
        for(var i = 0; i < 5; i++){
          randomPuppy('smuganimegirls')
          .then(url => {
              message.channel.sendFile(url);
          })
        }
    break;

    case ">>PAT":
      randomPuppy('headpats')
        .then(url => {
            message.channel.sendFile(url);
        })
    break;

    case ">>PATBOMB":

    for(var i = 0; i < 5; i++){
      randomPuppy('headpats')
        .then(url => {
            message.channel.sendFile(url);
        })
    }
    break;

    case ">>FEET":
      randomPuppy('animefeet')
        .then(url => {
            message.channel.sendFile(url);
        })
    break;

    case ">>FEETBOMB":

      for(var i = 0; i < 5; i++){
        randomPuppy('animefeet')
          .then(url => {
              message.channel.sendFile(url);
          })
      }
    break;

    case ">>GLASSES":
      randomPuppy('animemegane')
        .then(url => {
            message.channel.sendFile(url);
        })
    break;

    case ">>GLASSESBOMB":

      for(var i = 0; i < 5; i++){
        randomPuppy('animemegane')
          .then(url => {
              message.channel.sendFile(url);
          })
      }
    break;

    case ">>ZR":
      randomPuppy('zettairyouiki')
        .then(url => {
            message.channel.sendFile(url);
        })
    break;

    case ">>ZRBOMB":
    for(var i = 0; i < 5; i++){
      randomPuppy('zettairyouiki')
        .then(url => {
            message.channel.sendFile(url);
      })
    }


    break;

    case ">>BONDAGE":
      randomPuppy('hentaibondage')
        .then(url => {
            message.channel.sendFile(url);
      })
    break;

    case ">>BONDAGEBOMD":
      for(var i = 0; i < 5; i++){
        randomPuppy('hentaibondage')
          .then(url => {
              message.channel.sendFile(url);
        })
      }
    break;


    case ">>AHEGAO":
      randomPuppy('ahegao')
        .then(url => {
            message.channel.sendFile(url);
      })
    break;

    case ">>AHEGAOBOMB":

      for(var i = 0; i < 5; i++){
        randomPuppy('ahegao')
          .then(url => {
              message.channel.sendFile(url);
        })
      }
    break;

    case ">>COSTUME":
      randomPuppy('kemonomimi')
        .then(url => {
            message.channel.sendFile(url);
        })
    break;

    case ">>COSTUMEBOMB":

      for( var i = 0; i < 5; i++){
        randomPuppy('kemonomimi')
          .then(url => {
              message.channel.sendFile(url);
        })
      }
    break;

    case ">>HENTAI":
      if(rec[1] === undefined){
        request('http://konachan.com/post.json?tags=order%3Arandom+rating%3AExplicit&limit=1', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var lewd = JSON.parse(body)
            var url = lewd.map(u => u.jpeg_url).join(' ');
            message.channel.sendFile('https:' + url)
            }
          })
      }else{
        rec.shift()
        console.log('conditions fulfilled')
        request('http://konachan.com/post.json?tags=' + rec.join('+') + '+order%3Arandom+rating%3AExplicit&limit=1', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(response.statusCode)
            var lewd = JSON.parse(body)
            var url = lewd.map(u => u.jpeg_url).join(' ')
            console.log(url)
            if(!url.includes('k')){
              message.channel.sendMessage('No results returned from search!')
            }else[
              message.channel.sendFile('https:' + url)
            ]
            }
          })
      }

    break;

    case ">>HENTAIBOMB":
        request('http://konachan.com/post.json?tags=order%3Arandom+rating%3AExplicit&limit=5', function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var lewd = JSON.parse(body)
            var url = lewd.map(u => u.jpeg_url)
            for(var i = 0; i < url.length; i ++){
              message.channel.sendFile('https:' + url[i])
            }
            }
          })
    break;

    case ">>WALLPAPER":
    if(rec[1] === undefined){
      randomAnimeWallpapers()
      .then(images => {
        var results = images.map(u => u.full)
        var rand = results[Math.floor(Math.random() * results.length)];
        message.reply(rand);
      })
    }else{
      rec.shift()
      randomAnimeWallpapers(rec.join(" ")).then(images => {
        var results = images.map(u => u.full)
        var rand = results[Math.floor(Math.random() * results.length)];
        if(rand === undefined){
          message.reply("Returned no results for keyword, try again with another!")
        }else{
          message.reply(rand);
        }
      })
    }
    break;


    case ">>NEWS":
    let news = malScraper.getNewsNoDetails( () => {
      var newstext = news[Math.floor(Math.random() * news.length)];
      message.reply('**' + newstext.title + '**' + '\n' + newstext.text + '\n\n**Full read: **' + newstext.link);
    })

    break;

    case ">>AVATAR":
      if(message.channel.type == 'dm' && message.author.id == '177019589010522112'){
        bot.user.setAvatar(message.attachments.array().map(u => u.url).toString())
          .then(user => console.log(`New avatar set!`))
          .catch(console.error)
      }
    break;


    case '>>NAME':
      lrec.shift()
      bot.user.setUsername(lrec.join(' '))
    break;

    case ">>QUOTE":
      message.reply(("\"" + aq().quotesentence + "\" - " + '**' + aq().quotecharacter +
                     '**' + " from " + '**' + aq().quoteanime + '**'));
    break;

    case '>>UAVATAR':
      var userlist = message.mentions.users.map(u => u.id)
      var avatarlist = message.mentions.users.map(l => l.avatar)

      for(var i = 0; i < userlist.length; i++){
        message.reply('https://discordapp.com/api/v6/users/' + userlist[i] + '/avatars/' + avatarlist[i] + '.jpg')
      }
    break;

    case ">>RAFFLE":
    if(message.member.hasPermission("ADMINISTRATOR") == false){
      return;
    }else{
      if(rec[1] === undefined){
        message.reply('Please specify a raffle subject!')
      }else{
        var subject = rec.shift()
        var room = message.guild.members
        var userlist = room.map(user1 => user1.user.id)
        var randuser = userlist[Math.floor(Math.random() * userlist.length)];
          if(randuser == '252352734366269441'){
            var randuser = userlist[Math.floor(Math.random() * userlist.length)];
            message.channel.sendMessage('The winner for raffle: **' + rec.join(' ') + '** is <@' + randuser + '>!');
          }else{
            message.channel.sendMessage('The winner for raffle: **' + rec.join(' ') + '** is <@' + randuser + '>!');
          }
      }
    }

    break;

    case ">>INVITE":
     message.reply('https://discordapp.com/api/oauth2/authorize?client_id=252352734366269441&scope=bot&permissions=0')
    break;

    case ">>HELP":
      message.reply('**Hello! To search an anime, use these commands: **' +
                    '\n>>mal [anime name] *Anime info grabbed from MAL.*' +
                    '\n>>ani [anime name] *Anime info grabbed from ANILIST.*' +
                    '\n>>feet *Gets foot fetish image. Following with "bomb" will make bot send 5.* **NSFW**' +
                    '\n>>moe *Gets moe image. Following with "bomb" will make bot send 5. May be NSFW*' +
                    '\n>>smug *Gets a smug face. Following with "bomb" will make bot send 5.*' +
                    '\n>>pat *Gets a pat picture. Following with "bomb" will make bot send 5. May be NSFW*' +
                    '\n>>hentai *Sends a hentai image. Following with "bomb" will make bot send 5. **NSFW***' +
                    '\n>>glasses *Gets a glass fetish image. Following with "bomb" will make bot send 5. May be NSFW*' +
                    '\n>>stockings *Gets stocking fetish image. Following with "bomb" will make bot send 5. May be NSFW*' +
                    '\n>>loli *Gets loli fetish image. Following with "bomb" will make bot send 5. May be NSFW*' +
                    '\n>>zr *Gets zettai ryouiki fetish image. Following with "bomb" will make bot send 5. May be NSFW*' +
                    '\n>>bondage *Gets bondage fetish image. Following with "bomb" will make bot send 5. **NSFW**' +
                    '\n>>ahegao *Gets ahegao image. Following with "bomb" will make bot send 5. **NSFW***' +
                    '\n>>costume *Gets anime girl in cute costume. Following with "bomb" will make bot send 5. May be NSFW*' +
                    '\n>>wallpaper *Gets a random anime wallpaper. Follow with a keyword to limit results.*' +
                    '\n>>suggest *Gets a random anime from MAL.*' +
                    '\n>>quote *Random quote from a random anime!*' +
                    '\n>>news *Gets news from MAL.*' +
                    '\n>>raffle [subject name] *Selects a random user to win a raffle. Subject name is mandatory. Admin only*' +
                    '\n>>uavatar [tag user] *Gets avatar url of user you tagged.*');
    break;
}
});
