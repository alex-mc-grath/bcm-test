import styled from 'styled-components/macro'

export const StyledSvgControlLayer = styled.div`
  .section1,
  .section2,
  .section3,
  .section4 {
    transform: translate(0px, 0px);
    transition: all 0.6s;
    cursor: pointer;

    .outerRingWhite {
      fill-opacity: 0.5;
    }

    .innerCircleWhite {
      fill-opacity: 0.75;
    }

    .progressFill {
      fill: #dabdff;
    }

    .progressCircle {
      fill: #b57bff;
    }
  }

  .section1 {
    transform: translate(32px, 32px);
  }

  .circle_text {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 16px;
    fill: white;
  }

  /* /// */
  /* more fluid animation */

  g.animate-quadrant-1,
  g.animate-quadrant-2,
  g.animate-quadrant-3,
  g.animate-quadrant-4 {
    .outerRingWhite {
      fill-opacity: 0;
    }

    .innerCircleWhite {
      fill-opacity: 0;
    }

    .progressFill {
      fill: rgb(157, 223, 157);
    }

    .progressCircle {
      fill: #3cc13b;
    }
  }

  g.animate-quadrant-1 {
    transform: translate(0px, 0px);

    #progressFiller1 {
      fill: rgb(60, 193, 59);
    }
  }

  g.animate-quadrant-2 {
    transform: translate(32px, -32px);
    #progressFiller2 {
      fill: rgb(60, 193, 59);
    }
  }
  g.animate-quadrant-3 {
    transform: translate(32px, 32px);
    #progressFiller3 {
      fill: rgb(60, 193, 59);
    }
  }
  g.animate-quadrant-4 {
    transform: translate(-32px, 32px);

    #progressFiller4 {
      fill: rgb(60, 193, 59);
    }
  }
`
