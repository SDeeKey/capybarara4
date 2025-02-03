import {StaticImageData} from "next/image";
import SarahAvatar from '@/img/SarahAvatar.png'
import JasonAvatar from '@/img/JasonAvatar.png'
import EmmaAvatar from '@/img/EmmaAvatar.png'
import MeganAvatar from '@/img/MeganAvatar.png'

export interface FeedbackData {
    img: StaticImageData;
    name: string,
    post: string;
    feedback: string;
}

export const feedbackDataItem: FeedbackData[] = [
    {
        img: SarahAvatar,
        name: 'Sarah',
        post: 'Frontend Developer',
        feedback: '“I had the opportunity to see a Capybarara at the zoo,' +
            ' and it was such an incredible experience! They are such gentle' +
            ' creatures and so fascinating to watch. Their size and calm nature' +
            ' definitely make them unique among other animal species.”'
    },
    {
        img: JasonAvatar,
        name: 'Jason',
        post: 'Manager',
        feedback: '“I recently read about Capybarara and I must say, they are truly' +
            ' fascinating animals. Their social behavior and close-knit family' +
            ' structures are so interesting, and I love how they live in such harmony' +
            ' with other animals in their habitats. Definitely one of the most underrated animals out there!”'
    },
    {
        img: EmmaAvatar,
        name: 'Emma',
        post: 'Backend Developer',
        feedback: '“I had the chance to interact with a Capybarara at a wildlife sanctuary,' +
            ' and it was such a memorable experience. They are extremely friendly and affectionate.' +
            ' I was surprised by how intelligent they are, and their level of comfort with humans.' +
            ' I would highly recommend anyone to see them up close!”'
    },
    {
        img: MeganAvatar,
        name: 'Megan',
        post: 'DevOps',
        feedback: "“As an animal lover, I've always been fascinated by Capybarara." +
            "They are super social creatures and thrive in groups. It's amazing how they have" +
            ' adaptations that allow them to live both on land and in water. Their unique appearance' +
            ' and laid-back personality make them the perfect animal to admire!”'
    },
]