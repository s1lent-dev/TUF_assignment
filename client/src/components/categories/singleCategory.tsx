import { ArrowRight } from "@phosphor-icons/react";

interface SingleCategoryProps {
  icon: string;
  title: string;
  desc: string;
}

const SingleCategory = ({ icon, title, desc }: SingleCategoryProps) => {
  return (
    <div className="singleCategory">
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="content">
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
        <button>Try now <ArrowRight /></button>
    </div>
  );
};

export default SingleCategory;
