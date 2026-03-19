import type {ItemI} from "../../../store/tableStore.ts";

export const validate = (values: Omit<ItemI, "id">) => {
    const errors: Partial<Record<keyof Omit<ItemI, "id">, string>> = {}

    if (!values.age) {
        errors.age = "Обязательное поле"
    } else if (values.age < 18) {
        errors.age = "Возраст ниже 18"
    }

    if (!values.name) {
        errors.name = "Обязательное поле"
    }

    if (!values.birthday) {
        errors.birthday = "Обязательное поле"
    }

    return errors
}