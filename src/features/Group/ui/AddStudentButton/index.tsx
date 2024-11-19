'use client'

import {ButtonSize, ButtonStyle} from "@/shared/types/button";
import Button from "@/components/atoms/Button";
import {IoMdAdd} from "react-icons/io";
import {useModal} from "@/shared/states/useModal";

const addStudentButton = () => {
    const {openModal} = useModal()
    return (
        <Button
            style={ButtonStyle.Primary}
            size={ButtonSize.Medium}
            icon={<IoMdAdd />}
            onClick={() => openModal('addStudentInGroupModal')}
        >학생 추가</Button>
    )
}

export default addStudentButton;