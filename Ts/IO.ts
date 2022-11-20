const child = <HTMLDivElement>document.querySelector(".child");
const cb = () => {
    alert("hello!!");
};

const io = new IntersectionObserver(cb);
io.observe(child);
