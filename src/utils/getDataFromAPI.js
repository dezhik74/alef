import leftImage from "../assets/img/boy-car.png";
import t1 from "../assets/img/thumbs/t-1.png";
import t2 from "../assets/img/thumbs/t-2.png";
import t3 from "../assets/img/thumbs/t-3.png";
import t4 from "../assets/img/thumbs/t-4.png";
import t5 from "../assets/img/thumbs/t-5.png";

export default async function getDataFromAPI() {
  let data = {
    thumbs: [],
    leftImage: leftImage,
  };
  for (let img of [t1, t2, t3, t4, t5]) data.thumbs.push(img);
  data.name = "Пижама для девочек";
  data.articul = "02765/46";
  data.stars = 4;
  data.feebackCount = 14;
  data.discountPrice = 800;
  data.fullPrice = 1500;
  data.discountPercent = 36;
  data.actionPercent = 20;
  data.sizes = ["XS", "S", "M", "XXXL"];

  // console.log(data.thumbs);
  return data;
}
