import { CiLock } from "../../../assets/icons/icons";
import { Input } from "../index";

const PasswordInput = ({ register, error, ...props }) => {
    return (
        <Input
            i18nKey="auth.password"
            id="password"
            type="password"
            register={register}
            rules={{
                required: "auth.requiredField",
                minLength: {
                    value: 8,
                    message: "auth.invalidPassword",
                },
            }}
            error={error}
            {...props}
        >
            <CiLock />
        </Input>
    );
};

export default PasswordInput;