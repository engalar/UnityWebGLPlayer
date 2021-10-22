/**
 * This file was generated from UnityWebGLPlayer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface UnityWebGLPlayerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    unityModelPath: string;
    selectedDeviceCode: EditableValue<string>;
    onSelect?: ActionValue;
    hoverGameObject: string;
    hoverMethod: string;
}

export interface UnityWebGLPlayerPreviewProps {
    class: string;
    style: string;
    unityModelPath: string;
    selectedDeviceCode: string;
    onSelect: {} | null;
    hoverGameObject: string;
    hoverMethod: string;
}
