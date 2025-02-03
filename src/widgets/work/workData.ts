import {StaticImageData} from "next/image";
import capybaraFacts from '@/img/capybaraFacts.png'
import capybaraTips from '@/img/capybaraTips.png'
import whatIsCapybara from '@/img/whatIsCapybara.png'

export interface WorkItemData {
    img: StaticImageData,
    descriptionTitle: string,
    description: string,
    tags: string[],
    position: string,
}

export const workDataItems: WorkItemData[] = [
    {
        img: capybaraFacts,
        descriptionTitle: 'Capybara Facts',
        description: 'This site provides detailed and accurate information about capybaras.' +
            ' It covers various topics such as their habitat, physical characteristics, behavior,' +
            ' diet, and lifecycle. It may also include interesting facts and trivia about capybaras.' +
            ' The site aims to educate visitors who are interested in learning more about these unique creatures',
        tags: ["Next.js", "Typescript", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"],
        position: 'left',
    },
    {
        img: capybaraTips,
        descriptionTitle: 'Capybara Facts',
        description: 'This website is dedicated to providing practical tips and guides on how to care for' +
            ' capybaras as pets. It covers essential topics such as feeding and nutrition, housing and' +
            ' environment setup, health and hygiene, socialization, and training. The site may also include' +
            ' testimonials or experiences shared by capybara owners or experts. It aims to assist individuals' +
            ' who are considering or already own capybaras as pets.',
        tags: ["Next.js", "Typescript", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"],
        position: 'right',
    }, {
        img: whatIsCapybara,
        descriptionTitle: 'What Is Capybara',
        description: 'This site serves as a comprehensive introduction to capybaras for those who are unfamiliar' +
            ' with the species. It covers basic information, such as the capybara\'s classification, origin, and' +
            ' distinct features. It may include images or illustrations to help readers visualize the animal. The' +
            ' site\'s main objective is to provide a general overview for individuals seeking introductory knowledge' +
            ' about capybaras.',
        tags: ["React", "Typescript", "PostgreSQL", "Tailwindcss", "Figma", "Storybook", "Git"],
        position: 'left',
    },
];
