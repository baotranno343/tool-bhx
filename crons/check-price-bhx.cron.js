var cron = require("node-cron");
const CheckPriceBHX = require("../services/check-price-bhx.service");

const cronCheckPriceBHX = cron.schedule(
  "* * * * *",
  () => {
    CheckPriceBHX();
  },
  {
    scheduled: true,
    timeZone: "Asia/Ho_Chi_Minh",
  }
);
module.exports = cronCheckPriceBHX;
