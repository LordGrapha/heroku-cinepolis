import * as express from 'express';
import MovieController from '../controllers/moviecontroller';

const app = express.Router();

app.get("/list", (req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');           
    MovieController.getInstance().listMovies()
        .then((data) => {       
            //data.rows brings the dataset array with all objects inside.   
            res.json(data.rows);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});

app.get("/:movieTitle", (req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    MovieController.getInstance().getMovie(req.params["movieTitle"])
        .then((data) => {       
            res.json(data.rows[0]);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});

app.get("/tandas/:movieTitle", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    MovieController.getInstance().getTandas(req.params["movieTitle"])
        .then((data) => {       
            //data.rows brings the dataset array with all objects inside.   
            res.json(data.rows);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});

app.get("/tanda/:chart_id", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    MovieController.getInstance().getTanda(req.params["chart_id"])
        .then((data) => {       
            //data.rows brings the dataset array with all objects inside.   
            res.json(data.rows[0]);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});

app.get("/asientos/:sala_name/:movie_name/:start_time", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    MovieController.getInstance().getSeats(req.params)
        .then((data) => {       
            //data.rows brings the dataset array with all objects inside.   
            res.json(data.rows);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});

app.put("/reservacion", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    MovieController.getInstance().createReservation(req.body)
        .then((data) => {       
            //data.rows brings the dataset array with all objects inside.   
            res.json(data.rows);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});


//
app.put("/reservarAsiento", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    MovieController.getInstance().reserveSeat(req.body)
        .then((data) => {       
            //data.rows brings the dataset array with all objects inside.   
            res.json(data.rows);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});

app.put("/reservarComida", (req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    MovieController.getInstance().reserveFood(req.body)
        .then((data) => {       
            //data.rows brings the dataset array with all objects inside.   
            res.json(data.rows);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});

app.put("/addChart", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    MovieController.getInstance().addChart(req.body)
        .then((data) => {       
            //data.rows brings the dataset array with all objects inside.   
            res.json(data.rows);
        })
        .catch((err) => {
            res.json(err)
            return "";
        });
});

app.put("/delete", (req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');         
  MovieController.getInstance().delete(req.body)
      .then((data) => {       
          //data.rows brings the dataset array with all objects inside.   
          res.json(data.rows);
      })
      .catch((err) => {
          res.json(err)
          return "";
      });
});


app.put("/add", (req, res, next) => {   
    res.header('Access-Control-Allow-Origin', '*');       
  MovieController.getInstance().add(req.body)
      .then((data) => {       
          //data.rows brings the dataset array with all objects inside.   
          res.json(data.rows);
      })
      .catch((err) => {
          res.json(err)
          return "";
      });
});


app.put("/update/:movie_id", (req, res, next) => {    
    res.header('Access-Control-Allow-Origin', '*');      
  MovieController.getInstance().update(req.params.movie_id, req.body)
      .then((data) => {       
          //data.rows brings the dataset array with all objects inside.   
          res.json(data.rows);
      })
      .catch((err) => {
          res.json(err)
          return "";
      });
});

app.put("/visible", (req, res, next) => {          
    res.header('Access-Control-Allow-Origin', '*');
  MovieController.getInstance().visible(req.body)
      .then((data) => {       
          //data.rows brings the dataset array with all objects inside.   
          res.json(data.rows);
      })
      .catch((err) => {
          res.json(err)
          return "";
      });
});

app.get("/chart/:sala_id/:starttime", (req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
  MovieController.getInstance().isAvailable(req.params.sala_id, req.params.starttime)
      .then((data) => {       
          //data.rows brings the dataset array with all objects inside.   
          res.json(data.rows);
      })
      .catch((err) => {
          res.json(err)
          return "";
      });
});

export { app as movierouter }