"use client"

import { useEffect, useState } from "react"
import { parseISO, format } from "date-fns"

interface LocalTimeProps {
    dateString: string // Expects YYYY-MM-DD
    formatStr?: string
    className?: string
}

export function LocalTime({ dateString, formatStr = "MMMM d, yyyy", className }: LocalTimeProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // During SSR and first paint, render the original UTC string to avoid hydration mismatches
    if (!mounted) {
        return <span className={className}>{dateString} (UTC)</span>
    }

    // Once mounted, safely format in the user's local timezone
    try {
        const date = parseISO(dateString)
        const formatted = format(date, formatStr)
        return <span className={className} suppressHydrationWarning>{formatted}</span>
    } catch (err) {
        return <span className={className}>{dateString}</span>
    }
}
