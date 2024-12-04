'use client'

import { Droppable } from 'react-beautiful-dnd';
import { BuildDraggableGroupItem } from "./item";
import { BuildGroup } from './types';
import { MdEdit } from "react-icons/md";
import styles from './style.module.scss';
import {EditTeamNameModal} from "@/features/Team/ui/EditTeamName";
import {useModal} from "@/shared/states/useModal";

interface GroupProps {
    group: BuildGroup;
}

export const BuildDraggableGroup = ({ group }: GroupProps) => {
    const { openModal } = useModal();

    const handleGroupNameUpdate = (groupId: string, newName: string) => {
        // 그룹 이름 업데이트 로직
    };
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>{group.title}</span>
                <MdEdit className={styles.titleEditIcon} size={14} onClick={() => openModal(`edit-team-name-${group.id}`)} />
            </div>
            <Droppable droppableId={group.id}>
                {(provided) => (
                    <section
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={styles.itemList}
                    >
                        {group.items.map((item, index) => (
                            <BuildDraggableGroupItem
                                key={item.id}
                                index={index}
                                {...item}
                            />
                        ))}
                        {provided.placeholder}
                    </section>
                )}
            </Droppable>
            <EditTeamNameModal
                modalId={`edit-team-name-${group.id}`}
                currentName={group.title}
                onSubmit={(newName) => handleGroupNameUpdate(group.id, newName)}
            />
        </div>
    );
};