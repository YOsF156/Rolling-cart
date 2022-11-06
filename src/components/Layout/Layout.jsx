import Header from "../Header/Header"
import Main from "../Main/Main"

let products =
    [

        { title: 'Samsung Galaxy S22 Ultra SM-S908E/DS 256GB 12GB RAM', img: 'https://img.zap.co.il/pics/1/7/5/9/68429571b.gif', price: '4,945 - 3,605 ₪', storage: 15, category: "Samsung" }
        ,
        { title: 'Apple iPhone 14 Pro Max 256GB', img: 'https://img.zap.co.il/pics/3/5/7/8/74188753b.gif', price: '6,699 - 5,486 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Apple iPhone 13 128GB', img: 'https://img.zap.co.il/pics/1/0/3/3/65773301b.gif', price: '3,499 - 2,866 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Samsung Galaxy A73 5G SM-A736B/DS 128GB 8GB RAM', img: 'https://img.zap.co.il/pics/5/6/9/7/69337965b.gif', price: '2,099 - 1,513 ₪', storage: 15, category: "Samsung" }
        ,
        { title: 'Apple iPhone 14 Pro 256GB', img: 'https://img.zap.co.il/pics/3/4/7/8/74188743b.gif', price: '6,398 - 4,789 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Samsung Galaxy S22 SM-S901E/DS 128GB 8GB RAM', img: 'https://img.zap.co.il/pics/new/142151516565b.gif', price: '3,100 - 2,215 ₪', storage: 15, category: "Samsung" }
        ,
        { title: 'Samsung Galaxy S21 FE 5G SM-G990E/DS 128GB 8GB', img: 'https://img.zap.co.il/pics/6/6/1/4/67604166b.gif', price: '2,449 - 1,595 ₪', storage: 15, category: "Samsung" }
        ,
        { title: 'Apple iPhone 14 128GB', img: 'https://img.zap.co.il/pics/1/2/7/8/74188721b.gif', price: '4,199 - 3,189 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Samsung Galaxy A53 5G SM-A536E/DS 128GB 8GB RAM', img: 'https://img.zap.co.il/pics/5/7/1/0/68860175b.gif', price: '1,799 - 1,237 ₪', storage: 15, category: "Samsung" }
        ,
        { title: 'Apple iPhone 14 Pro 128GB', img: 'https://img.zap.co.il/pics/9/4/7/8/74188749b.gif', price: '5,490 - 4,725 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Samsung Galaxy S22 Plus SM-S906E/DS 256GB 8GB RAM', img: 'https://img.zap.co.il/pics/new/142151357362b.gif', price: '3,849 - 3,109 ₪', storage: 15, category: "Samsung" }
        ,
        { title: 'Xiaomi Redmi Note 11 128GB 6GB RAM', img: 'https://img.zap.co.il/pics/6/6/1/3/68103166b.gif', price: '1,079 - 690 ₪', storage: 15, category: "Xiaomi" }
        ,
        { title: 'Apple iPhone 13 Pro 256GB', img: 'https://img.zap.co.il/pics/0/8/4/0/65800480b.gif', price: '5,399 - 4,150 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Samsung Galaxy S20 FE 5G SM-G781B/DS 128GB 8GB RAM', img: 'https://img.zap.co.il/pics/3/6/4/1/58301463b.gif', price: '1,850 - 1,312 ₪', storage: 15, category: "Samsung" }
        ,
        { title: 'Apple iPhone 13 Pro 128GB', img: 'https://img.zap.co.il/pics/0/8/6/5/65675680b.gif', price: '4,699 - 3,850 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Apple iPhone 13 Pro Max 256GB', img: 'https://img.zap.co.il/pics/1/9/5/0/65890591b.gif', price: '5,355 - 4,785 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Apple iPhone 11 128GB', img: 'https://img.zap.co.il/pics/3/3/2/9/52789233b.gif', price: '2,690 - 1,989 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Samsung Galaxy A13 SM-A135F/DS 64GB 4GB RAM', img: 'https://img.zap.co.il/pics/3/6/2/5/69515263b.gif', price: '879 - 535 ₪', storage: 15, category: "Samsung" }
        ,
        { title: 'Apple iPhone 14 Pro Max 128GB', img: 'https://img.zap.co.il/pics/1/5/7/8/74188751b.gif', price: '6,399 - 5,215 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Apple iPhone 12 128GB', img: 'https://img.zap.co.il/pics/5/8/9/4/58314985b.gif', price: '3,699 - 2,546 ₪', storage: 15, category: "Apple" }
        ,
        { title: 'Xiaomi Poco X4 Pro 5G 256GB 8GB RAM', img: 'https://img.zap.co.il/pics/7/3/5/1/68931537b.gif', price: '1,578 - 1,125 ₪', storage: 15, category: "Xiaomi" }
        ,
        { title: 'Xiaomi Redmi Note 11 Pro 5G 128GB 8GB RAM', img: 'https://img.zap.co.il/pics/6/6/9/5/69465966b.gif', price: '1,629 - 1,092 ₪', storage: 15, category: "Xiaomi" }
        ,
        { title: 'Google Pixel 7 128GB 8GB RAM', img: 'https://img.zap.co.il/pics/0/4/3/0/74500340b.gif', price: '2,649 - 2,648 ₪', storage: 15, category: "Google" }
        ,
        { title: 'Samsung Galaxy S22 SM-S901E/DS 256GB 8GB RAM', img: 'https://img.zap.co.il/pics/0/0/4/0/68840400b.gif', price: '3,266 - 2,515 ₪', storage: 15, category: "Samsung" }

    ];

let categories = products.map((v) => v.category).filter((v, i, arr) => i === arr.indexOf(v))



function Layout() {
    return (
        <div className="layout-main">

            <Header categs={categories} />
            <Main products={products} />
        </div>
    )
}


export default Layout