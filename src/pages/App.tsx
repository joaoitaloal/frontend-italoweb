import style from '../styles/app.module.scss'
import styleabout from '../styles/about.module.scss'

function App(){
  function AvisoMobile(){
    if(window.matchMedia("(max-width: 1365px)").matches){
      return(
        <p className={style.appP}>AVISO!
          Você está num dispositivo de tela pequena, esse site foi feito para telas maiores, ele funciona mas espere encontrar coisas mal posicionadas e uma experiência não tão boa em geral.
          Algumas artes de fundo também foram retiradas para ocuparem menos espaço na tela.
        </p>
      )
    }else{
      return null
    }
  }

  return(
    <div id={style.home}>
      <h1>Casa virtual do Ítalo <span className={style.little}>(nome possivelmente provisório)</span></h1>
      <AvisoMobile/>
      <div id={styleabout.about}>
        <div style={{margin: '0px auto 10px', display: 'block'}} id={styleabout.aboutbox}>
            <h2>Sobre</h2>
            <p>
                Olá! meu nome é Ítalo e esse site é meu site pessoal, vou usar ele pra aprender coisas sobre web e talvez colocar qualquer coisa que eu tiver afim de vez em quando, não espere nada de muito especial nem elaborado, é realmente o que eu quiser quando eu quiser!
            </p>
            <p>
                O site não vai estar sempre funcionando, pelo menos por enquanto. Provavelmente vou manter ele funcionando de noite das 18 as 22 horas, é pouco tempo mas po não tem muita coisa pra ver aqui. 
            </p>
            <p>
                Dito isso, fique a vontade para mandar perguntas ou qualquer coisa na página de mensagens ou qualquer outro lugar que você consiga me encontrar
            </p>
        </div>
      </div>
      <div id={styleabout.contactinfo}>
        <label>Contato:</label>
          <p>Bluesky: <a href="https://bsky.app/profile/italowebhome.xyz">@italowebhome.xyz</a></p>
          <p>Email: #####</p> {/* ToDo: Decidir que email colocar aqui */}
      </div>
      <p id={style.construction}>Site em construção!</p>
    </div>
  )
}

export default App