import style from '../../styles/blog/blog.module.scss';

function Blog(){
    return(
        <div id={style.blog}>
            <h1>Blog</h1>
            <p>Bem vindo ao meu blog, aqui vão ter vários pensamentos soltos, pequenos textos sobre qualquer coisa, em inglês ou português, e o que mais eu quiser escrever e deixar publico</p>
            <hr />
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