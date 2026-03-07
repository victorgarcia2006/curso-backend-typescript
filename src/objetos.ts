import axios from "axios";

abstract class ApiService {
    protected baseUrl: string; //Protected para polimorfismo

    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }

    abstract obtenerDatos(): Promise<any>; //Abstract para que las clases hijas lo implementen (Polimorfismo)
}

//Herencia
class UserService extends ApiService {
    constructor(){
        super("https://jsonplaceholder.typicode.com/users");
    }

    //Polimorfismo
    async obtenerDatos(): Promise<any>{
        const response = await axios.get(this.baseUrl); //Asíncrono
        return response.data;
    }
}

//Herencia
class PostService extends ApiService {
    constructor(){
        super("https://jsonplaceholder.typicode.com/posts");
    }

    async obtenerDatos(): Promise<any>{
        const response = await axios.get(this.baseUrl);
        return response.data;
    }
}

async function mostrarDatos(servicio: ApiService){
    const datos = await servicio.obtenerDatos();
    
    console.log("Datos obtenidos: ");
    console.log(datos.slice(0, 5));
}

//Programa principal

async function main(){
    const userService = new UserService(); //Instancia de la clase UserService
    const postService = new PostService(); //Instancia de la clase PostService

    await mostrarDatos(userService);
    await mostrarDatos(postService);
}

main();