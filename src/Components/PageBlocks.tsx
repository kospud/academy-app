import { PropsWithChildren, useState } from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { TabletBreakPoint, MobileBreakPoint } from "../utills/consts"

interface Fonts extends Record<number, string>{
    148: string,
    64: string,
    36: string,
    18: string,
    16: string,
    24: string,
    14: string
}

const Desktop: Fonts={
    148: '7.7svw',
    64: '3.3svw',
    36: '1.8svw',
    18: '0.9svw',
    16: '0.8svw',
    24: '1.25svw',
    14: '0.7svw',
}

const Tablet: Fonts={
    148: '15svw',
    64: '6.6svw',
    36: '3.7svw',
    18: '1.8svw',
    16: '1.6svw',
    24: '2.5svw',
    14: '1.4svw',
}

const Mobile: Fonts={
    148: '35svw',
    64: '15svw',
    36: '8svw',
    18: '4.3svw',
    16: '3.8svw',
    24: '5.7svw',
    14: '3.3svw'
}
export const responsiveText = (desktop: keyof Fonts, tablet: keyof Fonts, mobile: keyof Fonts) => css`
  font-size: ${Desktop[desktop]};

  @media (max-width: ${TabletBreakPoint}) {
    font-size: ${Tablet[tablet]};
  }

  @media (max-width: ${MobileBreakPoint}) {
    font-size: ${Mobile[mobile]};
  }
`

export const RedButtonStyle = css<{ hover?: boolean }>`
    background-color: ${(props) => props.hover ? props.theme.colors.primary : 'unset'};
    border: solid rgba(204, 51, 39, 1);
    text-decoration: none;
    color: ${(props) => props.hover ? props.theme.colors.text : props.theme.colors.primary};
    font-Weight: 700;
    font-size: 1.8svw;
    text-transform: uppercase;
    padding-top: 1svw;
    padding-bottom: 1svw;
    padding-right: 3svw;
    padding-left: 3svw;
    border-radius: 5px;
    display: block;
    width: fit-content;
    transition: background-color .1s ease-in-out, color .1s ease-in-out;
    cursor: pointer;
    user-select: none;
    @media(max-width: ${TabletBreakPoint}){
        font-size: 3.7svw;
    }
    @media(max-width: ${MobileBreakPoint}){
        font-size: 5.7svw;
        padding-top: 3svw;
        padding-bottom: 3svw;
        padding-right: 5svw;
        padding-left: 5svw;
    }
`
export const RedLinkButtonElement = styled(Link) <{ hover?: boolean }>`
   ${RedButtonStyle}
`

interface RedLinkButtonProps {
    to: string,
    style?: React.CSSProperties,
    onClick?: () => any,
    hover?: boolean
}
export const RedLinkButton = ({ to, style, onClick, hover, children }: PropsWithChildren<RedLinkButtonProps>) => {

    const [btnHover, setHover] = useState(hover || false)


    return <RedLinkButtonElement
        onMouseEnter={() => setHover(!btnHover)}
        onMouseLeave={() => setHover(!btnHover)}
        to={to}
        style={style}
        onClick={onClick}
        hover={btnHover}>{children}</RedLinkButtonElement>
}

const RedButtonElement = styled.button<{ hover: boolean }>`
${RedButtonStyle}
`
interface RedButtonProps {
    style?: React.CSSProperties,
    onClick?: () => any,
    hover?: boolean
}
export const RedButton = ({ style, onClick, hover, children }: PropsWithChildren<RedButtonProps>) => {

    const [btnHover, setHover] = useState(hover || false)

    return <RedButtonElement
        onMouseEnter={() => setHover(!btnHover)}
        onMouseLeave={() => setHover(!btnHover)}
        style={style}
        onClick={onClick}
        hover={btnHover}>
        {children}
    </RedButtonElement>
}