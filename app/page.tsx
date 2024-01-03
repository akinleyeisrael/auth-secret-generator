"use client"
import { Button } from "@/components/ui/button";
import { CopyIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [key, setKey] = useState("")

  const generateOpenssl = () => {
    const randomBytes = new Uint8Array(44);
    window.crypto.getRandomValues(randomBytes);
    const byteArray = Array.from(randomBytes);
    const base64String = btoa(String.fromCharCode(...byteArray));
    setKey(base64String)
  }

  const copyKey = async () =>{
    await navigator.clipboard.writeText(key);
    toast.info("Copied to clipboard!");
  }
    return (
      <div>
        <div className="flex flex-col items-center mx-auto space-y-6 mt-52">
          <h1 className="text-5xl leading-5 tracking-tighter mb-4 font-bold">
            Auth secret generator for next js apps
          </h1>
          <Button onClick={generateOpenssl} variant={"secondary"}>Generate</Button>
          <div className="flex space-x-2 text-primary-foreground relative">
            <div className="bg-primary border border-white rounded-lg h-20 w-[40rem] px-6">
              <p className="max-w-lg my-8 break-before-all break-words text-xs">{key}</p>
            </div>
            <CopyIcon onClick={copyKey} className="absolute end-6 m-8 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    );
  }
