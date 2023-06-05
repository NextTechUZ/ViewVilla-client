import React from "react";

export type MainPropTypes<T = {}> = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
} & T ;


 