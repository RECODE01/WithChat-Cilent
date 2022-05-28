/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import * as JH from './Giphy.Styles'
import { IGiphyProps } from './Giphy.types'

const gifWrapper= css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-row-gap: 20px;
        
`
const gifInnerWrapper=css`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const imagesWrapper=css`
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
    cursor: pointer;
`


export default function GiphyUI(props:IGiphyProps){

    return (
        <JH.GiphyWrapper>
            <JH.GiphySearchWrapper>
            <input className='SearchInput' onChange={props.onChangeKeyword} onKeyPress={props.onPressEnter} placeholder='키워드를 입력하세요'/>
            <button className='SearchButton' onClick={props.onClickSearch} >
                {<JH.SearchedIcon />}
            </button>
            </JH.GiphySearchWrapper>
            <div css={gifWrapper}>
                {props.gifResult && props.gifResult.map((el: any, idx:number)=>(
                    <div css={gifInnerWrapper} key={idx}>
                        <img css={imagesWrapper} src={el.images.original.url} onClick={props.onClickSendGif}/>
                    </div>
                ))}
            </div>
        </JH.GiphyWrapper>
    )
}