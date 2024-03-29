const express = require("express")
const {open} = require("sqlite")
const sqlite3 = require("sqlite3")
const path = require("path")

const databasePath = Path.join(__dirname, 'moviesData.db')
const app = express()
app.use(express.json())

let database = null
const initializeDbAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database,
        });
        app.listen(3000, () => {
            console.log("Server Running at http://localhost:3000/");
        });

    }catch(e) {
        console.log(`DB Error: $(e.message}`);
        process(exit1);
    }
};
initializeDbAndServer();
const convertMovieNametoPascalCase = (dbObject) => {
    return { 
        movieNmae: dbObject.movie_name,

};


app.get("/movies/:movieID/", async(request,response)) => {
    const movieDetails = request.body;
    const { directorId, movieNmae, leadActor} = movieDetails;
    INSERT INTO 
    movie (director_id, movie_name, lead_actor)
    VALUES 
    (
        ${directorId},
       `${movieName}`,
       `${leadActor}`);`;

       const dbResponse = await db.run(addMovieQuery);
       response.send("Movie Successfully Added");
       


    )};
    const ConvertDbObjectToResponseObject = (dbObject) => {
        return {
            movieId:dbObject.movie_id,
            directorId:dbObject.director_id,
            movieName: dbObject.movie_name,
            leadActor:dbObject.lead_actor,

        };
    };


app.get("/movies/:movieId/",async (request, response) => {
    const {movieId} = request.params;
    const getNovieQuery = `
    SELECT *
    FROM 
    movie
    WHERE 
    movie_id = ${movieId};`;
    const movie = await db.get(getMovieQuery);
    console.log(movieId);
    response.send(convertDbObjectToResponseObject(movie));

});

app.put("/movies/:moviesId/", async (request,response) => {
    const {movieId} = request.params;
    const movieDetails = request.body;
    const {directorId, movieName, leadActor }= movieDetails;
    const updateMovieQuery = `
    UPDATE 
    movie 
    SET 
    director_id=${directorId},
    movie_name=`${movieName}`,
    lead_actor=`${leadActor}`
    WHERE 
    movie_id = ${movie_id};`;
    await db.run(updateMovieQuery);
    response.send("Movie Details Updated");
    `
});


app.delete("/movies/:moviesId/",async(request,response) => {
    const {movieId} = request.params;
    const deleteMovieQuery = `
    DELETE FROM 
    movie 
    WHERE 
    movie_id = ${movieID};`;
    await db.run(deleteMovieQuery);
    response.send("Movie Removed");

});

const convertDirectorDetailsPascalCase = (dbObject) => {
    return {
        directorID: dbObject.director_id,
        directorNamae: dbObject.director_name;

    };
};


app.get("/directors/",async(request,response) => {
    const getAllDirectorQuery = `
    SELECT * 
    FROM 
    director ;`;
    const moviesArray = await db.all(getAllDirectorQuery);
    response.send(
        moviesArray.map(director) => convertDirectorDetailsPascalCase(director))

    );

});
 const convertMovieNamePascalCase = (dbObject) => {
    return {
        movieName: dbObject.movie_name,

    };
 };


 app.get("/directors/:directorId/movies/", async(request,response) = > {
    const {directorId} = request.params;
    const getDirectorMovieQuery = `
    SELECT 
    movie_name 
    FROM 
    director INNER JOIN movie 
    ON director.director_id = movie.director_id
    WHERE 
    director.director_id = ${directorId};`;
    const movies = await db.all(getDirectorMovieQuery);
    console.log(directorId);
    response.send(
        movies.map((movienames) => convertMovieNamePascalCase(movienames) )
    );
    

 });
 module.exports = app;

