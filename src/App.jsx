import { Slider } from "./Slider/index";

const settings = {
  width: 600,
  height: 600,
  start: 0,
  isTouch: true,
  isDragg: true,
  content: {
    forward: ">",
    back: "<",
  },
};

const images = [];

for (let count = 1; count < 20; count++)
  images.push(
    `https://picsum.photos/${settings.width}/${settings.height}?random=${count}`,
  );

export const App = () => {
  return <Slider settings={settings} images={images} />;
};
