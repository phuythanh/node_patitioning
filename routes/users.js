var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).send({
    name: "thanh",
  });
});

router.get("/sum", async function (rq, rs, next) {
  debugger;
  const count = (n, callback) => {
    let sum = 0;
    const help = (i, cb) => {
      sum += i;
      if (i == n) {
        cb(sum);
        return;
      }
      setImmediate(help.bind(null, i + 1, cb));
    };
    help(1, (sumValue) => {
      callback(sumValue);
    });
  };
  const total = 20_000_000;
  const start = Date.now();
  let sumValue = 0;
  count(total, (sum) => {
    // console.log(`abc`);
    const stop = Date.now();
    sumValue = sum;
    rs.status(200).send({
      msg: `Time Taken to execute = ${(stop - start) / 1000} seconds`,
      sum: sumValue,
    });
  });
  // for (let index = 0; index < total; index++) {

  // }
  // console.log(`Time Taken to execute = ${(stop - start) / 1000} seconds`);
  // rs.status(200).send({
  //   msg: `Time Taken to execute = ${(stop - start) / 1000} seconds`,
  //   sum: sumValue,
  // });
});

module.exports = router;
