import { Slider } from "./Slider/index";

export const App = () => {
  return (
    <Slider
      settings={{
        width: 500,
        height: 500,
        start: 0,
        isTouch: true,
        isDragg: true,
        text: {
          forward: ">",
          back: "<",
        },
      }}
      images={["/1.jpg", "/2.jpg"]}
    />
  );
};
