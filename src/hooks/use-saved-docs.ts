import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Doc {
    id: string;
    value: string;
    lastUpdated: Date;
}

export interface DocState {
    docs: Doc[];
    currentDoc: Doc | null;
    setCurrentDoc: (value: Doc) => void;
    addDoc: (value: string) => void;
    removeDoc: (id: string) => void;
}

export const useDocStore = create<DocState>()(
    persist(
        (set) => ({
            docs: [],
            addDoc: (value: string) =>
                set((state) => ({
                    docs: [
                        ...state.docs,
                        {
                            id: crypto.randomUUID().toString(),
                            value: value,
                            lastUpdated: new Date(Date.now()),
                        },
                    ],
                })),
            removeDoc: (id: string) =>
                set((state) => ({
                    docs: state.docs.filter((doc) => doc.id !== id),
                })),
            currentDoc: null,
            setCurrentDoc: (doc: Doc) => set((state) => ({ currentDoc: doc })),
        }),
        {
            name: "doc-storage", // Key in local storage
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
