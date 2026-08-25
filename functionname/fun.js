const f1 = () => {
  console.log(" f1 ");
};
const f2 = () => {
  console.log(" f2 ");
};
const f3 = () => {
  console.log(" f3 ");
};
const f3 =()=>console.log("f3");
function main() {
    console.log("main");
    f1();
    f2();
    f3();
    console.log("end");
}

setTimeout(f1,0);

setImmediate(f1,0);
f3();
main (); 