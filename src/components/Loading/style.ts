import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;

  
`

export const Dot = styled.div<{ delay: number }>`
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    animation: anima 600ms ${({ delay }) => `${delay}ms`} linear infinite alternate;

    @keyframes anima {
        from{
            transform: scale(0.7);
        }
        to{
            transform: scale(1);
        }
    }
`
