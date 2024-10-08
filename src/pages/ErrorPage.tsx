import { Link, useRouteError } from "react-router-dom"
import style from '../styles/errorpage.module.scss'

function ErrorPage(){
    const error: any = useRouteError()
    console.error(error)

    return (
        <div id={style.background}>
            <h1>Opa! Houve um erro:</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Voltar para a página inicial</Link>
        </div>
    )
}

export default ErrorPage