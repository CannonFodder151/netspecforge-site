const fs = require('fs');
const { execSync } = require('child_process');
execSync('powershell -Command "(Invoke-WebRequest -UseBasicParsing -Uri \'https://netspecforge.perfection-it.com/docs.html\').Content | Out-File -Encoding utf8 docs_live.html"', {stdio:'inherit'});
const c = fs.readFileSync('docs_live.html','utf8');
console.log('img tags:', (c.match(/<img/g)||[]).length);
console.log('contains landing.png:', c.includes('landing.png'));
