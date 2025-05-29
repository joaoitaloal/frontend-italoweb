import { useState } from 'react';
import style from '../styles/renderer.module.scss'
import { Light, Material, SceneInfo, Sphere } from '../lib/classes';
import axios from 'axios';
import { formatSceneJSON } from '../lib/utils';

function Renderer(){
    const [scene, setScene] = useState(new SceneInfo(0, 0, -1, 1, 0.66, 0.5, [new Sphere(0, 0, 0, 1, 255, 255, 255, new Material())], [new Light(0, 0, 0, 0.5, 0.1)]));
    const [imgURL, setImgURL] = useState('');
    const [message, setMessage] = useState('Nenhuma imagem renderizada ainda!');
    let inputScene = structuredClone(scene);

    function addSphere(){
        inputScene.spheres.push(new Sphere(0, 0, 0, 1, 255, 255, 255, new Material()));
        setScene(inputScene)
    }
    function addLight(){
        inputScene.lights.push(new Light(0, 0, 0, 0.5, 0.1));
        setScene(inputScene)
    }
    function submitScene(){
        //setScene(inputScene);
        console.log(formatSceneJSON(inputScene))
        axios.request(
            {
                method: 'post',
                maxBodyLength: 5000,
                data: formatSceneJSON(inputScene),
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
        })
        .catch((e) => {
            setMessage("Um erro ocorreu ao carregar a imagem: "+e.message);
        })
    }

    return <div id={style.renderer}>
        <div id={style.sceneInputs}>
            <h2>Valores</h2>
            <button id={style.submit} onClick={submitScene}>Renderizar</button>
            <label className={style.title}>Camera:
                <label htmlFor="camera-x">x</label><input type="number" id='camera-x' defaultValue={0} onChange={(e) => inputScene.camerax = parseFloat(e.target.value)}/>
                <label htmlFor="camera-y">y</label><input type="number" id='camera-y' defaultValue={0} onChange={(e) => inputScene.cameray = parseFloat(e.target.value)}/>
                <label htmlFor="camera-z">z</label><input type="number" id='camera-z' defaultValue={-1} onChange={(e) => inputScene.cameraz = parseFloat(e.target.value)}/>
            </label>
            <label className={style.title}>Plano:
                <label htmlFor="largura">largura</label><input type="number" id="largura" defaultValue={1} onChange={(e) => inputScene.planeWidth = parseFloat(e.target.value)}/>
                <label htmlFor="altura">altura</label><input type="number" id="altura" defaultValue={0.66} onChange={(e) => inputScene.planeHeight = parseFloat(e.target.value)}/>
            </label>
            <label className={style.title} htmlFor='intensidade'>Intensidade da Luz Ambiente:
                <input type="number" id="intensidade" defaultValue={0.5} onChange={(e) => inputScene.ALI = parseFloat(e.target.value)}/>
            </label>
            <button type="button" onClick={addSphere}>Adicionar esfera</button>
            {inputScene.spheres.map((sphere, i) => {
                return(
                    <label  key={"sphere"+i} className={style.title}>Esfera{i}:
                        <label className={style.title}>posição:
                            <label htmlFor={`esfera${i}x`}>x</label><input type="number" id={`esfera${i}x`} defaultValue={0} onChange={(e) => sphere.x = parseFloat(e.target.value)}/>
                            <label htmlFor={`esfera${i}y`}>y</label><input type="number" id={`esfera${i}y`} defaultValue={0} onChange={(e) => sphere.y = parseFloat(e.target.value)}/>
                            <label htmlFor={`esfera${i}z`}>z</label><input type="number" id={`esfera${i}z`} defaultValue={0} onChange={(e) => sphere.z = parseFloat(e.target.value)}/>
                        </label>
                        <label>raio<input type="number" id={`esfera${i}radius`} defaultValue={1} onChange={(e) => sphere.radius = parseFloat(e.target.value)}/></label>
                        <label className={style.title}>cor:
                            <label htmlFor={`esfera${i}r`}>vermelho</label><input type="number" id={`esfera${i}r`} defaultValue={255} onChange={(e) => sphere.red = parseFloat(e.target.value)}/>
                            <label htmlFor={`esfera${i}g`}>verde</label><input type="number" id={`esfera${i}g`} defaultValue={255} onChange={(e) => sphere.green = parseFloat(e.target.value)}/>
                            <label htmlFor={`esfera${i}b`}>azul</label><input type="number" id={`esfera${i}b`} defaultValue={255} onChange={(e) => sphere.blue = parseFloat(e.target.value)}/>
                        </label>
                    </label>
                );
            })}
            
            <button type="button" onClick={addLight}>Adicionar luz</button>
            {inputScene.lights.map((light, i) => {
                return(
                    <label key={"light"+i} className={style.title}>Luz{i}:
                        <label className={style.title}>posição:
                            <label htmlFor={`luz${i}x`}>x</label><input type="number" id={`luz${i}x`} defaultValue={0} onChange={(e) => light.x = parseFloat(e.target.value)}/>
                            <label htmlFor={`luz${i}y`}>y</label><input type="number" id={`luz${i}y`} defaultValue={0} onChange={(e) => light.y = parseFloat(e.target.value)}/>
                            <label htmlFor={`luz${i}z`}>z</label><input type="number" id={`luz${i}z`} defaultValue={0} onChange={(e) => light.z = parseFloat(e.target.value)}/>
                        </label>
                        <label className={style.title} htmlFor={`luz${i}diffuse`}>Intensidade difusa</label><input type="number" id={`luz${i}diffuse`} defaultValue={0.5} onChange={(e) => light.diffuse = parseFloat(e.target.value)}/>
                        <label className={style.title} htmlFor={`luz${i}specular`}>Intensidade specular</label><input type="number" id={`luz${i}specular`} defaultValue={0.1} onChange={(e) => light.specular = parseFloat(e.target.value)}/>
                    </label>
                );
            })}
        </div>
        <div id={style.render}>
            <p>{message}</p>
            <img src={imgURL} id={style.renderIMG} alt="Imagem renderizada" />
        </div>
        <div id={style.aboutRender}>

        </div>
        <div id={style.shaderInputs}>

        </div>
    </div>
}

export default Renderer;