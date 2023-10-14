const { default: axios } = require("axios");
const botTelegram = require("../bot/bot-telegram");
const bhxSchema = require("../schemas/bhx.schema");

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
      storeId: 6463,
      districtId: 2087,
      CategoryUrl: "to-chen-dia-dung-mot-lan",
      ProductUrl: "40-chen-nhua-bach-hoa-xanh-10cm",
    },
  };

  axios
    .get("https://apibhx.tgdd.vn/Product/GetProductDetail", config)
    .then(function (response) {
      if (!(boxBuys = response.data.data.boxBuys)) {
        console.log("error");
      }
      boxBuys.map(async (item) => {
        if (item?.productPrices[0]?.status == 2) return false;
        const obj = {
          idProduct: item?.id,
          name: item?.name,
          price: item?.productPrices[0]?.price,
          sysPrice: item?.productPrices[0]?.sysPrice,
        };
        await CheckPrice(obj);
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
async function CheckPrice(data) {
  if (data) {
    if (data?.price < data?.sysPrice) {
      botTelegram(
        `Sản Phẩm Đang Khuyễn Mãi: ${data?.name}, Giá Gốc: ${data?.sysPrice}, Giá Khuyễn Mãi: ${data?.price}`
      );
    }
  }
  // const obj = await bhxSchema.findOne({
  //   idProduct: data.idProduct,
  // });
  // if (obj) {
  //   if (obj.sysPrice > data.price) {
  //     botTelegram(JSON.stringify(obj));
  //   }
  // } else await bhxSchema.create(data);
}
module.exports = CheckPriceBHX;
