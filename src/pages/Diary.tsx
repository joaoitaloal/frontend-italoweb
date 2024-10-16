import axios from 'axios'
import { useState } from 'react'
import { getConfig } from '../lib/utils'
import style from '../styles/diary.module.scss'

function Diary() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [response, setResponse] = useState('Mande uma mensagem')

  function formSubmit(e: React.FormEvent){
    e.preventDefault()
    if(message != ''){
      axios.request(getConfig({name: name==''?'anônimo':name, message: message}))
      .then((res) => { 
        setResponse(res.data) 
      })
      .catch((error) => { setResponse(error.message) })

      setName('')
      setMessage('')
    }else{
      window.alert('Escreva uma mensagem!')
    }
  }
  
  return (
    <div id={style.diary}>
      <h1>Me mande uma mensagem!</h1>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="name">Nome(opcional)
        </label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" />
        <label htmlFor="message">Mensagem
        </label>
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" name="message"/>
        <button type="submit">Enviar</button>
      </form>
      <p id='response'>{response}</p>
      <p>Não mande nenhuma informação privada como senhas, eu(italo) vou ter acesso as mensagens</p>
    </div>
  )
}

export default Diary