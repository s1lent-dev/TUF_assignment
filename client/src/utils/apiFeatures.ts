import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBannerData, setTimerState } from '../context/bannerSlice';

const useGetTimerState = () => {
    const dispatch = useDispatch();
    const fetchTimerState = async (endpoint: string) => {
        try {
            const res = await axios.get(endpoint);
            const timerState = res.data.data.TimerState;
            console.log(timerState);
            dispatch(setTimerState(timerState));
        } catch (error) {
            console.error(error);
        }
    }
    return { fetchTimerState };
}
const useGetBannerById = () => {

    const dispatch = useDispatch();
    const fetchBanners = async (endpoint: string) => {
        try {
            const res = await axios.get(endpoint);
            const banners = res.data.data.response;
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

const useUpdateTitle = () => {

        const updateTitle = async (endpoint: string, bannerId: number, title: string) => {
            try {
                await axios.put(`${endpoint}/${bannerId}`, {title: title});
            } catch (error) {
                console.error(error);
            }
        }
        return { updateTitle };
    }

const useUpdateDesc = () => {

    const updateDesc = async (endpoint: string, bannerId: number, description: string) => {
        try {
            await axios.put(`${endpoint}/${bannerId}`, {description: description});
        } catch (error) {
            console.error(error);
        }
    }
    return { updateDesc };
}

const useUpdateTimer = () => {
    
    const updateTimer = async (endpoint: string, bannerId: number, timer: string) => {
        try {
            await axios.put(`${endpoint}/${bannerId}`, {timer: timer});
        } catch (error) {
            console.error(error);
        }
    }
    return { updateTimer };
}

const useUpdateLink = () => {
        
    const updateLink = async (endpoint: string, bannerId: number, link: string) => {
        try {
            await axios.put(`${endpoint}/${bannerId}`, {link: link});
        } catch (error) {
            console.error(error);
        }
    }
    return { updateLink };
}


export { useGetTimerState, useGetBannerById, useToggle, useUpdateTitle, useUpdateDesc, useUpdateTimer, useUpdateLink };