import React, {useState} from "react";
import Project from "./project/Project";
import {ToggleButton} from "react-bootstrap";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const projects = [{
    name: "echelon",
    description: "The echelon project",
    isActive: false,
    isArchived: false,
    language: "cpp",
    location: "https://github.com/ThetaSinner/echelon"
}, {
    name: "ebook-server",
    description: "Server for managing your ebooks",
    isActive: true,
    isArchived: false,
    language: "java",
    location: "https://github.com/ThetaSinner/ebook-server"
}, {
    name: "PyWireDI",
    description: "Dependency Injection for Python",
    isActive: false,
    isArchived: true,
    language: "python",
    location: "https://github.com/ThetaSinner/PyWireDI"
}, {
    name: "osmium",
    description: "An http2 server",
    isActive: false,
    isArchived: false,
    language: "rust",
    location: "https://github.com/ThetaSinner/osmium"
}, {
    name: "kennis",
    description: "A simple knowledge base app using markdown",
    isActive: true,
    isArchived: false,
    language: "typescript",
    location: "https://github.com/ThetaSinner/kennis"
}, {
    name: "Jarvis",
    description: "Your helpful assistant for everything CI",
    isActive: true,
    isArchived: false,
    language: "rust",
    location: "https://github.com/ThetaSinner/Jarvis"
}, {
    name: "IconMagic",
    description: "Automated file icon customisation for Windows",
    isActive: false,
    isArchived: false,
    language: "cpp",
    location: "https://github.com/ThetaSinner/IconMagic"
}];

export default function Projects() {
    const [sortOrder, setSortOrder] = useState("SORT_ACTIVE")

    return (
        <>
            <h5>Projects</h5>
            <p>Here are some projects. <em>You can sort them; If you really want!</em></p>
            <div className={"text-right mb-1"}>
                <ToggleButtonGroup name={"sort"} onChange={(e) => setSortOrder(e)} size={"sm"} value={"active"}>
                    <ToggleButton name={"active"} value={"SORT_ACTIVE"} variant={"secondary"} checked={true}>Active</ToggleButton>
                    <ToggleButton name={"language"} value={"SORT_LANGUAGE"} variant={"secondary"}>Language</ToggleButton>
                    <ToggleButton name={"archived"} value={"SORT_ARCHIVED"} variant={"secondary"}>Archived</ToggleButton>
                </ToggleButtonGroup>
            </div>
            <ProjectList projects={projects} sortOrder={sortOrder} />
        </>
    )
}

function ProjectList(props) {
    const projectList = props.projects.sort((a, b) => {
        if (!props.sortOrder) {
            return 0;
        } else if (props.sortOrder === 'SORT_ACTIVE') {
            const x = a.isActive ? 1 : 0;
            const y = b.isActive ? 1 : 0;
            return y - x;
        } else if (props.sortOrder === 'SORT_LANGUAGE') {
            return b.language < a.language
        } else if (props.sortOrder === 'SORT_ARCHIVED') {
            const x = a.isArchived ? 1 : 0;
            const y = b.isArchived ? 1 : 0;
            return y - x;
        }

        console.error("Can't sort that because Theta messed up!");
        return 0;
    }).map(p =>
        <Project key={p.name} name={p.name} description={p.description} isActive={p.isActive} isArchived={p.isArchived} location={p.location} language={p.language} />
    );

    return (
        <>
            {projectList}
        </>
    )
}
