import {mock} from "../utils/constants/mock.ts";
import {create} from "zustand/react";

export interface ItemI {
    name: string,
    age: number,
    birthday: string,
    id: string
}

interface TableStoreI {
    items: ItemI[],
    search: string,
    setSearch: (m: string) => void,
    addItem: (payload: Omit<ItemI, "id">) => void
    removeItem: (id: string) => void
    updateItem: (id: string, payload: Partial<Omit<ItemI, "id">>) => void
}

export const useTableStore = create<TableStoreI>((set) => {
    return {
        items: mock,
        search: "",
        setSearch: (search: string) => {
            set(() => {
                return {search}
            })

        },
        addItem: (payload: Omit<ItemI, "id">) => {
            set(({items}) => {
                const newItem = {...payload, id: crypto.randomUUID()}
                return {items: [newItem, ...items]}
            })
        },
        removeItem: (id: string) => {
            set(({items}) => {
                const filteredItems = items.filter(item => item.id !== id)
                return {items: filteredItems}
            })
        },
        updateItem: (id: string, payload: Partial<Omit<ItemI, "id">>) => {
            set(({items}) => {
                const updatedItems = items.map(item => item.id === id ? ({...item, ...payload}) : item)
                return {items: updatedItems}
            })
        },
    }
})