import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import chatlogo from './images/store-chat-specialist-icon_AV3.jpg';
import mac_image from './images/mac.png';
import iphone from './images/iphone.png';
import ipad from './images/ipad.png';
import iwatch from './images/iwatch.png';
import airtag from './images/airtag.png';
import appletv from './images/appletv.png';
import homepod from './images/homepod.png';
import iacce from './images/accessories.png';
import airpods from './images/airpods.png';
import applelogo from './images/new_apple_logo.png';
import Card from './Components/Card';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';
function App() {
  return (
    <>
    <div class="part-one">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src={applelogo} width={56} height={56}></img></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">

                <a class="nav-link active" href="#">Store</a>
                <a class="nav-link active" href="#">Mac</a>
                <a class="nav-link active" href="#">ipad</a>
                <a class="nav-link active" href="#">iphone</a>
                <a class="nav-link active" href="#">Watch</a>
                <a class="nav-link active" href="#">TV&Home</a>
                <a class="nav-link active" href="#">Only On Apple</a>
                <a class="nav-link active" href="#">Accessories</a>
                <a class="nav-link active" href="#">Support</a>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class ="part-two">
        <p>Get No Cost EMI for 3, 6 or 12 months with qualifying Credit Cards from most leading banks.<a href="https://www.apple.com/in/shop/ways-to-buy">LearnMore</a></p>
      </div>
      <div class ="part-three">
        <div class="container">
          <div class="row ">
            <div class="col">
              <h1><b>Store.The best way to buy the Products you love</b></h1>
            </div>
            <div class="col">
              <div class="container">
                <div class="row ">
                  <div class="col">
                    <img src={chatlogo}></img><br></br>
                    <p>Need Shopping help ?<br></br><a href="">Ask a specialist</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class ="part-four">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              <img src={mac_image} width={120} height={80}></img><br></br>Mac
            </div>
            <div class="col">
              <img src={iphone} width={120} height={80}></img>
            </div>
            <div class="col">
              <img src={ipad} width={120} height={80}></img>
            </div>
            <div class="col">
              <img src={iwatch} width={120} height={80}></img>
            </div>
            <div class="col">
              <img src={airpods} width={120} height={80}></img>
            </div>
            <div class="col">
              <img src={airtag} width={120} height={80}></img>
            </div>
            <div class="col">
              <img src={appletv} width={120} height={80}></img>
            </div>
            <div class="col">
              <img src={homepod} width={120} height={80}></img>
            </div>
            <div class="col">
              <img src={iacce} width={120} height={80}></img>
            </div>
          </div>
        </div>
      </div>
      <div class="part-five">
        <h3>The latest. Take a look at what’s new right now.</h3>
      </div>
      <div class ="part-six">
        <div class="horizontal-scroll">
          <div class="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight" >
              <Card
                mobilename="IPHONE 13 PRO"
                caption="Oh.So.Pro"
                Availablecost="Now in Alpine Green From Rs 119900.00"
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290504"
                
              >
              </Card>
            </div>
            <div class="p-2 bd-highlight" style={{color : "white"}}>
              <Card
                mobilename="IPAD AIR"
                caption="Light. Bright. Full of Might"
                Availablecost="From Rs 54900.00"
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645636337374">
              </Card>
            </div>
            <div class="p-2 bd-highlight">
              <Card
                mobilename="MAC STUDIO"
                caption="Empower Station"
                Availablecost="From Rs 189900.00"
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-mac-studio-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848581">
              </Card>
            </div>
            <div class="p-2 bd-highlight">
              <Card
                mobilename="STUDIO DISPLAY"
                caption="A Sight to be Bold"
                Availablecost="From Rs 159900"
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-studio-display-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848762">
              </Card>
            </div>
            <div class="p-2 bd-highlight">
              <Card
                mobilename="IPHONE SE"
                caption="LOVE THE POWER , LOVE THE PRICE"
                Availablecost="From Rs 43900"
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-se-202203_GEO_EMEA?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645721593443">
              </Card>
            </div>
            <div class="p-2 bd-highlight">
              <Card
                mobilename="IPHONE 13"
                caption="Your New Super Power"
                Availablecost="Now in Green From Rs 69900"
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-13-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290452">
              </Card>
            </div>
            <div class="p-2 bd-highlight">
              <Card
                mobilename="APPLE WATCH BRANDS"
                caption="New hues in bloom"
                Availablecost="Shop the latest band styles and colors"
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-bands-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052880599">
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div class="part-seven">
        <h2>Accessories. Essentials that pair perfectly with your favourite devices.</h2>
      </div>
      <div class="part-eight">
        <div class="d-flex flex-row bd-highlight mb-3">

          <div class="p-2 bd-highlight">
            <Card2
              text="New Iphone13 Pro Silicon case with Mag Safe - Nectarine"
              imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN683?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645997365583"
              price="From Rs 4900 (incl of all taxes)"
            >
            </Card2>
          </div>
          <div class="p-2 bd-highlight">
            <Card2
              text="New Iphone SE Silcon Case - Chalk Pink"
              imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN6G3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645509710532"
              price="From Rs 3500 (incl of all taxes)"
            >
            </Card2>
          </div>
          <div class="p-2 bd-highlight">
            <Card2
              text="New Iphone13 Silicon case with Mag Safe - Blue fog"
              imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN613?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645847133062"
              price="From Rs 4900 (incl of all taxes)"
            >
            </Card2>
          </div>
          <div class="p-2 bd-highlight">
            <Card2
              text="Iphone Leather wallet with Magsafe - Whisteria"
              imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM0W3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1629865215000"
              price="From Rs 5500 (incl of all taxes)"
            >
            </Card2>
          </div>
          <div class="p-2 bd-highlight">
            <Card2
              text="45mm Flemingo Braided Solo loop - Size 6"
              imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN1L3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645079879837"
              price="From Rs 7900 (incl of all taxes)"
            >
            </Card2>
          </div>
          <div class="p-2 bd-highlight">
            <Card2
              text="Airtag loop - Forest Green"
              imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM013?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1624640873000"
              price="From Rs 3990 (incl of all taxes)"
            >
            </Card2>
            </div>
        </div>
      </div>
      <div class="part-nine">
        <h1>Loud and clear. Unparalleled choices for rich, high-quality sound.</h1>
      </div>
      <div class="part-ten">
        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <Card2
            imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000"
            text="Airpods (3rd Generation)"
            price="MRP Rs 18500 (including all taxes)"
            >
           </Card2>
          </div>
          <div class="p-2 bd-highlight">
            <Card2
            imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591634795000"
            text="Airpods Pro"
            price="MRP Rs 24900 (including all taxes)"
            >
           </Card2>
          </div>
          <div class="p-2 bd-highlight">
            <Card2
            imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-orange-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925511000"
            text="HomePod mini - Orange"
            price="MRP Rs 9900 (including all taxes)"
            >
           </Card2>
          </div>
          <div class="p-2 bd-highlight">
            <Card2
            imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000"
            text="Airpods Max - Silver"
            price="MRP Rs 59900 (including all taxes)"
            >
           </Card2>
          </div>
        </div>
      </div>
    <div class = "part-eleven">
      <h1>Do more with Apple products. Here’s where the fun begins.</h1>
    </div>
    <div class = "part-twelve">
    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">
          <Card3
          text="Four Apple Services. One Easy Subscription"
          imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375547000"
          >
         </Card3>
        </div>
        <div class="p-2 bd-highlight">
          <Card3
          text="See How One App Can Control your Entire Home"
          imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-homekit-202110_GEO_IN?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1634069675000"
          >
         </Card3>
        </div>
      </div>
    </div>
    <div class="part-thirteen">
      <h1>Shop by group. Get specially designed pricing.</h1>
    </div>
    <div class="part-fourteen">
        <Card3
          text="Solve On ipad or Mac with Educational Pricing"
          imageurl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-edu-202108_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627513224000"
          >
         </Card3>
    </div>
    </>
  );


}

export default App;
