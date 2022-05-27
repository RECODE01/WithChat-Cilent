
import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from 'react'

import GiphyUI from './Giphy.Presenter'


function Giphy(){
    const giphy = require('giphy-api')('sZhrrSqHSIYtlmtdctwCmjdpGCxWyvyO')
    const [keyword, setKeyword]=useState('')
    const [gifResult, setGifResult]=useState([])
    const onClickSearch=()=>{
        giphy.search({
            q: keyword,
            rating: 'g'
        }, function (err: any, res:any) {
            if(err) console.log(err)
            setGifResult(res.data)
        });
        
        
    }
    const onChangeKeyword=(e: ChangeEvent<HTMLInputElement>)=>{
        setKeyword(e.target.value)
    }
    const onClickSendGif=(e: MouseEvent<HTMLImageElement>)=>{
        console.log(e.currentTarget.src)
    }
    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onClickSearch();
      };
    return (
        <GiphyUI 
        gifResult={gifResult}
        onClickSearch={onClickSearch}
        onChangeKeyword={onChangeKeyword}
        onClickSendGif={onClickSendGif}
        onPressEnter={onPressEnter}
        />
    )
}
export default Giphy