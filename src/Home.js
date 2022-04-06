import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          // alt="We ship over 45 million products around the world"
          src=" https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="We ship over 45 million products around the world"
        />
        {/* https://www.mobiledekho.com/wp-content/uploads/2018/01/800x500-7-1.jpg */}
        <div className="home__row">
          <Product
            id="12321341"
            title="Skytech Gaming Archangel Gaming Computer PC Desktop Ryzen 5 5600X 3.7GHz, RTX 3060 TI 8G, 1TB NVMe SSD, 16GB DDR4 3200MHz, RGB Fans, Windows 10 Home 64-bit, 802.11AC Wi-Fi, White"
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/71pczXb2vaL._AC_SX522_.jpg"
          />
          <Product
            id="49543543459"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="99903850"
            title="4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg"
          />
        </div>{" "}
        <div className="home__row">
          <Product
            id="549957492096"
            title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />

          <Product
            id="49538094"
            title="Acer Aspire 5 A515-56-36UT, 15.6 Full HD Display, 11th Gen Intel Core i3-1115G4 Processor, 4GB DDR4, 128GB NVMe SSD, WiFi 6, Windows 11 Home (S Mode)"
            price={356.49}
            rating={5}
            image="https://m.media-amazon.com/images/I/41rbgzJ5SPL._AC_SY580_.jpg"
          />
        </div>{" "}
        <div className="home__row">
          <Product
            id="242953180394"
            title="Rack'Em 4 Pair Boot Rack & Wader Hanger , 4.5H x 35.25W"
            price={35}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-xG6SvPVS._AC_UL320_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="325343543435"
            title="Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard"
            price={(1, 269.0)}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71nz3cIcFOL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>{" "}
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>{" "}
        <div className="home__row">
          <Product
            id="595742960"
            title="Sceptre Curved 30 21:9 Gaming LED Monitor 2560x1080p UltraWide Ultra Slim HDMI DisplayPort Up to 85Hz MPRT...."
            price={214.89}
            rating={5}
            image="https://m.media-amazon.com/images/I/71mU5rpECpL._AC_UL320_.jpg"
          />
          <Product
            id="024531394"
            title="Apple AirPods (2nd Generation) High Quality"
            price={159.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg"
          />
        </div>{" "}
        <div className="home__row">
          <Product
            id="49038502121"
            title="Vault by Pelican - v525 Case with Padded Dividers for Camera, Drone, Equipment, Electronics, and Gear (Black)"
            price={189}
            rating={5}
            image="https://m.media-amazon.com/images/I/71H6zKsQUqS._AC_UL320_.jpghttps://m.media-amazon.com/images/I/71H6zKsQUqS._AC_UL320_.jpg"
          />
          <Product
            id="2344593011"
            title="Sceptre 20 1600x900 75Hz Ultra Thin LED Monitor 2x HDMI VGA Built-in Speakers, Machine Black Wide Viewing Angle 170°"
            price={220.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51v6h2TfPCL._AC_UL320_.jpg"
          />
          <Product
            id="32511543435"
            title="SAMSUNG 23.5” CF396 Curved Computer Monitor, AMD FreeSync for Advanced Gaming, 4ms Response Time, Wide"
            price={174.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/91ubktnbNVL._AC_UL320_.jpg"
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Home;
