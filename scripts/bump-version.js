/**
 * This script is used to bump the version of the app.
 *
 * It reads the last commit message and increments the version based on the
 * keywords in the commit message.
 *
 * The VERSION file is updated with the new version.
 *
 * Usage:
 *  `node scripts/bump-version.js`
 */

const fs = require("fs");
const { execSync } = require("child_process");

// Fetch the last commit message
const commitMsg = execSync("git log -1 --pretty=%B").toString().trim();

// Read current version from VERSION file
let version = fs.readFileSync("VERSION", "utf-8").trim().split(".").map(Number);

const releaseKeywords = ["release"];
const featureKeywords = ["feat"];
const patchKeywords = [
  "patch",
  "fix",
  "docs",
  "style",
  "refactor",
  "test",
  "chore",
];

// Increment version based on keywords in commit message
if (releaseKeywords.some((keyword) => commitMsg.includes(keyword))) {
  version[0]++;
  version[2] = 0; // patche counter is reset on release
} else if (featureKeywords.some((keyword) => commitMsg.includes(keyword))) {
  version[1]++;
} else if (patchKeywords.some((keyword) => commitMsg.includes(keyword))) {
  version[2]++;
}

// Update the VERSION file
fs.writeFileSync("VERSION", version.join("."), "utf-8");
