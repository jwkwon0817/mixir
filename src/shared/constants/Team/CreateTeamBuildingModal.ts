import {TeamOption} from "@/shared/types/Team/CreateTeamBuildingModal";

export const TEAM_OPTIONS: TeamOption[] = [
    { value: '3', label: '3팀' },
    { value: '4', label: '4팀' },
    { value: 'other', label: '기타' }
] as const;