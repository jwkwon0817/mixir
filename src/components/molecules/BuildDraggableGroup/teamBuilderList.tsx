'use client'

import {useCallback, useState} from 'react';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import {BuildGroup} from "./types";
import {useModal} from "@/shared/states/useModal";
import Button from "@/components/atoms/Button";
import styles from './style.module.scss';
import {BuildDraggableGroup} from "@/components/molecules/BuildDraggableGroup/index";
import Modal from "@/components/molecules/Modal";
import {ButtonSize, ButtonStyle} from "@/shared/types/button";

interface TeamBuilderProps {
    initialGroups: BuildGroup[];
}

const CONFIRM_MODAL_ID = 'team-delete-confirm';

export const TeamBuilderList = ({ initialGroups }: TeamBuilderProps) => {
    const [groups, setGroups] = useState<BuildGroup[]>(initialGroups);
    const [pendingMove, setPendingMove] = useState<{
        sourceGroup: BuildGroup;
        destGroup: BuildGroup;
        sourceIndex: number;
        destIndex: number;
        movedItem: any;
    } | null>(null);

    const { openModal, closeModal } = useModal();

    const handleMove = useCallback(() => {
        if (!pendingMove) return;

        const { sourceGroup, destGroup, sourceIndex, destIndex, movedItem } = pendingMove;

        // 소스 그룹을 제외한 새로운 그룹 배열 생성
        const newGroups = groups
            .filter(group => group.id !== sourceGroup.id) // 소스 그룹 제거
            .map(group => {
                if (group.id === destGroup.id) {
                    // 대상 그룹에 아이템 추가
                    const newItems = [...group.items];
                    newItems.splice(destIndex, 0, movedItem);
                    return { ...group, items: newItems };
                }
                return group;
            });

        setGroups(newGroups);
        closeModal(CONFIRM_MODAL_ID);
        setPendingMove(null);
    }, [groups, pendingMove, closeModal]);

    const onDragEnd = useCallback((result: DropResult) => {
        const { source, destination } = result;
        if (!destination) return;

        if (source.droppableId === destination.droppableId &&
            source.index === destination.index) return;

        const sourceGroup = groups.find(group => group.id === source.droppableId);
        const destGroup = groups.find(group => group.id === destination.droppableId);

        if (!sourceGroup || !destGroup) return;

        const movedItem = sourceGroup.items[source.index];

        // 이동 후 소스 그룹이 비게 되는 경우 확인 모달 표시
        if (sourceGroup.items.length === 1) {
            setPendingMove({
                sourceGroup,
                destGroup,
                sourceIndex: source.index,
                destIndex: destination.index,
                movedItem
            });
            openModal(CONFIRM_MODAL_ID);
            return;
        }

        // 일반적인 이동 처리
        const newGroups = [...groups];
        const [defaultMovedItem] = sourceGroup.items.splice(source.index, 1);
        destGroup.items.splice(destination.index, 0, defaultMovedItem);
        setGroups(newGroups);
    }, [groups, openModal]);

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div style={{display: 'flex', gap: 15, alignItems: 'flex-start'}}>
                    {groups.map(group => (
                        <BuildDraggableGroup
                            key={group.id}
                            group={group}
                        />
                    ))}
                </div>
            </DragDropContext>

            <Modal
                paddingBottom={24}
                paddingLeft={24}
                paddingRight={24}
                paddingTop={24}
                modalId={CONFIRM_MODAL_ID}
            >
                <div className={styles.confirmModal}>
                    <h2 className={styles.modalTitle}>팀 삭제 확인</h2>
                    <p className={styles.modalMessage}>
                        정말로 "{pendingMove?.movedItem.name}"님을 이동하시겠습니까?
                        <br />
                        "{pendingMove?.sourceGroup.title}" 팀이 삭제됩니다.
                    </p>
                    <div className={styles.modalActions}>
                        <Button
                            style={ButtonStyle.Secondary}
                            size={ButtonSize.Medium}
                            onClick={() => closeModal(CONFIRM_MODAL_ID)}
                        >
                            취소
                        </Button>
                        <Button
                            style={ButtonStyle.Primary}
                            size={ButtonSize.Medium}
                            onClick={handleMove}
                        >
                            확인
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};