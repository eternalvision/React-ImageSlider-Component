import { Slider } from "./Slider/index";
import {
  TbSquareRoundedArrowLeftFilled,
  TbSquareRoundedArrowRightFilled,
} from "react-icons/tb";

const settings = {
  start: 0,
  width: 600,
  height: 600,
  isTouch: true,
  isDragg: true,
  isCounter: true,
  content: {
    buttons: {
      forward: <TbSquareRoundedArrowRightFilled />,
      back: <TbSquareRoundedArrowLeftFilled />,
    },
  },
  className: {
    buttons: {
      forward: null,
      back: null,
    },
    slider: null,
  },
  style: {
    slider: {
      borderRadius: "30px",
    },
  },
};

const images = Array.from(
  { length: 20 },
  (_, index) =>
    `https://picsum.photos/${settings.width}/${settings.height}?random=${
      index + 1
    }`,
);

export const App = () => {
  return <Slider settings={settings} images={images} />;
};
