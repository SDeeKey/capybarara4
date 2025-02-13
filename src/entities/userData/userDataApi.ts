import {UserDataDto} from "@/entities/userData/userDataDto";
import {baseApi} from "@/entities/globalConfig";

export const sendUserData = async (userData: UserDataDto) => {

await baseApi.post('/send-request', userData)
    .then(res=> console.log('Данные отправлены', res))
    .catch(err => console.log('ошибка',err.message));
};
