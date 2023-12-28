import Footer from "../footer";
import Header from "../header";
import Food from "../category/Food";
import BannerFood from "../banner/BannerFood";


function FoodProduct() {
    return (
        <div>
            <Header />
            <BannerFood />
            {/* sản phẩm thú cưng  */}
            <Food />
            <Footer />
        </div>
    )
}

export default FoodProduct;