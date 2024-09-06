import styles from './styles.module.scss';
import { InputInsert } from '../../components/inputInsert';
import { TaskList } from '../../components/taskList';
import { Header } from '../../components/header';

export const Index = () => {

    return (
    <>
        <Header/>
        <main className={styles.index_page_main}>
            <InputInsert/>
            <TaskList />
        </main>
    </>
    )
}