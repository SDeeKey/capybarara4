import {WorkItemDto} from "@/entities/work/workItemDto";

export interface WorkDto {
    title: string;
    shortDescription: string;
    items: WorkItemDto[];
}
