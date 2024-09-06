import { ITask } from '../../../interface/task.interface';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './styles.module.scss';
import { useTaskContext } from '../../../hook/useTaskContext.hook';
import { Trash } from '@phosphor-icons/react'

export const TaskItem = ({id, title, created_at}: ITask) => {
    const { deleteTask } = useTaskContext()

    return (
        <li className={styles.task_item}>
            <span>{format(created_at, 'dd/MM/yyyy', { locale: ptBR })}</span>
            <h4>{title}</h4>
            <button type="button" onClick={() => deleteTask(String(id))}><Trash size={20} /></button>
        </li>
    )
}