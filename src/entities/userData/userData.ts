import axios from 'axios';
import {UserDataDto} from "@/entities/userData/userDataDto";

export const sendUserData = async (userData: UserDataDto) => {
    try {
        const response = await axios.post(
            'https://express-service-dun.vercel.app/send-request',
            userData
        );
        return response.data;
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        throw error;
    }
};
