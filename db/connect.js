const { default: mongoose } = require("mongoose");

async function ConnectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tool-bhx", {
      useNewUrlParser: true,
    });
    console.log("connect success");
  } catch (error) {
    console.log("connect fail");
  }
}
module.exports = ConnectDB;
