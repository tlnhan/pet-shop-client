import Footer from "../footer";
import Header from "../header";
import Treatment from "../category/Treatment";
import BannerTreatment from "../banner/BannerTreatment";

function TreatmentProduct() {
    return (
        <div>
            <Header />
            <BannerTreatment />
            {/* sản phẩm thú cưng  */}
            <Treatment />
            <Footer />
        </div>
    )
}

export default TreatmentProduct;