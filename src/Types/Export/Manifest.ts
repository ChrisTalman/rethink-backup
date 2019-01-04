'use strict';

export interface Manifest
{
    moduleVersion: string;
    databases: Databases;
};

export interface Databases extends Array<Database> {};
export interface Database
{
    id: string;
    name: string;
    tables: Tables;
};

export interface Tables extends Array<Table> {};
export interface Table
{
    id: string;
    name: string;
    primary_key: string;
    durability: 'soft' | 'hard';
    replicas: number;
    shards: number;
};