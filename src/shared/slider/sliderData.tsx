import {ReactNode} from "react";
import Js from '@/img/jsIcon.svg'
import Ts from '@/img/tsIcon.svg'
import React from '@/img/reactIcon.svg'
import Next from '@/img/nextIcon.svg'
import Node from '@/img/nodeIcon.svg'
import PostgreSQL from '@/img/postgreIcon.svg'
import Mongo from '@/img/mongoIcon.svg'
import Sass from '@/img/sassIcon.svg'
import Tailwind from '@/img/tailwindIcon.svg'
import Express from '@/img/expressIcon.svg'
import Figma from '@/img/figmaIcon.svg'
import Cypress from '@/img/cypressIcon.svg'
import Storybook from '@/img/storybookIcon.svg'
import Git from '@/img/gitIcon.svg'
import Nest from '@/img/nestIcon.svg'

export interface Technology {
    image: ReactNode;
    title: string;
}

export const technologies: Technology[] = [
    {
        image: <Js/>,
        title: 'Javascript',
    },
    {
        image: <Ts/>,
        title: 'Typescript'
    },
    {
        image: <React/>,
        title: 'React'
    },
    {
        image: <Next/>,
        title: 'Next.js'
    },
    {
        image: <Node/>,
        title: 'Node.js'
    },
    {
        image: <PostgreSQL/>,
        title: 'PostgreSQL',
    },
    {
        image: <Mongo/>,
        title: 'MongoDB'
    },
    {
        image: <Sass/>,
        title: 'Sass/Scss'
    },
    {
        image: <Tailwind/>,
        title: 'Tailwindcss'
    },
    {
        image: <Express/>,
        title: 'Express.js'
    },
    {
        image: <Figma/>,
        title: 'Figma',
    },
    {
        image: <Cypress/>,
        title: 'Cypress'
    },
    {
        image: <Storybook/>,
        title: 'Storybook'
    },
    {
        image: <Git/>,
        title: 'Git'
    },
    {
        image: <Nest/>,
        title: 'Nest.js'
    }
];
