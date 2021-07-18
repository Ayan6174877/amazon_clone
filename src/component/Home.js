import React from "react";
import Product from "./Product";
import ProductHorizontal from "./ProductHorizontal";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          stopOnHover={true}
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              alt="Mobiles"
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
              data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
            />
          </div>
          <div>
            <img
              alt="Mobiles"
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
              data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
            />
          </div>
          <div>
            <img
              alt="Mobiles"
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
              data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
            />
          </div>
          <div>
            <img
              alt="Mobiles"
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
              data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
            />
          </div>
          <div>
            <img
              alt="Mobiles"
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
              data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg"
            />
          </div>
          <div>
            <img
              alt="Mobiles"
              className="home__image"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
              data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
            />
          </div>
        </Carousel>

        <div className="product__row">
          <div className="custom-container">
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery. Click here to go to
            amazon.in
          </div>

          <div className="home__row">
            {/* pass a string normally and use curly braces when passsing a number via prope */}
            <Product
              id="12321341"
              category="Find your ideal TV"
              itemCname="single__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
              ]}
            />
            <Product
              id="49538094"
              category="Gaming Accessories"
              itemCname="multiple__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
              ]}
            />
            <Product
              id="4903850"
              category="Computers & Accessories"
              itemCname="single__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
              ]}
            />
            <Product
              id="4903867"
              category="Get fir at home"
              itemCname="single__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg",
              ]}
            />
            <Product
              id="7413867"
              category="Oculus"
              itemCname="single__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg",
              ]}
            />
            <Product
              id="49538094"
              category="Gaming merchandise"
              itemCname="multiple__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg",
              ]}
            />
            <Product
              id="4538094"
              category="Confy styles for her"
              itemCname="multiple__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg",
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg",
              ]}
            />
            <Product
              id="74176167"
              category="Shop Laptops & Tablets"
              itemCname="single__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",
              ]}
            />

            <Product
              id="74176247"
              category="AmazonBasics"
              itemCname="single__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
              ]}
            />
            <Product
              id="14176247"
              category="Explore home bedding"
              itemCname="single__item"
              image={[
                "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg",
              ]}
            />
          </div>
          <div className="home__row">
            <ProductHorizontal
              id="12321341"
              category="Amazon Top Sellers"
              image={[
                "https://m.media-amazon.com/images/I/41KL+iXUXCL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/41W5-duvLkL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/41Pf-FgUROL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/51C17DrwacL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/21yeJrq-DmS._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/31WocBK6ZHL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/41dpVipelxL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/41cEMMExIoL._AC_SY200_.jpg",
                "https://m.media-amazon.com/images/I/512oFPKZ82L._AC_SY200_.jpg",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
