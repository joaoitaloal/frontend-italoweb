import style from '../styles/app.module.scss'

function App(){
  return(
    <div id={style.home}>
      <h1>Casa virtual do Italo <span className={style.little}>(nome possivelmente provisório)</span></h1>
      <p className={style.appP}>Pouca coisa pra ver por enquanto, mais em breve!</p>
      <p id={style.construction}>Site em construção!</p>
    </div>
  )
}

export default App