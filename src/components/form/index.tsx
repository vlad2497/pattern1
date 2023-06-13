import { Button } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import TextField from '../text-field'
import { nameValidation } from './validation'

interface IForm {
  fullName: string
  age: string
  surName: string
}

const CustomForm = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      surName: '',
      fullName: '',
      age: '25',
    },
  })
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data)

  console.log(watch('fullName'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="surName"
        control={control}
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            {...field}
            ref={null}
            role="surname-text-field"
            error={Boolean(errors['surName'])}
            helperText={
              <span role="surname-text-field-helper-text">
                {errors['surName']?.message || ''}
              </span>
            }
            inputProps={{
              role: 'surname-input',
            }}
          />
        )}
      />
      <br />
      <Controller
        name="fullName"
        control={control}
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            {...field}
            ref={null}
            error={Boolean(errors['fullName'])}
            helperText={errors['fullName']?.message || ''}
            inputProps={{
              role: 'fullname-input',
            }}
          />
        )}
      />
      <br />
      <Controller
        name="age"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            ref={null}
            inputProps={{
              role: 'age-input',
            }}
          />
        )}
      />
      <br />
      <Button type="submit">Создать</Button>
    </form>
  )
}

export default CustomForm
