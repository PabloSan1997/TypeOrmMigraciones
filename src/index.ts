import { Producto } from "./Entities/Producto";
import { AppDataSource } from "./config/config";


(async ()=>{
    await AppDataSource.initialize();
    console.log("Conectado a la base de datos");
    const repositorio = AppDataSource.getRepository(Producto);
    const ver = repositorio.create({
        name:'Hola'
    });
    await repositorio.save(ver);
})();