import styled, {css} from "styled-components";

export const Button = styled.button`
    margin: 5px 0;
    font-size: 14px;
    min-width: 80px;
    max-width: 200px;
    padding: 5px;
    border: none;
    border-radius: 3px;
    background: firebrick;
    box-shadow: 2px 2px 2px black;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    outline: none;
    
    &:active {
        transform: translateX(1px) translateY(1px);
        box-shadow: inset 2px 2px 4px 1px rgba(0, 0, 0, .4);
    }
    
    &:disabled {
        opacity: .6;
    }
    
    ${props => props.dim && css`
        background: var(--darkThree);
    `}
    
    ${props => props.blue && css`
        background: steelblue;
    `}    
    
`

export const TextArea = styled.textarea`
    height: 70px;
    width: 100%;
    resize: none;
    padding: 5px 10px;
    box-sizing: border-box;
    background: #18191a;
    box-shadow: 1px 1px 1px 1px black;
    border-radius: 2px;
    color: whitesmoke;
    outline: none;
    font-size: 16px;
    margin: 0;
    
    ${props => props.error && css`
        border: 1px solid firebrick;
    `}  
`

export const Input = styled.input`
    height: 35px;
    width: 100%;
    resize: none;
    padding: 5px 10px;
    box-sizing: border-box;
    background: #18191a;
    box-shadow: inset 1px 1px 1px 1px black;
    border-radius: 2px;
    color: whitesmoke;
    outline: none;
    font-size: 16px;
    margin: 5px 0;
    
    &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0px 1000px #000;
    -webkit-text-fill-color: whitesmoke;
    transition: background-color 5000s ease-in-out 0s;
    }
    
    ${props => props.error && css`
        border: 1px solid firebrick;
    `}
    
    ${props => props.empty && css`
        background: none;
        box-shadow: none;
    `}  
`

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
    width: 20px;
    height: 20px;
    margin: 10px;
    margin-left: 0;
`