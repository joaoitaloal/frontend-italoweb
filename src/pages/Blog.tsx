import style from '../styles/blog/blog.module.scss';

function Blog(){
    return(
        <div id={style.blog}>
            <h1>Blog</h1>
            <p>Bem vindo ao meu blog, aqui vão ter vários pensamentos soltos, pequenos textos sobre qualquer coisa e o que mais eu quiser escrever e deixar publico</p>
            <p>Nada aqui por enquanto, em breve eu devo trazer o blog de desenvolvimento pra cá e tenho um textinho que quero colocar aqui também, pra isso já separei páginas como você pode ver na barra de navegação</p>
            <p>O estilo deve mudar um pouco também só pra facilitar a leitura e pra acessibilidade</p>
        </div>
    )
}

export default Blog