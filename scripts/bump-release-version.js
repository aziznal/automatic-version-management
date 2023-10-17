/**
 * Bumps release version by 1. Does NOT perform any checks
 */

const fs = require("fs");

// Read current version from VERSION file
let version = fs.readFileSync("VERSION", "utf-8").trim().split(".").map(Number);

version[0]++;
version[2] = 0; // patche counter is reset on release

// Update the VERSION file
fs.writeFileSync("VERSION", version.join("."), "utf-8");
