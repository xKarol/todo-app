import { createGlobalStyle } from "styled-components";
export const lightTheme = {};

export const darkTheme = {
  darkBackground: "hsl(235, 21%, 11%)",
  background: "hsl(235, 24%, 19%)",
  font: "hsl(234, 39%, 85%)",
  fontDark: "hsl(233, 14%, 35%)",
  border: "hsl(237, 14%, 26%)",

  // - Very Dark Blue: hsl(235, 21%, 11%)
  // - Light Grayish Blue: hsl(234, 39%, 85%)

  // - Dark Grayish Blue: hsl(234, 11%, 52%)

  // - Very Dark Desaturated Blue: hsl(235, 24%, 19%)
  // - Light Grayish Blue (hover): hsl(236, 33%, 92%)
  // - Very Dark Grayish Blue: hsl(233, 14%, 35%)
  // - Very Dark Grayish Blue: hsl(237, 14%, 26%)
};

export const GlobalStyles = createGlobalStyle`
    .background{
        background-color: ${(props) => props.theme.darkBackground};
        &::before {
            /* background-image: url("./images/bg-mobile-dark.jpg"); */
            @media (min-width: 640px) {
                /* background-image: url(".images/bg-desktop-dark.jpg"); */
            }
        }
    }
    .container{
        &__input{
            background-color: ${(props) => props.theme.background};
        }
        &__list{
            background-color: ${(props) => props.theme.background};
            color: ${(props) => props.theme.font};
            > li{
                border-color: ${(props) => props.theme.border};
            }
            &__info{
                background-color: ${(props) => props.theme.background};
            }
        }
        &__confirm{
            &::before {
                border-color: ${(props) => props.theme.border};
            }
        }
        &__sort{
            background-color: ${(props) => props.theme.background};
        }
        &__input{
            > input[type="text"]{
                color: ${(props) => props.theme.font};
            }
            > input[type="checkbox"] {
                &::before {
                    border-color: ${(props) => props.theme.border};
                }
            }
        }
        &__dragInfo{
            color: ${(props) => props.theme.fontDark};
            > span{
                color: ${(props) => props.theme.fontDark};
            }
        }
    }
    .author {
        color: ${(props) => props.theme.fontDark};
        > a{
            color: ${(props) => props.theme.fontDark};
        }
    }
`;
