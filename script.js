

/* Fetching Data from Move list API */

fetch('http://starlord.hackerearth.com/movieslisting').then(response => {
    response.json().then(json => {
        let movieData = json;
        var html = "<div class='movie-list-blocks clearfix'>";
        for (let i = 0; i < movieData.length; i++) {
            html += "<div class='movie-list-block'>";
            html += "<div class='movie-block_title'>" + movieData[i].movie_title + "</div>";
            html += "<div id='poster" + i + "'></div>";
            html += "<div id='director' class='director'><label>Director: </label><span class='director-name'>" + movieData[i].director_name + "</span></div>";
            html += "<div id='content' class='content'><label>Content</label>" + movieData[i].content_rating + "</div>";
            html += "<div id='year'><span class='year'>"+ movieData[i].title_year +"</span></div>";
            html += "<div id='imdb'><a href='" + movieData[i].movie_imdb_link + "'><img class='imdb-icon' src='https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg' /></a></div>";

            /* Fetching data for posters from IMDB */

            fetch('http://www.omdbapi.com/?t=' + movieData[i].movie_title + '&apikey=d4f89592').then(response => {
                response.json().then(json => {
                    let posterUrl = json;
                    var b = "poster" + i;
                    var poster = "<div class='movie-block-image'>";
                    poster += "<img class='movie-block-image_img'src=" + posterUrl.Poster + " />";
                    poster += "</div>";

                    document.getElementById(b).innerHTML = poster;

                });

            });


            html += "</div>"

        }
        html += "</div>";
        document.getElementById("moviesBlockWrap").innerHTML = html;
        console.log("If the imdb api doesnt have an image for a movie, it will through an error(below) - But a default image indicating 'no thumbnail avialable' will be displayed in page(view)");
    });
});

function movieSearch() {
    var input, filter, moviesList, movieItem, titleRow, i;
    input = document.getElementById("movieSearchInput");
    filter = input.value.toUpperCase();
    moviesList = document.getElementById("moviesBlockWrap");
    movieItem = moviesList.getElementsByClassName("movie-list-block");
    for (i = 0; i < movieItem.length; i++) {
        titleRow = movieItem[i].getElementsByClassName("movie-block_title")[0];
        if (titleRow) {
            if (titleRow.innerHTML.toUpperCase().indexOf(filter) > -1) {
                movieItem[i].style.display = "";
            } else {
                movieItem[i].style.display = "none";
            }
        }
    }
}


function underConstruction(){
    var modal = document.getElementById("underConstruction");
    if (modal.style.display === "none") {
        modal.style.display = "block";
        setTimeout(function () {modal.style.display='none'}, 6000);
    } else {
        modal.style.display = "none";
    }
}





/*
html += "<td>" + movieData[i].movie_title + "</td>";
html += "<td>" + movieData[i].director_name + "</td>";
html += "<td>" + movieData[i].actor_1_name + "</td>";
html += "<td>" + movieData[i].actor_2_name + "</td>";
html += "<td>" + movieData[i].genres + "</td>";
html += "<td>" + movieData[i].country + "</td>";
html += "<td>" + movieData[i].content_rating + "</td>";
html += "<td>" + movieData[i].budget + "</td>";
html += "<td>" + movieData[i].email + "</td>";
html += "<td>" + movieData[i].title_year + "</td>";
html += "<td>" + movieData[i].plot_keywords + "</td>";
html += "<td>" + movieData[i].movie_imdb_link + "</td>";
*/

