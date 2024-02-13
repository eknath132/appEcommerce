import { TextInput } from "react-native-paper"

export const CssTextInput = ({label, value, changeText, security = false, disabled = false}) => {
    return (
        <TextInput
            placeholder={label}
            value={value}
            onChangeText={changeText}
            secureTextEntry={security}
            textColor="#fff"
            placeholderTextColor='#fff'
            disabled={disabled}
            style={{
                padding: 1,
                marginBottom: 24,
                backgroundColor:'#a897d1'
            }}
        />
    )
}