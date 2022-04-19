export interface InfiniteScrollProps {
    dataLength: number;
    fetchMore: () => void;
    children?: React.ReactNode;
}
