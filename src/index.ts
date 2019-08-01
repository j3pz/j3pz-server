/* eslint-disable no-console */
import { Server } from './Server';

new Server().start()
    .then((): void => {
        console.log('Server started...');
    })
    .catch((err): void => {
        console.error(err);
    });
