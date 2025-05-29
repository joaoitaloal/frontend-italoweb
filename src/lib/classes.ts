export class Material{
    ambient: number;
    diffuse: number;
    specular: number;
    reflectivity: number;
    albedo: number;

    constructor(ambient = 0.4, diffuse = 0.4, specular = 0.1, reflectivity = 1, albedo = 1){
        this.ambient = ambient;
        this.diffuse = diffuse;
        this.specular = specular;
        this.reflectivity = reflectivity;
        this.albedo = albedo;
    }
}

export class Sphere{
    x: number;
    y: number;
    z: number;
    radius: number;
    red: number;
    green: number;
    blue: number;
    material: Material;

    constructor(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, material: Material){
        this.x = x;
        this.y = y;
        this.z = z;
        this.radius = radius;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.material = material;
    }
}

export class Light{
    x: number;
    y: number;
    z: number;
    diffuse: number;
    specular: number;

    constructor(x: number, y: number, z: number, diffuse: number, specular: number){
        this.x = x;
        this.y = y;
        this.z = z;
        this.diffuse = diffuse;
        this.specular = specular;
    }
}

export class SceneInfo{
    camerax: number;
    cameray: number;
    cameraz: number;
    planeWidth: number;
    planeHeight: number;
    ALI: number;
    spheres: Array<Sphere>;
    lights: Array<Light>;

    constructor(camerax: number, cameray: number, cameraz: number, planeWidth: number, planeHeight: number, ALI: number, spheres: Array<Sphere>, lights: Array<Light>){
        this.camerax = camerax;
        this.cameray = cameray;
        this.cameraz = cameraz;
        this.planeWidth = planeWidth;
        this.planeHeight = planeHeight;
        this.ALI = ALI;
        this.spheres = spheres;
        this.lights = lights;
    }
}