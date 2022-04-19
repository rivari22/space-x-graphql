export interface CardProps {
    title: string;
    desc: string;
    link?: string;
    delete?: () => void;
}