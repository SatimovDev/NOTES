import React, { useState } from 'react'
import styled from 'styled-components'
import {BsBookmarkCheck} from "react-icons/bs"
import {FcCancel} from "react-icons/fc"
import { Black, Green, Red } from '../style/GlobalStyle'
import { nanoid } from 'nanoid'
import { useStore } from '../store'

export const Modal = ({setIsOpenModal}) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const {notes,setNotes} = useStore()

    const date = new Date()

    function createNote(){
        let note = {
        title: title,
        description:desc,
        date:date.toLocaleDateString(),
        id:nanoid(),
        }
        setNotes([...notes, note])
    }
  return (
    <ModalStyle>

    <div className="modal-body">
        <h2 className='modal-title'>Add Your Note Here...</h2>
        <input value={title} onChange={(event) => setTitle(event.target.value)} className='modal-input' type="text" placeholder='Note Title here...' />
        <textarea value={desc} onChange={(event) => setDesc(event.target.value)} className='modal-description' placeholder='Note Description here...'></textarea>
        <div className="modal-btns">
            <button onClick={() => createNote()}> <BsBookmarkCheck/> Save</button>
            <button onClick={() => setIsOpenModal(false)}> <FcCancel/> Cancel</button>
        </div>
    </div>

    </ModalStyle>
  )
}

const ModalStyle = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: rgba(0,0,0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    .modal{
        &-body{
            width: 480px;
            padding: 30px;
            background: rgba(255,255,255, 0.5);
            border-radius: 16px;
            box-shadow: inset 1px 1px 1px rgba(255,255,255, 0.18) , inset -1px -1px 1px rgba(0,0,0, 0.18) , 0 4px 4px rgba(0,0,0, 0.2);
            flex-direction: column ;
        }
        &-title{
            font-size: 25px;
            font-weight: 600;
            color: ${Black};
        }
        &-input{
            width: 411px;
            height: 55px;
            border-radius: 16px;
            padding: 15px;
            font-size: 18px;
            border: none;
            outline: none;
            color: ${Black};
            background: rgba(255,255,255, 0.5);
            border-radius: 16px;
            margin: 15px 0 25px;
        }
        &-description{
            width: 411px;
            border: none;
            outline: none;
            font-size: 18px;
            border-radius: 16px;
            background-color: rgba(255,255,255, 0.5);
            color: ${Black};
            padding: 15px;
            margin-bottom: 30px;
            min-height: 170px;
            resize: none;
        }
        &-btns{
            display: flex;
            gap: 5px;
            button{
                padding: 4px;
                width: 110px;
                font-size: 16px;
                border: none;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                background: ${Green};
                color: #fff;
                letter-spacing: 1px;
                path{
                    fill: #fff;
                }
                &:last-child{
                    background: ${Red};
                }
            }
        }
    }
`
    