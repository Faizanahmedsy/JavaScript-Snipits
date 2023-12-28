import { role, moreRoles } from "./database/arrays.js";

//add two arrays
const combinedRoles = [...role, ...moreRoles];

console.log("combined arrays", combinedRoles);
