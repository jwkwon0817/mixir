'use client'

import { Draggable } from 'react-beautiful-dnd';
import { BuildGroupItem } from "./types";
import { FaRegEdit } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import styles from './item.module.scss';

interface BuildDraggableGroupItemProps extends BuildGroupItem {
    index: number;
}

export const BuildDraggableGroupItem = ({
                                            id,
                                            index,
                                            name,
                                            classInfo,
                                        }: BuildDraggableGroupItemProps) => {
    // draggableId가 실제 아이템의 id와 정확히 일치하는지 확인
    return (
        <Draggable draggableId={String(id)} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`${styles.wrap} ${snapshot.isDragging ? styles.dragging : ''}`}
                >
                    <div {...provided.dragHandleProps} className={styles.dragIndicator}>
                        <MdDragIndicator size={20}/>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <span className={styles.title}>{name}</span>
                            <FaRegEdit className={styles.editIcon}/>
                        </div>
                        <span className={styles.grade}>{classInfo.grade}학년 {classInfo.class}반</span>
                    </div>
                </div>
            )}
        </Draggable>
    );
};