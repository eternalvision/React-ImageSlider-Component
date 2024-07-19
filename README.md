# Slider Component Documentation

## Overview

This repository contains a customizable and responsive image slider component built with React. The slider supports touch and drag interactions, and displays navigation buttons and an image counter.

## Files and Structure

### main.js

The entry point of the application. It renders the `App` component inside the root element using React's StrictMode.

### App.jsx

This component sets up the slider's configuration and initializes an array of images. It then renders the `Slider` component with these settings and images.

- **settings**: An object containing the slider's settings, such as the initial image index, width, height, touch and drag enablement, as well as styles and classes.
- **images**: An array of image URLs to be displayed in the slider.

### Slider Folder

#### index.js

The main slider component. It uses React hooks like `useState` and `useCallback` to manage the state of the current image, the touch start point, and the dragging state. It implements logic for handling touch or drag start, move, and end events.

#### style.scss

The stylesheet for the slider. It defines the main styles, including the layout of containers, button styles, and image counter styles.

### handlers Folder in Slider

#### getHandleEnd.js

Exports a function that resets the dragging state.

#### getHandleMove.js

Exports a function that handles touch or mouse movement. It includes logic to change the image when a sufficient move distance is detected.

#### getHandleStart.js

Exports a function that initializes the touch or mouse start point and sets the dragging state.

#### index.js

Exports functions from `getHandleStart`, `getHandleMove`, and `getHandleEnd`.

## Settings Description

The `settings` object in the `App.jsx` component configures various aspects of the slider. Below are the descriptions of each setting:

- **start**: The initial index of the image to be displayed. Default is 0.
- **width**: The width of each image in the slider, in pixels.
- **height**: The height of each image in the slider, in pixels.
- **isTouch**: A boolean indicating whether touch interactions are enabled.
- **isDragg**: A boolean indicating whether drag interactions are enabled.
- **isCounter**: A boolean indicating whether to display the image counter.
- **content**: An object containing the content for navigation buttons.
  - **buttons**: An object containing the forward and back buttons.
    - **forward**: The content for the forward button (e.g., an icon).
    - **back**: The content for the back button (e.g., an icon).
- **className**: An object containing custom class names for various slider elements.
  - **buttons**: An object containing class names for the forward and back buttons.
    - **forward**: Custom class name for the forward button.
    - **back**: Custom class name for the back button.
  - **slider**: Custom class name for the slider container.
- **style**: An object containing custom styles for various slider elements.
  - **slider**: Custom styles for the slider container (e.g., `borderRadius`).

### Example `settings` object:

```javascript
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
```

## Usage

The slider component is easy to configure and integrate into a React project. The slider's settings allow you to customize various parameters such as image size, drag and touch enablement, and styles.

1. Import the `Slider` component and the necessary settings.
2. Initialize an array of image URLs.
3. Render the `Slider` component with the settings and image array.
