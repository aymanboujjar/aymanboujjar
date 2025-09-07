import React from "react";
import { useAppContext } from "../contexts/AppContext";

interface TextProps {
    fr: string;
    en: string;
}

export const TransText: React.FC<TextProps> = (props) => {
    const { selectedLanguage } = useAppContext();

    return props[selectedLanguage as keyof TextProps];
};

