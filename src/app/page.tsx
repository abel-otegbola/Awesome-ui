'use client'

import Search from "@/components/search/search"

// import Button from "@/components/button/button";
// import ComponentCard from "@/components/card/componentCard";
// import Input from "@/components/input/input";
// import { Envelope } from "@phosphor-icons/react";

export default function UiPage() {
    return (
        <div className="md:px-[20%] p-6 flex gap-4 justify-center items-center p-[3%]">
            {/* <ComponentCard 
                title="Input" 
                description="Beautiful input component" 
                variations="4 variations" 
                code={<Input />}
                component={
                    <div className="flex flex-col gap-2">
                        <Input className="w-full" label="Email Address" leftIcon={<Envelope />} placeholder="Email Address"/>
                    </div>
                } 
            />
            <ComponentCard 
                title="Button" 
                description="Beautiful button component" 
                variations="8 variations" 
                code={<Button />}
                component={
                    <div className="flex flex-col gap-2">
                        <Button>Get Started</Button>
                    </div>
                } 
            /> */}
            <Search placeholder="Type a command or search"/>
        </div>
    )
}