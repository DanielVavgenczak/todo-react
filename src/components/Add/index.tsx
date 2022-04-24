import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm, SubmitHandler} from 'react-hook-form';
import { useContext } from 'react';
import TodoContextTypes from '../../contexts/TodoContextTypes';
import { TodoContext } from '../../contexts/TodoContext';
import {useNavigate} from 'react-router-dom';
import { ContainerAdd,ErrorRequire } from './style';

interface AddTodoForm {
    title: string;
}

const shema = yup.object().shape({
    title: yup.string().required('title is required')
});

const Add = () => {
    const {add} = useContext<TodoContextTypes>(TodoContext);
    let navigate = useNavigate();
    const {register, handleSubmit, formState:{ errors } } = useForm<AddTodoForm>({
        resolver: yupResolver(shema)
    });

    const onSubmit = handleSubmit((data, e:any) => {
        add(data.title)
        e.target.reset()
        navigate("/", {replace: true})
    
    })

    return (
        <ContainerAdd>
            <form onSubmit={onSubmit}>
                <div className='input-add'>
                    <label>You todo</label>
                    <input type="text" {...register("title")} placeholder="My todo" name="title"/>
                    <ErrorRequire>{errors.title?.message}</ErrorRequire>
                </div>
                <button type='submit'>add</button>
                
            </form>
        </ContainerAdd>
    )
}

export default Add;