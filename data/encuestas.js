// To Do:  usar MongoDB

var encuestas = [{lenguajeBase : 'C#', lenguajeInteres : 'nodeJS', profesion : 'Programador'}];

exports.selectAll = function(){
    return encuestas;
}


exports.insert = function(encuesta){
    encuestas.push(encuesta);
}