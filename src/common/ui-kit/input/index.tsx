import {Input as InputANTD, type InputProps} from "antd";
import Text from "antd/es/typography/Text";

interface IProps extends InputProps {
    error?: string | boolean | undefined;
}

const Input = ({error, ...props}: IProps) => {
    return (
        <div className={'w-full flex relative flex-col gap-2'}>
            <InputANTD {...props} />
            <Text className={"absolute bottom-[-15px] !text-red-500 !text-[10px]"}>{error}</Text>
        </div>
    );
};

export default Input;