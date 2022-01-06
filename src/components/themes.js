import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  border: "hsl(236, 33%, 92%)",
  borderDark: "hsl(234, 39%, 85%)",
  backgroundMobile: "./images/bg-mobile-light.jpg",
  backgroundDesktop: "./images/bg-desktop-light.jpg",
};

export const darkTheme = {
  darkBackground: "hsl(235, 21%, 11%)",
  background: "hsl(235, 24%, 19%)",
  font: "hsl(234, 39%, 85%)",
  fontDark: "hsl(233, 14%, 35%)",
  fontLight: "hsl(236, 33%, 92%)",
  border: "hsl(237, 14%, 26%)",
  borderDark: "hsl(237, 14%, 36%)",
  backgroundMobile: "./images/bg-mobile-dark.jpg",
  backgroundDesktop: "./images/bg-desktop-dark.jpg",
};

export const GlobalStyles = createGlobalStyle`
    .background{
        background-color: ${(props) => props.theme.darkBackground};
        &::before {
            background-image: url(${(props) => props.theme.backgroundMobile});
            @media (min-width: 640px) {
                background-image: url(${(props) => props.theme.backgroundDesktop});
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
                > span{
                    &:nth-child(2) {
                        &:hover {
                            color: ${(props) => props.theme.fontLight};
                        }
                    }
                }
            }
        }
        &__confirm{
            &::before {
                transition: none;
                border-color: ${(props) => props.theme.border};
            }
        }
        &__sort{
            background-color: ${(props) => props.theme.background};
            > span{
                &:hover {
                    color: ${(props) => props.theme.fontLight};
                }
            }
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
            &__loader{
                border-color: ${(props) => props.theme.border};
                border-top-color: ${(props) => props.theme.borderDark};
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
