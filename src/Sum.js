import React from "react";

export function Sum({ numbers }) {
    return (
        <h1>{numbers.reduce((a, b) => a + b, 0)}</h1>
    )
}