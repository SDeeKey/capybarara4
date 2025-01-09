import s from "./page.module.scss";
import {Introduction} from "@/widgets/introduction/introduction";
import {Header} from "@/widgets/header/header";

export default function Home() {
    return (
        <main className={s['page']}>
            <Header/>
            <Introduction/>
        </main>
    );
}
