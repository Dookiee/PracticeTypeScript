
class Movie{
    title:string
    studio:string
    rating:string

    constructor(_title:string, _studio:string, _rating:string="PG"){
         this.title = _title
         this.studio = _studio
         this.rating = _rating
    }
    getPG(ip_array: Movie[]):Movie[]{
        return ip_array.filter((ele) => ele.rating == "PG")
    }
}


var obj = new Movie("TITLE_1", "STUDIO_1", "RATING_1")
var obj1 = new Movie("TITLE_2", "STUDIO_2")
console.log(new Movie("TITLE_3", "STUDIO_3", "RATING_3").getPG([obj,obj1]))
var last_line = new Movie("Casino Royale", "Eon Productions", "PG­13")