const { App, ExpressReceiver } = require('@slack/bolt');

// Bring in environment secrets through dotenv
require('dotenv/config')
var emailid='ashwinramachandrang@gmail.com'
// Use the request module to make HTTP requests from Node
const request = require('request')
const fetch=require('node-fetch')


var slack_secret = 'b8c4c3f05e9a64070b8eb3da255d2c2e'
var bot_oauth_token='xoxb-1931689096065-1942879663456-1UFEVWUbiBDN9Czzu7ScmgRX'

list =[]
const receiver = new ExpressReceiver({ signingSecret: slack_secret });
const app = new App({
  signingSecret: slack_secret,
  token: bot_oauth_token,
  receiver
});

var time=0


class game1a {
  constructor() {
    this.run = false;
    //this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}





function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
receiver.router.get('/', async (req, res) => {
  var y = await fetch('https://picsum.photos/100')
  //var x= await y.json()
  res.send(y)

})
app.message('start jumble', async ({ message, say, client }) => {
  var b= await fetch('https://random-word-api.herokuapp.com/word?number=1');
  var a= await b.json(); 
  console.log(a[0]);
  var correctWord=a[0];
  var jumbledWord="";
  var n=correctWord.length;
  var arr=[];
  for(let i =0 ;i<n;i++)
  {
      arr.push(i);
  }
  shuffleArray(arr);
  for(let i=0;i<n;i++)
  {
      jumbledWord+=correctWord[arr[i]];
  }

  // say() sends a message to the channel where the event was triggered
  await say("Unjumble the word in 10s - "+jumbledWord+" \n The one who answers first wins. If you are unable to, write anything after 10 seconds to see the answer.");
  var startTime = new Date().getTime();
  var x=0;
  var y=0;
  // console.log(message.text);
  app.message(/.*?/,async ({ message, say })=>{
  // console.log(message.text);
  if (y==1) {return;}
  else if (y==0) {
    // console.log(y);
    // console.log(x);
    var endTime = new Date().getTime();
    if (endTime-startTime>15000) {y++; await say(`Too late. The correct answer is "${correctWord}".`); return;}
    else if (x==0 && message.text==correctWord) {x++; y=1; await say(`Hey!!<@${message.user}>!, You got the correct answer first :trophy:`);}
  }
});
  if (y==1) {return;}
});

app.message(/^(hi|hello|hey|Hi|Hello|Hey).*/, async ({ context, say }) => {
  // RegExp matches are inside of context.matches
  const greeting = context.matches[0];

  await say(`${greeting}, how are you?`);
});

app.message(/^(bye|Bye).*/, async ({ context, say }) => {
  // RegExp matches are inside of context.matches
  const greeting = context.matches[0];

  await say(`Bbye!`);
});

app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

app.command('/joke', async ({ command, ack, say }) => 
{
   await ack();
   var yy= await fetch('https://official-joke-api.appspot.com/jokes/random');
   var xx= await yy.json();
   var set=xx.setup;
   var punch=xx.punchline;
   await say(set);
   var startTime1 = new Date().getTime();
   while(true)
   {
          var time1=new Date().getTime();
          if(time1-startTime1>5000)
          {
                break;
          }
   }
   await say(punch);
   while(true)
   {
          var time1=new Date().getTime();
          if(time1-startTime1>1000)
          {
                break;
          }
   }
   await say("Did you see that coming? :wink:");
});





app.event('app_mention', ({ event, client,say,next }) => {
  try {
    var str=event.text
    console.log(event)
    let time=1000
    console.log(time)
    myFunction()
      async function myFunction() {
        let time=1000
        console.log(time)
        while(time!=0){
          time--;
          console.log(time)
        }
      }
     // if(time!=0) {await say('hi')}
    /*
    // Call chat.postMessage with the built-in client
    const result = await client.chat.postMessage({
      channel: welcomeChannelId,
      text: `Welcome to the team, <@${event.user}>!  You can introduce yourself in this channel.`
    });
    console.log(result);*/
  }
  catch (error) {
    console.error(error);
  }},
   ({ event, client,say }) => {
    try {
      console.log('kk')
      
      /*
      // Call chat.postMessage with the built-in client
      const result = await client.chat.postMessage({
        channel: welcomeChannelId,
        text: `Welcome to the team, <@${event.user}>!  You can introduce yourself in this channel.`
      });
      console.log(result);*/
    }
    catch (error) {
      console.error(error);
    }}

);





  app.command('/videocall', async ({ command, ack, say }) => {
    // Acknowledge command request
    await ack();
    emailid=command.text
    await say(`calling ${command.text}`)
    
  });

  
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('Baolt app is running!');
})();


//app.listen(3000)*/


/*
const { App } = require('@slack/bolt');

const app = new App({
  token: 'xoxb-1931689096065-1942879663456-1UFEVWUbiBDN9Czzu7ScmgRX',
  signingSecret: 'b8c4c3f05e9a64070b8eb3da255d2c2e'
});

// Listens to incoming messages that contain "hello"
app.message('knock knock', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();*/










