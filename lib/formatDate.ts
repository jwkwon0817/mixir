/**
 * 날짜를 지정된 형식의 문자열로 변환하는 함수
 * @param date - Date 객체, 문자열 또는 숫자 타입의 날짜
 * @param format - 날짜 형식 문자열 (예: 'YYYY-MM-DD HH:mm:ss')
 * @returns 지정된 형식으로 포맷된 날짜 문자열
 *
 * 지원되는 형식:
 * - YYYY: 4자리 연도 (예: 2024)
 * - YY: 2자리 연도 (예: 24)
 * - MM: 2자리 월 (01-12)
 * - M: 1자리 월 (1-12)
 * - DD: 2자리 일 (01-31)
 * - D: 1자리 일 (1-31)
 * - HH: 2자리 시간 (00-23)
 * - H: 1자리 시간 (0-23)
 * - mm: 2자리 분 (00-59)
 * - m: 1자리 분 (0-59)
 * - ss: 2자리 초 (00-59)
 * - s: 1자리 초 (0-59)
 */
export default function formatDate(date: Date | string | number, format: string) {
    // 입력받은 날짜를 Date 객체로 변환
    const d = new Date(date);

    // 날짜 형식 토큰과 해당하는 값을 매핑
    const tokens: { [key: string]: string } = {
        'YYYY': d.getFullYear().toString(),            // 4자리 연도
        'YY': d.getFullYear().toString().slice(-2),    // 2자리 연도
        'MM': (d.getMonth() + 1).toString().padStart(2, '0'),  // 2자리 월 (0-padding)
        'DD': d.getDate().toString().padStart(2, '0'), // 2자리 일 (0-padding)
        'HH': d.getHours().toString().padStart(2, '0'), // 2자리 시간 (0-padding)
        'mm': d.getMinutes().toString().padStart(2, '0'), // 2자리 분 (0-padding)
        'ss': d.getSeconds().toString().padStart(2, '0'), // 2자리 초 (0-padding)
        'M': (d.getMonth() + 1).toString(),           // 1자리 월
        'D': d.getDate().toString(),                  // 1자리 일
        'H': d.getHours().toString(),                 // 1자리 시간
        'm': d.getMinutes().toString(),               // 1자리 분
        's': d.getSeconds().toString()                // 1자리 초
    };

    // format 문자열에서 토큰을 실제 값으로 치환
    return Object.keys(tokens).reduce((result, token) => {
        return result.replace(token, tokens[token]);
    }, format);
};