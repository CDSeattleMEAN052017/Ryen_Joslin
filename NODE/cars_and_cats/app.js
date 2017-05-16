var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(request, response){
    console.log(request.url);

    var splitURL = request.url.split('/'),
        firstChunk = splitURL[1];
    //images
    switch (firstChunk) {
        case "styles":
            serveCSS(splitURL[2], response);
            break;
        case "images":
            serveJPG(splitURL[2], response);
            break;
        default:
            switch (splitURL[1]) {
                case "cars":
                    serveHTML("cars.html", response);
                    break;
                case "cars/new":
                    serveHTML("new.html", response);
                    break;
                case "cats":
                    serveHTML("cats.html", response);
                    break;
                default:
                    serve404(response);
        }
    }
    //html
    //css
});

function serveHTML(filename, response){

    fs.readFile(`views/${filename}`, 'utf8', function(error, contents){

        if (error) { console.log(error); }

        response.writeHead(200, {'Content-type' : 'text/html' });
        response.write(contents);
        response.end();
    });
}

function serveCSS(filename, response){

    fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents){

        if (error) { console.log(error); }

        response.writeHead(200, {'Content-type' : 'text/css' });
        response.write(contents);
        response.end();
    });
}

function serveJPG(filename, response){
    fs.readFile(`images/${filename}`, function(error, contents){

        if (error) { console.log(error); }

        response.writeHead(200, {'Content-type' : 'text/jpg' });
        response.write(contents);
        response.end();
    });
}

function serve404(response) {

}

server.listen(7077);
console.log("Running on 7077");
