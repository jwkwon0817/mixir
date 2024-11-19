'use client'

import React, { useState } from 'react';
import styles from './style.module.scss';
import Modal from "@/components/molecules/Modal";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { ButtonSize, ButtonStyle } from "@/shared/types/button";
import {TEAM_OPTIONS} from "@/shared/constants/Team/CreateTeamBuildingModal";
import {TeamBuildingModalProps} from "@/shared/types/Team/CreateTeamBuildingModal";
import Select from "@/components/atoms/Select";

const TeamBuildingModal = ({ modalId }: TeamBuildingModalProps) => {
    const [formData, setFormData] = useState({
        teamName: '',
        memberCount: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 팀 옵션 선택 핸들러
    const handleTeamOptionClick = (value: string) => {
        setFormData(prev => ({
            ...prev,
            memberCount: value
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

                <Input
                    name="teamName"
                    label="팀 이름"
                    placeholder="팀 이름을 입력해주세요"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    error={'은수는 씻고 있었음'}
                />

                <Select
                    options={[
                        { value: '3팀', label: '3팀' },
                        { value: '4팀', label: '4팀' },
                        { value: '기타', label: '기타' }
                    ]}
                    fullWidth
                    defaultValue="4팀"
                    onChange={(value) => console.log(value)}
                />

                <Input
                    name="teamName"
                    placeholder="팀 이름을 입력해주세요"
                    value={formData.teamName}
                    onChange={handleInputChange}
                    error={'은수는 씻고 있었음'}
                />

                {formData.memberCount === 'other' && (
                    <Input
                        name="memberCount"
                        label="팀 개수"
                        type="number"
                        placeholder="팀 개수를 입력해주세요"
                        value={formData.memberCount}
                        onChange={handleInputChange}
                        min={1}
                    />
                )}
            </div>
        </Modal>
    );
};

export default TeamBuildingModal;