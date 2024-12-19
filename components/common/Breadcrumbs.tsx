import React from 'react'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@/components/ui/breadcrumb"

export default function Breadcrumbs({ items }: { items: Array<string> }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    items.map((item, i) => {
                        return (
                            <>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className='capitalize' href="/">{item}</BreadcrumbLink>
                                </BreadcrumbItem>
                                {i !== items.length - 1 && <BreadcrumbSeparator />}
                            </>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}
