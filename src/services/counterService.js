import request from '../utils/request';

export const incrementCounter = n => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(n + 1), 1000);
  })
}

export const decrementCounter = n => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(n - 1), 1000);
  })
}
