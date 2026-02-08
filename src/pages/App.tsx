import style from '../styles/app.module.scss'
import styleabout from '../styles/about.module.scss'
import { Link } from 'react-router-dom'

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
            <h2>Bem vindo!</h2>
            <p>O site está passando por reformas! espere encontrar algumas coisas quebradas.</p>
            <p>Oioi visitante, meu nome é Ítalo, o criador e dono desse site aqui, sinta-se livre pra dar uma olhada por aí nas outras páginas. Se divirta!!</p>
            <p>Recomendo olhar o <Link to={'/blog'}>Blog</Link>, é a parte do site onde eu faço uns posts(com uma frequencia bem duvidosa) sobre qualquer coisa que tiver na minha mente no momento, é o lugar do site que eu mais atualizo atualmente então fica a sugestão.</p>
        </div>
      </div>
      <div id={styleabout.contactinfo}>
        <label>Contato:</label>
          <p>Bluesky: <a target='_blank' href="https://bsky.app/profile/italowebhome.xyz">@italowebhome.xyz</a></p>
          <p>Email: #####</p> {/* ToDo: Decidir que email colocar aqui */}
      </div>
    </div>
  )
}

export default App