var cron = require("node-cron");
const CheckPriceBHX = require("../services/check-price-bhx.service");

const task = cron.schedule(
  "* * * * *",
  () => {
    console.log(1);
    CheckPriceBHX();
  },
  {
    scheduled: true,
    timeZone: "Asia/Ho_Chi_Minh",
  }
);
module.exports = task;
