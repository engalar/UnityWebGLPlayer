import { createElement, useCallback, useMemo, useState } from "react";

import { OutputEventsType, UnityWebGLPlayerContainerProps } from "../typings/UnityWebGLPlayerProps";

import "./ui/index.scss";
import UnityFC from "./components/UnityFC";
import { Alert } from "./components/Alert";

function callHandle(cfg: OutputEventsType, value: string) {
    console.log(cfg, value);

    //@ts-ignore
    mx.data.create({
        entity: "System.Paging",
        callback: function (obj: any) {
            //@ts-ignore
            mx.data.makeChange(obj.getGuid(), 'SortAttribute', value)

            //@ts-ignore
            mx.data.action({
                params: {
                    applyto: "selection",
                    actionname: cfg.mfName,
                    guids: [obj.getGuid()]
                },
                origin: null,
                callback: function (objs: any) {
                    // expect single MxObject
                    console.log(objs[0].get("SortAttribute"));
                    //@ts-ignore
                    mx.data.removeChanges([objs[0].getGuid()])
                },
                error: function (error: any) {
                    alert(error.message);
                }
            });

        },
        error: function (e: any) {
            console.error("Could not commit object:", e);
        }
    });

}

export default function UnityWebGLPlayer(props: UnityWebGLPlayerContainerProps) {
    const [lastError, setLastError] = useState("");
    const [hasError, setHasError] = useState(false);
    const eventMap = useMemo(() => {
        const eventMap = new Map<string, OutputEventsType>();
        props.outputEvents.forEach(element => {
            eventMap.set(element.eventName, element);
        });
        return eventMap;
    }, []);
    const onEvent = useCallback(
        (eventName: string, value: string) => {
            const cfg = eventMap.get(eventName);
            if (cfg) {
                callHandle(cfg, value);
            } else {
                setLastError(`事件名[${eventName}]没有配置相应的处理函数！`);
                setHasError(true);
            }
        },
        [eventMap]
    );

    return hasError ? (
        <Alert bootstrapStyle="danger">{lastError}</Alert>
    ) : (
        <UnityFC
            onEvent={onEvent}
            eventNames={Array.from(eventMap.keys())}
            name={props.name}
            hoverMethod={props.hoverMethod}
            hoverGo={props.hoverGameObject}
            style={{ width: "100%", ...props.style }}
            class={props.class}
            modelPath={props.unityModelPath}
        ></UnityFC>
    );
}
