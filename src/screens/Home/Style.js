import styled from 'styled-components'

export const StyledHome = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: auto;
  display: flex;
  min-height: 100%;
  height: 80vh;
  flex-direction: column;
  justify-content: center;
  margin-top: 5vh;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background: #f6f6f7;
    z-index: -1;
    width: 100%;
    height: 30vh;
  }

  span {
    color: grey;
  }

  .flex-container {
    display: flex;
  }

  a {
    background: #3e66fb;
    color: white;
    width: fit-content;
    padding: 1rem 2rem;
    border-radius: 25px;
    text-decoration: none;
    margin-top: 2rem;
    margin-left: auto;
  }
`
