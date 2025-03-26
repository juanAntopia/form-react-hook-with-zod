import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import InputForm from './components/CustomInput'
import './CustomForm.css'
import {schema, FormValues} from './models/form.model'

export const CustomForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(schema)
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name="name" control={control} type='text' label="Name" error={errors.name} />
            <InputForm name="email" control={control} type='email' label="Email" error={errors.email} />
            <InputForm name="password" control={control} type='password' label="Password" error={errors.password} />
            <InputForm name="confirmPassword" control={control} type='password' label="Confirm Password" error={errors.confirmPassword} />
            <button type="submit">Submit</button>
        </form>
    )
}