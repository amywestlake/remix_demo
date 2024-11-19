import { ShowProps } from "./show";

export interface StrandProps {
    id: string;
    title: string;
    slug: string;
    summary: string;
    description: string;
    image: string;
    sponsors: string;
    shows: ShowProps[];
}

