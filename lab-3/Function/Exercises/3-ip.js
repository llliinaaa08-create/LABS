function ipToNumber(ip = '127.0.0.1') {
  return ip.split('.')
    .map(Number)
    .reduce((acc, val, idx) => acc + (val << ((3 - idx) * 8)), 0);
}
      
console.log(ipToNumber('10.0.0.1'));        
console.log(ipToNumber()); 
       

