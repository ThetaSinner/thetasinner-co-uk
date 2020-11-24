import React from "react";
import {Card} from "react-bootstrap";
import './Project.css'
import Badge from "react-bootstrap/Badge";

export default function Project(props) {
    return (
      <Card bg="dark">
          <Card.Header>
              <ProjectActive isActive={props.isActive} />
              <ProjectArchived isArchived={props.isArchived} />
              <ProjectLanguage language={props.language} />
          </Card.Header>
          <Card.Body>
              <Card.Title><a href={props.location} target={"_blank"} rel="noreferrer">{props.name}</a></Card.Title>
              <Card.Text>{props.description}</Card.Text>
          </Card.Body>
      </Card>
    );
}

function ProjectActive(props) {
    if (!props.isActive) {
        return (
            <Badge variant={"secondary"} className={"mx-1"}>inactive</Badge>
        )
    }

    return (
        <Badge variant={"primary"} className={"mx-1"}>active</Badge>
    )
}

function ProjectArchived(props) {
    if (!props.isArchived) {
        return (<></>)
    }

    return (
        <Badge variant={"warning"} className={"mx-1"}>archived</Badge>
    )
}

function ProjectLanguage(props) {
    return (
        <Badge variant={"light"} className={"mx-1"}>{props.language}</Badge>
    )
}
