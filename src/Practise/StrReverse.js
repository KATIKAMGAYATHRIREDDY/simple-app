// import React from 'react'

// const StrReverse = () => {
//     function reverseString(str) {
//         let reversed = '';
//         for (let i = str.length - 1; i >= 0; i--) {
//             reversed += str[i];
//         }
//         return reversed;
//     }
//     const str = "Hello, World!";
//     const reversedString = reverseString(str);
//   return (
//     <div>
//         String is - '{str}'<br/>
//         Reverse String is - '{reversedString}'
//     </div>
//   )
// }

// export default StrReverse



import React from 'react'

const StrReverse = () => {
  function reverseString(str){
    var res = '';
    for(let i = str.length-1; i>=0;i--){
      res+=str[i];
    }
    return res;
  }
  var str = 'Gayathri';
  var reversedStr = reverseString(str)
  return (
    <div>
      {reversedStr}
    </div>
  )
}

export default StrReverse
