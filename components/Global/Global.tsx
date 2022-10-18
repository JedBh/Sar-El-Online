import { Global as GlobalTSX } from '@emotion/react'

const Global: React.FC = () => {
  return (
    <GlobalTSX
      styles={`
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-book.woff') format('woff');
                font-display: swap;
              }
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-BookItalic.woff') format('woff');
                font-style: italic;
                font-display: swap;
              }
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-Italic.woff') format('woff');
                font-style: italic;
                font-display: swap;
              }
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-Thin.woff') format('woff');
                font-weight: 200;
                font-display: swap;
              }
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-ThinItalic.woff') format('woff');
                font-style: italic;
                font-weight: 200;
                font-display: swap;
              }
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-Light.woff') format('woff');
                font-weight: 300;
                font-display: swap;
              }
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-LightItalic.woff') format('woff');
                font-style: italic;
                font-weight: 300;
                font-display: swap;
              }
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-Regular.woff') format('woff');
                font-weight: 400;
                font-display: swap;
              }
              @font-face {
                font-family: 'PPNeueMontreal';
                src: url('/fonts/PPNeueMontreal-RegularItalic.woff') format('woff');
                font-style: italic;
                font-weight: 400;
                font-display: swap;
              }
          @font-face {
            font-family: 'PPNeueMontreal';
            src: url('/fonts/PPNeueMontreal-Medium.woff') format('woff');
            font-weight: 500;
            font-display: swap;
          }
          @font-face {
            font-family: 'PPNeueMontreal';
            src: url('/fonts/PPNeueMontreal-MediumItalic.woff') format('woff');
            font-style: italic;
            font-weight: 500;
            font-display: swap;
          }
          @font-face {
            font-family: 'PPNeueMontreal';
            src: url('/fonts/PPNeueMontreal-SemiBold.woff') format('woff');
            font-weight: 600;
            font-display: swap;
          }
          @font-face {
            font-family: 'PPNeueMontreal';
            src: url('/fonts/PPNeueMontreal-SemiBoldItalic.woff') format('woff');
            font-style: italic;
            font-weight: 600;
            font-display: swap;
          }
          @font-face {
            font-family: 'PPNeueMontreal';
            src: url('/fonts/PPNeueMontreal-Bold.woff') format('woff');
            font-weight: 700;
            font-display: swap;
          }
          @font-face {
            font-family: 'PPNeueMontreal';
            src: url('/fonts/PPNeueMontreal-BoldItalic.woff') format('woff');
            font-style: italic;
            font-weight: 700;
            font-display: swap;
          },
         
          `}
    />
  )
}

export default Global
