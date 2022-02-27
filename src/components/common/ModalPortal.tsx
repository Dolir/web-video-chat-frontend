import React, { useState, cloneElement, ReactElement, useRef } from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import useUnscroll from "../../utility/hooks/useUnscroll"
import { RootState } from "../../redux/store"
import {
  handleUnscroll,
  deleteUnscroll
} from "../../redux/features/layoutSlice"
import { Modal as ModalWrapper } from "reactstrap"
import FadeTransition from "../layout/FadeTransition"
interface Iprops {
  button: ReactElement<null>
  children: Function
  defaultOpen?: boolean | null
  onClose?: Function
  name: string
}
export interface IModalProps {
  close: Function
  opened: boolean
}

const Modal = (props: Iprops) => {
  const { button, children, defaultOpen, onClose, name } = props
  const dispatch = useDispatch()
  const globalState = useSelector((state: RootState) => state.layout.unscrolls)
  const opened = globalState.find((item) => item?.name === name)?.value
  const parentPortal = useRef<Element>()
  React.useEffect(() => {
    dispatch(handleUnscroll({ value: false, name: name }))
    parentPortal.current = document.getElementById("__next")!
    return () => {
      dispatch(deleteUnscroll(name))
    }
  }, [])

  useUnscroll(opened, globalState)

  const handleClose = () => {
    dispatch(handleUnscroll({ value: false, name: name }))
    if (onClose) onClose()
  }
  if (!parentPortal.current) return null

  
  return (
    <>
      {cloneElement(button as React.ReactElement, {
        onClick: () => {
          dispatch(handleUnscroll({ value: true, name: name }))
        }
      })}
      {createPortal(
          <ModalWrapper fade={false} isOpen={opened} toggle={handleClose}>
            {children({
              opened,
              close: handleClose
            })}
          </ModalWrapper>,
        parentPortal.current!
      )}
    </>
  )
}

export default Modal
