import react from 'react'
import styled from 'styled-components'

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .tasks-def{
        margin-top: 40px;
        font-size: 18px;
        color: #20c997;
        font-wight: bold;
    }
    .day{
        margin-top: 40px;
        font-size: 18px;
        color: #868e96;
    }
`

function TodoHead(){
    return(
        <TodoHeadBlock>
            <h1>2023년 5월 3일</h1>
            <div className='day'>수요일</div>
            <div className='tasks-left'>할일 2개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead