export interface ClassInfo {
    grade: number;
    class: number;
}

export interface BuildGroupItem {
    id: string;
    name: string;
    classInfo: ClassInfo;
}

export interface BuildGroup {
    id: string;
    title: string;
    items: BuildGroupItem[];
}