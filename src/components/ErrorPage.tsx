import { Link, useRouteError } from "react-router-dom"

function ErrorPage(){
    const error: any = useRouteError()
    console.error(error)

    return (
        <div>
            <h1>Oops, an error ocurred:</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Back to homepage</Link>
        </div>
    )
}

export default ErrorPage