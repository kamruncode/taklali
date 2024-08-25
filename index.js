import express from "express"
import mysql from 'mysql2'
import cors from 'cors'


const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12174920Kt",
    database: "new_project"
})

app.use(express.json())

app.use(cors());

app.get("/", (req, res)=>{
res.json("hello world")
})

app.get("/articles", (req, res)=>{
const q = "SELECT * FROM articles"
db.query(q, (err,data)=>{
    if(err) return res.json(err)
        return res.json(data)
})
    })

    app.post("/articles", (req, res)=>{
        const q = "INSERT INTO articles (`title`, `desc`, `cover`) VALUES (?)"
        const values = [req.body.title, req.body.desc, req.body.cover]
        db.query(q,[values], (err,data)=>{
            if(err) return res.json(err)
                return res.json("data is success")
        })
            })

            

app.listen(8800, ()=>{
    console.log("connected to backend")
})