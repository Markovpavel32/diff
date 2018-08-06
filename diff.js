const diff = (a, b) =>{
  if(a < b){
    let c = b - a;
    if(c > 180){
      return 360 - c;
    }
    return c;
  } else{
    let d = a - b;
    if(d > 180){
      return 360 - d ;
    }
    return d;
  }
  
};

export default diff;
