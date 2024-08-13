import { ReactNode } from "react";

interface SingleCommunityProps {
    following: string;
    social: string;
    Icon: ReactNode;
}
const SingleCommunity = ({following, social, Icon} : SingleCommunityProps) => {
  return (
    <div className="singleCommunity">
      <div className="outerBox">
        <div className="innerBox">
            <div className="heading">
                <h6>{following}</h6>
            </div>
            <div className="social">
                <span>{social}</span>
                {Icon}
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCommunity
