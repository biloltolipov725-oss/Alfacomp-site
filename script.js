// Все товары из вашего списка
const products = [
    // ИБП Ion Tower
    {id: 1, name: "Ion 600t-33", desc: "Источник бесперебойного питания, 600 ВА/330 Вт", price: 33, category: "ups", img: "https://maxcom.uz/storage/product/6krajbziLZpvPtLezE8uBiijhjHfvHJvMpesDcRe.jpeg"},
    {id: 2, name: "Ion a600-35", desc: "ИБП, 600 ВА/360 Вт, AVR, LCD-дисплей", price: 35, category: "ups", img: "https://maxcom.uz/storage/product/6krajbziLZpvPtLezE8uBiijhjHfvHJvMpesDcRe.jpeg"},
    {id: 3, name: "Ion a800-46", desc: "ИБП, 800 ВА/460 Вт, LCD-дисплей", price: 46, category: "ups", img: "https://maxcom.uz/storage/product/6krajbziLZpvPtLezE8uBiijhjHfvHJvMpesDcRe.jpeg"},
    {id: 4, name: "Ion a1500-105", desc: "ИБП, 1500 ВА/1050 Вт", price: 105, category: "ups", img: "https://maxcom.uz/storage/product/6krajbziLZpvPtLezE8uBiijhjHfvHJvMpesDcRe.jpeg"},
    {id: 5, name: "Ion a2000-145", desc: "ИБП, 2000 ВА/1450 Вт", price: 145, category: "ups", img: "https://maxcom.uz/storage/product/6krajbziLZpvPtLezE8uBiijhjHfvHJvMpesDcRe.jpeg"},

    // ИБП Ion V серия
    {id: 6, name: "Ion v650 -41", desc: "ИБП серии V, 650 ВА/410 Вт", price: 41, category: "ups", img: "https://mtca.uz/image/cache/catalog/product/ups/ion-hv_series_lcd_1000va-200x200.jpg"},
    {id: 7, name: "Ion v850-54", desc: "ИБП серии V, 850 ВА/540 Вт", price: 54, category: "ups", img: "https://mtca.uz/image/cache/catalog/product/ups/ion-hv_series_lcd_1000va-200x200.jpg"},
    {id: 8, name: "Ion v1000t-67", desc: "ИБП серии V, 1000 ВА/670 Вт", price: 67, category: "ups", img: "https://mtca.uz/image/cache/catalog/product/ups/ion-hv_series_lcd_1000va-200x200.jpg"},
    {id: 9, name: "Ion v1000-78", desc: "ИБП серии V, 1000 ВА/780 Вт", price: 78, category: "ups", img: "https://mtca.uz/image/cache/catalog/product/ups/ion-hv_series_lcd_1000va-200x200.jpg"},
    {id: 10, name: "Ion v1000lcd 85", desc: "ИБП с LCD дисплеем, 1000 ВА/850 Вт", price: 85, category: "ups", img: "https://mtca.uz/image/cache/catalog/product/ups/ion-hv_series_lcd_1000va-200x200.jpg"},
    {id: 11, name: "Ion v1200t-88", desc: "ИБП серии V, 1200 ВА/880 Вт", price: 88, category: "ups", img: "https://mtca.uz/image/cache/catalog/product/ups/ion-hv_series_lcd_1000va-200x200.jpg"},
    {id: 12, name: "Ion v2000-185", desc: "ИБП серии V, 2000 ВА/1850 Вт", price: 185, category: "ups", img: "https://mtca.uz/image/cache/catalog/product/ups/ion-hv_series_lcd_1000va-200x200.jpg"},
    {id: 13, name: "Ion v2000lcd -190", desc: "ИБП с LCD дисплеем, 2000 ВА/1900 Вт", price: 190, category: "ups", img: "https://mtca.uz/image/cache/catalog/product/ups/ion-hv_series_lcd_1000va-200x200.jpg"},
    {id: 14, name: "Ion v3000 lcd -335", desc: "ИБП с LCD дисплеем, 3000 ВА/3350 Вт", price: 335, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},

    // ИБП Online tower
    {id: 15, name: "Ion G2000lcd -440", desc: "Online ИБП, 2000 ВА/440 Вт, LCD", price: 440, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 16, name: "Ion g3000lcd 550", desc: "Online ИБП, 3000 ВА/550 Вт, LCD", price: 550, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 17, name: "Ion g6000 v2 lcd -1230", desc: "Online ИБП, 6000 ВА/1230 Вт, LCD V2", price: 1230, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 18, name: "Ion g10.000 v2 lcd -1500", desc: "Online ИБП, 10000 ВА/1500 Вт, LCD V2", price: 1500, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},

    // ИБП Online rack-tower
    {id: 19, name: "Ion wp 1000lcd -230", desc: "Rack ИБП, 1000 ВА/230 Вт, LCD", price: 230, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 20, name: "Ion wp 2000lcd -440", desc: "Rack ИБП, 2000 ВА/440 Вт, LCD", price: 440, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 21, name: "Ion wp 3000lcd -540", desc: "Rack ИБП, 3000 ВА/540 Вт, LCD", price: 540, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 22, name: "Ion wp 6000lcd -1200", desc: "Rack ИБП, 6000 ВА/1200 Вт, LCD", price: 1200, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 23, name: "Ion wp 10.000 lcd -1400", desc: "Rack ИБП, 10000 ВА/1400 Вт, LCD", price: 1400, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},

    // Трехфазные ИБП
    {id: 24, name: "Ion 20KVA G3 PRO", desc: "Трехфазный ИБП, 20 КВА, 3800 Вт", price: 3800, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 25, name: "ION 30KVA G3 PRO", desc: "Трехфазный ИБП, 30 КВА, 4900 Вт", price: 4900, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 26, name: "ION 40KVA G3 PRO", desc: "Трехфазный ИБП, 40 КВА, 5950 Вт", price: 5950, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 27, name: "ION 80KVA 64KW", desc: "Трехфазный ИБП, 80 КВА, 64000 Вт", price: 13000, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},
    {id: 28, name: "ION 120KVA 96KW", desc: "Трехфазный ИБП, 120 КВА, 96000 Вт", price: 19000, category: "ups", img: "https://seventrade.uz/upload/iblock/783/u12tb6a0au8zk6bzkq6jsu2ueqi1mz6c.jpg"},

    // Мониторы
    {id: 29, name: "REDMI G27Q 2K 200HZ", desc: "Монитор 27\", 2K, 200 Гц, IPS", price: 165, category: "monitor", img: "https://frankfurt.apollo.olxcdn.com/v1/files/4k641gc9u63h3-UZ/image"},
    {id: 30, name: "Philips 27m2n3500", desc: "Монитор 27\", 2K, 260 Гц, IPS", price: 195, category: "monitor", img: "https://www.displayspecifications.com/images/model/f09d3c09/640/main.jpg"},
    {id: 31, name: "Philips 27m2n3500uf", desc: "Монитор 27\", 2K, 320 Гц, IPS", price: 225, category: "monitor", img: "https://gw.alicdn.com/imgextra/i4/2415742114/O1CN01D1GpDN1RUGN1WV3QS_!!4611686018427382946-2-item_pic.png_.webp"},
    {id: 32, name: "Redmi x27g", desc: "Монитор 27\", Full HD, 144 Гц", price: 110, category: "monitor", img: "https://goodmi.ru/images/detailed/64/section-15-g27.jpg"},

    // Сетевое оборудование Mercusys
    {id: 33, name: "Mercusys 4g LTE", desc: "4G LTE роутер", price: 26, category: "network", img: "https://frankfurt.apollo.olxcdn.com/v1/files/qceybl5vffvl1-UZ/image"},
    {id: 34, name: "Mercusys ms108gp poe", desc: "PoE коммутатор, 8 портов", price: 25, category: "network", img: "https://m.media-amazon.com/images/I/61P3uwEx7JL.jpg"},
    {id: 35, name: "MERCUSYS MR80X", desc: "Wi-Fi 6 роутер, AX6000", price: 32, category: "network", img: "https://frankfurt.apollo.olxcdn.com/v1/files/dz2leesf7jog2-UZ/image;s=1000x1000"},
    {id: 36, name: "Mercusy mr70x ax1800 wifi6", desc: "Wi-Fi 6 роутер, AX1800", price: 31, category: "network", img: "https://maxcom.uz/storage/product/kjOQeHMxEAPNN92e8dymfou1z3YTqwSTqFd1krhe.jpeg"},
    {id: 37, name: "Mercusys MR62X", desc: "Wi-Fi 6 роутер", price: 22, category: "network", img: "https://static.mercusys.com/product-image/MR62X_1_normal20240614135507.jpg"},
    {id: 38, name: "Mercusys MR60X", desc: "Wi-Fi 6 роутер", price: 23, category: "network", img: "https://maxcom.uz/storage/product/szg0UXfgONRRniPMNoGuYsFxljXv53XAdV2ESMGr.jpeg"},
    {id: 39, name: "MERCUSYS MR47BE", desc: "Wi-Fi 7 роутер, BE6500", price: 125, category: "network", img: "https://static.mercusys.com/product-image/2_large20230717060240.jpg"},
    {id: 40, name: "Mercusys WIFI 7 MR27BE", desc: "Wi-Fi 7 роутер, BE3600", price: 55, category: "network", img: "https://static.mercusys.com/product-image/MB235-4G_EU_1.0_overview_1_normal20250610023123.jpg"},
    {id: 41, name: "Mercusys WIFI 7 MR25BE", desc: "Wi-Fi 7 роутер", price: 50, category: "network", img: "https://static.mercusys.com/product-image/MR25BE_EU_3.0_overview_normal20251209053849.png"},
    {id: 42, name: "Mercusys MB130-4G", desc: "4G LTE роутер", price: 30, category: "network", img: "https://static.mercusys.com/product-image/MB130-4G_EU_1.0_overview_07_normal20240111060818.jpg"},
    {id: 43, name: "Mercusys MB115-4G", desc: "4G LTE роутер", price: 30, category: "network", img: "https://static.mercusys.com/product-image/MB115-4G_EU_1.0_overview_2_normal20250116112821.jpg"},
    {id: 44, name: "Mercusys WI-FI 6E MA86XE", desc: "Wi-Fi 6E адаптер", price: 22, category: "network", img: "https://files.glotr.uz/company/000/002/429/proposals/2025/12/13/2025-12-13-14-19-53-338364-595ee47a5f00eccdb048f2bba42e7a60.webp?_=ozb9y"},
    {id: 45, name: "MERCUSYS WIFI 6E MA80XE", desc: "Wi-Fi 6E адаптер", price: 21, category: "network", img: "https://files.glotr.uz/company/000/002/429/proposals/2025/12/13/2025-12-13-14-24-30-516628-c61adbba5ca5e514dfed0f797e63a219.webp?_=ozb9y"},
    {id: 46, name: "MERCUSYS WIFI 6E MA70XE", desc: "Wi-Fi 6E адаптер", price: 17, category: "network", img: "https://static.mercusys.com/product-image/MA70XE_EU_1.0_overview_09_large20250214074652.jpg"},
    {id: 47, name: "MERCUSYS WI-FI 6E HALO H80X 3Pck", desc: "Mesh система Wi-Fi 6E, 3 устройства", price: 90, category: "network", img: "https://static.mercusys.com/product-image/Halo_H80X(3-pack)_3_normal20221124142617.jpg"},
    {id: 48, name: "MERCUSYS WI-FI 6E HALO H70X 3Pck", desc: "Mesh система Wi-Fi 6E, 3 устройства", price: 90, category: "network", img: "https://static.mercusys.com/product-image/Halo_H60X(3-pack)_3_normal20240605080733.jpg"},
    {id: 49, name: "MERCUSYS WI-FI 6E HALO H60X 3Pck", desc: "Mesh система Wi-Fi 6E, 3 устройства", price: 65, category: "network", img: "https://static.mercusys.com/product-image/Halo_H60X(3-pack)_10_normal20240605080923.png"},
    {id: 50, name: "MERCUSYS WI-FI 6E HALO H50g 3Pck", desc: "Mesh система Wi-Fi 5, 3 устройства", price: 65, category: "network", img: "https://static.mercusys.com/product-image/Halo_H50G_1_for_3-pack20220117090715.jpg"},
    {id: 51, name: "MERCUSYS HALO WI-FI 7 H27BE (3-PACK)", desc: "Mesh система Wi-Fi 7, 3 устройства", price: 130, category: "network", img: "https://static.mercusys.com/product-image/Halo_H27BE(3-pack_2-pack)_EU_1.0_overview_01_normal20250225013747.jpg"},

    // Жесткие диски
        {id: 52, name: "4tb 990 pro", desc: "SSD накопитель 4TB, NVMe", price: 350, category: "hdd", img: "https://files.ox-sys.com/cache/800x_/image/18/43/16/18431627f88de7b55f568bb517e211295455a2a182d2b59ac4acfb3627ae98bf.jpg"},
    {id: 53, name: "4tb kingston", desc: "SSD накопитель 4TB, Kingston", price: 300, category: "hdd", img: "https://files.ox-sys.com/cache/800x_/image/cb/7d/63/cb7d6398beb2de1a14e3bcedc498a3ab7c6d73471aa85273a73b73171d201507.jpg"},
    {id: 54, name: "Wd red plus 12TB", desc: "Жесткий диск 12TB для NAS", price: 335, category: "hdd", img: "https://maxcom.uz/storage/product/rHofyrVvmTe2ZJCOAwaj1BZePfmCj0viqb1JC0ci.jpeg"},
    {id: 55, name: "WD RED PLUS 10TB", desc: "Жесткий диск 10TB для NAS", price: 299, category: "hdd", img: "https://maxcom.uz/storage/product/PMdYoSuvMgSDF5IOGWgviT74PT7TUHFzH4NAh1o0.jpeg"},
    {id: 56, name: "WD RED PLUS 8TB", desc: "Жесткий диск 8TB для NAS", price: 220, category: "hdd", img: "https://itmir.uz/image/cache/catalog/SERVERI/KOMPLEKTUYSHEYI/%D0%B6%D0%B5%D1%81%D1%82%D0%BA%D0%B8%D0%B5%20%D0%B4%D0%B8%D1%81%D0%BA%D0%B8/redpro/WD80EFPX-1000x1000.jpg"},
    {id: 57, name: "WD RED PLUS 4TB", desc: "Жесткий диск 4TB для NAS", price: 190, category: "hdd", img: "https://maxcom.uz/storage/product/mfKs7vSdpwbnGVxLWuQ1nQiFBxR02u0dSIDRIIxE.jpeg"},
    {id: 58, name: "Wd MY PASSPORT 5TB USB", desc: "Внешний жесткий диск 5TB", price: 140, category: "hdd", img: "https://olcha.uz/image/original/products/2021-01-29/wd-my-passport-5tb-hhd-21016-2.jpeg"},
    {id: 59, name: "usb hdd apacer 1tb", desc: "Внешний HDD Apacer 1TB", price: 60, category: "hdd", img: "https://api.idea.uz/storage/products/March2023/vUVgUfyGubc1n60yMyU4.jpg"},
    {id: 60, name: "Usb hdd apacer 2tb", desc: "Внешний HDD Apacer 2TB", price: 75, category: "hdd", img: "https://tovar.uz/images/company/265/tovar/52301/o_1_5f9f9d71ab1a5.jpg"},
    {id: 61, name: "Usb ssd 1tb", desc: "Внешний SSD 1TB", price: 75, category: "hdd", img: "https://icd.uz/upload/iblock/5e0/8480gyg5whhm7rnqa4jkpbjblosh0lm3.jpg"},
    {id: 62, name: "Usp ssd 2tb", desc: "Внешний SSD 2TB", price: 110, category: "hdd", img: "https://frankfurt.apollo.olxcdn.com/v1/files/3d092sqidfri-UZ/image"},

    // Комплектующие ПК
    {id: 63, name: "Msi h610", desc: "Материнская плата H610", price: 57, category: "pc", img: "https://files.ox-sys.com/cache/800x_/image/c4/c6/89/c4c689a3dea74212948fa1173bc80517c13ded937a0f008d4caf002f389b60bc.jpg"},
    {id: 64, name: "ULTRA 9285K", desc: "Процессор Intel Ultra 9285K", price: 550, category: "pc", img: "https://files.ox-sys.com/cache/800x_/image/d3/1b/c8/d31bc845624e5a91df45b21156b1793e12ce3fe7c6d45e10c0ce390d5c963ed4.jpg"},
    {id: 65, name: "I7 -14700K", desc: "Процессор Intel Core i7-14700K", price: 350, category: "pc", img: "https://imgproxy.onliner.by/qw3ziK62LOwv6YXrgNQSs-Et1_FHkMnCDoMweairSDQ/w:170/h:250/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2Uvb3JpZ2lu/YWwvMGYzMTZmM2Qw/NTFlMTliMzliMzE5/ODEyMDE4MjRlNzcu/anBn"},
    {id: 66, name: "I7 14700kf", desc: "Процессор Intel Core i7-14700KF", price: 320, category: "pc", img: "https://www.regard.ru/photo/goods/5999401.png"},
    {id: 67, name: "I9 13900k", desc: "Процессор Intel Core i9-13900K", price: 395, category: "pc", img: "https://files.ox-sys.com/cache/original/image/4e/6e/98/4e6e987ba9ab1758529fb4f07e567ff0215faacc91fffc55001bef17c4764515.jpg"},
    {id: 68, name: "Asus RTX 5060 OC 8GB", desc: "Видеокарта ASUS RTX 5060 8GB", price: 350, category: "pc", img: "https://files.ox-sys.com/cache/original/image/3f/28/53/3f28532ad9983a9aff68fb88776674c1c72dee66387050a7087d6388367c3c3b.jpg"},
    {id: 69, name: "ZOTAG GAMING RTX5060 8GB", desc: "Видеокарта ZOTAC RTX 5060 8GB", price: 340, category: "pc", img: "https://files.ox-sys.com/cache/original/image/42/5e/4d/425e4d9e77f58b99e0aa0f2417260001f70b265069d4e4c73cb60c25e97e3b74.jpg"},

    // Моноблоки
    {id: 70, name: "Acer AIO 23,8 IPS 120HZ", desc: "Моноблок Acer 23.8\", i3-1305U, 8GB", price: 515, category: "aio", img: "https://m.media-amazon.com/images/I/81d8+iP6SCL._AC_SL1000__.jpg"},
    {id: 71, name: "Acer AIO 27 IPS 120HZ", desc: "Моноблок Acer 27\", i5-13420, 8GB", price: 620, category: "aio", img: "https://pcmarket.uz/wp-content/uploads/2025/08/u0w0mwg9qk6yypa079o51o3gax8hg8ev-removebg-preview.png"},
    {id: 72, name: "LENOVO AIO 23.8 100HZ IPS", desc: "Моноблок Lenovo 23.8\", i5-13420H, 8GB", price: 620, category: "aio", img: "https://officemax.uz/media/uploads/1_z4PCnJt.jpg"},
    {id: 73, name: "LENOVO AIO 23.8 100HZ IPS", desc: "Моноблок Lenovo 23.8\", i5-13420H, 16GB", price: 660, category: "aio", img: "https://microless.com/cdn/products/16a0613bfaaecdcccc577bf4b71d4456-hi.jpg"},

    // Аксессуары
    {id: 74, name: "Usb DVD", desc: "Внешний DVD привод USB", price: 32, category: "accessory", img: "https://frankfurt.apollo.olxcdn.com/v1/files/juimedzbe2223-UZ/image"},
    {id: 75, name: "Aula F75 3 IN 1 GASKET KEYBOARD", desc: "Механическая клавиатура Aula F75", price: 85, category: "accessory", img: "https://www.aulastar.com/uploads/allimg/20250117/1-25011GHFW24.jpg"},
    {id: 76, name: "Aula f75 ru RED SWITCH", desc: "Клавиатура Aula F75 с красными свитчами", price: 90, category: "accessory", img: "https://mobileplanet.ua/uploads/small_photos/2024-11-25/magazin-mobileplanet-aula-f75-keycap-krgd-blue-usb-ua-black-69483912028-3303733674.webp"},
    {id: 77, name: "Aula f99 pro ru", desc: "Клавиатура Aula F99 Pro", price: 120, category: "accessory", img: "https://www.clife.ru/upload/himg_cache/detail-middle/e04/e049e012a1230db5eb4d16503e35722c/aula_99_pro_black_2.jpg"},
    {id: 78, name: "Aula s98 pro ru", desc: "Клавиатура Aula S98 Pro", price: 130, category: "accessory", img: "https://m.media-amazon.com/images/I/71+WPdLb6tL._AC_SL1500_.jpg"},
    {id: 79, name: "Aula sc380 pro", desc: "Игровая мышь Aula SC380 Pro", price: 45, category: "accessory", img: "https://dynaquestpc.com/cdn/shop/files/374_21a1fba1-0c83-433b-9671-9aaea9f4a2ca.png?v=1766376850&width=1214"},
    {id: 80, name: "Yandex stansiya 3", desc: "Умная колонка Яндекс Станция 3", price: 320, category: "accessory", img: "https://images.uzum.uz/ct88t26i4n3ehka297sg/t_product_low.jpg"},
    {id: 81, name: "YANDEX MAX 65W", desc: "Умная колонка Яндекс Станция Макс", price: 370, category: "accessory", img: "https://frankfurt.apollo.olxcdn.com/v1/files/4954xcwl4idh3-UZ/image;s=600x600"},
    {id: 82, name: "Sony M6 Black", desc: "Наушники Sony M6", price: 330, category: "accessory", img: "https://i.ytimg.com/vi/wtCmdWaXqYo/maxresdefault.jpg"}
];

