//console.log("Hey Hariom");

let omdb_submit = document.getElementById("omdb_submit");
let output = document.getElementById("output");
var pretty= document.getElementById("pretty");
let loop= document.getElementById("loop");


function getData(){
    let title= document.getElementById("title").value;
    let year= document.getElementById("year").value;
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=4cc9b2da&t="+title+"&y="+year;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        if(data.Response == "False") {
            // Output error message into output container
            output.innerHTML=  `<br><br><br><h1>Movie Not Found</h1>`;
        } 
        else {
        output.innerHTML=` <br><br>
        <h1 id="title" style="display: inline;">${data.Title}</h1>
        <br><br><br><hr><br>
        <dl class="row">

            <dt class="col-sm-3">Released in :</dt>
            <dd class="col-sm-9">${data.Year}</dd>

            <dt class="col-sm-3">Official Poster :</dt>
            <dd class="col-sm-9">
            <img src="${data.Poster}"  class="img-fluid" id="Poster">
            </dd>

            <dt class="col-sm-3">Rated :</dt>
            <dd class="col-sm-9">${data.Rated}</dd>

            <dt class="col-sm-3 text-truncate">Released Date :</dt>
            <dd class="col-sm-9">${data.Released}</dd>

            <dt class="col-sm-3">Runtime :</dt>
            <dd class="col-sm-9"> ${data.Runtime}  </dd>

            <dt class="col-sm-3">Actors :</dt>
            <dd class="col-sm-9"> ${data.Actors}  </dd>

            <dt class="col-sm-3">Awards :</dt>
            <dd class="col-sm-9"> ${data.Awards}  </dd>
          
            <dt class="col-sm-3">Box Office Collection :</dt>
            <dd class="col-sm-9"> ${data.BoxOffice}  </dd>

            <dt class="col-sm-3">Country :</dt>
            <dd class="col-sm-9"> ${data.Country}  </dd>

            <dt class="col-sm-3">Director :</dt>
            <dd class="col-sm-9"> ${data.Director}  </dd>

            <dt class="col-sm-3">Genre :</dt>
            <dd class="col-sm-9"> ${data.Genre}  </dd>

            <dt class="col-sm-3">Language :</dt>
            <dd class="col-sm-9"> ${data.Language}  </dd>

            <dt class="col-sm-3">Metascore :</dt>
            <dd class="col-sm-9"> ${data.Metascore}  </dd>

            <dt class="col-sm-3">Plot :</dt>
            <dd class="col-sm-9"> ${data.Plot}  </dd>

            

            <dt class="col-sm-3">Type :</dt>
            <dd class="col-sm-9"> ${data.Type}  </dd>

            <dt class="col-sm-3">Writer :</dt>
            <dd class="col-sm-9"> ${data.Writer}  </dd>

            <dt class="col-sm-3">IMDB Rating :</dt>
            <dd class="col-sm-9"> ${data.imdbRating}  </dd>

            <dt class="col-sm-3">IMDB Votes :</dt>
            <dd class="col-sm-9"> ${data.imdbVotes}  </dd>

            <dt class="col-sm-3">IMDB ID :</dt>
            <dd class="col-sm-9"> ${data.imdbID}  </dd>
        </dl>`;
        

        pretty.innerHTML= `<h1> ${data.Title} </h1>`;
        };
               
    })
};
