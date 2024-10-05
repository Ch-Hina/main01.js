// module.js
export default () => 'Hello world';
export const name = 'Lydia';

// index.js
import * as data from './module';

console.log(data);

//Ans A: { default: function default(), name: "Lydia" }