// Корзина и глобальные переменные
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';

// DOM элементы
const productsContainer = document.getElementById('productsContainer');
const cartItemsList = document.getElementById('cartItemsList');
const cartTotalPriceSpan = document.getElementById('cartTotalPrice');
const finalInstructionDiv = document.getElementById('finalInstruction');
const checkoutButton = document.getElementById('checkoutButton');
const mobileCartBtn = document.getElementById('mobileCartBtn');
const categoryButtons = document.querySelectorAll('.cat-btn');

// Ссылка на ваш Telegram
const telegramBotLink = "https://t.me/ALIBABO777";

// Функция отрисовки товаров
function renderProducts(category = 'all') {
    currentCategory = category;
    productsContainer.innerHTML = '';

    // Фильтрация товаров по категории
    const filteredProducts = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    // Если товаров нет
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:40px; color:#888;">
                <i class="fas fa-box-open" style="font-size:3rem; margin-bottom:15px; display:block;"></i>
                Товары не найдены
            </div>
        `;
        return;
    }

    // Отрисовка каждого товара
    filteredProducts.forEach(product => {
        const productEl = document.createElement('div');
        productEl.className = 'product-card';
        productEl.innerHTML = `
            <div class="product-img">
                <img src="${product.img}" alt="${product.name}"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/250x180/ECEFF1/607d8b?text=Нет+фото'">
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <p style="color:#666; font-size:0.9rem; height:40px; margin-bottom:10px;">${product.desc}</p>
                <div class="product-price">$${product.price}</div>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> В корзину
                </button>
                <button class="buy-now" data-id="${product.id}">
                    <i class="fas fa-bolt"></i> Купить сейчас
                </button>
            </div>
        `;
        productsContainer.appendChild(productEl);
    });

    // Добавляем обработчики событий для кнопок
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('button').dataset.id);
            addToCart(productId);
        });
    });

    document.querySelectorAll('.buy-now').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('button').dataset.id);
            buyNow(productId);
        });
    });
}

// Функция добавления в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }

    updateCart();

    // Визуальная обратная связь
    const addButton = event.target.closest('.add-to-cart');
    if (addButton) {
        const originalHTML = addButton.innerHTML;
        addButton.innerHTML = '<i class="fas fa-check"></i> Добавлено';
        addButton.style.background = '#4caf50';
        addButton.style.color = 'white';

        setTimeout(() => {
            addButton.innerHTML = originalHTML;
            addButton.style.background = '';
            addButton.style.color = '';
        }, 1500);
    }
}

// Функция "Купить сейчас"
function buyNow(productId) {
    addToCart(productId);
    finalInstructionDiv.style.display = 'block';

    // Прокрутка к корзине на мобильных устройствах
    if (window.innerWidth <= 992) {
        document.querySelector('.cart-sidebar').scrollIntoView({ behavior: 'smooth' });
    }
}

// Функция обновления корзины
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

// Функция отрисовки товаров в корзине
function renderCartItems() {
    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
        cartTotalPriceSpan.textContent = '0';
        finalInstructionDiv.style.display = 'none';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <div class="cart-item-title">
                <strong>${item.name}</strong><br>
                <small style="color:#888;">$${item.price} × ${item.quantity} шт.</small>
            </div>
            <div style="font-weight:bold;">$${itemTotal}</div>
            <button class="remove-item" data-id="${item.id}" title="Удалить">
                <i class="fas fa-times"></i>
            </button>
        `;
        cartItemsList.appendChild(itemEl);
    });

    // Добавляем обработчики для кнопок удаления
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('button').dataset.id);
            removeFromCart(productId);
        });
    });

    cartTotalPriceSpan.textContent = total;
    finalInstructionDiv.style.display = 'block';
}

