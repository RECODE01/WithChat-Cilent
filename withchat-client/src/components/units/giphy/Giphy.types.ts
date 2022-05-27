import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";

export interface IGiphyProps{
    gifResult?:any
    onClickSearch: () => void
    onPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    onChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void
    onClickSendGif: (e: MouseEvent<HTMLImageElement>) => void
}