import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { OptionBox } from './OptionBox'

import image1 from '../../img/img1.png'
import image2 from '../../img/img2.png'
import { StyledHome } from './Style'

import { Header } from '../../components/Header'

export const Home = () => {
  const [selection, setSelection] = useState(1)

  const onClick = () => {
    // if (selection.option1 === true) {
    //   setSelection({ option1: true, option2: true })
    // } else if (selection.option2 === true) {
    //   setSelection({ option1: true, option2: false })
    // }
  }

  return (
    <>
      <Header />
      <StyledHome>
        <span>Choose an option below to continue:</span>
        <h1>How would you like us to help you today?</h1>

        <div className="flex-container">
          <OptionBox
            onClick={() => setSelection(1)}
            isSelected={selection === 1}
            color="red"
            text={[
              'I AM IN CRISIS!',
              'Help me with a step-by step checklist of recovery steps',
            ]}
            image={image1}
          />
          <OptionBox
            onClick={() => setSelection(2)}
            isSelected={selection === 2}
            color="blue"
            text={[
              'BE CRISIS READY',
              'Help me build and maintain a plan of action in case of a crisis',
            ]}
            image={image2}
          />
        </div>
        <Link to="/progress">
          Next <i class="fa-solid fa-arrow-right-long"></i>
        </Link>
      </StyledHome>
    </>
  )
}
