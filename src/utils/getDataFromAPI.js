import leftImage from "../assets/img/boy-car.png";

export default async function getDataFromAPI() {
  // let promise = new Promise((resolve) => {
  //   setTimeout(() => resolve(), 1000);
  // });
  // await promise;

  let data = {
    thumbs: [],
    leftImage: leftImage,
  };
  for (let img in import.meta.glob("/src/assets/img/thumbs/*.png"))
    data.thumbs.push(img);
  data.name = "Пижама для девочек";
  data.articul = "02765/46";
  data.stars = 4;
  data.feebackCount = 14;
  data.discountPrice = 800;
  data.fullPrice = 1500;
  data.discountPercent = 36;
  data.actionPercent = 20;
  data.sizes = ["XS", "S", "M", "XXXL"];

  // console.log(data);
  return data;
}
