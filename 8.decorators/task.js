function cachingDecoratorNew(func) {
  let cache = [];
  return function(...args){
    const hash = args.join(',');
    const findHash = cache.find((item) => item.hash === hash);
    if (findHash) {
      console.log(`Из кэша: ${findHash.result}`)
      return `Из кэша: ${findHash.result}`;
    }
    
    const result = func(...args);
    cache.push({hash, result})

    if (cache.length > 5){
      cache.shift()
    }
    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
   }
}


function debounceDecoratorNew(func, delay) {
  let timerId;
  let isDebounce = true;

  return function(...args) {
    if (!isDebounce) {
      func(...args);
      isDebounce = false;
    }  
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(...args);
      isDebounce = true;
    }, delay)
  }
  }


function debounceDecorator2(func) {
  let timerId;
  let isDebounce = true;
  wrapper.count = 0;

  function wrapper(...args) {
    wrapper.count += 1;

    if (!isDebounce) {
      func(...args);
      isDebounce = false;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => { 
        func(...args);
        isDebounce = true;
      }, delay)
    }
  }

  return wrapper;
}
