// 模組化:將schema及model從主程式拆出來
const mongoose = require('mongoose');
/*
Schema定義MongoDB文件的結構與規則：
1.欄位的資料類型
2.欄位是否為必須
3.欄位的預設值
4.驗證規則
*/
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      // 設置trim:true以去除前後空格
      trim: true,
      // 透過陣列來顯示回饋訊息
      required: [true, '請輸入您的名字']
    },
    email: {
      type: String,
      // 設置trim:true以去除前後空格
      trim: true,
      // 透過陣列來顯示回饋訊息
      required: [true, '請輸入您的 Email'],
      // 表示email欄位的值必須是唯一的，不允許重複
      unique: true,
      // 表示在儲存email值時，會自動將其轉換為小寫形式
      lowercase: true,
      // select為false代表建立這個屬性，但不會被find()找出來而具保護效果
      // select作用範圍僅限於Node.js後端的查詢，對於其他非Node.js環境或工具可能不具有效性
      select: false
    },
    photo: String,
  });

const User = mongoose.model('User', userSchema);

/*
model第一個參數是模型名稱，會自動對應到MongoDB的collection名稱
第二個參數是schema
第三個參數是強制對應的MongoDB的collection名稱(可不填)

第一個參數在進到MongoDB時，會因為要符合習慣而自動變更
全英文小寫
複數形式
Room => rooms
Study => studies
cookies => 因符合MongoDB習慣而無變化

若想要依照自己的collection名稱
方法1：在 model() 的第三个參數中指定集合名稱
mongoose.model('ModelName', modelNameSchema, 'custom_collection_name');

方法2：在 mongoose.Schema() 的第二個參數中指定集合名稱 (寫死在schema)
new mongoose.Schema({ schema definition }, { collection: 'custom_collection_name' });
*/

module.exports = User;