'use strict';

// External Modules
import { WriteStream } from 'fs';

export default function(stream: WriteStream)
{
    const promise: Promise<void> = new Promise(resolve => stream.once('finish', resolve));
    return promise;
};