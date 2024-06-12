import { useState, memo, useCallback } from "react";
import { getHandleStart, getHandleEnd, getHandleMove } from "./handlers";
import "./style.scss";

export const Slider = memo(({ settings, images }) => {
  const { start, width, height, isTouch, isDragg, content } = settings;
  const [currentImg, setCurrentImg] = useState(start);
  const [touchStart, setTouchStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const updateImg = useCallback(
    (change) => {
      const newIndex = (currentImg + change + images.length) % images.length;
      setCurrentImg(newIndex);
    },
    [currentImg, images.length],
  );

  const handleStart = useCallback(
    (e) => {
      getHandleStart(setTouchStart, setIsDragging)(isTouch)(e);
    },
    [setTouchStart, setIsDragging, isTouch],
  );

  const handleMove = useCallback(
    (e) => {
      getHandleMove(setTouchStart, setIsDragging, updateImg)(
        touchStart,
        isDragging,
        isDragg,
        isTouch,
      )(e);
    },
    [
      setTouchStart,
      setIsDragging,
      updateImg,
      touchStart,
      isDragging,
      isDragg,
      isTouch,
    ],
  );

  const handleEnd = useCallback(
    (e) => {
      getHandleEnd(setIsDragging)(e);
    },
    [setIsDragging],
  );

  const eventHandlers =
    isDragg || isTouch
      ? {
          onMouseDown: isDragg ? handleStart : null,
          onMouseMove: isDragg ? handleMove : null,
          onMouseUp: isDragg ? handleEnd : null,
          onMouseLeave: isDragg ? handleEnd : null,
          onTouchStart: handleStart,
          onTouchMove: handleMove,
          onTouchEnd: handleEnd,
        }
      : {};

  return (
    <ul
      className="SliderContainer"
      style={{ height: `${height}px`, width: `${width}px` }}
      {...eventHandlers}>
      <li
        className="ImageContainer"
        style={{
          transform: `translateX(-${currentImg * width}px)`,
        }}>
        {images.map((src, index) => (
          <img width={width} key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </li>
      <li className="Buttons">
        <button onClick={() => updateImg(-1)}>{content.back}</button>
        <button onClick={() => updateImg(+1)}>{content.forward}</button>
      </li>
    </ul>
  );
});

Slider.displayName = "Slider";
