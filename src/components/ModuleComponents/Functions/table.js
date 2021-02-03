import React from 'react';

const repite = (arreglo,valor) => {
  const longitud = arreglo.length;
  let i = 0;
  while (i<longitud){
    if (arreglo[i] === valor)
      return true;
    else
      i++;
  }
  return false;
};

const valores = (desfase) => {
  const rango = 16;
  let arreglo = [];
  let valor = 0;
  let i = 0;
  while (i < 5){
    valor = Math.floor(Math.random()*rango) + desfase;
    if (repite(arreglo,valor)){}
    else {
     arreglo[i] = valor;
     i++;
    }
  }
  return arreglo;
};

const B = () => {
  const bRow = new Map();
  const arreglo = valores(0);
  bRow.set('b0',arreglo[0]).set('b1',arreglo[1]).set('b2',arreglo[2]).set('b3',arreglo[3]).set('b4',arreglo[4]);
  return bRow;

};

const I = () => {
  const iRow = new Map();
  const arreglo = valores(15);
  iRow.set('i0',arreglo[0]).set('i1',arreglo[1]).set('i2',arreglo[2]).set('i3',arreglo[3]).set('i4',arreglo[4]);
  return iRow;
};

const N = () => {
  const nRow = new Map();
  const arreglo = valores(30);
  nRow.set('n0',arreglo[0]).set('n1',arreglo[1]).set('n2',arreglo[2]).set('n3',arreglo[3]).set('n4',arreglo[4]);
  return nRow;
};

const G = () => {
  const gRow = new Map();
  const arreglo = valores(45);
  gRow.set('g0',arreglo[0]).set('g1',arreglo[1]).set('g2',arreglo[2]).set('g3',arreglo[3]).set('g4',arreglo[4]);
  return gRow;
};

const O = () => {
  const oRow = new Map();
  const arreglo = valores(60);
  oRow.set('o0',arreglo[0]).set('o1',arreglo[1]).set('o2',arreglo[2]).set('o3',arreglo[3]).set('o4',arreglo[4]);
  return oRow;
};

const createTable = () =>  [B(),I(),N(),G(),O()];

export default createTable;
