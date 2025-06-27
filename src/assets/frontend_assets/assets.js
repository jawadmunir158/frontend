import p_img1 from './p_img1.png'
import p_img2_1 from './p_img2_1.png'
import p_img2_2 from './p_img2_2.png'
import p_img2_3 from './p_img2_3.png'
import p_img2_4 from './p_img2_4.png'
import p_img3 from './p_img3.png'
import p_img4_1 from './p_img4_1.png'
import p_img4_2 from './p_img4_2.png'

import p_img5 from './p_img5.png'
import p_img6_1 from './p_img6_1.png'
import p_img6_2 from './p_img6_2.png'

import p_img7_1 from './p_img7_1.png'
import p_img7_2 from './p_img7_2.png'
import p_img8_1 from './p_img8_1.png'
import p_img8_2 from './p_img8_2.png'


import p_img9 from './p_img9.png'
import p_img10 from './p_img10.png'
import p_img11 from './p_img11.png'
import p_img12 from './p_img12.png'
import p_img13 from './p_img13.png'
import p_img14 from './p_img14.png'
import p_img15 from './p_img15.png'
import p_img16 from './p_img16.png'
import p_img17 from './p_img17.png'
import p_img18 from './p_img18.png'
import p_img19 from './p_img19.png'


import logo from './logo.png'

import hero_img from './hero_img.png'
import hero_img2 from './hero_img2.png'
import hero_img3 from './hero_img3.png'
import hero_img4 from './hero_img4.png'

import video1 from './video1.mp4'

import collection1 from './collection1.png'
import collection2 from './collection2.png'
import collection3 from './collection3.png'
import offer_banner1 from './offer_banner1.png'
import offer_banner2 from './offer_banner2.png'
import pay from './pay.png'

import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'

export const assets = {
    logo,

    hero_img,
    hero_img2,
    hero_img3,
    hero_img4,
    pay,

    video1,
    collection1,
    collection2,
    collection3,
    offer_banner1,
    offer_banner2,

    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Blis",
        description: "Creams Which makes you clean and Smooth.",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Creams",
        
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaab",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Men",
        subCategory: "Topwear",
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Lotus Creams",
        description: "Face Creams.",
        price: 220,
        image: [p_img3],
        category: "Kids",
        subCategory: "Creams",
       
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "aaaad",
        name: "Granier Creams",
        description: "Creams.",
        price: 110,
        image: [p_img4_1,p_img4_2],
        category: "Men",
        subCategory: "Creams",
        
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaae",
        name: "Ponds Cream",
        description: "Cream.",
        price: 130,
        image: [p_img5],
        category: "Women",
        subCategory: "Creams",
        
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Face Wash",
        description: "Natural Serum.",
        price: 140,
        image: [p_img6_1,p_img6_2],
        category: "Women",
        subCategory: "Face-Wash",
      
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Simple FaceWash",
        description: "Simple is Best and Pure Natural Face-Wash.",
        price: 190,
        image: [p_img7_1,p_img7_2],
        category: "Men",
        subCategory: "Face-Wash",
        
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "aaaah",
        name: "Ponds Face-Wash",
        description: "Face-Wash.",
        price: 140,
        image: [p_img8_1,p_img8_2],
        category: "Men",
        subCategory: "Face-Wash",
        
        date: 1716622345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img9],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621235448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img10],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        date: 1716622235448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 120,
        image: [p_img11],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716623345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [p_img12],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624445448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img13],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716625545448,
        bestseller: false
    },
    {
        _id: "aaaan",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img14],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716626645448,
        bestseller: false
    },
    {
        _id: "aaaao",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img15],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627745448,
        bestseller: false
    },
    {
        _id: "aaaap",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [p_img16],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716628845448,
        bestseller: false
    },
    {
        _id: "aaaaq",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [p_img17],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716629945448,
        bestseller: false
    },
    {
        _id: "aaaar",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img18],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716631045448,
        bestseller: false
    },
    {
        _id: "aaaas",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img19],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        date: 1716632145448,
        bestseller: false
    },
 
]