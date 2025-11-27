export interface Question {
    id: number;
    text: string;
    options: { label: string; value: string }[];
    correctAnswer: string;
}