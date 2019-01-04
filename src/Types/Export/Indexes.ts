'use strict';

export interface Indexes extends Array<Index> {};
export interface Index
{
    index: string;
    function: Array<any>;
    multi: boolean;
    geo: boolean;
};