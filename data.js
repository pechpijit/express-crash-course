const data = [
  {
    id: 1,
    name: "ข้าวมันไก่ไหหลำนายจิว - ถนนดินสอ",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZE1VN5KVEVEGX/hero/5819f2072fed4be9a7a4ccbbc2198626_1590131373308341816.jpeg",
    type: "อาหารตามสั่ง",
  },
  {
    id: 2,
    name: "McDonald's (แมคโดนัลด์) - ราชดำเนิน",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/AWh64KYIZXYdMpch2Zem/hero/ace44936d347484c9ba96cd338c370ae_1637508628439085117.png",
    type: "แฮมเบอร์เกอร์, ฟาสต์ฟู้ด, ไก่ทอด",
  },
  {
    id: 3,
    name: "ข้าวมันไก่เฉิงกง - ถนนวรจักร",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZDCJEBWBCBTBA/hero/df07dda478344a819f7adf568cc91704_1588933557736164322.jpeg",
    type: "Coupon, อาหารตามสั่ง",
  },
  {
    id: 4,
    name: "ป้าติ๋ม น้ำเพื่อสุขภาพ - เทเวศร์ซอย 2",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2XCLFNTKA63CA/hero/d0be75e62aa84d1a8d10316e21a1355d_1628482024179604669.jpg",
    type: "น้ำผลไม้/สมูทตี้",
  },
  {
    id: 5,
    name: "หมูปลาร้าฮีโร่ - แยกคอกวัว(เจ้าอร่อยไปรษณีย์ราชดำเนิน)",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZN1HB3BFA5CGX/hero/0be2d97326164d5f8dce80f73186e06f_1633409173564131478.jpeg",
    type: "Coupon, อาหารตามสั่ง",
  },
  {
    id: 6,
    name: "Burger King (เบอร์เกอร์ คิง) - จักรพงษ์",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2DKRBKGC3B3MA/hero/82c398c635844ccf850f8f57177086e2_1637508633493400387.png",
    type: "ฟาสต์ฟู้ด, แฮมเบอร์เกอร์, ไก่ทอด",
  },
  {
    id: 7,
    name: "เก๋อาหารตามสั่ง - ถนนมหาจักร",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZEXHF3KERJFGA/hero/da744dc7c52c481aa383aed9cd16b0b6_1589532114847970839.jpeg",
    type: "อาหารตามสั่ง",
  },
  {
    id: 8,
    name: "ข้าวมันไก่ตอนสะพานเหล็ก อร่อยข่อง5 - ถนนบริพัตร",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZLCAKWENFNVUA/hero/2c6b026224894256a38f26ef2e34a060_1620791821892039253.jpeg",
    type: "Coupon, สตรีทฟู้ด",
  },
  {
    id: 9,
    name: "พระศุลีเกสทเฮ้าส์ - ถนนดินสอ",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZDJLKJEDAVAE2/hero/bca9070c0c964cb889dbe543eeef61d2_1587008101690373547.jpeg",
    type: "Coupon, Cooked to Order",
  },
  {
    id: 10,
    name: "ก๋วยเตี๋ยวเป็ดย่างบางลำพู (เจ้าเก่า) - ถนนจักรพงษ์",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2MZEEV1HEVAPA/hero/77d61c788829485a88aa972911af30ed_1617869715996912916.jpeg",
    type: "Coupon, Noodles",
  },
  {
    id: 11,
    name: "ออน ล๊อก หยุ่น (On Lok Yun) - วังบูรพาภิรมย์",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2JVR3DDPBWUTA/hero/5155ca7d63794238919598ba3852190c_1611574458083453223.jpeg",
    type: "Breakfast & Brunch",
  },
  {
    id: 12,
    name: "กะเพราเผ็ด &​ กาแฟสด พิก มี อัพ -ราชบพิธ",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2VVAJ5CCFXHJJ/hero/100695d016524162bc55e3afc2c5770d_1629194434878247234.jpeg",
    type: "Cooked to Order",
  },
  {
    id: 13,
    name: "ข้าวหมูทอด krit - ถนนศิริพงษ์",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-CZKZN8MVEUTJEA/hero/c3ab80aeebac42f59d41d3cf14a50504_1594112097107461277.jpeg",
    type: "Coupon, Rice Bowls",
  },
  {
    id: 14,
    name: "ฝนฟิวข้าวหมูแดงหมูกรอบบะหมี่เกี๊ยว ก๋วยเตี๋ยว - ถนนดำรงรักษ์",
    imageURL:
      "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/3-C2A2RJXDT76ZAJ/hero/2aedcf90b2594083a20db8dd6207df69_1601969938572296078.jpeg",
    type: "Rice Bowls",
  },
];

module.exports = data;
