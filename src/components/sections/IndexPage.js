
import NavBar from './NavBar'
import Slider from './Slider'
import TrendingItems from './TrendingItems'
import IndexPageAllCategory from './IndexPageAllCategory'
import Footer from './Footer'
import FetchAllCategoryData from './FetchAllCategoryData'
import UserHeader from '../UserHeader'
import Header from '../Header'

function IndexPage() {
    return (
        <div>
            <Header/>
            <Slider />
            
            <TrendingItems />
            <IndexPageAllCategory />
            <Footer />
            <FetchAllCategoryData />
        </div>
    )
}

export default IndexPage