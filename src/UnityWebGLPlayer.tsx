import { createElement, useEffect, useState } from "react";
import { ValueStatus } from 'mendix'

import { UnityWebGLPlayerContainerProps } from "../typings/UnityWebGLPlayerProps";

import "./ui/index.scss";
import UnityFC from "./components/UnityFC";
import { usePrevious } from "ahooks";


export default function UnityWebGLPlayer(props: UnityWebGLPlayerContainerProps) {

    const [device, setDevice] = useState<string>('')
    const previousDevice = usePrevious(device);

    useEffect(() => {
        if (props.selectedDeviceCode.status == ValueStatus.Available
            && previousDevice !== device) {
            props.selectedDeviceCode.setValue(device)
        }
    }, [device, previousDevice, props.selectedDeviceCode])


    return <UnityFC
        onEvent={(_name: string, value: string) => setDevice(value)}
        eventNames={['ObjectType']}
        name={props.name}
        hoverMethod={props.hoverMethod}
        hoverGo={props.hoverGameObject}
        style={{ width: "100%", ...props.style }}
        class={props.class}
        modelPath={props.unityModelPath}
    ></UnityFC>;
}
