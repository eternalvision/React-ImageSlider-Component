export const getHandleMove =
  (setTouchStart, setIsDragging, updateImg) =>
  (touchStart, isDragging, isDragg, isTouch) =>
  (e) => {
    if (!isDragging || (!isDragg && !isTouch)) return;
    const currentPosition =
      isTouch && e.touches ? e.touches[0].clientX : e.clientX;
    const diff = touchStart - currentPosition;

    if (Math.abs(diff) > 50) {
      updateImg(diff > 0 ? 1 : -1);
      setIsDragging(false);
      setTouchStart(currentPosition);
    }
  };
