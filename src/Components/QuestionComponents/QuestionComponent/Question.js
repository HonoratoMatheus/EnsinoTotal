import { useState, useEffect, useRef } from "react";
import { Grid, Button, Textarea } from "@geist-ui/react";
import * as Styled from "./style"
import {default as Answer} from '../AnswerComponent/Answer'
const Question = (props) =>{
    const ref = useRef(null)
    const [answerText, setAnswerText] = useState([])
    const [answers, setAnswers] = useState([])
    const [likes, setLikes] = useState (0)
    const [isOpen, setOpen] = useState (false)
        
    const handler = (e) => {
        setAnswerText(e.target.value)
    }
    const createAnswer = () => {
        const newAnswer = answers.concat(answerText)
        setAnswers(newAnswer)
    }
    const check = () => {
        console.log(isOpen)
    }

    return(
        <Styled.Container>
            <Styled.Content>
                <Styled.TextWrapper>
                    {props.text}
                </Styled.TextWrapper>
                <Styled.OptionsWrapper>
                    <Grid.Container gap={1.5}>
                        <Grid><Button auto onClick={ () => {setOpen(!isOpen)}}>Commentaries {answers.length}</Button></Grid>
                        <Grid><Button onClick={ () => setLikes(likes + 1)} auto>Likes {likes}</Button></Grid>
                        <Grid><Button onClick={check} auto>Yikes {likes}</Button></Grid>                      
                    </Grid.Container>
                </Styled.OptionsWrapper>
        
                {isOpen && <Styled.CommentWrapper>
                            {answers.map((element) => {
                                return (<Answer text={element}/>)
                            })}
                            <Textarea placeholder="Anwser this Question" 
                                ref={ref}
                                width="100%" 
                                height="100px"
                                onChange={handler}></Textarea>
                            <Grid><Button auto type="secondary" onClick={createAnswer}>send</Button></Grid>
                        </Styled.CommentWrapper>
                }
            </Styled.Content>
        </Styled.Container>  
    )
}

export default Question;