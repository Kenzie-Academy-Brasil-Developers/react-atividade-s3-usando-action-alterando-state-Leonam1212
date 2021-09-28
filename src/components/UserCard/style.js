import styled from "styled-components"

export const Container = styled.div`
        font-family: monospace;
        letter-spacing: 2px;
        background: gray;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
        width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        input {
            outline: none;
            border: none;
            padding:  10px;
            border-radius: 8px;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
        }
        button {
            width: 180px;
            margin: 10px;
            padding: 10px;
            border: none;
            box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
            border-radius: 8px;
            cursor: pointer;
        }

`