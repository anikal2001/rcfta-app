export interface InputProps extends React.ForwardRefExoticComponent<RNTextInputProps & NativeViewGestureHandlerProps & React.RefAttributes<React.ComponentType<any>>>{
    style: any;
    lightInput?: string;
    darkInput?: string;
}

interface ThemeProps {
    lightInput: string;
    darkInput: string;
}