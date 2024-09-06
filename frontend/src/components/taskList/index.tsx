import { useTaskContext } from '../../hook/useTaskContext.hook';
import { ITask } from '../../interface/task.interface';
import styles from './styles.module.scss';
import { TaskItem } from './taskItem';


export const TaskList = () => {
    const { tasks } = useTaskContext()

    return (
        <section className={styles.task_list_container}>
            <div className={styles.task_list_infos}>
                <p>Tarefas criadas: <span className={styles.task_list_lenght}>{tasks ? tasks.length : 0}</span> </p>
            </div>
            <ul className={styles.task_list}>
                {tasks && tasks.map((task: ITask) => <TaskItem id={task.id} title={task.title} created_at={task.created_at} key={task.id} />)}
            </ul>
        </section>
    )
}