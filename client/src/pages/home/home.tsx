import Banner from "@/components/banner/banner";
import Categories from "@/components/categories/categories";
import Community from "@/components/community/community";
import { useEffect } from "react";
import { useGetBannerById } from "@/utils/apiFeatures";
const Home = () => {

  const { fetchBanners } = useGetBannerById();

  useEffect(() => {
    fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
  }, [fetchBanners]);

  return (
    <>
      <Banner />
      <Categories />
      <Community />
    </>
  );
};

export default Home;
