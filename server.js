import express from 'express'
import { prisma } from './lib/prisma' // caminho relativo da pasta API para lib



const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) =>{
    
    await prisma.user.create({
        data: {
            name: req.body.name,
            age:req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res)=>{
    res.status(200).json(users)
})


app.listen(3000)


//usuario :  vitor senha: 9HoUUMw4olcfKv9m
