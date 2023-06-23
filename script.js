function agregar_comentario() {
    var comentario = document.getElementById("comentario").value;
    var comentario_1 = "<p>" + comentario + "</p>";
    document.getElementById("comentarios").innerHTML += comentario_1;
    document.getElementById("comentario").value = "";
  }
  