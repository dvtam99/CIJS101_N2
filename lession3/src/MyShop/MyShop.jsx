import MyFavorite from './MyFavorite/MyFavorite'
import MyProduct from './MyProduct/MyProduct'
import "./myShop.css"

const MyShop = () => {
  return (
    <div className='my-shop'>
    <MyFavorite />
    <MyProduct/>
    </div>
  )
}

export default MyShop