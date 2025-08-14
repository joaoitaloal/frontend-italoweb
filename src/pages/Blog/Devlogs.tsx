import style from '../../styles/blog/blog.module.scss';

function Devlogs(){
    function DevlogText(){
        //temp, ToDo also
        let english = true;

        if(english){
            return(
                <>
                <div>
                    <h2>31/07/2025</h2>
                    <p>Changed the entire backend to typescript while also making a lot of old code work better, pretty good change i think.</p>
                    <p>Planning to stop using an ORM and instead i might try to use straight SQL.</p>
                    <p>Also need to change the way im storing some of the site info(i may or may not be using a .txt file to track the number of visits the site gets).</p>
                </div>
                <div>
                    <h2>30/07/2025</h2>
                    <p>Added an entire new page and did not write anything about it or the process of creating it here, good job man you are great at doing this log thing.</p>
                    <p>Quick summary here: Added a page to host my 3D rendering project that i mentioned some posts before, you can access it <a href="/renderer">here</a>, it was a very fun project to do, i showed it at a fair("career fair"? "job fair"?) on my college and got some pretty cool reactions to it so again it was very fun, maybe ill talk more about it on the blog page, sticking to technical details here.</p>
                    <p>So basically the renderer is still the same from before, it is just hosted on my machine, i have some preventions on place so users cant destroy my machine and thats it(there is probably some fuckup i did somewhere and if you try enough you can probably destroy my machine anyway, if you do please take some notes on how you did it and send me, apologies for destroying my pc would be cool too if you can).</p>
                </div>
                <div>
                    <h2>28/01/2025</h2>
                    <p>There is a weird bug on the backend that happens from time to time, it basically ends up looping a process and the server stops doing anything else.</p>
                    <p>Saving this here so that i dont forget to fix it, still have to discover what is causing it tho.</p>
                    <p>Coming from the future to say that this got fixed by itself which is scary but ill take it.</p>
                </div>
                <div>
                    <h2>25/01/2025</h2>
                    <p>Fixed a bug with the chat page on mobile and an old bug i tested only now on the calculator project.</p>
                    <p>I dont know since when this mobile bug was there, i suspect it is from the design change that i did a long time ago so thats pretty bad on my part, really no idea how i did not noticed it earlier, but yeah everything working now!</p>
                </div>
                <div>
                    <h2>02/01/2025</h2>
                    <p>2025!! There is a clear lack of anything from me here, that is because i spent a long time doing things for college and have not worked on any personal project for some time, but i started one and want to put some things about it here.</p>
                    <p>The project is a 3D renderer/raytracer, you can check it on <a href="https://github.com/joaoitaloal/3DRenderer">my github</a>, it is currently made using SDL2(probably gonna change it to SDL3), check the readme for more details since thats not what im here for.</p>
                    <p>Im here to complaim about coding using C, man, memory and pointers are very hard to use, one of the first version of the program straight up crashed my pc like 3 times just from memory leaks. Fixing it was very fun though, learned how to use valgrind for that and yeah very pleasant when you understand what is happening</p>
                    <p>Now i am having a big problem with strings, i am trying to parse some information from the command line arguments and like to make a simple split function you need to make a 50 lines dedicated function it is crazy. Maybe im just too used to javascript and json parsing.</p>
                    <p>Having said that, the renderer itself was very fun to code, honestly think it is a good project to exercise and learn a little bit about computer graphics.</p>
                    <p>Writing this i am noticing that my english is getting worse, and it was never very good so thats a problem, but whatever.</p>
                </div>
                <div>
                    <h2>02/11/2024</h2>
                    <p>Finished tracking collisions, there are some bugs but its a simple game i dont want to make crazy acurate collision checks</p>
                    <p>Also made the deltaTime</p>
                    <p>I like how it turned out a lot, still need to make touch controls for mobile thought</p>
                </div>
                <div>
                    <h2>30/11/2024</h2>
                    <p>Made the system to choose your player and to not be able to use a player that is already in use</p>
                    <p>Finished the client side rendering part, now i only need to finish the server side physics</p>
                    <p>In the little test i did there are some weird slowdowns, i am pretty sure this is because the server is not really sending the updates at regular intervals, i will probably need to manually calculate and implement a deltatime to fix this</p>
                </div>
                <div>
                    <h2>29/11/2024</h2>
                    <p>Hell yeah never been more happy with my code working, basically made the part of connecting the server and the client, midway throught i thought it would not work but i am very happy it worked. The lag on the local testing is not that bad, i think it will be playable at least when i test it online</p>
                    <p>Summary of what i changed: the game is now fixed at 400x180px for future mobile compatibility, the inputs and rendering are handled by the client(the browser), the inputs are sent to the server and the server sends a signal to the client every 15milliseconds that the client uses to update the game being rendered</p>
                    <p>Now i need to do the part of game physics on the server, i hope it is going to be easy, maybe the ball collision with the players will be hard since i am going to have to do it from scratch but whatever its gonna be fun to do</p>
                    <p>Having tested it online: the lag is visible but whatever, it happens, nobody is perfect nor my game</p>
                    <p>Ok there is a very bad bug happening when somebody sends a message for the first time: the screen shakes very fast, i dont know why it is happening and thats a hazard for epilepsy i think so i need to fix that</p>
                </div>
                <div>
                    <h2>27/11/2024</h2>
                    <p>Possible libraries for the game: <br />
                        PixiJS: Very simple and powerful. I might use this since it is a simple game and i want to focus more on the server and multiplayer part of the idea <br />
                        Planck.js: A physics only engine, it is a rigid body engine so it looks a lot like Unity, but 2D i think. I would need to implement the drawing method still, and it seems more complicated overall so im saving this here just in case i have more time and interest to take a better look at it some other time.</p>
                    <p>I went with PixiJS but it doubled the size of the js minified file, i need to see if i can change some options to make this better</p>
                    <p>So PixiJS is indeed very simple to use, had little time today but im pretty sure the game part is not going to take much time to make. im pretty excited to see what i can do when connecting this to the server, hope the lag is not too crazy.</p>
                    <p>The original idea was putting the game on the chat page, im not sure if im going with that idea since the game will not have much space, but i need to think about it still.</p>
                    <p>If you happen to stumble upon this text around 27/11 you can see my testing on <a href='/chat'>italowebhome.xyz/chat</a></p>
                </div>
                <div>
                    <h2>24/11/2024</h2>
                    <p>Sheesh thats a lot of time</p>
                    <p>Made some layout changes for the blog page, i like how it turned out, its very functional i think</p>
                    <p>I dont like the font much but whatever</p>
                </div>
                <div>
                    <h2>08/11/2024</h2>
                    <p>Thought about it and im gonna make the blog page a separate thing from the main layout, i think it makes more sense than the customized page i was trying to make, its gonna be kinda boring but the main focus of a blog is the text so i think it is fine</p>
                    <p>Page done, very basic but i think it will be a better option that will cause me less headaches</p>
                    <p>Might transfer these devlogs to the blog page later</p>
                </div>
                <div>
                    <h2>05/11/2024</h2>
                    <p>Started blog page</p>
                    <p>I think i've been trying to fix a single css problem for like 4 hours god i hate this so much</p>
                    <p>Decided to rollback all changes whatever i can do better another day, my brain is fried</p>
                    <p>Maybe give up on making user options for the blog page</p>
                </div>
                <div>
                    <h2>04/11/2024</h2>
                    <p>I want to make a "blog" page next, not really a blog probably, just a place where i can put anything that is on my mind, now that i wrote that i think thats exactly what a blog is</p>
                    <p>When i do make the blog page i think this page will probably be a little less verbose and more like summarys of what changed</p>
                    <p>Not doing it today though</p>
                </div>
                <div>
                    <h2>03/11/2024</h2>
                    <p>Finished the messages log for chat page, it now loads all messages from the day, looks cool i think. Also now shows the time the message was sent</p>
                    <p>Changed the chat layout for small screens, i dont really like how it looks and works but it is way better and more usable than before</p>
                </div>
                <div>
                    <h2>02/11/2024</h2>
                    <p>Just discovered the scrollbar chrome uses is the ugliest thing i ever seen, since i cant customize the scrollbars manually for each browser im gonna just hide them all and hope people understand what you can and cant scroll</p>
                    <p>Managed to sync the site on my other OS so now the uptime here should increase a little</p>
                    <p>Basically did some build and deploy config today and that was it</p>
                </div>
                <div>
                    <h2>31/10/2024</h2>
                    <p>Should have made some halloween pixel art</p>
                    <p>Was not planning to do anything today, just make some logs for yesterday because i did a lot of shit but forgot to write about it but i am having a big problem trying to host the site so troubleshooting night lets go.</p>
                    <p>What the hell is happening?? there is some console.logs that are not being called when they clearly should, thats like basic how could a print to console go wrong am i going crazy</p>
                    <p>Okay thats crazy, i dont know what i did but for some reason the devlopment server i am using is connected to the actual server and the logs sent to the devlopment were showing on the actual server. what did i do wrong????????</p>
                    <p>No time to fix this today but the site is running and i know the problem so no worries</p>
                    <p>My build process is a mess i should really make some automations(is that the word?) to it</p>
                </div>
                <div>
                    <h2>30/10/2024</h2>
                    <p>I am clearly using css modules wrong because when i use general css rules for a page they get used every page, maybe a problem with react not updating stylesheets?</p>
                    <p>WARNING!!!!!!!!!!!!!!!: you can't unsee what i am going to say now: There is some weird light at the top left and right of the navbar, it is created by the border of the window but that does not makes any sense, its really bothering me but whatever.</p>
                    <p>Late logs here!! did the about/devlog page finnaly and thats it</p>
                </div>
                <div>
                    <h2>29/10/2024</h2>
                    <p> 
                        Kinda late now so i cant do much today but i had some ideas and i want to make an "1.0" version of the site so i will be doing a priority ToDo here: <br />
                        -Make a mobile version, even if i have to sacrifice some of the styling. i could extend the window to the entire screen and forget the background or just show it a little, the background pixel art will not be visible probably what is sad but fine. <br />
                        -Decide an schedule to host the page and make a little space to show it. <br />
                        -See if i can find a way to show a static page when i am not hosting the site
                    </p>
                    <p>I need to stop having ideas they are growing out of control i dont have that much time :(</p>
                    <p>Did some great changes to mobile, the chat page is still very messy and honestly i would need to take it apart to make it work on mobile so i think it would just be boring, so not doing that.</p>
                    <p>I think i am free to do more content focused things again now that i finished the chat and the mobile version, next time that i come back ill do the devlog page(most probably ill do an about page containing the devlog), set a schedule and then start the pong.</p>
                </div>
                <div>
                    <h2>28/10/2024</h2>
                    <p>Did last changes on the chat style, the css is very messy because of the rollbacks i had to make last time so if i ever need to change this again good luck to me</p>
                    <p>Not a big fan of the look of the inputs but its not that bad, the font is also not helping</p>
                    <p>Want to change the navbar before doing another page.
                    Done, navbar is looking pretty good now, used a dropdown menu from radix to avoid putting 10 buttons on the screen. The mobile problem is worse now but i will ignore that for as long as i can</p>
                </div>
                <div>
                    <h2>26/10/2024</h2>
                    <p>Finished the chat page finnaly, i like a lot how it turned out, theres no space for the game thing right now so it will really be another project, maybe another page.
                    Really like how it turned out visually and functionally, very proud</p>
                    <p>The focus on the message input doesnt come back automatically after sending a message, to fix this i need to make separate components for the messagebox and the profile div, with the chat component as the parent. Putting this here for the me of the future that will absolutely forget this</p>
                    <p>Mobile web debugging is so cool, you literally plug an usb and use the desktop to see your screen and browser console, i find it crazy that it works simply with an usb</p>
                    <p>Really need to learn how to use enviroment variables</p>
                    <p>I think i will need to give up and make a mobile version, its literally unusable currently</p>
                    <p>Did not made a mobile version but made it kinda usable</p>
                    <p>Ran into a terrible bug/oversight, had to change the entire react layout and a lot of other shit cause of it, i dont like the result because it was very rushed and turned out ugly but i really wanted to finish it today so thats gonna be the solution for some time</p>
                    <p>Next i think ill make the devlog page then the game thing</p>
                </div>
                <div>
                    <h2>25/10/2024</h2>
                    <p>Thought a little more about it and i think pong would be doable with an sql database, i would need to test though</p>
                    <p>I want to do some style changes, the navbar is kinda ugly, i need to incorporate the pixel art more into the main pages</p>
                    <p>Managed to get a much better database to work, that will be good if i do try the game thing, also the latency of the chat is way better now</p>
                    <p>I hate css with all my being, i think i will die before being able to position shit were i want</p>
                    <p>Was searching for a drawing program to use on linux and found Krita, its very good, dont know how i never heard about it before</p>
                    <p>I got a very cheap hard drive to use linux on and everytime i boot linux it starts making very weird noises, i dont know if it is broken or something but i hope that it can survive</p>
                    <p>Good styling work today, chat page is almost done, ill probably use the momentum and inspiration to update the whole site style this next days</p>
                </div>
                <div>
                    <h2>24/10/2024</h2>
                    <p>Had a crazy idea while working on the other project, expand the chat and make a little multiplayer "game" thing, maybe a simple chatroom i dont know. It would be reasonable if i were able to found a way to store data at the amount and speed needed for that, which would be a lot, latency would absolutely be a problem too. sql databases would probably no be able to handle the amount of reads and writes and nosql databases all seem very complicated to integrate to a simple project</p>
                    <p>So yeah that would be a project on its own i think, maybe another time i can try it again</p>
                    <p>Should change the green color on the pallete, it does not fit anywhere</p>
                    <p>I am taking a lot of time to finish the chat thing, ill try to finish that as fast as possible then focus on simpler things for some time, like other pages that i plan to add and any other little cool shit</p>
                    <p>Finished the backend for the chat finnaly, it was fairly simple after all the complicated configuration and choice making, decided for logging messages but not showing them to the user, at least for now, maybe i can work on that later, dont think it deserves that much work though. Just need to finish frontend work for it(which is way easier to do) and then i am free of this burden.</p>
                    <p>Thinking again, a turn based game would be totally doable.</p>
                </div>
                <div>
                    <h2>21/10/2024</h2>
                    <p>Did some pixel art and thats it</p>
                </div>
                <div>
                    <h2>17-20/10/2024</h2>
                    <p>Worked on another project, learned how to use <span className={style.redacted}>*** *********</span> so thats cool</p>
                </div>
                <div>
                    <h2>16/10/2024</h2>
                    <p>Good progress on the chat page, it was kinda hard, burned a lot of time to do simple things but its fine at least it looks like its going to work</p>
                    <p>Also did some file and code organization on the server side so that was good too</p>
                </div>
                <div>
                    <h2>14/10/2024</h2>
                    <p>Not sure what do i wanna do now, should learn the database stuff but that seems complicated</p>
                    <p>Learned some database stuff and it seems like thats absolutely not what i was searching for, gonna rollback to storing messages in <span className={style.redacted}>*** *****</span> i think</p>
                    <p>Started using <span className={style.redacted}>*********</span>  to connect chat and the server, having problems with it but i think its just my head in the wrong place, hope i get it to work soon </p>
                </div>
                <div>
                    <h2>12/10/2024</h2>
                    <p>
                        Pallete?: 
                        https://coolors.co/1c0221-7b5e7b-938274-e9eb87-b9f18c <br />
                        $dark-purple: rgba(28, 2, 33, 1); <br />
                        $chinese-violet: rgba(123, 94, 123, 1); <br />
                        $beaver: rgba(147, 130, 116, 1); <br />
                        $mindaro: rgba(233, 235, 135, 1); <br />
                        $light-green: rgba(185, 241, 140, 1); <br />
                    </p>
                    <p>Planning to make some simple pixel art today to use on the page</p>
                    <p>Happy with the icon but it is kinda generic, hope there isn't other art that looks like it</p>
                    <p>Tried to add a font, didnt work for some reason(i think the font i got just had one size or variant or something so that might be it) and i gave up kinda</p>
                </div>
                <div>
                    <h2>10/10/2024</h2>
                    <p>https://github.com/botoxparty/XP.css windows xp styles for css</p>
                    <p>The server is pretty much done, now i can do some experimentation and frontend work</p>
                    <p>Planning to make a chatroom page, dont know how i will store messages but ill figure it out</p>
                    <p>Trying to create a database drained my vital energy, no more coding today but next step should be to learn some basic sql, postgres and all that so that i can focus on the cool things</p>
                </div>
                <div>
                    <h2>08?/10/2024</h2>
                    <p>Made basically the foundation of the site this day but completely forgot to write anything here so thats it</p>
                </div>
                <div>
                    <h2>07?/10/2024</h2>
                    <p>Currently having a problem: i need to serve the index.html file that was built with vite but the index.html cant load the js file from assets, maybe a problem with the path?</p>
                    <p>The problem was that i needed to use the folder as a static files folder</p>
                </div>
                <div>
                    <h2>05?/10/2024</h2>
                    <p>the setup for the web part is over(getting a domain etc), just need to learn how to code a server that serves a react page</p>
                </div>
                </>
            )
        }
    }

    return(
        <div id={style.blog}>
            <h1>Blog[?] do desenvolvimento</h1>
            <div id={style.devlog}>
                <p>Eu acabei escrevendo bastante coisa enquanto estava desenvolvendo o site, como foi tudo em um .txt e é super fácil transferir pra cá, fiz isso. <br /> Vou tentar continuar atualizando as coisas aqui sempre que eu mexer no site.</p>
                <p>Tá tudo em inglês mas eu pretendo traduzir em breve. Tem algumas coisas censuradas por segurança também.</p>
                <p>Datas no formato DD/MM/YYYY.</p>
                <DevlogText/>
            </div>
        </div>
    )
}

export default Devlogs;