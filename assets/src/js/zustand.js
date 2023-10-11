import { persistent } from 'zustand/middleware';
import create from 'zustand/vanila';

const stores = [];
const zustand ={
    persistent,
    create,
    stores
};

window.zustand = zustand;