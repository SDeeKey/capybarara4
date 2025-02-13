import {UserDataDto} from "@/entities/userData/userDataDto";
import {baseApi} from "@/entities/globalConfig";

export const sendUserData = async (userData: UserDataDto) => {
    try {
        const response = await baseApi.post('/send-request',userData);
        return response.data;
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        throw error;
    }
};
