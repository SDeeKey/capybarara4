import {WorkDto} from "@/entities/work/workDto";
import axios from "axios";

export const getWorkData = async (): Promise<WorkDto> => {
    const response = await axios.get<WorkDto>('https://express-service-dun.vercel.app/work');
    return response.data;
};