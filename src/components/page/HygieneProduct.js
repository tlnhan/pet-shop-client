import Footer from "../footer";
import Header from "../header";
import Hygiene from "../category/Hygiene";
import BannerHygiene from "../banner/BannerHygiene";

function HygieneProduct() {
    return (
        <div>
            <Header />
            <BannerHygiene />
            {/* sản phẩm thú cưng  */}
            <Hygiene />
            <Footer />
        </div>
    )
}

export default HygieneProduct;