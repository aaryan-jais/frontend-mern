import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
 const electronics = [
    { name: "4K Monitor", price: 85,"image":"https://www.wepc.com/wp-content/uploads/2019/05/DSC02079-1-scaled.jpg" },
    { name: "USB-C Charger", price: 85,"image":"https://m.media-amazon.com/images/I/61kvAOXDPLL._AC_.jpg" },
    { name: "Gaming Keyboard", price: 85, sale: 80.75,"image":"https://tse2.mm.bing.net/th/id/OIP.YEqIOqhGxyfrNGi3oUZ0eQHaEn?pid=Api&…" },
    { name: "Bluetooth Speaker", price: 20, sale: 19,"image":"https://m.media-amazon.com/images/I/71jDstMmLUL._AC_SL1500_.jpg" },
  ];
    const phones = [
    {
    "name": "Apple iPhone 14",
    "price": 999,
    "description": "Latest Apple iPhone with A15 Bionic chip, 6.1-inch display, and advanced camera system.",
    "image": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1660689596976",
    
  },
  {
    "name": "Samsung Galaxy S23",
    "price": 899,
    "description": "High-performance Android phone with 6.2-inch AMOLED display and triple camera setup.",
    "image": "https://cdn.mos.cms.futurecdn.net/bi2fE37yffyQnsVLKB6mxB-1920-80.jpg",
    
  },
  {
    "name": "Sony WH-1000XM5 Headphones",
    "price": 399,
    "description": "Industry-leading noise cancellation wireless headphones with 30-hour battery life.",
    "image": "https://tse1.mm.bing.net/th/id/OIP.bXc4P00aur4lEKsPSKGvTAHaE8?pid=Api&P=0&h=180",
   
  },
  {
    "name": "Apple MacBook Air M2",
    "price": 1199,
    "description": "Ultra-thin laptop with M2 chip, 13.6-inch Retina display, and all-day battery life.",
    "image": "https://tse1.mm.bing.net/th/id/OIP.J_C_ltP-XLSCClCRTcEdoAHaE8?pid=Api&P=0&h=180",
    
  },
  ];
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-all duration-500">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="pt-16">

        {/* 🌟 HERO BANNER */}
        <section
          className="relative h-[60vh] md:h-[90vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1470&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl max-w-180 leading-15 md:leading-22 md:text-7xl font-normal drop-shadow-lg mb-4 animate-fade-in">
              Upgrade Your Lifestyle, One Click Away
            </h1>
            <p className="text-lg pb-4 md:text-xl mb-6 opacity-90 animate-fade-in delay-200">
              Premium quality products at unbeatable prices.
            </p>
            <Link
              to="/products"
              className="bg-[#5E5E4A] from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 uppercase px-10  py-4  text-lg font-semibold shadow-lg transition transform hover:scale-105 animate-bounce"
            >
              Shop Now
            </Link>
          </div>
        </section>

        {/* ⭐ FEATURE HIGHLIGHTS */}
        <section className="py-20 bg-[#F3F3EF] dark:bg-gray-900 text-center">
          <h2 className="text-3xl md:text-6xl font-medium mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-20">
            {[
              { icon: "🚚", title: "Fast Delivery", desc: "Quick & reliable shipping." },
              { icon: "🛡️", title: "Secure Payments", desc: "100% encrypted checkout." },
              { icon: "💳", title: "Easy Returns", desc: "7-day hassle-free returns." },
              { icon: "⭐", title: "Top Quality", desc: "Premium hand-selected goods." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🛍️ SHOP BY CATEGORY */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900 px-6 md:px-10">
          <h2 className="text-3xl md:text-6xl font-medium text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Electronics", img: "https://img.freepik.com/premium-photo/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.jpg?w=2000", icon: "🔌" },
              { name: "Fashion", img: "https://tse1.mm.bing.net/th/id/OIP.ZMg-PsHAhHR13gKLm3OF0gHaEo?pid=Api&P=0&h=180", icon: "👗" },
              { name: "Home & Kitchen", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", icon: "🏠" },
            ].map((cat, i) => (
              <div
                key={i}
                className="relative group rounded-3xl overflow-hidden shadow-2xl hover:shadow-4xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 group-hover:via-black/40 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 text-5xl group-hover:scale-125 transform transition-all duration-500">{cat.icon}</div>
                <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white drop-shadow-lg group-hover:text-blue-400 transition-colors duration-500">{cat.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* 🏆 BEST SELLER PRODUCTS */}
           <section className="bg-[#D7D7CB]  dark:bg-gray-900 py-20 px-6 md:px-10">
        <h2 className="text-3xl md:text-6xl font-medium text-center mb-12">Most Popular</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[...electronics, ...phones].map((product, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center hover:shadow-2xl transition"
            >
              <div className="h-56 w-full mb-4 bg-gray-200 rounded-2xl flex items-center justify-center">
                {/* <span className="text-gray-400">Image</span> */}
               <img src= {product.image} alt="product"/>
              </div>
              <h3 className="font-bold text-lg">{product.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {product.sale ? (
                  <>
                    <span className="line-through mr-2">${product.price}</span>
                    <span className="text-red-500">${product.sale}</span>
                  </>
                ) : (
                  `$${product.price}`
                )}
              </p>
              <button className="mt-4 bg-[#5E5E4A]  text-white px-7  py-2 uppercase font-medium transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

        {/* ❤️ TESTIMONIALS */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800 px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-6xl font-medium mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Amazing service! Fast delivery.", author: "— Sarah" },
              { text: "High-quality and affordable!", author: "— Alex" },
              { text: "Excellent support and products.", author: "— John" },
            ].map((t, i) => (
              <div key={i} className="p-6 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1">
                <p className="text-gray-700 dark:text-gray-300">{t.text}</p>
                <h3 className="mt-4 font-bold">{t.author}</h3>
              </div>
            ))}
          </div>
        </section>

       

        {/* 🦶 FOOTER */}
        <footer className="py-8 bg-black dark:bg-gray-950 text-white text-center">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <p>© 2024 MyStore — All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="#" className="hover:text-blue-500 transition">Facebook</Link>
              <Link to="#" className="hover:text-blue-500 transition">Twitter</Link>
              <Link to="#" className="hover:text-blue-500 transition">Instagram</Link>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
