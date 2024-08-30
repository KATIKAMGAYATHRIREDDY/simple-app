import React from 'react'

const Merge = () => {
    function merge(x,y){
        var m = Math.min(x.length, y.length);
        var temp='';
        var i;
        for (i = 0;i<m;i++){
            temp=temp+x[i]+y[i];
        }
        return temp+x.slice(i)+y.slice(i);
    }
    console.log(merge('abcdef','123'));
    console.log(merge('abc','1234567'));

    //String reverse
    // function reverse(str){
    //     var temp = '';
    //     for(let i = str.length - 1;i>=0;i--){
    //         temp = temp+str[i];
    //     }
    //     return temp;
    // }
    // console.log('random ->'+reverse('random'))

    //Fibanocci series
    // const num = prompt('Enter a number');
    // var a=0;
    // var b=1;
    // console.log(a)
    // console.log(b)
    // var temp;
    // temp = a+b;

    // while(temp<num){
    //     console.log(temp);
    //     a=b;
    //     b=temp;
    //     temp=a+b;
    // }


  return (
    <div>
      Merging
    </div>
  )
}

export default Merge
