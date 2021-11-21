import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ text, language }) => {
    const [debouncedText, setDebouncedText] = useState(text);
    const [translated, setTranslated] = useState("");

    useEffect(() => {
        const time = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(time);
        };
    }, [text]);

    useEffect(() => {
        const translate = async () => {
            const { data } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
                    },
                }
            );

            setTranslated(data.data.translations[0].translatedText);
        };

        if (debouncedText) translate();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;
