export const getHandleStart =
  (setTouchStart, setIsDragging) => (isTouch) => (e) => {
    const position = isTouch && e.touches ? e.touches[0].clientX : e.clientX;
    setTouchStart(position);
    setIsDragging(true);
  };
