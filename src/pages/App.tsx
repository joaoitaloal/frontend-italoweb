import style from '../styles/app.module.scss'

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
      <h1>Casa virtual do Italo <span className={style.little}>(nome possivelmente provisório)</span></h1>
      <p className={style.appP}>Pouca coisa pra ver por enquanto, mais em breve!</p>
      <AvisoMobile/>
      <p id={style.construction}>Site em construção!</p>
    </div>
  )
}

export default App