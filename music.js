var start = null;
var p=1;
var content,n;
window.onload=function(){
content=document.getElementById("container");
n=document.getElementsByTagName("span");
n[p].style.background="#fff";
 content.addEventListener("touchstart",function(event){
   if(event.touches.length === 1){
      //finger touched screen
      start = event.touches.item(0).clientX;
    }
  });
content.addEventListener("touchend",function(event){
    var pos=100;
    var offset = 80;//at least 80px to swipe
    if(start){
      //finger that hit the screen left
      var end = event.changedTouches.item(0).clientX;

      if(end > start + offset){
          if(p>0){
              p-=1;
              }
       //a left -> right swipe
      }
      if(end < start - offset ){
          if(p<3){
              p+=1;
              }
       //a right -> left swipe
      } content.style.transform="translateX(-"+pos*p+"%)";
      current();
    }
  });
  function current(){
      n[p].style.background="white";
      for(z=0;z<4;z++){
          if(z!=p){
              n[z].style.background="#666";
          }
      }
  }
//declaring variables
var x,temp=0,condition=0,initial=0,status=0,pstatus=0;
//adding src values
var img=['images/ignite.jpg','images/princess.jpg','images/dil1.jpg','images/dna3.jpg','images/attention.png','images/spring.jpg','images/cheap.png','images/pa.jpg','images/counting.jpg','images/tera.jpg','images/faded1.jpeg','images/despacito.png','images/boy.jpg','images/best.jpg','images/red.png','images/hum.jpg','images/psycho.png','images/pyramid.jpg','images/glati.jpg','images/spectre.jpg','images/beliver.jpg','https://drive.google.com/uc?export=download&id=1rWtdw5GpT7skEw1a9YEia1TT6KwZ6Tsa','https://drive.google.com/uc?export=download&id=1Czm_wFw_mXUzMBDcA3n76rJmindJYwkT'];
//adding lyrics
var lyrics=["Fireflies, a million little pieces<br>Feeds the dying light, and brings me back to life<br>In your eyes, I see something to believe in<br>Your hands are like a flame, your palms' the sweetest pain<br>Let the darkness lead us into the light<br>Let our dreams get lost, feel the temperature rise<br>Baby, tell me one more beautiful lie<br>One touch and I ignite<br>Like a starship speeding into the night<br>You and I get lost in the infinite lights<br>Baby, tell me one more beautiful lie<br>One touch and I ignite<br>One touch and I ignite<br>One touch and I ignite<br>So alive, your touch is like the daylight<br>Burning on my skin, it turns me on again<br>You and I, survivors of the same kind<br>But we're the only ones dancing on the sun<br>Let the darkness lead us into the light<br>Let our dreams get lost, feel the temperature rise<br>Baby, tell me one more beautiful lie<br>One touch and I ignite<br>Like a starship speeding into the night<br>You and I get lost in the infinite lights<br>Baby, tell me one more beautiful lie<br>One touch and I ignite<br>One touch and I ignite<br>One touch and I ignite<br>Diamonds are forever, but all we need is just tonight<br>We're monumental tremors that can freeze the speed of life<br>Just like particles that's falling from heaven all over the stars<br>Hear you calling for me, hear you calling me home from afar<br>Let the darkness lead us into the light<br>Let our dreams get lost, feel the temperature rise<br>Baby, tell me one more beautiful lie<br>One touch and I ignite<br>I feel the heat as we collide<br>Like a fever that feels so right<br>So baby, tell me one more beautiful lie<br>One touch and I ignite<br>One touch and I ignite<br>One touch and I ignite<br>One touch and I ignite<br>One touch and I ignite<br>One touch and I ignite",
"Boys, they're handsome and strong<br>But always the first to tell me I'm wrong<br>Boys try to tame me, I know<br>They tell me I'm weird and won't let it go<br>No, I'm fine, I'm lying on the floor again<br>Cracked door, I always wanna let you in<br>Even after all of this shit, I'm resilient<br>'Cause a princess doesn't cry (no-oh)<br>A princess doesn't cry (no-oh, oh)<br>Over monsters in the night<br>Don't waste our precious time<br>On boys with pretty eyes<br>A princess doesn't cry (no-oh)<br>A princess doesn't cry (no-oh, oh)<br>Burning like a fire<br>You feel it all inside<br>But wipe your teary eyes<br>'Cause princesses don't cry<br>Don't cry, don't cry, oh<br>Don't cry<br>Don't cry, oh<br>Don't cry, don't cry, don't cry, oh<br>'Cause princesses don't cry<br>Girls, so pretty and poised<br>And soft to the touch<br>But God made me rough<br>Girls, so heavy the crown<br>They carry it tall<br>But it's weighing me down<br>No, I'm fine<br>I'm lying on the floor again<br>Cracked door<br>You're only going to let them in, once<br>And you won't come undone<br>'Cause a princess doesn't cry (no-oh)<br>A princess doesn't cry (no-oh, oh)<br>Over monsters in the night<br>Don't waste our precious time<br>On boys with pretty eyes<br>A princess doesn't cry (no-oh)<br>A princess doesn't cry (no-oh, oh)<br>Burning like a fire<br>You feel it all inside<br>But wipe your teary eyes<br>'Cause princesses don't cry<br>Don't cry, don't cry, oh<br>Don't cry<br>Don't cry, oh<br>Don't cry, don't cry, don't cry, oh<br>'Cause princesses don't cry<br>I'm fine, I won't waste my time<br>Keep it in a jar, gonna leave it for the next one<br>Yeah, I'm fine, I won't waste my time<br>Keep it in a jar, gonna leave it for the next one<br>Yeah, I'm fine<br>I'm lying on the floor again<br>'Cause a princess doesn't cry (no-oh)<br>A princess doesn't cry (no-oh, oh)<br>Over monsters in the night<br>Don't waste our precious time<br>On boys with pretty eyes<br>A princess doesn't cry (no-oh)<br>A princess doesn't cry (no-oh, oh)<br>Burning like a fire<br>You feel it all inside<br>But wipe your teary eyes<br>'Cause princesses don't cry<br>Don't cry, don't cry, oh<br>Don't cry<br>Don't cry, oh<br>Don't cry, don't cry, don't cry, oh<br>'Cause princesses don't cry<br>Don't cry, don't cry, oh<br>Don't cry<br>Don't cry, oh<br>Don't cry, don't cry, don't cry, oh<br>'Cause princesses don't cry",
"Jasbe Huwa Hai Ye Achha Sa Lagta Hai<br>Dil Ho Gaya Phirse Bacha Sa Lagta Hai <br>Ishq Ragon Mein Jo Behta Rahe Jaake, <br>Kaanon Mein Chupe Kehta Rahe,<br><br> Taare Gin, Taare Gin, Soye Bin, Sare Gin<br> Ik Haseen Mazaa Hai, Mazaa Hai Ya Saza Hai Ye,<br><br> Jabse Huwa Hai Ye Achha Sa Lagta Hai<br> Dil Ho Gaya Phirse Bacha Sa Lagta Hai<br> Ishq Ragon Mein Jo Behta Rahe Jaake,<br> Kaanon Mein Chupe Kehta Rahe,<br> Taare Gin Taare Gin Soye Bin Saare Gin,<br> Ik Haseen Mazaa Hai, Mazaa Hai Ya Saza Hai Ye.<br> (Dil Ho Gaya Phirse Bacha Sa Lagta Hai <br>Ishq Ragon Mein Jo Behta Rahe Jaake, <br>Kaanon Mein Chupe Kehta Rahe.)<br> Roko Isay Jitna Mehsoos Ho Ye Utna<br> Dard Zara Sa Hai Thoda Dawaa Sa Hai,<br> Isme Hai Jo Taira Wohi Toh Dooba Hai,<br> Woh Khazra Sa Hai, Thoda Wafaa Sa Hai,<br> Ye Vaada Hai, Kya Iraada Hai Kabhi <br>Ye Zyada Hai, Kabhi Ye Aadha Hai. <br>Taarey Gin Taarey Gin Soye Bin Saary Gin<br> Ik Haseen Mazaa Hai Yeh, Mazaa Hai Yaa<br> Sazaa Hai Yeh.",
"[Verse 1: V]<br>At first sight, I could recognize you<br>As if we were calling for each other<br>The DNA in my blood vessels tell me<br>That it’s you I was looking all over for<br><br>[Verse 2: J-Hope, RM]<br>Our meeting is like a mathematical formula<br>Commandments of religion, providence of the universe;<br>The evidence of destiny given to me<br>You’re the source of my dream<br>Take it, take it<br>My hand reaching out to you is my chosen fate<br><br>[Pre-Chorus: Jungkook, V]<br>Don’t worry, love<br>None of this is a coincidence<br>We’re totally different, baby<br>Because we’re the two who found our destiny<br><br>[Chorus: Jimin]<br>From the day of the universe’s creation and beyond<br>Through the infinite centuries and beyond<br>In the previous life and maybe the next too<br>We’re eternally together<br><br>[Hook: Jungkook]<br>None of this is a coincidence<br>Because we’re the two who found our destiny<br>DNA<br><br>[Verse 3: Suga, RM]<br>I want it this love I want it real love<br>I only focus on you<br>You steer me a little harder<br>The DNA of the genesis wants you<br>This is inevitable, I love us<br>We are the only true lovers<br><br>[Verse 4: Jungkook, Suga]<br>Every time I see her, I freak out<br>Surprisingly, I keep gasping and it’s weird, maybe<br>This is the emotion they call love<br>Because from the very beginning, my heart runs to you<br><br>[Pre-Chorus: Jin]<br>Don’t worry, love<br>None of this is a coincidence<br>We’re totally different, baby<br>Because we’re the two who found our destiny<br><br>[Chorus: Jungkook, Jimin]<br>From the day of the universe’s creation and beyond<br>Through the infinite centuries and beyond<br>In the previous life and maybe the next too<br>We’re eternally together<br><br>[Hook: Jungkook]<br>None of this is a coincidence<br>Because we’re the two who found our destiny<br>DNA<br><br><br>[Bridge: V, Jin, Jungkook, Jimin]<br>Don’t look back<br>Because we're the two who found our destiny<br>Don’t regret it, baby<br>Because we're forever<br>Forever<br>Forever<br>Forever<br>Forever<br>We are together<br>[Pre-Chorus: Jungkook, Jimin]<br>Don’t worry, love<br>None of this is a coincidence<br>We’re totally different, baby<br>Because we’re the two who found our destiny<br><br>[Outro: J-Hope, Jungkook]<br>La la la la la<br>La la la la la<br>Because it’s not a coincidence<br>La la la la la<br>La la la la la<br>Because it’s not a coincidencev<br>DNA<br>",
"Oh-oh, ooh<br>You've been runnin' round, runnin' round, runnin' round throwin' that dirt all on my name<br>'Cause you knew that I, knew that I, knew that I'd call you up<br>You've been going round, going round, going round every party in L.A.<br>'Cause you knew that I, knew that I, knew that I'd be at one, oh<br><br>I know that dress is karma, perfume regret<br>You got me thinking 'bout when you were mine, oh<br>And now I'm all up on ya, what you expect?<br>But you're not coming home with me tonight<br><br>You just want attention, you don't want my heart<br>Maybe you just hate the thought of me with someone new<br>Yeah, you just want attention, I knew from the start<br>You're just making sure I'm never gettin' over you<br><br>you've been runnin' round, runnin' round, runnin' round throwing that dirt all on my name<br>'Cause you knew that I, knew that I, knew that I'd call you up<br>Baby, now that we're, now that we're, now that we're right here standing face-to-face<br>You already know, already know, already know that you won, oh<br><br>I know that dress is karma (dress is karma), perfume regret<br>You got me thinking 'bout when you were mine (you got me thinking 'bout when you were mine)<br>And now I'm all up on ya (all up on ya), what you expect? (oh baby)<br>But you're not coming home with me tonight (oh no)<br><br>You just want attention, you don't want my heart<br>Maybe you just hate the thought of me with someone new<br>Yeah, you just want attention, I knew from the start<br>You're just making sure I'm never gettin' over you, oh<br><br>What are you doin' to me, what are you doin', huh?<br>(What are you doin'?)<br>What are you doin' to me, what are you doin', huh?<br>(What are you doin'?)<br>What are you doin' to me, what are you doin', huh?<br>(What are you doin'?)<br>What are you doin' to me, what are you doin', huh?<br><br>I know that dress is karma, perfume regret<br>You got me thinking 'bout when you were mine<br>And now I'm all up on ya, what you expect?<br>But you're not coming home with me tonight<br><br>You just want attention, you don't want my heart<br>Maybe you just hate the thought of me with someone new<br>Yeah, you just want attention, I knew from the start<br>You're just making sure I'm never gettin' over you (over you)<br>What are you doin' to me? (hey) what are you doin', huh? (what are you doin', what?)<br>(What are you doin', to me? What are you doin', huh?)<br>(What are you doin', to me? What are you doin', huh?)<br>(What are you doin' to me, what are you doin', huh?)",
"[Verse 1: RM, J-Hope]<br>Miss you<br>Saying this makes me miss you even more<br>Miss you<br>Even though I’m looking at your photo<br>Time’s so cruel, I hate us<br>Seeing each other for once is now so hard between us<br><br>[Verse 2: RM]<br>It’s all winter here, even in August<br>My heart is running on the time<br>Alone on the Snowpiercer<br>Wanna get to the other side of the earth, holding your hand<br>Wanna put an end to this winter<br>How much longing should we see snowing down<br>To have the days of spring, Friend<br><br>[Verse 3: Jimin, V]<br>Like the tiny dust, tiny dust floating in the air<br>Will I get to you a little faster<br>If I was the snow in the air<br><br>[Pre-Chorus 1: Jungkook, V]<br>Snowflakes fall down<br>And get farther away little by little<br>I miss you (I miss you)<br>I miss you (I miss you)<br>How long do I have to wait<br>And how many sleepless nights do I have to spend<br>To see you (to see you)<br>To meet you (to meet you)<br><br>[Chorus: Jungkook, Jin, J-Hope]<br>Passing by the edge of the cold winter<br>Until the days of spring<br>Until the days of flower blossoms<br>Please stay, please stay there a little longer<br>[Verse 4: Suga, Jimin]<br>Is it you who changed (Is it you who changed)<br>Or is it me (Or is it me)<br>I hate this moment, this time flowing by<br>We are changed you know<br>Just like everyone you know<br><br>[Verse 5: Suga, Jimin]<br>Yes I hate you, you left me<br>But I never stopped thinking about you, not even a day<br>Honestly I miss you, but I’ll erase you<br>'Cause it hurts less than to blame you<br><br>[Verse 6: Jin, Jimin]<br>I try to exhale you in pain<br>Like smoke, like white smoke<br>I say that I’ll erase you<br>But I can’t really let you go yet<br><br>[Pre-Chorus 1: Jungkook, V]<br>Snowflakes fall down<br>And get farther away little by little<br>I miss you (I miss you)<br>I miss you (I miss you)<br>How long do I have to wait<br>And how many sleepless nights do I have to spend<br>To see you (to see you)<br>To meet you (to meet you)<br>[Bridge: V, Jungkook]<br>You know it all<br>You’re my best friend<br>The morning will come again<br>No darkness, no season is eternal<br>[Pre-Chorus 2: Jimin, Jungkook, V]<br>Maybe it’s cherry blossoms<br>And this winter will be over<br>I miss you (I miss you)<br>I miss you (I miss you)<br>Wait a little bit, just a few more nights<br>I’ll be there to see you (I'll go there to meet you)<br>I’ll come for you (I'll come for you)<br><br>[Chorus: Jungkook, J-Hope, Jin ]<br>Passing by the edge of the cold winter<br>Until the days of spring<br>Until the days of flower blossoms<br>Please stay, please stay there a little longer",
"Come on, come on, turn the radio on<br>It's Friday night and I won't be long<br>Gotta do my hair, put my make up on<br>It's Friday night and I won't be long<br>'Til I hit the dance floor<br>Hit the dance floor<br>I got all I need<br>No, I ain't got cash<br>I ain't got cash<br>But I got you, baby<br>Baby, I don't need dollar bills to have fun tonight<br>(I love cheap thrills)<br>Baby, I don't need dollar bills to have fun tonight<br>(I love cheap thrills)<br>But I don't need no money<br>As long as I can feel the beat<br>I don't need no money<br>As long as I keep dancing<br>Come on, come on, turn the radio on<br>It's Saturday and I won't be long<br>Gotta paint my nails, put my high heels on<br>It's Saturday and I won't be long<br>'Til I hit the dance floor<br>Hit the dance floor<br>I got all I need<br>No, I ain't got cash<br>I ain't got cash<br>But I got you, baby<br>Baby, I don't need dollar bills to have fun tonight<br>(I love cheap thrills)<br>Baby, I don't need dollar bills to have fun tonight<br>(I love cheap thrills)<br>But I don't need no money<br>As long as I can feel the beat<br>I don't need no money<br>As long as I keep dancing<br>I don't need no money<br>As long as I can feel the beat<br>I don't need no money<br>As long as I keep dancing<br>Oh, oh<br>Baby, I don't need dollar bills to have fun tonight<br>(I love cheap thrills)<br>Baby, I don't need dollar bills to have fun tonight<br>(I love cheap thrills)<br>I don't need no money<br>As long as I can feel the beat<br>I don't need no money<br>As long as I keep dancing<br>La, la, la, la, la, la, la (I love cheap thrills)<br>La, la, la, la, la, la, la (I love cheap thrills)<br>La, la, la, la, la, la, la (I love cheap thrills)<br>La, la, la, la, la, la, la (I love cheap thrills)",
"&nbsp No lyrics found<br><br> &nbsp; Ask SR for lyrics😁",
"Lately, I been, I been losin' sleep<br>Dreamin' about the things that we could be<br>But baby, I been, I been prayin' hard<br>Said, no more countin' dollars, we'll be countin' stars<br>Yeah, we'll be countin' stars<br><br>I see this life like a swingin' vine<br>Swing my heart across the line<br>In my face is flashin' signs<br>Seek it out and ye shall find<br>The old, but I'm not that old<br>Young, but I'm not that bold<br>And I don't think the world is sold<br>On just doing what we're told<br>I feel something so right<br>Doing the wrong thing<br>And I feel something so wrong<br>Doing the right thing<br><br>I couldn't lie, couldn't lie, couldn't lie<br>Everything that kills me makes me feel alive<br>Lately, I been, I been losin' sleep<br>Dreamin' about the things that we could be<br>But baby, I been, I been prayin' hard<br>Said, no more countin' dollars, we'll be countin' stars<br>ately, I been, I been losin' sleep<br>Dreamin' about the things that we could be<br>But baby, I been, I been prayin' hard<br>Said, no more countin' dollars, we'll be<br>We'll be countin' stars<br>Hey, yeah<br>I feel the love and I feel it burn<br>Down this river, every turn<br>The hope is our four-letter word<br>Make that money, watch it burn<br>Old, but I'm not that old<br>Young, but I'm not that bold<br>And I don't think the world is sold<br>On just doing what we're told<br>And I feel something so wrong<br>Doing the right thing<br>I couldn't lie, couldn't lie, couldn't lie<br>Everything that drowns me makes me wanna fly<br>Lately, I been, I been losin' sleep<br>Dreamin' about the things that we could be<br>But baby, I been, I been prayin' hard<br>Said, no more countin' dollars, we'll be countin' stars<br>Lately, I been, I been losin' sleep<br>Dreamin' about the things that we could be<br>But baby, I been, I been prayin' hard<br>Said, no more countin' dollars, we'll be<br>We'll be countin' stars<br>Oh<br><br>Take that money, watch it burn<br>Sink in the river the lessons I learned<br>Take that money, watch it burn<br>Sink in the river the lessons I learned<br>Take that money, watch it burn<br>Sink in the river the lessons I learned<br>Take that money, watch it burn<br>Sink in the river the lessons I learned<br>Everything that kills me makes me feel alive<br>Lately, I been, I been losin' sleep<br>Dreamin' about the things that we could be<br>But baby, I been, I been prayin' hard<br>Said, no more countin' dollars, we'll be countin' stars<br>Lately, I been, I been losin' sleep<br>Dreamin' about the things that we could be<br>But baby, I been, I been prayin' hard<br>Said, no more countin' dollars, we'll be<br>We'll be countin' stars<br>Take that money, watch it burn<br>ink in the river the lessons I've learned<br>Take that money, watch it burn<br>Sink in the river the lessons I've learned<br>Take that money, watch it burn<br>Sink in the river the lessons I've learned<br>Take that money, watch it burn<br>Sink in the river the lessons I've learned",
"Tera fitoor jab se chadh gaya re<br>Tera fitoor jab se chadh gaya re<br>Ishq jo zara sa tha woh badh gaya re<br>Tera fitoor jab se chadh gaya re<br>Tu jo mere sang chalne lage<br>To meri raahein dhadakne lage<br>Dekhun jo na ik pal main tumhein<br>Toh meri baahein tadapne lage<br><br>Ishq jo zara sa tha woh badh gaya re<br>Tera fitoor jab se chadh gaya re<br>Tera fitoor jab se chadh gaya re<br><br>Haathon se laqeerein yehi kehti hai<br>Ki zindagi jo hai meri<br>Tujhi mein ab rehti hai<br><br>Labon pe likhi hai mere dil ki khwaahish<br>Lafzon mein kaise main bataaun<br>Ikk tujhko hi paane ki khaatir<br>Sabse judaa main ho jaaun<br><br>Kal tak maine jo bhi khwaab the dekhe<br>Tujhme woh dikhne lage<br>Ishq jo zara sa tha woh badh gaya re<br>Tera fitoor jab se chadh gaya re<br>Tera fitoor jab se chadh gaya re<br><br>Saanson ke kinaare bade tanha thhe<br>Tu aa ke inhe chhu le bas<br>Yehi toh mere armaan thhe<br>Saari duniya se mujhe kya lena hai<br>Bas tujhko hi pehchaanu<br>Mujhko na meri ab khabar ho koi<br>Tujhse hi khudko main jaanu<br>Raatein nahi kat’ti bechain se hoke<br>Din bhi guzarne lage<br><br>Ishq jo zara sa tha woh badh gaya re<br>Tera fitoor jab se chadh gaya re<br>Tera fitoor jab se chadh gaya re",
"You were the shadow to my light<br>Did you feel us<br>Another start<br>You fade away<br>Afraid our aim is out of sight<br>Wanna see us<br>Alive<br><br>Where are you now<br>Where are you now<br>Where are you now<br>Was it all in my fantasy<br>Where are you now<br>Were you only imaginary<br>Where are you now<br><br>Atlantis<br>Under the sea<br>Under the sea<br>Where are you now<br>Another dream<br>The monsters running wild inside of me<br>I'm faded<br>I'm faded<br>So lost<br>I'm faded<br>These shallow waters, never met<br>What I needed<br>I'm letting go<br>A deeper dive<br>Eternal silence of the sea<br>I'm breathing<br>Alive<br>Where are you now<br>Where are you now<br><br>Under the bright<br>But faded lights…",
"Ay<br>Fonsi<br>DY<br>Oh oh<br>Oh no, oh no (oh)<br>Hey yeah<br>Diridiri, dirididi Daddy<br>Go!<br>Sí, sabes que ya llevo un rato mirándote<br>Tengo que bailar contigo hoy (DY)<br>Vi que tu mirada ya estaba llamándome<br>Muéstrame el camino que yo voy<br>Oh<br>Tú, tú eres el imán y yo soy el metal<br>Me voy acercando y voy armando el plan<br>Solo con pensarlo se acelera el pulso<br>Oh yeah<br>Ya, ya me está gustando más de lo normal<br>Todos mis sentidos van pidiendo más<br>Esto hay que tomarlo sin ningún apuro<br>Despacito<br>Quiero respirar tu cuello despacito<br>Deja que te diga cosas al oído<br>Para que te acuerdes si no estás conmigo<br>Despacito<br>Quiero desnudarte a besos despacito<br>Firmo en las paredes de tu laberinto<br>Y hacer de tu cuerpo todo un manuscrito (sube, sube, sube)<br>(Sube, sube) Oh<br>Quiero ver bailar tu pelo…",
"[Intro]<br>(Oh-oh-oh-oh-oh)<br>(Oh-oh-oh-oh-oh)<br>Oh-oh-oh-oh-oh)<br>(Oh-oh-oh-oh-oh)<br><br>[Verse 1: Jimin]<br>I'm curious about you, how's your day?<br>Oh, tell me (Oh yeah oh yeah, ah yeah ah yeah)<br>What makes you happy?<br>Oh, text me (Oh yeah oh yeah, oh yeah oh yeah)<br><br>[Verse 2: V, Jin]<br>Your every picture<br>I wanna have under my pillow, oh, oh bae<br>Come be my teacher<br>Teach me everything about you<br>Your one, your two<br><br>[Pre-Chorus: Jungkook, Jimin]<br>Listen my my baby<br>I'm flying high up in the sky<br>(With the two wings that you gave me back then)<br>Now it's so high up here<br>I want you tuned in to my eyes<br>Yeah, you makin' me a boy with luv<br><br>[Chorus: Halsey, Jungkook, Jimin]<br>Oh my, my, my, (uh) oh my, my, my<br>I've waited all my life<br>I want to be with you through everything<br>Oh my, my, my, (yeah) oh my, my, my<br>Looking for something right<br>Okay, now, I kinda get it<br><br>[Post-Chorus: Halsey]<br>(oh-oh-oh-oh-oh)<br>I want something stronger (I want it)<br>(oh-oh-oh-oh-oh)<br>Than a moment, than a moment, love<br>(oh-oh-oh-oh-oh)<br>I have waited longer<br>(oh-oh-oh-oh-oh)<br>For a boy with, for a boy with luv<br><br>[Verse 3: Suga]<br>From the moment I met you, ya, my life was all you, ya<br>You’re the star that turns ordinaries into extraordinaries, oh yeah<br>One after another ay, ay, everything is special ay, ay<br>The things you’re interested in, the way you walk or talk, and every little trivial habit of yours<br><br>[Verse 4: J-Hope, Jungkook]<br>Hope world, ay)<br>Everyone says that I used to be so little and now I became a hero (Oh no)<br>I say that something like destiny was never my thing (Oh no)<br>World peace (No way)<br>A great order (No way)<br>I just want to keep you safe<br>(Boy with luv)<br><br>[Pre-Chorus: V, RM, Jin]<br>Listen my my baby<br>I'm flying high up in the sky<br>(With the two wings that you gave me back then)<br>Now, it's so high up here<br>I want you tuned in to my eyes<br>Yeah, you makin' me a boy with luv<br><br>[Chorus: Halsey, Jungkook, Jimin]<br>Oh my, my, my, (uh) oh my, my, my<br>You got me high so fast<br>I want to be with you through everything<br>Oh my, my, my, oh my, my, my<br>ou got me fly so fast<br>Okay, now, I kinda' get it<br><br>[Post-Chorus: V, Jin, Halsey]<br>(Oh-oh-oh-oh-oh)<br>Love is nothing stronger (I want it)<br>(Oh-oh-oh-oh-oh)<br>(Than a boy with) Than a boy with luv<br>(Oh-oh-oh-oh-oh)<br>Love is nothing stronger<br>Oh-oh-oh-oh-oh)<br>(Than a boy with) Than a boy with luv",
"I had a dream so big and loud<br>I jumped so high I touched the clouds<br>Wo-o-o-o-o-oh, wo-o-o-o-o-oh<br>I stretched my hands out to the sky<br>We danced with monsters through the night<br>Wo-o-o-o-o-oh, wo-o-o-o-o-oh<br>I'm never gonna look back<br>Woah, never gonna give it up<br>No, please don't wake me now<br>This is gonna be the best day of my life<br>My li-i-i-i-i-ife<br>This is gonna be the best day of my life<br>My li-i-i-i-i-ife<br>I howled at the moon with friends<br><br>And then the sun came crashing in<br>Wo-o-o-o-o-oh, wo-o-o-o-o-oh<br>But all the possibilities<br>o limits just epiphanies<br>Wo-o-o-o-o-oh, wo-o-o-o-o-oh<br>I'm never gonna look back<br>Woah, never gonna give it up<br>No, just don't wake me now<br>This is gonna be the best day of my life<br>My li-i-i-i-i-ife<br>This is gonna be the best day of my life<br>My…",
"Loving him is like<br>Driving a new Maserati down a dead-end street<br>Faster than the wind<br>Passionate as sin<br>Ending so suddenly<br><br>oving him is like<br>Trying to change your mind once you're already flying through the free fall<br>Like the colors in autumn, so bright<br>Just before they lose it all<br>Losing him was blue like I'd never known<br>Missing him was dark grey, all alone<br>Forgetting him was like trying to know somebody you never met<br>But loving him was red (re-e-e-ed, re-e-e-ed)<br><br>Re-e-e-ed, re-e-e-ed)<br>Loving him was red (re-e-e-ed, re-e-e-ed)<br>(Re-e-e-ed, re-e-e-ed)<br>Touching him was like<br>Realizing all you ever wanted was right there in front of you<br>Memorizing him was as<br>Easy as knowing all the words to your old favorite song<br>Fighting with him was like<br>Trying to solve a…",        "Hum sarphire bigde huve nawaab hain<br>Padh lo humein, hum to khuli kitaab hain<br>Haddi bhi hum hain aur hum hi qabaab hain<br>Hum Pagal Nahin Hain bhaiya<br>Humara dimag kharab hai<br>Hum pagal nahi hain bhaiya<br>Humara dimag kharaab hai<br><br>Humein dekh ke uthta yahi sawaal hai<br>Kaala hai daal main ya kaali daal hai<br>Khote sabhi sikkon ki ye taksaal hai<br>Hum Pagal Nahin Hai bhaiya<br>Humara dimag kharab hai<br>Hum Pagal Nahi Hai bhaiya<br>Humara dimag kharab hai<br><br>Bade badnaam huve, bade mash’hoor huve<br>Apno se door huve, door huve, door huve<br>Dil ke murder bhi huvevBade torture bhi huve<br>Ghamon se choor huve, choor huve, choor huve<br><br>O bandhu re.. O bandhu re<br>O bandhu re tuje mil ke mere ujde chaman mein<br>Khil gaya gulaab hai<br>Hum Pagal Nahin Hai bhaiya<br>Humara dimag kharab hai<br>Hum pagal nahin hai bhaiya<br>Humara dimag kharab hai<br><br>Osama ya Obama hoga Vasco da Gama<br>Mujhe kuch yaad nahi, yaad nahi, yaad nahi<br>Daali pe phool nahi<br>Ye meri bhool nahi<br>Kyari main khaad nahi, khaad nahi, khaad nahi<br><br>O bandhu re.. O bandhu re<br>O bandhu re yahaan reh ke<br>Mera bhi ho gaya dimag ye kharab hai<br>Hum pagal nahi hai bhaiya<br>Humara dimag kharab hai<br>Hum pagal nahi hai bhaiya<br>Humara dimag kharab hai<br>Hum sarphire bigde huve nawaab hain<br>Padh lo humein, hum to khuli kitaab hain<br>Haddi bhi hum hain aur hum hi qabaab hain<br>Hum pagal nahin hain bhaiya<br>Humala dimag khalab hai<br>Hum pagal nahi hain bhaiya<br>Humala dimag khalab hai<br><br>Read more: https://www.lyricsmint.com/humshakals/hum-pagal-nahin-hai",
"Oh, she's sweet but a psycho<br>A little bit psycho<br>At night she's screamin'<br>I'm-ma-ma-ma out my mind<br>Oh, she's hot but a psycho<br>So left but she's right though<br>At night she's screamin'<br>I'm-ma-ma-ma out my mind<br>She'll make you curse, but she a blessing<br>She'll rip your shirt within a second<br>You'll be coming back, back for seconds<br>With your plate, you just can't help it<br>No, no, you'll play along<br>Let her lead you o-, o-, on<br>You'll be saying, No, noThen saying, Yes, yes, yes<br>'Cause she messin' with your head<br>Oh, she's sweet but a psycho<br>A little bit psycho<br>At night she's screamin'<br>I'm-ma-ma-ma out my mind<br>Oh, she's hot but a psycho<br>So left but she's right though<br>At night she's screamin'<br>I'm-ma-ma-ma out my mind<br>Grab a cop gun kinda crazy<br>She's poison but tasty…",
"I jumped in the river, what did I see?<br>Black-eyed angels swam with me<br>A moon full of stars and astral cars<br>And all the figures I used to see<br><br>All my lovers were there with me<br>All my past and futures<br>And we all went to heaven in a little row boat<br>There was nothing to fear and nothing to doubt<br><br>I jumped into the river<br>Black-eyed angels swam with me<br>A moon full of stars and astral cars<br>And all the figures I used to see<br><br>All my lovers were there with me<br>All my…",
"Jhatka zara sa mehsoos hua ek<br>Life ki gaadi ne kass ke maara brake<br>Ho raha hai kyun confuse mere dil<br>Mashwara mera tu aazma ke dekh<br>Ye hi umar hai karle<br>Galti se mistake (x4)<br><br>Beta!<br><br>Chal muscle phulaa naThodi body banaana<br>Tere chikne gaalon pe<br>Stubble ki phasal ugaana<br><br>Arey re re aye<br>Abey aye<br>Chal beta shuru hoja<br>Guru bagal utha ke<br>Thoda deo laga na<br>Kisi bagal wali ko<br>Mardani khushbu sunghana<br><br>Chal upar ke do button<br>Dheele karke batana<br>Baalon waala seena dikhana<br>Baalon waala seena dikhana<br><br>Barson talak tu cycle pe ghuma hai<br>Highway pe motorcycle bhaga ke dekh<br><br>Speed mein tujhko agar sardi lage toh<br>Seat pe piche ladki bitha ke dekh<br><br>Ye hi umar hai karle<br>Galti se mistake (x4)<br>Beta!<br>Ye hi umar hai karle<br>Galti se mistake (x8)<br><br>Beta!",
"Hello, hello<br>Can you hear me, as I scream your name<br>Hello, hello<br>Do you need me, before I fade away<br><br>Is this a place that I call home<br>To find what I've become<br>Walk along the path unknown<br>We live, we love, we lie<br><br>Deep in the dark I don't need the light<br>There's a ghost inside me<br>It all belongs to the other side<br>We live, we love, we lie<br><br>Hello, hello<br>Nice to meet you, voice inside my head<br>Hello, hello<br>I believe you, how can I forget<br><br>Is this a place that I call home<br>To find what I've…",
"First things first<br>I'mma say all the words inside my head<br>I'm fired up and tired of the way that things have been, oh ooh<br>The way that things have been, oh ooh<br><br>Second things second<br>Don't you tell me what you think that I could be<br>I'm the one at the sail, I'm the master of my sea, oh ooh<br>The master of my sea, oh ooh<br><br>I was broken from a young age<br>Taking my sulking to the masses<br>Writing my poems for the few<br>That look at me, took to me, shook to me, feeling me<br>Singing from heartache from the pain<br>Taking my message from the veins<br>Speaking my lesson from the brain<br>Seeing the beauty through the...<br><br>Pain!<br>You made me a, you made me a believer, believer<br>Pain!<br>You break me down, you build me up, believer, believer<br>Pain!<br>Oh let the bullets fly, oh let them rain<br>My life, my love, my drive, it came from...<br>Pain!<br>You made me a, you made me a believer, believer<br><br>Third things third<br>Send a prayer to the ones up above<br>All the hate that you've heard has turned your spirit to a dove, oh ooh<br>Your spirit up above, oh ooh<br><br>I was choking in the crowd<br>Building my rain up in the cloud<br>Falling like ashes to the ground<br>Hoping my feelings, they would drown<br>But they never did, ever lived, ebbing and flowing<br>Inhibited, limited<br>Till it broke open and rained down<br>And rained down, like...<br><br>Pain!<br>You made me a, you made me a believer, believer<br>Pain!<br>You break me down, you build me up, believer, believer<br>Pain!<br>Oh let the bullets fly, oh let them rain<br>My life, my love, my drive, it came from...<br>Pain!<br>You made me a, you made me a believer, believer<br>Last things last<br>By the grace of the fire and the flames<br>You're the face of the future, the blood in my veins, oh ooh<br>The blood in my veins, oh ooh<br>But they never did, ever lived, ebbing and flowing<br>Inhibited, limited<br>Till it broke open and rained down<br>And rained down, like...<br><br>Pain!<br>You made me a, you made me a believer, believer<br>Pain!<br>You break me down, you build me up, believer, believer<br>Pain!<br>Oh let the bullets fly, oh let them rain<br>My life, my love, my drive, it came from...<br>Pain!<br>You made me a, you made me a believer, believer"];
//declaing elements
var s=document.getElementsByTagName("li");
var aud=document.getElementsByTagName("audio");
var play=document.getElementById('play');
var playchange=document.getElementById('triangle1');
var label=document.getElementById('label');
var previous=document.getElementById('previous');
var next=document.getElementById('next')
var back=document.getElementById('back');
var circle=document.getElementById('circle');
var word=document.getElementById('words');
var slider=document.getElementById('slider');
var runtime=document.getElementById('runtime');
var endtime=document.getElementById('endtime');
var volumec=document.getElementById('volumec');
var mute=document.getElementById('mute');
var heart=document.getElementById('heart');
//adding events
play.addEventListener('click',pp);
previous.addEventListener('click',pl);
next.addEventListener('click',pn);
slider.addEventListener('input',moved);
volumec.addEventListener('input',volumechange);
mute.addEventListener('click',muting);
heart.addEventListener('click',colorchange);
//main code starts
for (var i=0;i<s.length;i++){
    //adding events to every song
    s[i].addEventListener('click',function(j){
        return function(){       //creating closure
            playsong(j);
        }
    }(i),true);
}
//main code ends
function playsong(j){//controls all songs
    //user selects the song
    condition=0;
    initial=1;
    temp=j;
    x=s[j].innerHTML;
    aud[j].play();
    label.innerHTML=x;
    //changing the background
    back.src=img[temp];
    //displaying lyrics
    word.innerHTML=lyrics[temp];
    //changing the img of song
    circle.style.background = "url("+img[temp]+")";
    circle.style.backgroundSize="100% 100%";
    //removing play
    playchange.classList.add('pause');
    playchange.classList.remove('triangle');
    //song duation time
    var endmin=Math.floor(aud[temp].duration/60);
    var endsec=Math.floor(aud[temp].duration-endmin*60);
    if(endsec<10){endsec="0"+endsec}
    endtime.innerHTML=endmin+":"+endsec;
    aud[j].addEventListener('timeupdate',moving);//calling function moving,evertime the song selected
    //pausing remianing songs
    for(var i=0;i<aud.length;i++){
        if(i!=j){
            aud[i].pause();
            aud[i].currentTime=0;
        }
    }
    //if song ended playes next song
    aud[temp].addEventListener('ended',function(){
         pn();
     });
}
function pp(){
    //user selects play or pause
    if(initial==0){
        playsong(0);
    }
    else{
        if(condition==0){
        aud[temp].pause();
        condition+=1;
        }
        else{
            aud[temp].play();
            condition-=1;
        }
    }
    if(pstatus==0){
        pstatus=1;
    }
    else{
    playchange.classList.toggle('triangle');
    playchange.classList.toggle('pause');
    }
}
function pl(){
    //user selects previous
    if(temp>0){
        temp-=1;
        playsong(temp);
    }
}
function pn(){
    //user selects next
    if(temp<aud.length-1){
        temp+=1;
        playsong(temp);
    }
}
function moved(){
    //user moved the slider
    //status=1;
    aud[temp].currentTime=aud[temp].duration*(slider.value/100);
}
function moving(){
    //movement of slider
    slider.value=aud[temp].currentTime*(100/aud[temp].duration);
    //the song current time
    var runmin=Math.floor(aud[temp].currentTime/60);
    var runsec=Math.floor(aud[temp].currentTime-runmin*60);
    if(runsec<10){runsec="0"+runsec}
    runtime.innerHTML=runmin+":"+runsec;   
}
function volumechange(){
    //volume changes by the user input
    aud[temp].volume=volumec.value/100;
}
function muting(){
    //user press the mute button
    if(aud[temp].muted){
    aud[temp].muted=false;
    mute.innerHTML="🔈";
    }
    else{
        aud[temp].muted=true;
        mute.innerHTML="🔇";
    }
}
function colorchange(){
    //heart color changes
    if(status==0){
        heart.style.color='red';
        status=1;
    }
    else{
        heart.style.color='white';
        status=0;
    }
}
};
