import { Elysia } from 'elysia'

const app = new Elysia()

app.get('/', () => {
  return {
    status: 'ok',
    message: 'Blender SERVER is alive 🚀'
  }
})

app.listen(3000)

console.log('SERVER running on http://localhost:3000')