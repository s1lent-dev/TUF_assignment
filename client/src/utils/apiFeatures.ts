import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBannerData } from '../context/bannerSlice';


const useGetAllBanners = () => {

    const dispatch = useDispatch();
    const fetchBanners = async (endpoint: string) => {
        try {
            const res = await axios.get(endpoint);
            const banners = res.data;
            dispatch(setBannerData(banners));
        } catch (error) {
            console.error(error);
        }
    }
    return { fetchBanners };
}

const useToggle = () => {

    const toggleStatus = async (endpoint: string, bannerId: number) => {
        try {
            await axios.put(`${endpoint}/${bannerId}`);
        } catch (error) {
            console.error(error);
        }
    }
    return { toggleStatus };
}

const useUpdateDesc = () => {

    const updateDesc = async (endpoint: string, bannerId: number, description: string) => {
        try {
            await axios.put(`${endpoint}/${bannerId}`, { description });
        } catch (error) {
            console.error(error);
        }
    }
    return { updateDesc };
}

const useUpdateTimer = () => {
    
    const updateTimer = async (endpoint: string, bannerId: number, timer: number) => {
        try {
            await axios.put(`${endpoint}/${bannerId}`, { timer });
        } catch (error) {
            console.error(error);
        }
    }
    return { updateTimer };
}

const useUpdateLink = () => {
        
    const updateLink = async (endpoint: string, bannerId: number, link: string) => {
        try {
            await axios.put(`${endpoint}/${bannerId}`, { link });
        } catch (error) {
            console.error(error);
        }
    }
    return { updateLink };
}


export { useGetAllBanners, useToggle, useUpdateDesc, useUpdateTimer, useUpdateLink };