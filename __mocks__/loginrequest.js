// reject: {"payload":null,"error":"Invalid password"}
// {"payload":null,"error":"No such user"}
// resp: {"payload":{"token":"ZGV2ZWxvcGVyOnNraWxsYm94"},"error":""}

// const userName = 'developer';
// const userPass = 'skillbox';

// export default function requestLogin(obj) {
//   const { name, pass } = obj;
//   return new Promise((resolve, reject) => {
//     if (name === userName && pass === userPass) {
//       resolve('{"payload":{"token":"ZGV2ZWxvcGVyOnNraWxsYm94"},"error":""}');
//     } else {
//       reject('{"payload":null,"error":"No such user"}');
//     }
//   });
// }
