import express from 'express';
import datas from '../datas';

let router = express.Router();

// const datas = {
// 		title: 'George Express',
// 		content: 'Some random content from me'
// };


/* GET home page. */
router.get('/', (req, res, next) => 
  res.render('index', datas)
);

module.exports = router;
