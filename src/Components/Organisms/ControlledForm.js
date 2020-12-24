import React, {useState} from 'react'

import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'

export default function ControlledForm(props) {
    const [formValue, setFormValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        props.onSubmit(formValue)
        setFormValue('')
    }

    return (
        <form onSubmit={submitHandler}>
            <FormControl >
                <InputLabel htmlFor={props.htmlFor}>{props.inputLabel}
                </InputLabel>
                <Input 
                    id={props.inputID} 
                    onChange={(e) => {
                        setFormValue(e.target.value)
                    }}
                    value={formValue}/>
                <Button
                    variant='outlined'
                    color='default'
                    disableRipple={true}
                    focusVisibleClassName={props.focusVisibleClassName}
                    size='small'
                    type='submit'
                    style={{marginTop: '.5em'}}
                >
                    {props.buttonLabel}
                </Button>
            </FormControl>
        </form>
    )
}