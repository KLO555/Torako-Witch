# Torako Witch Website

โปรเจกต์เว็บไซต์ตัวอย่างสำหรับ Torako Witch

## เผยแพร่ด้วย GitHub Pages

โปรเจกต์นี้เป็นเว็บสแตติกและมี `index.html` อยู่ที่โฟลเดอร์หลัก จึงตั้ง GitHub Pages ให้เผยแพร่จาก branch `main` และโฟลเดอร์ `/(root)` ได้

เว็บไซต์ GitHub Pages จะเปิดให้เข้าถึงสาธารณะบนอินเทอร์เน็ต ส่วนโฟลเดอร์ `references/` ถูกกันออกจาก Git เพื่อไม่เผยแพร่ไฟล์อ้างอิงและไฟล์ดาวน์โหลดต้นฉบับ

## โครงสร้างไฟล์

- `index.html` — โครงสร้างและเนื้อหาหน้าเว็บ
- `pricing.html` — หน้าเตรียมตารางราคา (เว้นราคาไว้จนกว่าจะสรุป)
- `css/style.css` — สี ฟอนต์ การจัดวาง และ responsive design
- `js/script.js` — สลับภาษา ธีม เมนูมือถือ และปุ่มกลับด้านบน
- `assets/winter-palette.jpg` — ภาพบรรยากาศที่ใช้ในส่วน Hero
- `assets/MiPancake-*.ttf` — ฟอนต์ MiPancake สำหรับโหมดกลางคืน
- `assets/artwork-*.jpg` — ภาพตัวอย่างที่วางในแกลเลอรี สามารถเปลี่ยนเป็นผลงานจริงได้
- `assets/artwork-placeholder.svg` — ภาพ placeholder สำหรับเพิ่มช่องว่างในแกลเลอรีภายหลัง
- `references/font-direction.png` — ภาพอ้างอิงแนวตัวอักษรจากไฟล์ 12
- `.gitignore` — ไม่นำไฟล์อ้างอิงไปไว้ใน repository
- `.nojekyll` — ระบุว่าเป็นเว็บไฟล์สแตติกโดยตรง

เปิด `index.html` ในเบราว์เซอร์เพื่อดูตัวอย่างหน้าเว็บ ทั้งโหมดสว่างและกลางคืนใช้ MiPancake จากไฟล์ภายในโปรเจกต์

ข้อมูลฟอนต์ MiPancake และเงื่อนไขการใช้เชิงพาณิชย์: https://www.f0nt.com/release/mipancake/

