import s from "./page.module.scss";
import {Introduction} from "@/widgets/introduction/introduction";
import {Skills} from "@/widgets/skills/skills";
import {Experience} from "@/widgets/experience/experience";
import {Work} from "@/widgets/work/work";
import {Testimonials} from "@/widgets/testimonials/testimonials";
import {Contacts} from "@/widgets/contacts/contacts";
import Image from '@/img/annoyingMessage.png'
import React from "react";
import {AnnoyingMessage} from "@/widgets/annoyingMessage/annoyingMessage";

export default function Home() {
    return (
        <main className={s['page']}>
            <Introduction/>
            <Skills/>
            <Experience/>
            <Work/>
            <Testimonials/>
            <Contacts/>
            <AnnoyingMessage
                ImagePath={Image}
                className={s['annoyingMessage']}
            />
        </main>
    );
}
