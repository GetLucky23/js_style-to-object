'use strict';

function convertToObject(sourceString) {
  // ПЕРШИЙ ПЛАН ДІЙ
  // 1. нарізати строку на масив значень через sourceString.split(;)
  // 2. влупити .map або .forEach і в процесі засовувати в значення в об'єкт
  // 3. стилізувати - щоб були гарно оформлені

  // щоб стилізувати - не треба було придумувати всяких новітніх правил -
  // треба було кожне значення до і після ':' значення.trim() -
  // це прибирає всі види пробілів

  // А ЩЕ можна використовувати всі МЕТОДИ ЧЕРЕХ КРАПОЧКУ!
  // тобто не створювати кучу непотрібних змінних

  const styleArrayClean = sourceString.split(';')
    .map(string => string.split(':'))
    .filter(array => (array.length === 2))
    .map(array => {
      return array.map(element => element.trim());
    });

  /* let arraySplit1 = sourceString.split(';');
  console.log(arraySplit1);

  let arraySplit2 = arraySplit1.map(string => string.split(':'));
  console.log(arraySplit2);

  let filteredArraySplit2 = arraySplit2.filter(string => (string.length === 2))
  console.log(filteredArraySplit2);

  let arrayTrimmed = filteredArraySplit2.map(array => {
    return array.map(element => element.trim());
  });
  console.log(arrayTrimmed); */

  const styleObject = {};

  styleArrayClean.forEach(arrayStyleString => {
    styleObject[arrayStyleString[0]] = arrayStyleString[1];
  });

  return styleObject;
}

convertToObject(`
background-color:      #fff;
-webkit-border-radius: 5px;
border-radius     : 5px;
border: 1px solid #e8e8e8;
-webkit-box-sizing: border-box;
box-sizing: border-box;
clear   : both       ;
cursor: pointer;
float: left;
font-family: inherit;
    font-size: 14px;
font-weight: 400;
height: 42px;
line-height:    40px;
outline: 0;
padding-left    : 18px;
padding-right: 30px;
;

;
position: relative;


text-align: left !important;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;


white-space: nowrap;
width: auto;
`);

module.exports = convertToObject;
