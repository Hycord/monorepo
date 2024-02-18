# Usage

```typescript
import Logger from '@hycord/logger';
const logger = new Logger();

// The following code produxes the image below
logger.log('Log, Default Title');
logger.log('Log, Custom Title', 'Custom Title');
logger.log('Log, Date title', 'date');
logger.data('Data, Default Title');
logger.data('Data, Custom Title', 'Custom Title');
logger.data('Data, Date title', 'date');
logger.success('Success, Default Title');
logger.success('Success, Custom Title', 'Custom Title');
logger.success('Success, Date title', 'date');
logger.error('Error, Default Title');
logger.error('Error, Custom Title', 'Custom Title');
logger.error('Error, Date title', 'date');
logger.warn('Warn, Default Title');
logger.warn('Warn, Custom Title', 'Custom Title');
logger.warn('Warn, Date title', 'date');
```

![Example Logging](/public/example.png 'Example Logging')

## Customization

You may also use `logger._log()` to pass a custom title and colors to the logger. The function is defined as follows, where the first array is an array of chalk style options (I.E. `chalk.bold`) and the first array is applied to the brackets and title, while the second is just applied to the title.:

```ts
_log(
    [color = chalk, style = chalk]: Chalk[],
    title = 'LOG',
    message: string,
  )
```
