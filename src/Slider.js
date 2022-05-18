import React from 'react'
import productImage1 from './images/image-product-1.jpg'
import productImage2 from './images/image-product-2.jpg'
import productImage3 from './images/image-product-3.jpg'
import productImage4 from './images/image-product-4.jpg'
import productImageThumbnail1 from './images/image-product-1-thumbnail.jpg'
import productImageThumbnail2 from './images/image-product-2-thumbnail.jpg'
import productImageThumbnail3 from './images/image-product-3-thumbnail.jpg'
import productImageThumbnail4 from './images/image-product-4-thumbnail.jpg'
import nextIcon from './images/icon-next.svg'
import previousIcon from './images/icon-previous.svg'
import './slider.css'

function Slider({className , sliderIndex , setSliderIndex , open , close , sliderNavigation}) {
    const images = [productImage1, productImage2, productImage3, productImage4]
    const IMAGES_FOR_NAVIGATION = [productImageThumbnail1, productImageThumbnail2, productImageThumbnail3, productImageThumbnail4]



    function nextHandler() {
        if (sliderIndex !== images.length) {
            let image = document.querySelector(`.product-image${ className}`)&&document.querySelector(`.product-image`)
            image.style.animation = 'fade 200ms ease-in-out forwards'
            image.addEventListener('animationend', () => {
                image.style.animation = ''
            })
            setSliderIndex(prevSliderIndex => prevSliderIndex + 1)
        } else if (sliderIndex === images.length) {
            return
        }
    }


    function previousHandler() {
        if (sliderIndex !== 1) {
            setSliderIndex(prevSliderIndex => prevSliderIndex - 1)
            let image = document.querySelector(`.product-image${ className}`)&&document.querySelector(`.product-image`)
            image.style.animation = 'fade 200ms ease-in-out reverse'
            image.addEventListener('animationend', () => {
                image.style.animation = ''
            })
        } else if (sliderIndex === 1) {
            return
        }
    }

    React.useEffect(() => {
        let images = document.querySelectorAll(`.thumbnail-images${ className}`) || null
        console.log(images)
        images.forEach(image => {
            if (image.classList.contains('active')) {
                image.classList.remove('active')
            }
        })
        images[sliderIndex - 1].classList.add('active')
        
    }, [sliderIndex])

    React.useEffect(() => {
        let images = document.querySelectorAll(`.thumbnail-images`) || null
        console.log(images)
        images.forEach(image => {
            if (image.classList.contains('active')) {
                image.classList.remove('active')
            }
        })
        images[sliderIndex - 1].classList.add('active')
    }, [sliderIndex])
    React.useEffect(()=>{
        let productImage = document.querySelector('.product-image') || document.querySelector('.product-image-desktop')
        productImage.src = images[sliderIndex - 1]
        console.log(sliderIndex)
    },[sliderIndex])
    return (
        <div className={`slider-container${ className}`}>
            { sliderNavigation && <div className='slider-navigator'>
                <img className='previous' onClick={previousHandler} src={previousIcon} alt="previous" />
                <img className='next' onClick={nextHandler} src={nextIcon} alt="next" />
            </div>}
            <div className='slider'>
                <img onClick={ open} className={`product-image${ className}`} src={images[sliderIndex-1]} />
            </div>
            <div className='image-navigator'>
                {IMAGES_FOR_NAVIGATION.map((image, index) => {
                    return (
                        <div className={`thumbnail-images${ className}`}>
                            <img key={index} onClick={
                                (e) => {

                                    setSliderIndex(parseInt(e.target.dataset.value))
                                    console.log(sliderIndex)
                                    let images = document.querySelectorAll(`.thumbnail-images${ className}`)

                                    images.forEach(image => {
                                        if (image.classList.contains('active')) {
                                            image.classList.remove('active')
                                        }
                                    })
                                    images[sliderIndex - 1].classList.add('active')
                                }
                            } data-value={index + 1} src={image} alt="image" />
                        </div>
                    )
                })}
            </div>
            <div onClick={ close} className='overlay'></div>
        </div>
    )
}

export default Slider