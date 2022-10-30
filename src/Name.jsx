import React from "react";
import { useLocation } from "react-router-dom"

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Name = () => {
    let query = useQuery();
    return (
        <div>
            <h1>{query.get("name")} was entered</h1>
            <a href="https://morefined.com">Go back</a>
        </div>
    )
}

export default Name