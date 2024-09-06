import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTaskContext } from '../../hook/useTaskContext.hook';
import { createTaskSchema } from '../../schema/task.schema';
import styles from './styles.module.scss';
import { PlusCircle } from '@phosphor-icons/react';

export const InputInsert = () => {

    const { createTask } = useTaskContext();

    const { register, handleSubmit  } = useForm({
        resolver: zodResolver(createTaskSchema)
    })

    const submit = (formData: any) => {
        createTask(formData)
    }

    return (
        <form className={styles.insert_input_container} onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                {...register('title')}
                className={styles.insert_input}
                placeholder='Adicione uma nova tarefa...'
                required
                maxLength={200}
            />
            <button className={styles.insert_button} type='submit'>
                <span className={styles.insert_button_text}>
                    Criar
                </span>
                <PlusCircle size={32} className={styles.insert_button_span} />
            </button>
        </form>
    )
}