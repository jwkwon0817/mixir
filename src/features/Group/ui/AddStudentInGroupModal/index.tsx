'use client'

import React, {useState} from 'react';
import Modal from "@/components/molecules/Modal";
import Input from "@/components/atoms/Input";
import {TeamBuildingModalProps} from "@/shared/types/Team/CreateTeamBuildingModal";
import Button from "@/components/atoms/Button";
import {ButtonSize, ButtonStyle} from "@/shared/types/button";
import styles from './style.module.scss';
import Select from "@/components/atoms/Select";
import {STUDENT_CLASS_SELECT, STUDENT_GRADE_SELECT} from "@/features/Group/constant/StudentClassSelect";
import StudentLevelSelect from "@/components/molecules/studentLevelSelect";
import {StudentLevel} from "@/shared/types/level";

type TeamCountType = '3' | '4' | 'other';

const AddStudentInGroupModal = ({modalId}: TeamBuildingModalProps) => {
    const [formData, setFormData] = useState<{ teamName: string, teamCountType: TeamCountType, memberCount: string }>({
        teamName: '',
        teamCountType: '3',
        memberCount: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 팀 옵션 선택 핸들러
    const handleTeamOptionClick = (value: TeamCountType) => {
        setFormData(prev => ({
            ...prev,
            teamCountType: value
        }));
    };

    return (
        <Modal
            modalId={modalId}
            style={{maxWidth: '480px', width: '100%'}}
            paddingTop={24}
            paddingBottom={24}
            paddingLeft={24}
            paddingRight={24}
        >
            <div className={styles.container}>
                <h2 className={styles.title}>학생 추가</h2>
                <span className={styles.description}>정보를 기입하여 학생을 추가해주세요</span>
                <Input
                    name="teamName"
                    label="학생 이름"
                    placeholder="학생 이름을 입력해주세요"
                    value={formData.teamName}
                    onChange={handleInputChange}
                />

                <div className={styles.classSelectContainer}>
                    <Select
                        label="학년"
                        options={STUDENT_GRADE_SELECT}
                        onChange={(value) => console.log(value)}
                        fullWidth
                    />

                    <Select
                        label="반"
                        options={STUDENT_CLASS_SELECT}
                        onChange={(value) => console.log(value)}
                        fullWidth
                    />
                </div>

                <div className={styles.selectLevelList}>
                    <StudentLevelSelect name="수학" state={StudentLevel.AVERAGE} defaultValue={StudentLevel.AVERAGE} />
                    <StudentLevelSelect name="배드민턴" state={StudentLevel.AVERAGE} defaultValue={StudentLevel.AVERAGE} />
                </div>

                <div className={styles.bottom}>
                    <Button
                        style={ButtonStyle.Primary}
                        size={ButtonSize.Medium}
                        fullWidth
                    >팀 생성하기</Button>
                </div>
            </div>
        </Modal>
    );
};

export default AddStudentInGroupModal;