'use client'

import React, {useState} from 'react';
import styles from './CreateTeamBuildModal.module.scss';
import Modal from "@/components/molecules/Modal";
import Input from "@/components/atoms/Input";
import {TeamBuildingModalProps} from "@/shared/types/Team/CreateTeamBuildingModal";
import Select from "@/components/atoms/Select";
import Button from "@/components/atoms/Button";
import {ButtonSize, ButtonStyle} from "@/shared/types/button";

type TeamCountType = '3' | '4' | 'other';

const TeamBuildingModal = ({ modalId }: TeamBuildingModalProps) => {
    const [formData, setFormData] = useState<{teamName: string, teamCountType: TeamCountType, memberCount: string}>({
        teamName: '',
        teamCountType: '3',
        memberCount: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
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
            style={{ maxWidth: '480px', width: '100%' }}
            paddingTop={24}
            paddingBottom={24}
            paddingLeft={24}
            paddingRight={24}
        >
            <div className={styles.container}>
                <h2 className={styles.title}>팀빌딩 생성</h2>
                <span className={styles.description}>팀 이름과 팀원 수를 입력해주세요</span>
                <Input
                    name="teamName"
                    label="팀 이름"
                    placeholder="팀 이름을 입력해주세요"
                    value={formData.teamName}
                    onChange={handleInputChange}
                />

                <Select
                    options={[
                        { value: '3', label: '3팀' },
                        { value: '4', label: '4팀' },
                        { value: 'other', label: '직접 입력' }
                    ]}
                    fullWidth
                    defaultValue="3"
                    onChange={(value) => handleTeamOptionClick(value as TeamCountType)}
                    style={{marginTop: 16}}
                />

                {formData.teamCountType === 'other' && (
                    <Input
                        name="memberCount"
                        type="number"
                        placeholder="팀 개수를 입력해주세요"
                        value={formData.memberCount}
                        onChange={handleInputChange}
                        min={1}
                        style={{marginTop: 5}}
                    />
                )}
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

export default TeamBuildingModal;