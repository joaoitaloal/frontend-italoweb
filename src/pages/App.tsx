import style from '../styles/app.module.scss'
import constructionImg from '/construction.png'

function App(){
  return(
    <div id={style.home}>
      <h1>Casa virtual do Italo <span className={style.little}>(nome possivelmente provisório)</span></h1>
      <p>Pouca coisa pra ver por enquanto, mais em breve!</p>
      <p>Tente mandar uma mensagem! veja a barra de navegação.</p>
      <p id={style.construction}>Site em construção!<img src={constructionImg} alt="Placa em construção" /></p>
    </div>
  )
}

export default App