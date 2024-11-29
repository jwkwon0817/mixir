import styles from './style.module.scss';
import {StudentLevel} from "@/shared/types/level";
import Badge from "@/features/Group/ui/GroupStudentTable/Badge";
import {useState} from "react";

interface StudentLevelSelectProps {
    name: string;
    defaultValue: StudentLevel;
    state: StudentLevel;
}

const StudentLevelSelect = ({name, state, defaultValue}: StudentLevelSelectProps) => {
    const [selected, setSelected] = useState<StudentLevel>(defaultValue);

    const skills = [
        StudentLevel.GOOD,
        StudentLevel.AVERAGE,
        StudentLevel.BAD
    ];

    return (
        <div className={styles.container}>
            <span className={styles.name}>{name} 수준</span>
            <div className={styles.levelList}>
                {skills.map((skill) => (
                    <Badge
                        key={skill}
                        skill={skill}
                        onClick={() => setSelected(skill)}
                        className={styles.badge}
                        style={selected === skill ? {} : {filter: 'grayscale(1)', opacity: 0.7}}
                    />
                ))}
            </div>
        </div>
    )
}

export default StudentLevelSelect;