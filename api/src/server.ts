import express from 'express'
const app = express()

app.get('/', (request, response) => {
  return response.json({ message: "chama lafera adh" })
})

app.listen(3333, () => console.log('server running...🚀'))


