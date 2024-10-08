import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function dateToLocaleString(props: Date) {
    console.log(props);
    if (!props) return "";
    console.log(typeof props);
    return props.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export function stringDateToLocaleString(props: string) {
    return dateToLocaleString(new Date(props));
}
