import {WorkDto} from "@/entities/work/workDto";
import axios from "axios";
import {baseApi} from "@/entities/globalConfig";

export const getWorkData = async (): Promise<WorkDto> => {
    const response = await axios.get<WorkDto>(`${baseApi.defaults.baseURL}/work`);
    return response.data;
};
