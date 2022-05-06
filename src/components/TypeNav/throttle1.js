function throttle1(fn,delay){
    let pre=0;
    return function(...args){
      let now=Date.now();
      if(now-pre>delay){
        fn.apply(this,args);
        pre=now;
      }
    }
  }
  export default throttle1