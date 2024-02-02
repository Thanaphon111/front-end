import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { DisplayBoard } from "./components/DisplayBoard";
//----------------
import { Movies } from "./components/Movies";
import CreateMovie from "./components/CreateMovie";
import { getAllMovies, createMovie } from "./services/MovieService";

function App() {
  /*
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [numberOfUsers, setNumberOfUsers] = useState(0)
*/
  //--------------
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);
  const [numberOfMovies, setNumberOfMovies] = useState(0);

  /*
  const userCreate = (e) => {

      createUser(user)
        .then(response => {
          console.log(response);
          setNumberOfUsers(numberOfUsers+1)
      });
  }
*/
  const movieCreate = (e) => {
    createMovie(movie).then((response) => {
      console.log(response);
      setNumberOfMovies(numberOfMovies + 1);
    });
  };

  /*
  const fetchAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        setUsers(users);
        setNumberOfUsers(users.length)
      });
  }
*/
  const fetchAllMovies = () => {
    getAllMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
      setNumberOfMovies(movies.length);
    });
  };

  useEffect(() => {
    /*
      getAllUsers()
      .then(users => {
         console.log(users)
        setUsers(users);
         setNumberOfUsers(users.length)
      });
*/
    getAllMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
      setNumberOfMovies(movies.length);
    });
  }, []);

  /*
  const onChangeForm = (e) => {
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      setUser(user)
  }
  */


  const onChangeForm = (e) => {
    if (e.target.name === "title") {
      movie.title = e.target.value;
    } else if (e.target.name === "genre") {
      movie.genre = e.target.value;
    } else if (e.target.name === "director") {
      movie.director = e.target.value;
    } else if (e.target.name === "release_year") {
      movie.release_year = e.target.value;
    }
    setMovie(movie);
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container mrgnbtm">
        <div className="row">
          {/* <div className="col-md-8">
                  <CreateUser 
                    user={user}
                    onChangeForm={onChangeForm}
                    createUser={userCreate}
                    >
                  </CreateUser>
    </div> */}
          <div className="col-md-8">
            <CreateMovie
              movie={movie}
              onChangeForm={onChangeForm}
              createMovie={movieCreate}
            ></CreateMovie>
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfMovies={numberOfMovies}
              getAllMovies={fetchAllMovies}
            ></DisplayBoard>
          </div>
        </div>{" "}
        {/* <div className="row mrgnbtm">
            <Users users={users}></Users>
          </div>  */}
        <div className="row mrgnbtm">
          <Movies movies={movies}></Movies>
        </div>
      </div>
    </div>
  );
}

export default App;