var aaa;
app.command('/playguess', async ({ command, client,ack }) => {
  await ack();
  console.log(command)
  var str=command.text
  //console.log(message)
  try {
    // Call chat.scheduleMessage with the built-in client
    const resulta = await client.conversations.create({
      token:'xoxp-1931689096065-1925237933476-1949796901283-6993022615b9dd2d10098188493a1bfc',
      name:'d',
    });
    aaa=resulta.channel.id
    const s=await client.conversations.invite({
      token:'xoxp-1931689096065-1925237933476-1949796901283-6993022615b9dd2d10098188493a1bfc',
      channel:aaa,
      users:'U01TQRVKHDE'
    })
    await client.conversations.invite({
      token:'xoxp-1931689096065-1925237933476-1949796901283-6993022615b9dd2d10098188493a1bfc',
      channel:aaa,
      users:command.user_id
    })
    console.log(aaa)
   
    //console.log(resulta);

    const results=await client.users.list({
      token:'xoxp-1931689096065-1925237933476-1949796901283-6993022615b9dd2d10098188493a1bfc',

    })
    console.log(results)
    for(user in results.members){
      if(!results.members[user].is_bot && str.search(results.members[user].real_name)!=-1)
      {var a=results.members[user].id;
      await client.conversations.invite({
        token:'xoxp-1931689096065-1925237933476-1949796901283-6993022615b9dd2d10098188493a1bfc',
        channel: aaa,
        users:results.members[user].id
      })
    }}
    

  }
  catch (error) {
    console.error(error);
  } 
  
});



app.action('go_to_game', async ({ ack, say }) => {
  // Acknowledge action request
  await ack();
  console.log('ok')
  //await say('Request approved 👍');
});


app.command('/endguess', async ({ message, client,ack }) => {
  await ack();
  console.log(aaa)
  // console.log(message)
  try {
    // Call chat.scheduleMessage with the built-in client
    const resulta = await client.conversations.archive({
      token:'xoxb-1931689096065-1942879663456-1UFEVWUbiBDN9Czzu7ScmgRX',
      channel:aaa
    });aaa=0;
    console.log(resulta);
  }
  catch (error) {
    console.error(error);
  }
});

app.command('/image', async ({ command, client,ack }) => {
  //var y = await fetch('https://picsum.photos/100')
  //var x= await y.json()
  if(command.channel_id!=aaa) return
  min = Math.ceil(100);
  max = Math.floor(200);
  var num=Math.floor(Math.random() * (max - min) + min); 
  await say({
    "blocks": [
			{"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Who is the person you can relate closest to here?"
			},
			"accessory": {
				"type": "image",
				"image_url": `https://picsum.photos/${num}`,
				"alt_text": "alt text for image"
			}}]
		
  })
})







/*
receiver.router.get('/', (req, res) => {
  console.log('nice')
  if (req.query.code) {
      let url = 'https://zoom.us/oauth/token?grant_type=authorization_code&code=' + req.query.code + '&redirect_uri=' + process.env.redirectURL;

      request.post(url, (error, response, body) => {

          // Parse response to JSON
          body = JSON.parse(body);

          // Logs your access and refresh tokens in the browser
          console.log(`access_token: ${body.access_token}`);
          console.log(`refresh_token: ${body.refresh_token}`);
          console.log('kk',body)
          if (body.access_token) {

            var options = {
              method: 'POST',
              url: 'https://api.zoom.us/v2/users/ashwinramachandrang@gmail.com/meetings',
              headers: {'content-type': 'application/json', authorization: `Bearer ${body.access_token}  `},
              body: {
                "topic": "Greet",
                "type": "1",
                
                "schedule_for": `${emailid}`,
                
                "password": "1234",
                "agenda": "Lets meet",
                
                "settings": {
                  "host_video": "true",
                  "participant_video": "true",
                  "cn_meeting": "false",
                  "in_meeting": "true",
                  "join_before_host": "true",
                  "mute_upon_entry": "true",
                  "watermark": "false",
                  "use_pmi": "true",
                  "approval_type": "0",
                  
                  "audio": "both",
                  "auto_recording": "none",
                  "enforce_login": "false",
                  "enforce_login_domains": "none",
                  
                  
                  "registrants_email_notification": "true"
              }},
              json: true
            };
            request.post(options, function (error, response, body) {
              if (error) throw new Error(error);
              res.redirect(body.start_url)
              console.log('ok',body.start_url);
            });
          } else {
              // Handle errors, something's gone wrong!
          }

      }).auth(process.env.clientID, process.env.clientSecret);

      return;
/*
  }
  res.redirect('https://zoom.us/oauth/authorize?response_type=code&client_id=' + process.env.clientID + '&redirect_uri=' + process.env.redirectURL)
})


*/