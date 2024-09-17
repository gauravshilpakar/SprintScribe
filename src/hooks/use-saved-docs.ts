import TiptapDataProps from "@/components/tiptap/tiptap-data";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface DocState {
    docs: TiptapDataProps[];
    currentDoc: TiptapDataProps | null;
    updateDoc(value: TiptapDataProps): void;
    setCurrentDoc(value: TiptapDataProps): void;
    addDoc(value: TiptapDataProps): void;
    removeDoc(id: string): void;
}

export const useDocStore = create<DocState>()(
    persist(
        (set) => ({
            docs: [],
            addDoc(value: TiptapDataProps) {
                set((state) => ({
                    docs: [...state.docs, value],
                }));
            },
            updateDoc(value: TiptapDataProps) {
                set((state) => ({
                    docs: [...state.docs, value],
                }));
            },
            removeDoc(id: string) {
                set((state) => ({
                    docs: state.docs.filter((doc) => doc.id !== id),
                }));
            },
            currentDoc: null,
            setCurrentDoc(doc: TiptapDataProps) {
                set(() => ({ currentDoc: doc }));
            },
        }),
        {
            name: "doc-storage", // Key in local storage
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
