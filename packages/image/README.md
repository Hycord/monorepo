# @hycord/image

This is a custom package I wrote to make interfacing with canvas in node easier.

## In practice

The main value this library provides is the `Viewport` class which contains a number of utility functions for holding a virtual viewport.
This allws for easy panning, and zooming.
Drawing to the canvas requires a call to the `shape` function which is the only way to access the context of the underlying canvas. The shape function automatically handles saving and restoring the context.

# Usage

```typescript
import { Viewport } from '@hycord/image';

const view = new Viewport({
  width: 128,
  height: 128,
  backgroundColor: 'rgb(150, 150, 150)', // Light gray background
});

view.shape((ctx) => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 100, 100);
});

// There is now a black square at the top left corner of the canvas.

const imageBuffer = view.canvas.encodeSync('png');
Bun.write('./image.png', imageBuffer);
```

The above code will result in the following image being written to the root of your project (Assuming you're using Bun. There are other methods for writing image buffers and you do not need to use bun when writing the output from the canvas.):

![Square image with gray background and a black square in top left](public/image.png)
