import React from 'react'
import styled from '@emotion/styled'
// import { width } from '@mui/system'

const Wrapper = styled('div')({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    width:'100%',

})
const Label = styled('p')({
    color:'#b9bbbe',
    textTransform:'uppercase',
    fontWeight:'600',
    fontSize:'16px'

})
const Input = styled('input')({
    flexGrow:'1',
    height:'40px',
    border:'1px solid black',
    borderRadius:'10px',
    color:'#dcddde',
    background:'#35393f',
    margin:'0',
    fontSize:'16px',
    padding:'0 5px'
})
function InputWithLabel(props) {
    const {value,setValue,label,type,placeHolder } = props;
    const handleValueChange =(event)=>{
        setValue(event.target.value);
    }
   return (
   <Wrapper>
       <Label>
           {label}
       </Label>
       <Input
       value={value}
       onChange={handleValueChange}
       type={type}
       placeholder={placeHolder}
        />
   </Wrapper>
  )
}

export default InputWithLabel
