function composeRight(...fns) {
  const errors = [];
  const f = function (x) {
    try {
      return fns.reduceRight((v, fn) => fn(v), x);
    } catch (e) {
      errors.forEach(handler => handler(e));
      return undefined;
    }
  };
  f.on = (event, handler) => {
    if (event === 'error') errors.push(handler);
    return f;
  };
  return f;
}

const err = x => { throw new Error("fail"); };
const mul3 = x => x * 3;

const fn = composeRight(mul3, err, inc);
fn.on('error', e => console.log("Ошибка:", e.message));
console.log(fn(5));