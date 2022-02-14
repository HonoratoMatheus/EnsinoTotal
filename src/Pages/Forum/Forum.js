import { useState, useRef, useEffect } from "react";
import { Button, Textarea, Grid } from "@geist-ui/react";
import { Header, Question } from "../../Components"
const axios = require('axios')
import * as Styled from "./style"


const Forum = props => {
    const ref = useRef(null)
    const [questionText, setQuestionText] = useState([])
    const [questions, setQuestions] = useState([])

    const createQuestion = () => {
        let newArray = questions.concat(questionText)
        setQuestions(newArray)
        ref.current.value = '';
    }

    const handler = (e) => {
        setQuestionText(e.target.value);
    }
    useEffect(async () => {

        if (questions.length == 0) {
            let question1 = await getQuestions()
            console.log(question1)
            setQuestions(question1.data.data.allQuestions)
        }
    })
    const getQuestions = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:8000/api/v1/question'
            })
            return response
        }
        catch (err) {
            console.log(err)
        }

    }

    return (

        <Styled.Container>
            <Header />
            <Styled.Content>
                <Styled.QuestionCreation>
                    <Grid.Container gap={2}>
                        <Grid xs={24}>
                            <Textarea placeholder="Make your question!"
                                ref={ref}
                                width="100%"
                                height="100px"
                                onChange={handler} ></Textarea></Grid>
                        <Grid><Button auto type="secondary" onClick={createQuestion}>send</Button></Grid>
                    </Grid.Container>
                </Styled.QuestionCreation>
                {questions.map((element) => {
                    return (
                        <Question key={element} text={element} />
                    )
                })}
            </Styled.Content>
        </Styled.Container>
    )
}

export default Forum;