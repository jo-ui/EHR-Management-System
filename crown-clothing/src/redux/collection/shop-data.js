const SHOP_DATA = [
  {
    id: 1,
    title: "Mobile Phones",
    routeName: "mobile",
    items: [
      {
        id: 1,
        name: "iPhone 12 Pro Max",
        baseUrl:
          "data:image/jpeg;base64,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",
        imageUrl:
          "https://www.techinn.com/f/13782/137821848/apple-iphone-12-pro-max-6gb-128gb-6.7.jpg",
        price: 25,
      },
      {
        id: 2,
        name: "Samsung Galaxy S20",
        imageUrl:
          "https://images.samsung.com/levant/smartphones/galaxy-s20/models/images/galaxy-s20_models_360_kv_s.jpg",
        price: 18,
      },
      {
        id: 3,
        name: "Xiaomi 12",
        imageUrl:
          "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_12_und_12_Pro_Europa_Launch80.jpg",
        price: 35,
      },
      {
        id: 4,
        name: "iPhone 13 Pro - 128GB",
        imageUrl:
          "https://res-1.cloudinary.com/grover/image/upload/e_trim/c_limit,f_auto,fl_png8.lossy,h_1280,q_auto,w_1280/v1632144228/ksnuvyfn6njszpzjcly5.png",
        price: 25,
      },
    ],
  },
  {
    id: 2,
    title: "Computers",
    routeName: "computers",
    items: [
      {
        id: 10,
        name: "iMac Apple",
        imageUrl:
          "https://www.apple.com/newsroom/images/product/mac/standard/Apple-iMac-gets-2x-more-performance-03192019_big.jpg.large.jpg",
        price: 220,
      },
      {
        id: 11,
        name: "Omen",
        imageUrl:
          "https://mspoweruser.com/wp-content/uploads/2017/06/hp-omen-laptop.jpg",
        price: 280,
      },
      {
        id: 12,
        name: "HP Laptop",
        imageUrl:
          "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/How%20to%20Choose%20the%20Best%20Laptop%20for%20You%20hero1629234160688549.jpg",
        price: 110,
      },
      {
        id: 13,
        name: "ASUS Laptop",
        imageUrl:
          "https://www.asus.com/event/30th-anniversary/30-years-of-asus/img/2019-UX581.jpg",
        price: 160,
      },
    ],
  },
  {
    id: 3,
    title: "headphones",
    routeName: "headphones",
    items: [
      {
        id: 18,
        name: "ANC Headphones",
        imageUrl:
          "https://freshnrebel.com/media/6f/f2/fa/1627375970/8720249800606_1.jpg",
        price: 125,
      },
      {
        id: 19,
        name: "boAt Rockerz",
        imageUrl: "https://m.media-amazon.com/images/I/315vj6oj-FL.jpg",
        price: 90,
      },
      {
        id: 20,
        name: "bit headphone",
        imageUrl:
          "https://ak.picdn.net/shutterstock/videos/7728163/thumb/1.jpg",
        price: 90,
      },
      {
        id: 21,
        name: "New Headphones 2022",
        imageUrl:
          "https://www.rollingstone.com/wp-content/uploads/2020/02/best-luxury-headphones-e1582232323636.jpg?resize=1800,1200&w=1800",
        price: 165,
      },
    ],
  },
  {
    id: 4,
    title: "AirPods",
    routeName: "airpods",
    items: [
      {
        id: 23,
        name: "Apple AirPods",
        imageUrl:
          "https://www.techinn.com/f/13737/137370580/apple-airpods-pro-wireless-headphones.jpg",
        price: 125,
      },
      {
        id: 24,
        name: "black AirPods",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-7zociB2r1aWyzV1CIHA4-IYVg_rcA16Lw&usqp=CAU",
        price: 90,
      },
      {
        id: 25,
        name: "AirPods Max 2",
        imageUrl:
          "https://www.imore.com/sites/imore.com/files/styles/large_wm_blw/public/field/image/2020/12/airpods-max-side.jpg",
        price: 90,
      },
      {
        id: 26,
        name: "Apple review",
        imageUrl:
          "https://i.guim.co.uk/img/media/4d2b7ac379d13ff9b8872e5b3592501567878bae/716_680_3583_2151/master/3583.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=e93719532dbadbfa1c98b27a10a6931c",
        price: 165,
      },
      {
        id: 27,
        name: "Max",
        imageUrl:
          "https://i.guim.co.uk/img/media/ad9bff0b68155bafb13aaaffd399dc9a92f683a1/0_359_5456_3273/master/5456.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=1c4b85364282534d6c221e64a2d85675",
        price: 185,
      },
    ],
  },
  {
    id: 5,
    title: "Watch",
    routeName: "watch",
    items: [
      {
        id: 28,
        name: "boAt Storm",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771",
        price: 325,
      },
      {
        id: 29,
        name: "HUAWEI Watch",
        imageUrl:
          "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-3/img/id/huawei-watch-3-strap-1-1.png",
        price: 20,
      },
      {
        id: 30,
        name: "Apple series 7",
        imageUrl:
          "https://cdn.hawkdive.com/media/allthings.how-how-to-fix-microsoft-store-not-opening-issue-on-windows-11-image-7-1.jpg",
        price: 25,
      },
      {
        id: 31,
        name: "Piraso Analog",
        imageUrl:
          "https://m.media-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg",
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;
