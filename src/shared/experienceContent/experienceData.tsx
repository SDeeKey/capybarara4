import {ReactNode} from "react";
import WhiteSoftLogo from '@/img/whiteSoftLogo.svg'

export interface ExperienceData {
    date: string;
    title: string;
    description: string[];
    image: ReactNode;
}

export const experienceDataItems: ExperienceData[] = [
    {
        date: 'May 2020 - Present',
        title: 'Middle Frontend Developer',
        description: [
            'Collaborating with senior developers to enhance skills and learn new technologies.',
            'Mentoring and providing guidance to junior frontend developers.',
            'Optimizing the performance of web applications.',
            'Optimizing the performance of web applications.',
            'Optimizing the performance of web applications.',
        ],
        image: <WhiteSoftLogo/>,
    },
    {
        date: 'Dec 2019 - May 2020',
        title: 'Junior Frontend Developer',
        description: [
            'Collaborating with senior developers to enhance skills and learn new technologies.',
            'Mentoring and providing guidance to junior frontend developers.',
            'Optimizing the performance of web applications.',
        ],
        image: <WhiteSoftLogo/>,
    },
    {
        date: 'May 2019 - Dec 2019',
        title: 'Beginner Frontend Developer',
        description: [
            'Collaborating with senior developers to enhance skills and learn new technologies.',
            'Mentoring and providing guidance to junior frontend developers.',
            'Optimizing the performance of web applications.',
        ],
        image: <WhiteSoftLogo/>,
    },
];
