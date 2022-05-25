import styled from 'styled-components'

const StyledProgessBars = styled.svg`
  /* margin: 5em; */
  width: 800px;
  height: 800px;
  /* 
    svg {
        width: 800px;
        height: 800px;
    } */

  g {
    transition-timing-function: ease;
    transition: transform 0.6s;

    rect {
      fill: white;
    }

    .progress_bg {
      fill: rgb(248, 243, 255);
    }

    circle {
      stroke: rgb(181, 124, 255);
      fill: rgb(206, 170, 255);
    }

    .circle_text {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-size: 27px;
      fill: white;
    }

    .progress_fill {
      fill: rgb(218, 189, 255);
    }

    .logoHolderOuter {
      fill: rgb(209, 216, 254);
    }

    .logoHolderInner {
      fill: rgb(219, 225, 255);
    }

    .groupName {
      fill: rgb(159, 180, 254);
    }

    &:hover {
      .progress_fill {
        fill: rgb(160, 225, 160);
      }

      circle {
        stroke: rgb(60, 194, 60);
        fill: rgb(110, 210, 110);
      }

      .logoHolderOuter {
        fill: rgb(62, 102, 251);
      }

      .logoHolderInner {
        fill: rgb(109, 140, 252);
      }

      .groupName {
        fill: rgb(62, 102, 251);
      }

      transform: translate(-64px, -64px);
    }
  }
`

export const ProgressBars = ({ percentages }) => {
  const sin = (deg) => {
    return Math.sin((Math.PI / 180) * deg)
  }

  const cos = (deg) => {
    return Math.cos((Math.PI / 180) * deg)
  }

  const getProgressbgPath1 = () => {
    return `
            M 101,376
            A 300,300 0 0,1 376,101
            A 16,16 0 0,1 392,116
            L 392 176
            A 16,16 0 0,1 376,191
            A 208,208 0 0,0 191,376
            A 16,16 0 0,1 176,392
            L 116,392
            A 16,16 0 0,1 101,376
        `
  }

  const getProgressFillPath1 = () => {
    let deg = percentages[0] * 0.9
    let xOuter = 400 - Math.round(cos(deg) * 292 + 8)
    let yOuter = 400 - Math.round(sin(deg) * 292 + 8)
    let xInner = 400 - Math.round(cos(deg) * 200 + 8)
    let yInner = 400 - Math.round(sin(deg) * 200 + 8)
    return `
            M 101,376
            A 300,300 0 0,1 ${xOuter},${yOuter}
            L ${xInner},${yInner}
            A 208,208 0 0,0 191,376
            A 16,16 0 0,1 176,392
            L 116,392
            A 16,16 0 0,1 101,376
        `
  }

  const getCirclePosition = () => {
    let deg = percentages[0] * 0.9
    let cx = 400 - Math.round(cos(deg) * 246 + 8)
    let cy = 400 - Math.round(sin(deg) * 246 + 8)
    return { cx, cy }
  }

  const getCircleTextPosition = () => {
    let { cx, cy } = getCirclePosition()
    return { x: cx, y: cy + 10 }
  }

  return (
    <StyledProgessBars viewBox="0,0,800,800" overflow="visible">
      <g>
        <rect x="0" y="0" width="400" height="400" />
        <path className="progress_bg" d={getProgressbgPath1()} />

        <path className="progress_fill" d={getProgressFillPath1()} />

        <circle {...getCirclePosition()} r="42" strokeWidth="8" />
        <text
          className="circle_text"
          {...getCircleTextPosition()}
          fill="black"
          textAnchor="middle"
        >
          {percentages[0]}%
        </text>

        <path
          className="logoHolderOuter"
          d="
                        M 378,392 
                        L 226,392
                        A 16,16 0 0,1 209,378
                        A 190,190 0 0,1 378,209
                        A 16,16 0 0,1 392,226
                        L 392,378
                        A 16,16 0 0,1 376,392
                    "
        />

        <path
          className="logoHolderInner"
          d="
                        M 370,384 
                        L 234,384
                        A 10,10 0 0,1 221,374
                        A 190,190 0 0,1 374,221
                        A 10,10 0 0,1 384,234
                        L 384,370
                        A 15,15 0 0,1 370,384
                    "
        />

        <path
          className="groupName"
          d="
                        M 0,350 
                        A 400,400 0 0,1 350,0
                        A 38,38 0 0,1 350,75
                        A 325,325 0 0,0 75, 350
                        A 38,38 0 0,1 0,350
                    "
        />

        <path
          id="testPath"
          fill="transparent"
          d="
                        M 38,350 
                        A 363,363 0 0,1 350,38
                    "
        />

        <text className="circle_text">
          <textPath xlinkHref="#testPath"> Define Mode </textPath>
        </text>
      </g>
      <g>
        <rect x="400" y="0" width="400" height="400" />
        <path className="progress_bg" d={getProgressbgPath1()} />

        <path className="progress_fill" d={getProgressFillPath1()} />

        <circle {...getCirclePosition()} r="42" strokeWidth="8" />
        <text
          className="circle_text"
          {...getCircleTextPosition()}
          fill="black"
          textAnchor="middle"
        >
          {percentages[0]}%
        </text>

        <path
          className="logoHolderOuter"
          d="
                        M 378,392 
                        L 226,392
                        A 16,16 0 0,1 209,378
                        A 190,190 0 0,1 378,209
                        A 16,16 0 0,1 392,226
                        L 392,378
                        A 16,16 0 0,1 376,392
                    "
        />

        <path
          className="logoHolderInner"
          d="
                        M 370,384 
                        L 234,384
                        A 10,10 0 0,1 221,374
                        A 190,190 0 0,1 374,221
                        A 10,10 0 0,1 384,234
                        L 384,370
                        A 15,15 0 0,1 370,384
                    "
        />

        <path
          className="groupName"
          d="
                        M 0,350 
                        A 400,400 0 0,1 350,0
                        A 38,38 0 0,1 350,75
                        A 325,325 0 0,0 75, 350
                        A 38,38 0 0,1 0,350
                    "
        />

        <path
          id="testPath"
          fill="transparent"
          d="
                        M 38,350 
                        A 363,363 0 0,1 350,38
                    "
        />

        <text className="circle_text">
          <textPath xlinkHref="#testPath"> Define Mode </textPath>
        </text>
      </g>
    </StyledProgessBars>
  )
}
