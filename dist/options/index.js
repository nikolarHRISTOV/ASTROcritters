import i from "files-pipeline/dist/lib/deepmerge.js";
import s from "files-pipeline/dist/options/index.js";
import t from "./critters.js";
var n=i(s,{critters:t,pipeline:{failed:async e=>`Error: Cannot inline file ${e.inputPath}!`,fulfilled:async e=>e.files>0?`Successfully inlined a total of ${e.files} HTML ${e.files===1?"file":"files"}.`:!1,accomplished:!1}});export { n as default };

