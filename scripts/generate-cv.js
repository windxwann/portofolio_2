// Simple robust PDF generator for Ridwan Sahidi Nugraha's CV
const fs = require('fs');
const path = require('path');

function createCvPdf() {
  const content = [
    'BT',
    '/F1 22 Tf',
    '50 740 Td',
    '(RIDWAN SAHIDI NUGRAHA) Tj',
    'ET',
    
    'BT',
    '/F2 12 Tf',
    '50 720 Td',
    '(Front-End Developer & Web Enthusiast | with.wann) Tj',
    'ET',
    
    'BT',
    '/F2 10 Tf',
    '50 702 Td',
    '(Location: Banjar, West Java, Indonesia | Email: ridwansahidinugraha@gmail.com) Tj',
    'ET',
    
    // Line separator (monochrome theme)
    '0 0 0 rg',
    '50 690 512 2 re f',
    
    // About Me
    'BT',
    '/F1 13 Tf',
    '50 665 Td',
    '(PROFILE & SUMMARY) Tj',
    'ET',
    'BT',
    '/F2 10 Tf',
    '50 648 Td',
    '(Passionate Software Engineering student at SMK Negeri 1 Banjar with strong curiosity) Tj',
    '50 635 Td',
    '(for modern front-end web development, clean minimalist UI/UX design, and interactive web) Tj',
    '50 622 Td',
    '(experiences. Dedicated to continuous learning and building meaningful digital products.) Tj',
    'ET',
    
    // Education
    'BT',
    '/F1 13 Tf',
    '50 595 Td',
    '(EDUCATION) Tj',
    'ET',
    'BT',
    '/F1 10 Tf',
    '50 577 Td',
    '(SMK Negeri 1 Banjar - Rekayasa Perangkat Lunak) Tj',
    '/F2 9 Tf',
    '380 577 Td',
    '(2024 - Present) Tj',
    'ET',
    'BT',
    '/F2 9.5 Tf',
    '65 564 Td',
    '(- Specialization: Software Engineering, Web Development, and Programming Fundamentals) Tj',
    'ET',
    
    'BT',
    '/F1 10 Tf',
    '50 545 Td',
    '(SMP Negeri 3 Banjar) Tj',
    '/F2 9 Tf',
    '380 545 Td',
    '(2022 - 2024) Tj',
    'ET',
    'BT',
    '/F2 9.5 Tf',
    '65 532 Td',
    '(- Completed junior secondary education with interest in computer science & creative tools) Tj',
    'ET',
    
    'BT',
    '/F1 10 Tf',
    '50 513 Td',
    '(SD Negeri 1 Mekarsari) Tj',
    '/F2 9 Tf',
    '380 513 Td',
    '(2017 - 2022) Tj',
    'ET',
    'BT',
    '/F2 9.5 Tf',
    '65 500 Td',
    '(- Foundational primary education) Tj',
    'ET',
    
    // Technical Skills
    'BT',
    '/F1 13 Tf',
    '50 472 Td',
    '(TECHNICAL SKILLS) Tj',
    'ET',
    'BT',
    '/F2 10 Tf',
    '50 454 Td',
    '(* Web Technologies: HTML5 (50%), CSS3 (20%), JavaScript (5%), Next.js, Tailwind CSS) Tj',
    '50 439 Td',
    '(* Design & Prototyping: Figma (45%), UI/UX Design, Wireframing, Component Systems) Tj',
    '50 424 Td',
    '(* Programming Languages: Python (5%), C# (5%), JavaScript) Tj',
    '50 409 Td',
    '(* Animation & Interactive: GSAP, ScrollTrigger, Micro-interactions) Tj',
    'ET',
    
    // Projects
    'BT',
    '/F1 13 Tf',
    '50 380 Td',
    '(FEATURED PROJECTS) Tj',
    'ET',
    'BT',
    '/F1 10 Tf',
    '50 362 Td',
    '(1. Studio Ghibli Tribute Website) Tj',
    '/F2 9 Tf',
    '320 362 Td',
    '(https://wann-studioghibli.netlify.app/) Tj',
    'ET',
    'BT',
    '/F2 9.5 Tf',
    '65 349 Td',
    '(- Aesthetic tribute website showcasing Studio Ghibli films with storytelling and visual charm.) Tj',
    '65 336 Td',
    '(- Stack: HTML5, CSS3, Responsive Layout, Modern Typography.) Tj',
    'ET',
    
    'BT',
    '/F1 10 Tf',
    '50 316 Td',
    '(2. UI/UX Design - Furniture E-Commerce App) Tj',
    '/F2 9 Tf',
    '380 316 Td',
    '(Figma Prototype) Tj',
    'ET',
    'BT',
    '/F2 9.5 Tf',
    '65 303 Td',
    '(- Comprehensive mobile UI/UX exploration for modern furniture shopping and streamlined checkout.) Tj',
    '65 290 Td',
    '(- Tools: Figma, User Research, Wireframes, Interactive Prototyping.) Tj',
    'ET',
    
    // Personal Brand & Contact
    'BT',
    '/F1 13 Tf',
    '50 260 Td',
    '(PERSONAL BRANDING & ONLINE PRESENCE) Tj',
    'ET',
    'BT',
    '/F2 10 Tf',
    '50 242 Td',
    '(* Brand: with.wann) Tj',
    '50 227 Td',
    '(* Portfolio: Minimalist Interactive Next.js Portfolio) Tj',
    '50 212 Td',
    '(* Motto: "Building meaningful digital experiences through creativity, curiosity, and learning.") Tj',
    'ET'
  ].join('\n');

  const stream = Buffer.from(content, 'utf-8');
  const streamLength = stream.length;

  let objects = [];
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj');
  objects.push('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj');
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n` + content + '\nendstream\nendobj');
  objects.push('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj');
  objects.push('6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');

  let body = '%PDF-1.4\n';
  let xref = ['xref\n0 7\n0000000000 65535 f \n'];

  for (let i = 0; i < objects.length; i++) {
    const offset = Buffer.byteLength(body, 'utf-8');
    xref.push(String(offset).padStart(10, '0') + ' 00000 n \n');
    body += objects[i] + '\n';
  }

  const startxref = Buffer.byteLength(body, 'utf-8');
  body += xref.join('') + `trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  const targetPath = path.join(__dirname, '..', 'public', 'cv-ridwan.pdf');
  fs.writeFileSync(targetPath, body, 'utf-8');
  console.log('CV PDF generated successfully at:', targetPath);
}

createCvPdf();

