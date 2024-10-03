import { Router } from "express"
const planetasRoutes = Router();

let planetas = [
    {
    id:Number(Math.floor(Math.random()*1000000)+ 1),
    nome:"Carandiru",
    temperatura: 13.9,
    agua: false, // Indicaçao de existencia de agua]
    atm: [
        "JS",
        "node",
        "code",
    ]
    },
    {
    id:Number(Math.floor(Math.random()*100)+ 1),
    nome:"Bilbil e o seu braçal",
    temperatura: 13,
    agua: false,
    atm: [
        "JS",
        "node",
        "codiguinho"]
    },
    {
    id:Number(Math.floor(Math.random()*100)+ 1),
    nome:"cadu",
    temperatura:13.4,
    agua: true,
    atm: [
        "pesca",
        "souzas🐵",
        "free fire"]
    }
]


planetasRoutes.get("/", (req, res) => {
    return res.status(200).send(planetas);
    });
planetasRoutes.post("/", (req, res) => {
const { nome, temperatura, agua } = req.body;
        
const novoFilme = {
    id: Number(Math.floor(Math.random()*100)+ 1),
    nome,
    temperatura,
    agua,
    };
        
planetas.push(novoFilme);
    return res.status(201).send(planetas);
});

planetasRoutes.get("/:id",(req, res) => {
    const { id } = req.params
    const filme = planetas.find ((movie) => movie.id === Number(id))

    if (!filme) {
        return res.status(404).send({message: "Filme nao encontrado"})
    }

    return res.status(200).send(filme)
})


planetasRoutes.put("/:id",(req,res) => {
    const {id} = req.params

    const filme = planetas.find ((movie) => movie.id === Number(id))
    if (!filme) {
        return res.status(404).send({message: "Filme nao encontrado"})
    }

    const {nome, temperatura, agua} = req.body

    filme.nome = nome;
    filme.temperatura = temperatura;
    filme.agua = agua;

    return res.status (200).send({
        message:"filme Atualizado",
        filme,
    })
})

planetasRoutes.delete ("/:id", (req,res) => {
    const {id} = req.params
    const filme = planetas.find ((movie) => movie.id === Number(id))
    if (!filme) {
        return res.status(404).send({message: "Filme nao encontrado"})
    }
    planetas = planetas.filter((movie) => movie.id !==Number(id))
    return res.status (200).send({
        message:"Filme Deletado",
        filme,
    })
})

export default planetasRoutes 