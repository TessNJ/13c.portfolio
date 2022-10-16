("usestrict");

import { scroll, animate, timeline, stagger } from "https://cdn.skypack.dev/motion";

console.log("hi");
animate(".fadeIn", { opacity: 0, opacity: 1 }, { duration: 1, delay: stagger(0.2), easing: "ease-in-out" });
