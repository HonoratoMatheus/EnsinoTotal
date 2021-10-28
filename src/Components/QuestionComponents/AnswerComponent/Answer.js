import * as Styled from './style'

const Answer = props => {
    return(
        <Styled.Container>
            <Styled.Content>
                {props.text}
            </Styled.Content>
        </Styled.Container>
    )
}
export default Answer