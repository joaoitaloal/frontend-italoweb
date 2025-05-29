import { SceneInfo } from "./classes";

export function getConfig(data: object | string, method = 'post', url = '/diary/messages'){
    return {
      method: method,
      maxBodyLength: 5000,
      url: url,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    }
}

export function formatSceneJSON(s: SceneInfo){
    let string = {
        "camera": `${s.camerax}, ${s.cameray}, ${s.cameraz}`,
        "plane": `${s.planeWidth}, ${s.planeHeight}`,
        "ambient_light_intensity": `${s.ALI}`,
        "objects": (s.spheres.map((sphere, i) =>{
            return(
                `"sphere${i}":{
                    "position": "${sphere.x}, ${sphere.y}, ${sphere.z}",
                    "radius": "${sphere.radius}",
                    "color_rgb": "${sphere.red}, ${sphere.green}, ${sphere.blue}",
                    "material":{
                        "ambient": "${sphere.material.ambient}",
                        "diffuse": "${sphere.material.diffuse}",
                        "specular": "${sphere.material.specular}",
                        "reflectivity": "${sphere.material.reflectivity}",
                        "albedo": "${sphere.material.albedo}"
                    }
                }`
            )
        })),
        "lights": (s.lights.map((light, i) =>{
            return(
                `"light${i}":{
                    "position": "${light.x}, ${light.y}, ${light.z}",
                    "diffuse": "${light.diffuse}",
                    "specular": "${light.specular}"
                }`
            )
        }))
    }
    
    return JSON.stringify(string)
    .replace(/\["/g, '{')
    .replace(/\]/g, '}')
    .replace(/\\n/g, '')
    .replace(/\\/g, '')
    .replace(/}\s*"/g, '}')
    .replace(/\"\"/g, '"');
}