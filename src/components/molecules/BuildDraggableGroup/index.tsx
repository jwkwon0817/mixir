'use client'

import { Droppable } from 'react-beautiful-dnd';
import { BuildDraggableGroupItem } from "./item";
import { BuildGroup } from './types';
import { MdEdit } from "react-icons/md";
import styles from './style.module.scss';

interface GroupProps {
    group: BuildGroup;
}

export const BuildDraggableGroup = ({ group }: GroupProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>{group.title}</span>
                <MdEdit className={styles.titleEditIcon} size={14} />
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
        </div>
    );
};