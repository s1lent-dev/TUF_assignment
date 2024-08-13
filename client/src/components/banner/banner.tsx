const Banner = () => {
  return (
    <main>
      <div className="banner">
        <div className="bannerHeading">
          <h4>
            Gear Up for <span> Success: </span> Your Ultimate Preparation Hub!
          </h4>
          <p>
            Navigate Your Learning Adventure: Explore DSA, Master CS Concepts,
            Design Systems, Hone Competitive Skills, and Ace Interviews
            Effortlessly
          </p>
        </div>
        <div className="bannerContainer">
          <div className="bannerLeft">
            <div className="logo">
              <img src="/tufplus.svg" alt="" />
            </div>
            <div className="content">
              <h6>Elevate Your Learning Journey with TUF+ Course</h6>
              <p>
                Curated learning, approach-wise solutions, personalized
                roadmaps, expert doubt assistance, and more!
              </p>
            </div>
          </div>
          <div className="bannerRight">
            <button>Explore Plus</button>
          </div>
          <div className="timerBoxContainer">
            <div className="timerBox"> <h4>00</h4> <span>hours</span></div>
            <div className="timerBox"> <h4>00</h4> <span>mins</span></div>
            <div className="timerBox"> <h4>00</h4> <span>seconds</span></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
