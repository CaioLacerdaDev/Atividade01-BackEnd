import { Router } from "express"
const filmesRoutes = Router();

let filmesMarcantes = [
    {
    id:Number(Math.floor(Math.random()*100)+ 1),
    title:"Carandiru",
    genero:"Açao",
    emCartaz: false,
    },
    {
    id:Number(Math.floor(Math.random()*100)+ 1),
    title:"Bilbil e o seu braçal",
    genero:"Açao",
    emCartaz: false,
    },
    {
    id:Number(Math.floor(Math.random()*100)+ 1),
    title:"O mascara",
    genero:"Comédia",
    emCartaz: true,
    }
]


filmesRoutes.get("/", (req, res) => {
    return res.status(200).send(filmesMarcantes);
    });
        c
filmesRoutes.post("/", (req, res) => {
const { titulo, genero, emCartaz } = req.body;
        
const novoFilme = {
    id: Number(Math.floor(Math.random()*100)+ 1),
    titulo,
    genero,
    emCartaz,
    };
        
filmesMarcantes.push(novoFilme);
    return res.status(201).send(filmesMarcantes);
});

filmesRoutes.get("/:id",(req, res) => {
    const { id } = req.params
    const filme = filmesMarcantes.find ((movie) => movie.id === Number(id))

    if (!filme) {
        return res.status(404).send({message: "Filme nao encontrado"})
    }

    return res.status(200).send(filme)
})


filmesRoutes.put("/:id",(req,res) => {
    const {id} = req.params

    const filme = filmesMarcantes.find ((movie) => movie.id === Number(id))
    if (!filme) {
        return res.status(404).send({message: "Filme nao encontrado"})
    }

    const {titulo, genero, emCartaz} = req.body

    filme.titulo = titulo;
    filme.genero = genero;
    filme.emCartaz = emCartaz;

    return res.status (200).send({
        message:"filme Atualizado",
        filme,
    })
})

filmesRoutes.delete ("/:id", (req,res) => {
    const {id} = req.params
    const filme = filmesMarcantes.find ((movie) => movie.id === Number(id))
    if (!filme) {
        return res.status(404).send({message: "Filme nao encontrado"})
    }
    filmesMarcantes = filmesMarcantes.filter((movie) => movie.id !==Number(id))
    return res.status (200).send({
        message:"Filme Deletado",
        filme,
    })
})

export default filmesRoutes 