import { createServer } from 'http';

const server = createServer( (request, response) =>{
    switch(request.url){
        case '/status':{
            response.writeHead(200, {
                'Content-Type' : 'application/json'
            });
            response.write(JSON.stringify({
                status: 'okay'
            })
            );
            response.end();
            break;
        }

    }
} );

server.listen(8000, '127.0.0.1', () => {
    console.log('Server is listenig as http://127.0.0.1:8000');
});