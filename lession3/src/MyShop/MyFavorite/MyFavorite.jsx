import React from 'react'
import bannerImage from "../../assets/banner.png"
const MyFavorite = () => {
    return (<div className='my-favorites'>
        <div className='hero-text-section'>
            <div className='hero-text'>
                Yêu thích ngay
            </div>
        </div>
        <div className='banner-section'>
            <div className='banner-image'>
                <img src={bannerImage} alt='Favorite Image' />
            </div>
            <div className='banner-text'>
                <div>
                Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có ưu đãi
                </div>
            </div>
        </div>
    </div>
    )
}

export default MyFavorite