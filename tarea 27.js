/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class pelicula {
    
    //variables

     GENERO1 = `Action, Adult, Adventure, Animation, Biography, Comedy,
   Crime, Documentary ,Drama, Family, Fantasy, 
   Film Noir, Game-Show, History, Horror, Musical, 
   Music, Mystery, News, Reality-TV, Romance, Sci-Fi, 
   Short, Sport, Talk-Show, Thriller, War, Western`.trim().split(',');

   //Expresiones regulares

    PATRON_IMDB = /^(\D{2})(?=\d{7})/;
    PATRON_SCORE = /^(\d+)\.(?=\d)/;

    //Constructor


    constructor(idPelicula = undefined,titulo = undefined,director = undefined,anio = undefined,paises = undefined,genero = undefined,calificacion = undefined){

        //validaciones

        if (idPelicula === undefine || titulo === undefined || director === undefined || anio === undefined || paises === undefined || genero === undefined || calificacion === undefined) return console.log("todos los campos son obligatorios");

        if (!this.PATRON_IMDB.test(idPelicula)) return console.log("tu id no es correcto");

        if (titulo.length > 100 || director.length > 50) return console.log(`Tu ${titulo || director} no son validos`);

        if (!(typeof anio === "number") || anio.length !== 4) return console.log("el año no es correcto");

        if (!paises instanceof Array) return console.log("debes introducir un array en paises");

        if (!genero.includes(this.GENERO1)) return console.log("debes tener un genero aceptado"); 

        if (!this.PATRON_SCORE.test(calificacion)) return console.log("La calificacion es incorrecta");

        //atributos

        this.idPelicula = idPelicula;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
        this.paises = paises;
        this.genero = genero;
        this.calificacion = calificacion;

    }
//Metodos de la clase

    static devuelveGenero (){
            return console.log("estos son los generos aceptados " + this.GENERO1)};

    fichaTecnica () {
      return 
      idPelicula : ${this.idPelicula};
      titulo : ${this.titulo};
      director: ${this.director};
      anio : ${this.anio};
      paises : ${this.paises};
      genero : ${this.genero};
      calificacion : ${this.calificacion};

    }

  };

    const movie = new Peliculas('AA1234567','Scarrrrrr', 'Juan fr', 1998, 'EEUU', 'Family', 4.4);
    console.log(movie.fichaTecnica());