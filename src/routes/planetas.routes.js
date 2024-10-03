import { Router } from "express"
const planetasRoutes = Router();

let planetas = [
    {
    id:Number(Math.floor(Math.random()*1000000)+ 1),
    nome:"Carandiru",
    temperatura: 13.9,
    agua: false, // Indicaçao de existencia de agua
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
const { nome, temperatura, agua, atm } = req.body;

if(!nome || !temperatura || !agua){
    return res.status(400).send({message: "campos obrigatórios nao informados"})
    }
if(agua != "sim" && agua != "nao"){
    return res.status(400).send({message: "campo agua deve ser sim ou nao"})
}
        
const novoPlaneta = {
    id: Number(Math.floor(Math.random()*1000000)+ 1),
    nome,
    temperatura,
    agua,
    atm
    } 
    
        
planetas.push(novoPlaneta);
    return res.status(201).send({
        message:"planeta criado",
        novoPlaneta});
    })

planetasRoutes.get("/:id",(req, res) => {
    const { id } = req.params
    const planeta = planetas.find ((planet) => planet.id === Number(id))

    if (!planeta) {
        return res.status(404).send({message: "planeta nao encontrado"})
    }

    return res.status(200).send(planeta)
})


planetasRoutes.put("/:id",(req,res) => {
    const {id} = req.params

    const planeta = planetas.find ((planet) => planet.id === Number(id))
    if (!planeta) {
        return res.status(404).send({message: "planeta nao encontrado"})
    }

    const {nome, temperatura, agua, atm} = req.body

    planeta.nome = nome
    planeta.temperatura = temperatura
    planeta.agua = agua
    planeta.atm = atm

    return res.status (200).send({
        message:"planeta Atualizado",
        planeta,
    })
})

planetasRoutes.delete ("/:id", (req,res) => {
    const {id} = req.params
    const planeta = planetas.find ((planet) => planet.id === Number(id))
    if (!planeta) {
        return res.status(404).send({message: "planeta nao encontrado"})
    }
    planetas = planetas.filter((planet) => planet.id !==Number(id))
    return res.status (200).send({
        message:"planeta Deletado",
        planeta,
    })
})

export default planetasRoutes 