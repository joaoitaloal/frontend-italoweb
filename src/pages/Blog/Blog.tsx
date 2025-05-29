import { Link } from 'react-router-dom';
import style from '../../styles/blog/blog.module.scss';

function Blog(){
    return(
        <div id={style.blog}>
            <h1>Blog</h1>
            <p>Bem vindo ao meu blog, aqui vão ter vários pensamentos soltos, pequenos textos sobre qualquer coisa, em inglês ou português, e o que mais eu quiser escrever e deixar publico.</p>
            <p>DD/MM/YYYY</p>
            <hr />
            <div id='essays'>
                <label style={{fontWeight: 'bold', fontSize: '1.5em'}}  htmlFor="essays">Essays/Textos grandes</label>
                <div id={style.essaysList}>
                    <Link className={style.essayLink} to={"./essays/microblogs"}><div>Texto sobre microblogs</div></Link>
                    <Link className={style.essayLink} to={"./essays/AnalisePD"}><div>Análise/opiniões sobre o álbum Plastic Death</div></Link>
                </div>
            </div>
            <hr />
            <div>
                <h2>26/05/2025 - Meu Deus o tempo passa rápido</h2>
                <p>Eu nunca esperei escrever aqui frequêntemente, mas quatro meses é muito tempo, tanto tempo que eu vou listar tudo que eu fiz em quatro meses:</p>
                <ul><li></li></ul>
                <p>Legal.</p>
                <p>Brincadeiras a parte, eu não escrevo nada aqui tem um tempo por falta do que escrever realmente, eu até fiz umas atualizações no backend mas esqueci total de colocar no blog de desenvolvimento.</p>
                <p>Não que eu seja obrigado a escrever aqui também, eu só gosto mesmo, isso aqui é uma explicação pra mim mesmo de porque(porquê?) tanto tempo, além disso que desculpa melhor pra escrever depois de tanto tempo senão essa.</p>
                <p>"Pra que escrever" é uma pergunta bem válida que eu me faço as vezes, eu curto, é terapêutico, é legal saber que tem uma parte minha por aí num repositório do github, além disso talvez minha escrita melhore um pouco se eu continuar escrevendo besteira aqui, mesmo que a qualidade decadente dos textos prove o contrário. A maior parte das coisas que eu escrevo não vem pra cá, não que aqui seja uma seleção dos meus melhores textos, é só que a maioria é muito pessoal ou caótica pra ser compreensível por outro ser humano, ou por mim mesmo depois de dois dias.</p>
                <p>Enfim, depois de começar um parágrafo com aspas, coisa que me parece errada, anuncio aqui(puramente pra me pressionar a não deixar pra lá) que vou fazer uma areazinha especial pra fazer uns "essays", basicamente textos menos sobre mim e mais aprofundados sobre alguma coisa que eu tiver afim de falar, tipo o texto sobre sites pessoais, anuncio anunciado com sucesso, até a próxima!</p>
            </div>
            <div>
                <h2>25/01/2025 - There are titles now! vocaloid stuff and Bluesky</h2>
                <p>I feel like writing something so im gonna talk about a little about the new thing im into right now: vocaloid. I was never much into vocaloid but these last days i've been listening to a lot of vocaloid music and got kinda of pulled to the whole thing. The musics are really great, i dont like the themathics on some of them but it is fine, also would love to learn japanese just to understand the lyrics without a translation, might learn it just for this.</p>

                <p>Gonna try moving on to bluesky, twitter is really not great right now and i like the general idea of it(also the people that run it are not nazis or bigots to my knowledge), ideally i should quit social media alltogether but i dont think i have the mental willpower to do that right now. Maybe use it as a mean to write more frequently since my writing is very inconsistent and i never really post anything on twitter.</p>
                <p><a href="https://@itwebh.bsky.social">@itwebh.bsky.social</a> if you want to take a look.</p>

                <p>Also i've been thinking about moving this entire project to a different github so i can have more freedom, i dont feel very confortable uploading a site where i talk about vocaloid to the github i use to try to find a job, only need the time really to move it somewhere else. Also i would love to make a more serious web server and page to put on the github before doing that.</p>
            </div>
            <div>
                <h2>02/01/2025 - New year and Haibane Renmei</h2>
                <p>New year lets go, quickly writing here that i finished the anime i mentioned last post, haibane renmei it was very good, might be my favourite audio-visual thing now(even though theres not much competition since i dont watch a lot of things). So yeah i really want to write my thoughts on it someday and i figured that posting this here would make me remember if i forget, im not gonna write it now just out of lazyness honestly.</p>
            </div>
            <div>
                <h2>24/12/2024</h2>
                <p>Sometimes i wonder how many hours of my life i spent on twitter, not like i regret it or something like that, just curiosity really.</p>
                <p>Since i am posting something here im gonna put some updates on what i am doing currently.</p>
                <p>Came back to an old project, an "3D Raytracer", im following some guide from an workshop. It is an really interesting project because like its all math and numbers then out of nowhere you are seeing 3d things being rendered, its also interesting to understand the underlying math, i dont understand it perfectly but it is cool anyway. It is on my github if anyone wants to take a look.</p>
                <p>I use commas and periods completely wrong here but whatever who cares i dont.</p>
                <p>I am also currently watching Haibane Renmei, really good anime so far, it has put me in a very sad mood today but it is really good. Might write some thoughts about it here when i finish.</p>
            </div>
            <div>
                <h2>13/12/2024</h2>
                <p>Hey there! Long time since i last did something here, i finished the pong game, which i am pretty happy with btw, but yeah it was pretty much my last big idea for this site, it will still be my playground(and i will keep putting shit in the blog when i feel like it) but i will probably not be doing any big thing here, i will probably think of some project to do soon because i like doing them, if i do i may update them here or in the devlogs just to keep track of what i am doing.</p>
                <p>I did not came back just to say this tho, i felt a little bit inspired to do something while looking throught an artist feed(@archbudzar on instagram check them out), so yeah im gonna write some shit here.</p>
                <p>Writing here is always a very weird felling because it is almost like a personal diary, like no one or very few people other than me will probably read this. But at the same time it is as public as it can be, its in the internet. So yeah i feel very exposed at the same time i am pretty sure i can just say anything i want here, its cool.</p>
                <p>Me writing in english is also something weird that i started and its very hard to write these personal things in portuguese now, maybe in english i feel like there is an extra layer of detachment from myself and what is written here.</p>
                <p>Whatever too much personal text nobody cares sorry if someone is reading this, peace!</p>
            </div>
            <div>
                <h2>24/11/2024</h2>
                <p>
                    There are some japanese(i think?) artists on twitter that i love and like they are so misterious, no other social media no shop nothing, if twitter dies they are gone. It kinda makes them more cool, like every art i see of them i might not ever see again. @AbCpb11dcDgCoOd is one that i love.
                    A big problem with following artists on twitter nowadays for me atleast is trying to filter AI artists out of my timeline, really hate it.
                </p>
            </div>

        </div>
    )
}

export default Blog