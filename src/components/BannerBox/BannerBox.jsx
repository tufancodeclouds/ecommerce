import { Link } from "react-router-dom"

const BannerBox = ({img}) => {
    return (
        <div className="box bannerBox overflow-hidden rounded-lg group">
            <Link to="/">
                <img src={img} alt="bannerbox" className="w-full rounded-lg transition-all group-hover:scale-105" />
            </Link>
        </div>
    )
}

export default BannerBox