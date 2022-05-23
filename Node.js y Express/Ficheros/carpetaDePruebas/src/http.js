import http from 'http'
import fs from 'fs'

const file = './src/index.html'

const server = http.createServer((request, response) => {
//   response.write('<h1>Curso NodeJS de OpenWebinars!</h1>')
//   response.end()
response.writeHead(200, {'Content-Type': 'text/html: charset:UTF-8'
    })

    fs.readFile(file,(err, content)=>{
        if (err){
            return console.log(err)
        }

        response.write(content)
        response.end()
    })
})

server.listen(8000, 'localhost', err => {
  if (err) {
    return console.log('Error: ', err)
  }

  console.log('Server opened listen on http://localhost:8000')
})