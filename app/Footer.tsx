import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <div>
            <p className="text-muted-foreground inline-flex">
                Made With{" "}
                <span>
                    <Link
                        className="inline-flex text-primary"
                        href={"https://github.com/akinleyeisrael/openssl"}
                    >
                        <GitHubLogoIcon className="m-1" />
                        auth-secret-gen
                    </Link>
                </span>
            </p>
        </div>
    )
}

export default Footer