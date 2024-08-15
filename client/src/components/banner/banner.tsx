import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { Link } from "react-router-dom";
import { BannerType } from "@/types/types";
import Timer from "./timer";

const Banner = () => {
  const banner = useSelector(
    (state: RootState) => state.banner.bannerData
  ) as BannerType;

  return (
    <main>
      <div className="banner">
        <div className="bannerHeading">
          <h4>
            Gear Up for <span>Success:</span> Your Ultimate Preparation Hub!
          </h4>
          <p>
            Navigate Your Learning Adventure: Explore DSA, Master CS Concepts,
            Design Systems, Hone Competitive Skills, and Ace Interviews
            Effortlessly
          </p>
        </div>
        {banner.isVisible && (
          <div className="bannerContainer">
            <div className="bannerLeft">
              <div className="logo">
                <img src="/tufplus.svg" alt="" />
              </div>
              <div className="content">
                <h6>{banner.title}</h6>
                <p>{banner.description}</p>
              </div>
            </div>
            <div className="bannerRight">
              <Link to={banner.link}>
                <button>Explore Plus</button>
              </Link>
            </div>
            <Timer />
          </div>
        )}
      </div>
    </main>
  );
};

export default Banner;
