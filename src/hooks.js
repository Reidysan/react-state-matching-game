import React, { useEffect, useRef, useState } from 'react'

export default function useHover() {

    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    useEffect(() => {

    })

    return [ref, hovered];
}
