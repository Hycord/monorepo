# @hycord/math

This package holds a number of math-related utilities for my projects.

## Utilites

- `basic` Basic math functions such as min, max, and other statistical helpers
- `constants` Basic constant values such as defining EPSILON or DEGREE
- `Vector2D` Class which wraps a collection of helper functions to make working with 2D vectors nicer
- Geometry:
  - `Point` Basic point class which is similar to a 2d vector 
  - `Segment` Helper class to wrap two points
  - `Polygon` Helper class to wrap multiple points and segments.

Geomoetric functions also have corrosponding functions to render them within the `@hycord/image`'s Viewport class if you would like to display the geometric classes. Every geometric class has a corrosponding function to draw it so you can draw advanced shapes with them while also having a rigid data structure instead of arbitrary circles and lines in a canvas.
