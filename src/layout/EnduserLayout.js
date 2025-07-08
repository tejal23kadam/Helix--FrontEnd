
import Header from '../components/Header'
import { navSections } from '../layout/EndUseNavSections';
import Slider from '../components/sections/Slider';
import IndexPageAllCategory from '../components/sections/IndexPageAllCategory';
import Footer from '../components/sections/Footer';
import BottomNavbar from '../components/BottomNavbar';
import TrendingItems from '../components/sections/TrendingItems';

function EnduserLayout() {
    return (
        <>
            <Header navSections={navSections} />
            <Slider/>
            <TrendingItems/>
            <IndexPageAllCategory/>
            
            <BottomNavbar/>
        
        </>
    )
}

export default EnduserLayout