const autocannon = require('autocannon')


autocannon({
    url: "4.4.8.8:80/rota",
    connections: 10,
    pipelining: 1,
    workers: 1,
    duration: 60,
    requests: [{
        method: 'POST', 
        headers: { 
            'Authorization': 'Bearer aqui token', 
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            "teste": "1"
        })
    },
    {
        method: 'POST', 
        headers: { 
            'Content-type': 'application/json; charset=utf-8'
        }        
    }]
}, console.log);



