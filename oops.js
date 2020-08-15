var Movie = /** @class */ (function () {
    function Movie(_title, _studio, _rating) {
        if (_rating === void 0) { _rating = "PG"; }
        this.title = _title;
        this.studio = _studio;
        this.rating = _rating;
    }
    Movie.prototype.getPG = function (ip_array) {
        return ip_array.filter(function (ele) { return ele.rating == "PG"; });
    };
    return Movie;
}());
var obj = new Movie("TITLE_1", "STUDIO_1", "RATING_1");
var obj1 = new Movie("TITLE_2", "STUDIO_2");
console.log(new Movie("TITLE_3", "STUDIO_3", "RATING_3").getPG([obj, obj1]));
var last_line = new Movie("Casino Royale", "Eon Productions", "PG­13");
