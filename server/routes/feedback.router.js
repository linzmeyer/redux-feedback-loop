const express = require( 'express' );
const router = express.Router();
const pool = require( '../modules/pool' );

//router.get('/', ( req, res ) => {
//    console.log('GET /api/pizza');
//    pool.query('SELECT * from "pizza";').then((result) => {
//        res.send(result.rows);
//    }).catch((error) => {
//        console.log('Error GET /api/pizza', error)
//        res.sendStatus(500);
//    });
//})

// POST
// Add a review to the database
router.post('/', (req, res) => {
  let feedback = req.body;
  console.log( 'Adding feedback', feedback );
	let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
  pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then( (response) => {
      res.sendStatus(201);
    })
    .catch( (error) => {
      console.log('Failed to insert new feedback', feedback);
      console.log(error);
      res.sendStatus(500);
    });
});


module.exports = router;
