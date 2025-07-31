import { useState } from 'react';
import style from '../styles/renderer.module.scss'
import { Light, Material, SceneInfo, Sphere } from '../lib/classes';
import axios from 'axios';
import { formatSceneJSON, shaderMap } from '../lib/utils';

function Renderer(){
    const shaders = shaderMap();

    const [scene, setScene] = useState(new SceneInfo(0, 0, -1, 1, 0.66, 0.5, [new Sphere(0, 0, 10, 2, 500, 500, 500, new Material())], [new Light(0, 0, 0, 0.5, 0.1)]));
    const [imgURL, setImgURL] = useState('');
    const [message, setMessage] = useState('Nenhuma imagem renderizada ainda!');
    const [postprocessing, setPostprocessing] = useState('');
    const [errorMessage, setErrorMessage] = useState('Nenhum erro')
    let inputScene = structuredClone(scene);

    function addSphere(){
        inputScene.spheres.push(new Sphere(0, 0, 10, 1, 500, 500, 500, new Material()));
        setScene(inputScene)
    }
    function addLight(){
        inputScene.lights.push(new Light(0, 0, 0, 0.5, 0.1));
        setScene(inputScene)
    }

    function submitScene(){
        //setScene(inputScene);
        
        axios.request(
            {
                method: 'post',
                maxBodyLength: 5000,
                data: {scene: formatSceneJSON(inputScene), postprocessing: postprocessing},
                url: '/api/3dimage',
                headers: { 
                    'Content-Type': 'application/json'
                },
                responseType: 'blob'
            }
        )
        .then((res) => {
            setScene(inputScene);
            setImgURL(URL.createObjectURL(res.data));
            setErrorMessage("Nenhum erro");
            setMessage("Imagem carregada!");
        })
        .catch((e) => {
            if(e.response.status == 400){
                e.response.data.text().then((text: string) =>{ setErrorMessage(text) }); // Its ugly but necessary to decode the blob
                setMessage("Ocorreu um erro na construção do seu código de shader, verifique o erro abaixo.");
            }else{
                setMessage("Um erro ocorreu ao carregar a imagem: "+e.response.status);
            }
        })
    }

    return <div id={style.renderer}>
        <div id={style.sceneInputs}>
            <h2>Valores da cena</h2>
            <label className={style.title}><h3>Camera</h3>
                <div className={style.secdiv}>
                    <label htmlFor="camera-x">x</label><input type="number" id='camera-x' defaultValue={0} onChange={(e) => inputScene.camerax = parseFloat(e.target.value)}/>
                </div>
                <div className={style.secdiv}>
                    <label htmlFor="camera-y">y</label><input type="number" id='camera-y' defaultValue={0} onChange={(e) => inputScene.cameray = parseFloat(e.target.value)}/>
                </div>
                <div className={style.secdiv}>
                    <label htmlFor="camera-z">z</label><input type="number" id='camera-z' defaultValue={-1} onChange={(e) => inputScene.cameraz = parseFloat(e.target.value)}/>
                </div>
            </label>
            <label className={style.title}><h3>Plano</h3>
                <div className={style.secdiv}>
                    <label htmlFor="largura">largura</label><input type="number" id="largura" defaultValue={1} onChange={(e) => inputScene.planeWidth = parseFloat(e.target.value)}/>
                </div>
                <div className={style.secdiv}>
                    <label htmlFor="altura">altura</label><input type="number" id="altura" defaultValue={0.66} onChange={(e) => inputScene.planeHeight = parseFloat(e.target.value)}/>
                </div>
            </label>
            <label className={style.title} htmlFor='intensidade'>Intensidade da Luz Ambiente:
                <input type="number" id="intensidade" defaultValue={0.5} onChange={(e) => inputScene.ALI = parseFloat(e.target.value)}/>
            </label>
            <button type="button" onClick={addSphere}>Adicionar esfera</button>
            {inputScene.spheres.map((sphere, i) => {
                return(
                    <label key={"sphere"+i} className={style.title}>Esfera{i}:
                        <div className={style.sectitle}><h3>posição:</h3>
                            <div className={style.secdiv}>
                                <label htmlFor={`esfera${i}x`}>x</label><input type="number" id={`esfera${i}x`} defaultValue={0} onChange={(e) => sphere.x = parseFloat(e.target.value)}/>
                            </div>
                            <div className={style.secdiv}>
                                <label htmlFor={`esfera${i}y`}>y</label><input type="number" id={`esfera${i}y`} defaultValue={0} onChange={(e) => sphere.y = parseFloat(e.target.value)}/>
                            </div>
                            <div className={style.secdiv}>
                                <label htmlFor={`esfera${i}z`}>z</label><input type="number" id={`esfera${i}z`} defaultValue={10} onChange={(e) => sphere.z = parseFloat(e.target.value)}/>
                            </div>
                        </div>
                        <label>raio<input type="number" id={`esfera${i}radius`} defaultValue={1} onChange={(e) => sphere.radius = parseFloat(e.target.value)}/></label>
                        <div className={style.sectitle}><h3>cor:</h3>
                            <div className={style.secdiv}>
                                <label htmlFor={`esfera${i}r`}>vermelho</label><input type="number" id={`esfera${i}r`} defaultValue={500} onChange={(e) => sphere.red = parseFloat(e.target.value)}/>
                            </div>
                            <div className={style.secdiv}>
                                <label htmlFor={`esfera${i}g`}>verde</label><input type="number" id={`esfera${i}g`} defaultValue={500} onChange={(e) => sphere.green = parseFloat(e.target.value)}/>
                            </div>
                            <div className={style.secdiv}>
                                <label htmlFor={`esfera${i}b`}>azul</label><input type="number" id={`esfera${i}b`} defaultValue={500} onChange={(e) => sphere.blue = parseFloat(e.target.value)}/>
                            </div>
                        </div>
                    </label>
                );
            })}
            
            <button type="button" onClick={addLight}>Adicionar luz</button>
            {inputScene.lights.map((light, i) => {
                return(
                    <label key={"light"+i} className={style.title}>Luz{i}:
                        <div className={style.sectitle}><h3>posição</h3>
                            <div className={style.secdiv}>
                                <label htmlFor={`luz${i}x`}>x</label>
                                <input type="number" id={`luz${i}x`} defaultValue={0} onChange={(e) => light.x = parseFloat(e.target.value)}/>
                            </div>
                            <div className={style.secdiv}>
                                <label htmlFor={`luz${i}y`}>y</label>
                                <input type="number" id={`luz${i}y`} defaultValue={0} onChange={(e) => light.y = parseFloat(e.target.value)}/>
                            </div>
                            <div className={style.secdiv}>
                                <label htmlFor={`luz${i}z`}>z</label>
                                <input type="number" id={`luz${i}z`} defaultValue={0} onChange={(e) => light.z = parseFloat(e.target.value)}/>
                            </div>
                        </div>
                        <label className={style.sectitle} htmlFor={`luz${i}diffuse`}>Intensidade difusa</label><input type="number" id={`luz${i}diffuse`} defaultValue={0.5} onChange={(e) => light.diffuse = parseFloat(e.target.value)}/>
                        <label className={style.sectitle} htmlFor={`luz${i}specular`}>Intensidade specular</label><input type="number" id={`luz${i}specular`} defaultValue={0.1} onChange={(e) => light.specular = parseFloat(e.target.value)}/>
                    </label>
                );
            })}
        </div>
        <div id={style.render}>
            <p>{message}</p>
            <button id={style.submit} onClick={submitScene}>Renderizar</button>
            <div id={style.renderDiv}>
                <img className={style.unzoomed} src={imgURL} id={style.renderIMG} onClick={(e) =>{
                    let className = e.currentTarget.className;
                    if(className == style.unzoomed)
                        e.currentTarget.className = style.zoomed;
                    else if(className == style.zoomed)
                        e.currentTarget.className = style.unzoomed;
                }}/>
            </div>
        </div>
        <div id={style.shaderInputs}>
            <h2>Códigos de shader</h2>
            <button onClick={() =>{setPostprocessing(''); setScene(inputScene)}}>Nenhum</button>
            <button onClick={() =>{setPostprocessing(shaders.get('blur')); setScene(inputScene)}}>Blur</button>
            <button onClick={() =>{setPostprocessing(shaders.get('whitebg')); setScene(inputScene)}}>Fundo Branco</button>
            <textarea id={style.postprocessing} value={postprocessing} onChange={(e) =>{setPostprocessing(e.target.value); setScene(inputScene)}}></textarea>
            <label htmlFor="erro">Erros:</label>
            <p id='erro'>{errorMessage}</p>
        </div>
        <div id={style.aboutRender}>
            <h2>Renderizador de imagens</h2>
            <p>Esse é o renderizador de imagens, uma ferramenta que cria imagens de uma cena tri-dimensional do zero a partir de valores que determinam a cena, com suporte para esferas e luzes.</p>
            <h3>Como usar:</h3>
            <p>Na área "Valores da cena" você pode inserir os valores que vão determinar a cena, como coordenadas da camera, intensidade das luzes e etc.</p>
            <p>Na área "Códigos de shader" você pode escrever um simples código de pós-processamento que roda após a imagem ser renderizada, ele pode ser escrito na linguagem OpenCL C, porém com diversas restrições, não são permitidos laços(while e for) nem algumas funções padrões do OpenCL C. O programa irá avisar caso seu código gere um erro de compilação. Se Você não conhecer a linguagem, dê uma olhada nos códigos prontos.</p>
            <p>Por fim, quando estiver pronto, clique em renderizar e espere a imagem ser gerada, é possível clicar(ou tocar, no celular) na imagem para dar zoom.</p>
            <p>Algumas observações: O espectro de cores aceita valores de 0 a 1000(na area de código é de 0 a 1), a intensidade de luzes aceita qualquer valor mas valores acima de 1 serão muito fortes, modificações no plano vão distorcer a imagem e, por ultimo, a quantidade de esferas e luzes aumenta o tempo de criação da imagem consideralmente.</p>
            <h3>Como as imagens são criadas:</h3>
            <p>As imagens são criadas calculando o valor de cada pixel ao vivo, usando uma técnica conhecida como phong shading, o programa em si que está rodando por trás pode ser acessado em <a href="https://github.com/joaoitaloal/3DRenderer">https://github.com/joaoitaloal/3DRenderer</a>, basicamente a cor de cada pixel é calculada separadamente usando vetores para simular raios de luz. <br />A teoria para esse projeto, além de implementações em outras linguagens podem ser encontradas em <a href="https://avikdas.com/build-your-own-raytracer/">https://avikdas.com/build-your-own-raytracer/</a>, esse é um material muito interessante e em geral não tão dificil de entender, infelizmente ele está inteiro em inglês então se alguém se interessar e não conseguir entender por favor entre em contato comigo(joaoitaloalmeida@alu.ufc.br) que tentarei ajudar(apesar que qualquer IA deve traduzir isso legal já).</p>
            <h3>Mais sobre os Códigos de shader:</h3>
            <p>Novamente, a linguagem utilizada é a OpenCL C, uma linguagem de escrita de códigos para gpu baseada em C, você pode encontrar a especificação dela em <a href="https://registry.khronos.org/OpenCL/specs/3.0-unified/pdf/OpenCL_C.pdf">https://registry.khronos.org/OpenCL/specs/3.0-unified/pdf/OpenCL_C.pdf</a>, porém boa parte do que você poderia fazer com ela está bloqueada aqui por diversos motivos, portanto aqui está uma explicação superficial do que está ou não permitido.</p>
            <p>O código que você escrever vai rodar uma vez para cada pixel da imagem, se, por exemplo, você escrever um código que deixa o referido pixel vermelho, todos os pixels da imagem vão ficar vermelhos.</p>
            <p>Você tem a sua disposição algumas informações sobre o pixel que está sendo tratado, estas são: <br /> <strong>x e y</strong>: As coordenadas x e y do pixel na imagem. <br /><strong>WIDTH:</strong> A largura da imagem em pixels. <br /><strong>HEIGHT:</strong> A altura da imagem em pixels. <br /><strong>pixelcolors:</strong> um vetor das cores dos pixels da imagem. <br /><strong>atualVermelho, atualVerde e atualAzul:</strong> os indices do espectro rgb(sendo 0 o minimo e 1 o máximo) para o pixelcolors, ou seja, pixelcolors[atualVermelho] = quantidade de vermelho do pixel atual, pixelcolors[atualVerde] = quantidade de verde e etc.</p>
            <p>Além disso existem algumas funções prontas para facilitar as coisas: </p>
            <p><strong>void somarPixels(float pixelcolors[], int x1, int y1, int x2, int y2):</strong> Essa função soma as cores do pixel determinado por x2 e y2 ao pixel determinado por x1 e y1. </p>
            <p><strong>void mudarPixelRGB(float pixelcolors[], int x, int y, float red, float green, float blue):</strong>  Essa função muda as cores do pixel determinado por x e y para os 3 valores passados como red, green e blue. </p>
            <p><strong>float3 pegarCorPixel(float pixelcolors[], int x, int y):</strong> Essa função é mais complicada, ela retorna a cor do pixel determinado por x e y no formato float3, para acessar as respectivas cores do valor retornado utilize "valor.x", "valor.y" ou "valor.z", sendo os espectros vermelho, verde e azul, respectivamente.</p>
            <p>Não são permitidos: laços, chamada de algumas funções prontas do OpenCL(você dificilmente vai usar elas ou até saber da existência delas), acessos diretos em pixelcolors diferentes de 'red', 'green' e 'blue', utilize a função somarPixels se precisar somar pixels de indices especificos diferentes do atual e a função mudarPixelRGB se quiser mudar as cores de um pixel especifico.</p>
            <p>Recomendo que utilize as funções prontas e não usar acessos diretos a pixelcolors para modificar os pixels, já que elas facilitam bastante. Se parecer muito dificil fazer algo do 0, dê uma olhada nos shaders prontos, o blur é bem fraco mas se você mudar os +1 e -1 por +5 e -5, por exemplo, ele fica mais forte.</p>
        </div>
    </div>
}

export default Renderer;