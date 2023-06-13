import { FaAccusoft } from "react-icons/fa";
import image1 from "/public/media/livingroom.jpeg";
import image2 from "/public/media/diningroom.jpeg";
import image3 from "/public/media/kitchen.jpeg";
import image4 from "/public/media/summerkitchen.jpeg";
import image5 from "/public/media/gamingroom.jpeg";
import image6 from "/public/media/hall.jpeg";

export const rooms = [
  { id: "1",size:"120 x 60", name: "Mehmonxona", icon: <FaAccusoft />, imageSrc: image1.src },
  { id: "2",size:"120 x 60", name: "Ovqatlanish xonasi", icon: <FaAccusoft />, imageSrc: image2.src },
  { id: "3",size:"120 x 60", name: "Oshoxona", icon: <FaAccusoft />, imageSrc: image3.src },
  { id: "4",size:"120 x 60", name: "Yozgi Oshxona", icon: <FaAccusoft />, imageSrc: image4.src },
  { id: "5",size:"120 x 60", name: "O'yin xonasi", icon: <FaAccusoft />, imageSrc: image5.src },
  { id: "6",size:"120 x 60", name: "Zal", icon: <FaAccusoft />, imageSrc: image6.src },
];
