import styled from 'styled-components'

const StyledOptionBox = styled.div`
  display: flex;
  flex-direction: column;
  background: white;

  margin-right: 2rem;
  margin-left: 2rem;
  border-radius: 35px;

  img {
    width: 100%;
  }

  > div {
    padding: 1rem 2rem;

    h2 {
      color: ${(props) => props.color};
      margin: 1rem 0;
    }

    p {
      margin: 0;
      line-height: 1.5rem;
    }
  }

  button {
    width: 3rem;
    height: 3rem;
    background: ${(props) => props.color};
    opacity: 0.7;
    margin-right: 0;
    margin-left: auto;
    border-radius: 15px 0 15px 0;
    border: none;
    cursor: pointer;

    i {
      color: white;
      font-weight: bold;
      transition: opacity 0.2s ease-in-out;
    }

    &:hover {
      box-shadow: 3px 5px 10px ${(props) => props.color};
      .fa-check {
        opacity: 1;
        transition: opacity 0.2s ease-in-out;
      }
    }
  }

  a {
    background: #3e66fb;
    width: 2rem;
    height: 2rem;
  }
`

export const OptionBox = ({ color, text, image, onClick, isSelected }) => {
  return (
    <StyledOptionBox color={color}>
      <img src={image} alt="seo-keyword-here" />
      <div>
        <h2>{text[0]}</h2>
        <p>{text[1]}</p>
      </div>
      <button onClick={onClick}>
        {isSelected && <i className="fa-solid fa-check"></i>}
      </button>
    </StyledOptionBox>
  )
}