// Функция удаления из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Функция оформления заказа (переход в Telegram)
function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста! Добавьте товары перед оформлением заказа.');
        return;
    }

    // Формирование сообщения для Telegram
    const cartSummary = cart.map(item =>
        `${item.name} - ${item.quantity} шт. × $${item.price} = $${item.price * item.quantity}`
    ).join('%0A');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const message = `Заказ с сайта TechStore:%0A%0A${cartSummary}%0A%0AИтого: $${total}%0A%0AКонтактные данные клиента:`;

    // Открытие Telegram с предзаполненным сообщением
    window.open(`${telegramBotLink}?text=${encodeURIComponent(message)}`, '_blank');
}

// Функция инициализации
function init() {
    // Отрисовка всех товаров при загрузке
    renderProducts();

    // Отрисовка корзины
    updateCart();

    // Показываем инструкцию, если в корзине уже есть товары
    if (cart.length > 0) {
        finalInstructionDiv.style.display = 'block';
    }

    // Обработчики кнопок категорий
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });

    // Обработчик кнопки корзины на мобильных
    if (mobileCartBtn) {
        mobileCartBtn.addEventListener('click', () => {
            document.querySelector('.cart-sidebar').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Обработчик кнопки оформления заказа
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkout);
    }
}

// Запуск приложения при полной загрузке DOM
document.addEventListener('DOMContentLoaded', init);

// Экспорт функций для использования в консоли разработчика (опционально)
window.shopApp = {
    products,
    cart,
    addToCart,
    removeFromCart,
    updateCart,
    renderProducts,
    checkout
};