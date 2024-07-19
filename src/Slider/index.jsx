import { useState, memo, useCallback } from "react";
import { getHandleStart, getHandleEnd, getHandleMove } from "./handlers";
import "./style.scss";

export const Slider = memo(({ settings, images }) => {
  const {
    start,
    width,
    height,
    isTouch,
    isDragg,
    isCounter,
    content,
    className,
    style,
  } = settings;
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
    <>
      <ul
        className={`${className.slider || ""} SliderContainer`}
        style={{ height: `${height}px`, width: `${width}px`, ...style.slider }}
        {...eventHandlers}>
        <li
          className="ImageContainer"
          style={{
            transform: `translateX(-${currentImg * width}px)`,
          }}>
          {images.map((src, index) => (
            <img
              width={width}
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
            />
          ))}
        </li>
        <li className="Buttons">
          <button
            className={className.buttons.back}
            onClick={() => updateImg(-1)}>
            {content.buttons.back}
          </button>
          <button
            className={className.buttons.forward}
            onClick={() => updateImg(+1)}>
            {content.buttons.forward}
          </button>
        </li>
      </ul>
      {isCounter && (
        <div className="ImageCount">
          <span>
            {currentImg + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
});

Slider.displayName = "Slider";
