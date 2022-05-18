import React from 'react'
import cartIcon from './images/icon-cart.svg'
import logo from './images/logo.svg'
import avatarImage from './images/image-avatar.png'
import productImage1 from './images/image-product-1.jpg'

import minus from './images/icon-minus.svg'
import plus from './images/icon-plus.svg'
import burger from './images/icon-menu.svg'
import close from './images/icon-close.svg'
import deleteIcon from './images/icon-delete.svg'
import Slider from './Slider'
function App() {

  const [amount, setAmount] = React.useState(0)
  const [total, setTotal] = React.useState(0)
  const [cartAmount, setCartAmount] = React.useState(0)
  const [showImageSlider, setShowImageSlider] = React.useState(false)
  const [sliderIndex, setSliderIndex] = React.useState(1)

  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
  }

  function closeMenu() {
    const nav = document.querySelector('nav');
    nav.classList.remove('show');
  }

  function toggleCart() {
    const cart = document.querySelector('.cart')
    cart.classList.toggle('show');

  }

  function deleteCart() {
    setTotal(0)
    setCartAmount(0)
  }

  function addToCart() {
    setTotal(125 * amount)
    setCartAmount(amount)
  }

  function addAmount() {
    if(isNaN(amount)){
      setAmount(0)
    }
    setAmount(prevAmount => prevAmount + 1)
    console.log(amount)
  }

  function minusAmount() {
    if (amount !== 0) {
      setAmount(prevAmount => prevAmount - 1)
    }
  }
  
  return (
    <div className="App">
      <header>
        <nav>
          <div style={{display:'flex',alignItems:'center',gap:'30px'}}>
          <div onClick={toggleMenu} className='menu'>
            <img className='burger' src={burger} />
            <img className='close' src={close} />
          </div>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <ul className='links'>
            <div className='overlay' onClick={closeMenu}></div>
            <li onClick={closeMenu}><a href='#'>Collections</a></li>
            <li onClick={closeMenu}><a href='#'>Men</a></li>
            <li onClick={closeMenu}><a href='#'>Women</a></li>
            <li onClick={closeMenu}><a href='#'>About</a></li>
            <li onClick={closeMenu}><a href='#'>Contact</a></li>
          </ul>
          </div>
          <div style={{display:'flex',gap:'30px',alignItems:'center'}}>
          <div className='cart-container'>
            <div className='cart-icon'>
              <img className='icon' onClick={toggleCart} src={cartIcon} alt="cart-icon" />
              {cartAmount !== 0 && <span className='notification'>{cartAmount}</span>
              }
            </div>

            <div className='cart'>
              <div className='cart-header'>Cart</div>
              <div className='cart-content'>
                {total === 0 ? (
                  <>
                    <div className='empty-cart'>Your cart is empty.</div>
                  </>
                )
                  :
                  (
                    <>
                      <img className='cart-content-image' src={productImage1} />
                      <div className='cart-content-text'>
                        <div className='cart-content-text-title'>
                          Autumn Limited Edition...
                        </div>
                        <div className='cart-content-text-price'>
                          $125.00 * {cartAmount} <span className='total'>${total}</span>
                        </div>
                      </div>
                      <div onClick={deleteCart} className='delete-cart'>
                        <img src={deleteIcon} alt="delete-icon" />
                      </div>
                      <button className='cart-btn'>Checkout</button>
                    </>
                  )
                }
              </div>
            </div>
          </div>
          <div className='avatar'>
            <img src={avatarImage} alt="avatar" />
          </div>
          </div>
        </nav>
      </header>
      <main>
        <Slider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex} className=''  open={()=>setShowImageSlider(true)} sliderNavigation={true}/>
        {showImageSlider && <Slider sliderIndex={sliderIndex} setSliderIndex={setSliderIndex}  className='-desktop' close={()=>setShowImageSlider(false)} sliderNavigation={true}/>}
        <div className='content'>
          <span className='company-name'>SNEAKER COMPANY</span>
          <h1 className='content-header'>Fall Limited Edition Sneakers</h1>
          <p className='content-description'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className='content-price'>
            <div >
              <span className='price'>$125.00</span>
              <span className='price-discount'>50%</span>
            </div>
            <span className='price-old'>$250.00</span>
          </div>
          <div className='counter'>
            <div onClick={minusAmount} className='minus'>
              <img src={minus} alt='minus'/>
            </div>
            <input type='number' onChange={(e) => setAmount(parseInt(e.target.value))} value={amount} className='amount' />
            <div className='plus' onClick={addAmount}>
              <img src={plus} />
            </div>
          </div>
          <button onClick={addToCart} className='add-to-cart'><img src={cartIcon} /> Add to Cart</button>
        </div>
      </main>
    </div>
  );
}

export default App;
