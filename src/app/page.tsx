import s from "./page.module.scss";
import {Introduction} from "@/widgets/introduction/introduction";
import {Skills} from "@/widgets/skills/skills";
import {Experience} from "@/widgets/experience/experience";
import {Work} from "@/widgets/work/work";
import {Testimonials} from "@/widgets/testimonials/testimonials";
import {Contacts} from "@/widgets/contacts/contacts";
import {AnnoyingMessage} from "@/entities/annoyingMessage/annoyingMessage";
import Image from '@/img/annoyingMessage.png'

export default function Home() {
    return (
        <main className={s['page']}>
            <Introduction/>
            <Skills/>
            <Experience id={'experience'}/>
            <Work id={'work'}/>
            <Testimonials id={'testimonials'}/>
            <Contacts id={'contacts'}/>
            <AnnoyingMessage ImagePath={Image} className={s['annoyingMessage']}/>
        </main>
    );
}
