const { default: axios } = require("axios");

function CheckPriceBHX() {
  const config = {
    headers: {
      Authorization: `Bearer E7700DE4DB3465A86215D95914F173FC`,
      Reversehost: "http://bhxapi.live",
      Deviceid: "ca16ad22-b879-45af-bf6d-3112160d5039",
    },
    params: {
      provinceId: 3,
      wardId: 27126,
      districtId: 2087,
      CategoryUrl: "trai-cay-tuoi-ngon",
      ProductUrl: "dua-luoi-tron-ruot-cam-tui-1-trai-tu-11kg-tro-len",
    },
  };

  axios
    .get("https://apibhx.tgdd.vn/Product/GetProductDetail", config)
    .then(function (response) {
      if (!(boxBuys = response.data.data.boxBuys)) {
        console.log("error");
      }
      boxBuys.map((item) => {
        if (item?.productPrices[0]?.status == 2) return false;
        const data = {
          name: item?.name,
          price: item?.productPrices[0]?.price,
        };
        console.log(data);
      });
    })
    .catch(function (error) {
      // xử trí khi bị lỗi
      console.log(error);
    })
    .finally(function () {
      // luôn luôn được thực thi
    });
}
module.exports = CheckPriceBHX();
