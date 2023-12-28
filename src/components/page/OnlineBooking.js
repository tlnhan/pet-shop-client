import BannerOB from "../banner/BannerOB";
import Footer from "../footer";
import Booking from "../handleFunction/Booking";
import Header from "../header";

function OnlineBooking() {
    return (
        <div>
            <Header />
            <BannerOB />
            <Booking />
            <Footer />
        </div>
    )
}

export default OnlineBooking;