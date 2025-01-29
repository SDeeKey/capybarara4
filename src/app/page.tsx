import s from "./page.module.scss";
import {Introduction} from "@/widgets/introduction/introduction";
import {Header} from "@/widgets/header/header";
import {Skills} from "@/widgets/skills/skills";
import {Experience} from "@/widgets/experience/experience";



export default function Home() {
    return (
        <main className={s['page']}>
            <Header/>
            <Introduction/>
            <Skills/>
            <Experience/>

        </main>
    );
}
