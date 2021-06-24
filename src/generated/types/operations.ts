export const Operations = {
    "application": {
        "name": "application",
        "description": " Get details about a Harness Application",
        "type": "Application",
        "paginated": false,
        "args": [
            {
                "name": "applicationId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "application"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "applicationId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "application"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "applicationId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "applicationId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 211
            }
        },
        "body": "query application($applicationId: String!) {\n  result: application(applicationId: $applicationId) {\n    id\n    name\n  }\n}\n"
    },
    "applicationByName": {
        "name": "applicationByName",
        "description": " Fetch details about a Harness Application by it's name",
        "type": "Application",
        "paginated": false,
        "args": [
            {
                "name": "name",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "applicationByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "name"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "applicationByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "name"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 196
            }
        },
        "body": "query applicationByName($name: String!) {\n  result: applicationByName(name: $name) {\n    id\n    name\n  }\n}\n"
    },
    "applications": {
        "name": "applications",
        "description": " Get details about Harness Applications.",
        "type": "ApplicationConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[ApplicationFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "applications"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ApplicationFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "applications"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 411
            }
        },
        "body": "query applications($filters: [ApplicationFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: applications(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "artifact": {
        "name": "artifact",
        "description": " Get details about an artifact.",
        "type": "Artifact",
        "paginated": false,
        "args": [
            {
                "name": "artifactId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "artifact"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "artifactId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "artifact"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "artifactId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "artifactId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 196
            }
        },
        "body": "query artifact($artifactId: String!) {\n  result: artifact(artifactId: $artifactId) {\n    id\n    name\n  }\n}\n"
    },
    "artifacts": {
        "name": "artifacts",
        "description": " Get details about one or multiple Artifacts.",
        "type": "ArtifactConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[ArtifactFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "artifacts"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ArtifactFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "artifacts"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 402
            }
        },
        "body": "query artifacts($filters: [ArtifactFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: artifacts(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "auditChangeContent": {
        "name": "auditChangeContent",
        "description": "Get difference in terms of YAML for a changeSet\n(and a specific resource within the changeSet).This returns paginated data.",
        "type": "ChangeContentConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[ChangeContentFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "auditChangeContent"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ChangeContentFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "auditChangeContent"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 425
            }
        },
        "body": "query auditChangeContent($filters: [ChangeContentFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: auditChangeContent(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "audits": {
        "name": "audits",
        "description": "Get a list of changeSets.This returns paginated data.",
        "type": "ChangeSetConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[ChangeSetFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "audits"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ChangeSetFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "audits"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 397
            }
        },
        "body": "query audits($filters: [ChangeSetFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: audits(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "ceClusterBillingData": {
        "name": "ceClusterBillingData",
        "description": " Beta: Cloud Cost Management export data apis",
        "type": "ceClusterBillingData",
        "paginated": false,
        "args": [
            {
                "name": "aggregateFunction",
                "description": null,
                "type": "[ceAggregation]"
            },
            {
                "name": "filters",
                "description": null,
                "type": "[ceFilter]"
            },
            {
                "name": "groupBy",
                "description": null,
                "type": "[ceGroupBy]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            },
            {
                "name": "select",
                "description": null,
                "type": "[ceSelect]"
            },
            {
                "name": "sortCriteria",
                "description": null,
                "type": "[ceSort]"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "ceClusterBillingData"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "aggregateFunction"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ceAggregation"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ceFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "groupBy"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ceGroupBy"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "select"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ceSelect"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "sortCriteria"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ceSort"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "ceClusterBillingData"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "aggregateFunction"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "aggregateFunction"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "groupBy"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "groupBy"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "select"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "select"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "sortCriteria"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "sortCriteria"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 487
            }
        },
        "body": "query ceClusterBillingData($aggregateFunction: [ceAggregation], $filters: [ceFilter], $groupBy: [ceGroupBy], $limit: Int, $offset: Int = 0, $select: [ceSelect], $sortCriteria: [ceSort]) {\n  result: ceClusterBillingData(\n    aggregateFunction: $aggregateFunction\n    filters: $filters\n    groupBy: $groupBy\n    limit: $limit\n    offset: $offset\n    select: $select\n    sortCriteria: $sortCriteria\n  ) {\n    id\n    name\n  }\n}\n"
    },
    "cloudProvider": {
        "name": "cloudProvider",
        "description": " Get details about a Cloud Provider.",
        "type": "CloudProvider",
        "paginated": false,
        "args": [
            {
                "name": "cloudProviderId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "cloudProvider"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "cloudProviderId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "cloudProvider"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "cloudProviderId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "cloudProviderId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 221
            }
        },
        "body": "query cloudProvider($cloudProviderId: String!) {\n  result: cloudProvider(cloudProviderId: $cloudProviderId) {\n    id\n    name\n  }\n}\n"
    },
    "cloudProviderByName": {
        "name": "cloudProviderByName",
        "description": " Beta",
        "type": "CloudProvider",
        "paginated": false,
        "args": [
            {
                "name": "name",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "cloudProviderByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "name"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "cloudProviderByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "name"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 200
            }
        },
        "body": "query cloudProviderByName($name: String!) {\n  result: cloudProviderByName(name: $name) {\n    id\n    name\n  }\n}\n"
    },
    "cloudProviders": {
        "name": "cloudProviders",
        "description": " Get details about Cloud Providers.",
        "type": "CloudProviderConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[CloudProviderFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "cloudProviders"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "CloudProviderFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "cloudProviders"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 417
            }
        },
        "body": "query cloudProviders($filters: [CloudProviderFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: cloudProviders(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "connector": {
        "name": "connector",
        "description": " Get details about a Connector.",
        "type": "Connector",
        "paginated": false,
        "args": [
            {
                "name": "connectorId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "connector"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "connectorId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "connector"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "connectorId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "connectorId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 201
            }
        },
        "body": "query connector($connectorId: String!) {\n  result: connector(connectorId: $connectorId) {\n    id\n    name\n  }\n}\n"
    },
    "connectors": {
        "name": "connectors",
        "description": " Get details about Connectors.",
        "type": "ConnectorConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[ConnectorFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "connectors"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ConnectorFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "connectors"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 405
            }
        },
        "body": "query connectors($filters: [ConnectorFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: connectors(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "deploymentStats": {
        "name": "deploymentStats",
        "description": "Get statistics about one or multiple deployments.",
        "type": "Data",
        "paginated": false,
        "args": [
            {
                "name": "aggregateFunction",
                "description": null,
                "type": "DeploymentAggregationFunction"
            },
            {
                "name": "filters",
                "description": null,
                "type": "[DeploymentFilter]"
            },
            {
                "name": "groupBy",
                "description": null,
                "type": "[DeploymentAggregation]"
            },
            {
                "name": "includeIndirectExecutions",
                "description": null,
                "type": "Boolean"
            },
            {
                "name": "sortCriteria",
                "description": null,
                "type": "[DeploymentSortCriteria]"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "deploymentStats"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "aggregateFunction"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "DeploymentAggregationFunction"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "DeploymentFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "groupBy"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "DeploymentAggregation"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "includeIndirectExecutions"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Boolean"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "sortCriteria"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "DeploymentSortCriteria"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "deploymentStats"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "aggregateFunction"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "aggregateFunction"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "groupBy"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "groupBy"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "includeIndirectExecutions"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "includeIndirectExecutions"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "sortCriteria"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "sortCriteria"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 518
            }
        },
        "body": "query deploymentStats($aggregateFunction: DeploymentAggregationFunction, $filters: [DeploymentFilter], $groupBy: [DeploymentAggregation], $includeIndirectExecutions: Boolean, $sortCriteria: [DeploymentSortCriteria]) {\n  result: deploymentStats(\n    aggregateFunction: $aggregateFunction\n    filters: $filters\n    groupBy: $groupBy\n    includeIndirectExecutions: $includeIndirectExecutions\n    sortCriteria: $sortCriteria\n  ) {\n    id\n    name\n  }\n}\n"
    },
    "environment": {
        "name": "environment",
        "description": " Get details about a Harness Environment.",
        "type": "Environment",
        "paginated": false,
        "args": [
            {
                "name": "environmentId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "environment"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "environmentId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "environment"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "environmentId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "environmentId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 211
            }
        },
        "body": "query environment($environmentId: String!) {\n  result: environment(environmentId: $environmentId) {\n    id\n    name\n  }\n}\n"
    },
    "environments": {
        "name": "environments",
        "description": " Get details about one or multiple Harness Environments.",
        "type": "EnvironmentConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[EnvironmentFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "environments"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "EnvironmentFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "environments"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 411
            }
        },
        "body": "query environments($filters: [EnvironmentFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: environments(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "execution": {
        "name": "execution",
        "description": " Get the execution status of a Workflow.",
        "type": "Execution",
        "paginated": false,
        "args": [
            {
                "name": "executionId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "execution"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "executionId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "execution"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "executionId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "executionId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 201
            }
        },
        "body": "query execution($executionId: String!) {\n  result: execution(executionId: $executionId) {\n    id\n    name\n  }\n}\n"
    },
    "executionInputs": {
        "name": "executionInputs",
        "description": "Beta: Get required inputs to start an execution of a Workflow or Pipeline",
        "type": "ExecutionInputs",
        "paginated": false,
        "args": [
            {
                "name": "applicationId",
                "description": "Application identifier of a Workflow or Pipeline. Use applicationByName API to fetch this information",
                "type": "String!"
            },
            {
                "name": "entityId",
                "description": "Workflow or Pipeline identifier. Use WorkflowByName API to fetch this information",
                "type": "String!"
            },
            {
                "name": "executionType",
                "description": " Execution type: workflow/ pipeline",
                "type": "ExecutionType!"
            },
            {
                "name": "variableInputs",
                "description": "Variable inputs if the Workflow or Pipeline is templatized. Provide the required variable values to know about the required inputs",
                "type": "[VariableInput]"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "executionInputs"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "applicationId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "entityId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "executionType"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ExecutionType"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "variableInputs"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "VariableInput"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "executionInputs"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "applicationId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "applicationId"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "entityId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "entityId"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "executionType"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "executionType"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "variableInputs"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "variableInputs"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 390
            }
        },
        "body": "query executionInputs($applicationId: String!, $entityId: String!, $executionType: ExecutionType!, $variableInputs: [VariableInput]) {\n  result: executionInputs(\n    applicationId: $applicationId\n    entityId: $entityId\n    executionType: $executionType\n    variableInputs: $variableInputs\n  ) {\n    id\n    name\n  }\n}\n"
    },
    "executions": {
        "name": "executions",
        "description": " Get a list of executions, with filtering options.",
        "type": "ExecutionConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[ExecutionFilter]"
            },
            {
                "name": "includeIndirectExecutions",
                "description": "Set this flag to true to include workflow executions along pipeline",
                "type": "Boolean"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "executions"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ExecutionFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "includeIndirectExecutions"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Boolean"
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "executions"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "includeIndirectExecutions"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "includeIndirectExecutions"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 497
            }
        },
        "body": "query executions($filters: [ExecutionFilter], $includeIndirectExecutions: Boolean, $limit: Int = 100, $offset: Int = 0) {\n  result: executions(\n    filters: $filters\n    includeIndirectExecutions: $includeIndirectExecutions\n    limit: $limit\n    offset: $offset\n  ) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "infrastructureDefinition": {
        "name": "infrastructureDefinition",
        "description": "Get details about an infrastructure using Id",
        "type": "InfrastructureDefinition",
        "paginated": false,
        "args": [
            {
                "name": "infrastructureId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "infrastructureDefinition"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "infrastructureId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "infrastructureDefinition"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "infrastructureId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "infrastructureId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 246
            }
        },
        "body": "query infrastructureDefinition($infrastructureId: String!) {\n  result: infrastructureDefinition(infrastructureId: $infrastructureId) {\n    id\n    name\n  }\n}\n"
    },
    "infrastructureDefinitionByName": {
        "name": "infrastructureDefinitionByName",
        "description": "Get details about an infrastructure using name",
        "type": "InfrastructureDefinition",
        "paginated": false,
        "args": [
            {
                "name": "environmentId",
                "description": null,
                "type": "String!"
            },
            {
                "name": "infrastructureName",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "infrastructureDefinitionByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "environmentId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "infrastructureName"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "infrastructureDefinitionByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "environmentId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "environmentId"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "infrastructureName"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "infrastructureName"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 320
            }
        },
        "body": "query infrastructureDefinitionByName($environmentId: String!, $infrastructureName: String!) {\n  result: infrastructureDefinitionByName(\n    environmentId: $environmentId\n    infrastructureName: $infrastructureName\n  ) {\n    id\n    name\n  }\n}\n"
    },
    "infrastructureDefinitions": {
        "name": "infrastructureDefinitions",
        "description": "Get infrastructures using filters",
        "type": "InfrastructureDefinitionConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[InfrastructureDefinitionFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "infrastructureDefinitions"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "InfrastructureDefinitionFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "infrastructureDefinitions"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 450
            }
        },
        "body": "query infrastructureDefinitions($filters: [InfrastructureDefinitionFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: infrastructureDefinitions(\n    filters: $filters\n    limit: $limit\n    offset: $offset\n  ) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "instances": {
        "name": "instances",
        "description": " Get details about instances.",
        "type": "InstanceConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[InstanceFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "instances"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "InstanceFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "instances"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 402
            }
        },
        "body": "query instances($filters: [InstanceFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: instances(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "k8sLabels": {
        "name": "k8sLabels",
        "description": " Get details about K8s labels.",
        "type": "K8sLabelConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[K8sLabelFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "k8sLabels"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "K8sLabelFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "k8sLabels"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 402
            }
        },
        "body": "query k8sLabels($filters: [K8sLabelFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: k8sLabels(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "k8sWorkloadRecommendations": {
        "name": "k8sWorkloadRecommendations",
        "description": null,
        "type": "WorkloadRecommendationConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[WorkloadFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "k8sWorkloadRecommendations"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "WorkloadFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "k8sWorkloadRecommendations"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 436
            }
        },
        "body": "query k8sWorkloadRecommendations($filters: [WorkloadFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: k8sWorkloadRecommendations(\n    filters: $filters\n    limit: $limit\n    offset: $offset\n  ) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "pipeline": {
        "name": "pipeline",
        "description": " Get a Pipeline object by ID.",
        "type": "Pipeline",
        "paginated": false,
        "args": [
            {
                "name": "pipelineId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "pipeline"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "pipelineId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "pipeline"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "pipelineId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pipelineId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 196
            }
        },
        "body": "query pipeline($pipelineId: String!) {\n  result: pipeline(pipelineId: $pipelineId) {\n    id\n    name\n  }\n}\n"
    },
    "pipelineByName": {
        "name": "pipelineByName",
        "description": " Get a Pipeline object by ID.",
        "type": "Pipeline",
        "paginated": false,
        "args": [
            {
                "name": "applicationId",
                "description": null,
                "type": "String!"
            },
            {
                "name": "pipelineName",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "pipelineByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "applicationId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "pipelineName"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "pipelineByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "applicationId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "applicationId"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "pipelineName"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pipelineName"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 270
            }
        },
        "body": "query pipelineByName($applicationId: String!, $pipelineName: String!) {\n  result: pipelineByName(\n    applicationId: $applicationId\n    pipelineName: $pipelineName\n  ) {\n    id\n    name\n  }\n}\n"
    },
    "pipelines": {
        "name": "pipelines",
        "description": " Get details about one or multiple Pipelines.",
        "type": "PipelineConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[PipelineFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "pipelines"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "PipelineFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "pipelines"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 402
            }
        },
        "body": "query pipelines($filters: [PipelineFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: pipelines(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "secret": {
        "name": "secret",
        "description": " Beta: Get details about secret.",
        "type": "Secret",
        "paginated": false,
        "args": [
            {
                "name": "secretId",
                "description": null,
                "type": "String!"
            },
            {
                "name": "secretType",
                "description": null,
                "type": "SecretType!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "secret"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "secretId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "secretType"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "SecretType"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "secret"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "secretId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "secretId"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "secretType"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "secretType"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 237
            }
        },
        "body": "query secret($secretId: String!, $secretType: SecretType!) {\n  result: secret(secretId: $secretId, secretType: $secretType) {\n    id\n    name\n  }\n}\n"
    },
    "secretByName": {
        "name": "secretByName",
        "description": " Beta: Get details about secret by name.",
        "type": "Secret",
        "paginated": false,
        "args": [
            {
                "name": "name",
                "description": null,
                "type": "String!"
            },
            {
                "name": "secretType",
                "description": null,
                "type": "SecretType!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "secretByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "name"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "secretType"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "SecretType"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "secretByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "name"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "secretType"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "secretType"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 237
            }
        },
        "body": "query secretByName($name: String!, $secretType: SecretType!) {\n  result: secretByName(name: $name, secretType: $secretType) {\n    id\n    name\n  }\n}\n"
    },
    "secretManager": {
        "name": "secretManager",
        "description": " Beta: Get details about a Secret Manager.",
        "type": "SecretManager",
        "paginated": false,
        "args": [
            {
                "name": "secretManagerId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "secretManager"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "secretManagerId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "secretManager"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "secretManagerId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "secretManagerId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 221
            }
        },
        "body": "query secretManager($secretManagerId: String!) {\n  result: secretManager(secretManagerId: $secretManagerId) {\n    id\n    name\n  }\n}\n"
    },
    "secretManagerByName": {
        "name": "secretManagerByName",
        "description": " Beta: Get Secret Manager by name.",
        "type": "SecretManager",
        "paginated": false,
        "args": [
            {
                "name": "name",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "secretManagerByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "name"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "secretManagerByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "name"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 200
            }
        },
        "body": "query secretManagerByName($name: String!) {\n  result: secretManagerByName(name: $name) {\n    id\n    name\n  }\n}\n"
    },
    "secretManagers": {
        "name": "secretManagers",
        "description": " Beta: List Secret Manager.",
        "type": "SecretManagerConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[SecretManagerFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "secretManagers"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "SecretManagerFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "secretManagers"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 417
            }
        },
        "body": "query secretManagers($filters: [SecretManagerFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: secretManagers(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "service": {
        "name": "service",
        "description": " Get details about a Harness Service.",
        "type": "Service",
        "paginated": false,
        "args": [
            {
                "name": "serviceId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "service"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "serviceId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "service"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "serviceId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "serviceId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 191
            }
        },
        "body": "query service($serviceId: String!) {\n  result: service(serviceId: $serviceId) {\n    id\n    name\n  }\n}\n"
    },
    "services": {
        "name": "services",
        "description": " Get a list of Harness Services, by applicationId. This returns paginated data.",
        "type": "ServiceConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[ServiceFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "services"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "ServiceFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "services"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 399
            }
        },
        "body": "query services($filters: [ServiceFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: services(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "ssoProvider": {
        "name": "ssoProvider",
        "description": null,
        "type": "SSOProvider",
        "paginated": false,
        "args": [
            {
                "name": "ssoProviderId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "ssoProvider"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "ssoProviderId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "ssoProvider"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "ssoProviderId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "ssoProviderId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 211
            }
        },
        "body": "query ssoProvider($ssoProviderId: String!) {\n  result: ssoProvider(ssoProviderId: $ssoProviderId) {\n    id\n    name\n  }\n}\n"
    },
    "ssoProviders": {
        "name": "ssoProviders",
        "description": null,
        "type": "SSOProviderConnection",
        "paginated": true,
        "args": [
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "ssoProviders"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "ssoProviders"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 361
            }
        },
        "body": "query ssoProviders($limit: Int = 100, $offset: Int = 0) {\n  result: ssoProviders(limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "tag": {
        "name": "tag",
        "description": " Get tag details using tag uuid",
        "type": "TagEntity",
        "paginated": false,
        "args": [
            {
                "name": "tagId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "tag"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "tagId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "tag"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "tagId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "tagId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 171
            }
        },
        "body": "query tag($tagId: String!) {\n  result: tag(tagId: $tagId) {\n    id\n    name\n  }\n}\n"
    },
    "tagByName": {
        "name": "tagByName",
        "description": " Get tag details using tag name",
        "type": "TagEntity",
        "paginated": false,
        "args": [
            {
                "name": "name",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "tagByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "name"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "tagByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "name"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 180
            }
        },
        "body": "query tagByName($name: String!) {\n  result: tagByName(name: $name) {\n    id\n    name\n  }\n}\n"
    },
    "tags": {
        "name": "tags",
        "description": " Get the list of tags. This returns paginated data.",
        "type": "TagConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[TagEntityFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "tags"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "TagEntityFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "tags"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 393
            }
        },
        "body": "query tags($filters: [TagEntityFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: tags(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "trigger": {
        "name": "trigger",
        "description": " Get details about a Trigger.",
        "type": "Trigger",
        "paginated": false,
        "args": [
            {
                "name": "triggerId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "trigger"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "triggerId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "trigger"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "triggerId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "triggerId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 191
            }
        },
        "body": "query trigger($triggerId: String!) {\n  result: trigger(triggerId: $triggerId) {\n    id\n    name\n  }\n}\n"
    },
    "triggerByName": {
        "name": "triggerByName",
        "description": " Get details about a Trigger  by it's name",
        "type": "Trigger",
        "paginated": false,
        "args": [
            {
                "name": "applicationId",
                "description": null,
                "type": "String!"
            },
            {
                "name": "triggerName",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "triggerByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "applicationId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "triggerName"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "triggerByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "applicationId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "applicationId"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "triggerName"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "triggerName"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 265
            }
        },
        "body": "query triggerByName($applicationId: String!, $triggerName: String!) {\n  result: triggerByName(applicationId: $applicationId, triggerName: $triggerName) {\n    id\n    name\n  }\n}\n"
    },
    "triggers": {
        "name": "triggers",
        "description": " Get a list of Harness Triggers, This returns paginated data.",
        "type": "TriggerConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[TriggerFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "triggers"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "TriggerFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "triggers"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 399
            }
        },
        "body": "query triggers($filters: [TriggerFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: triggers(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "user": {
        "name": "user",
        "description": "fetch a user by id",
        "type": "User",
        "paginated": false,
        "args": [
            {
                "name": "id",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "user"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "id"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "user"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "id"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 164
            }
        },
        "body": "query user($id: String!) {\n  result: user(id: $id) {\n    id\n    name\n  }\n}\n"
    },
    "userByEmail": {
        "name": "userByEmail",
        "description": "fetch a user by email",
        "type": "User",
        "paginated": false,
        "args": [
            {
                "name": "email",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "userByEmail"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "email"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "userByEmail"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "email"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "email"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 187
            }
        },
        "body": "query userByEmail($email: String!) {\n  result: userByEmail(email: $email) {\n    id\n    name\n  }\n}\n"
    },
    "userByName": {
        "name": "userByName",
        "description": "fetch a user by name",
        "type": "User",
        "paginated": false,
        "args": [
            {
                "name": "name",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "userByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "name"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "userByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "name"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 182
            }
        },
        "body": "query userByName($name: String!) {\n  result: userByName(name: $name) {\n    id\n    name\n  }\n}\n"
    },
    "userGroup": {
        "name": "userGroup",
        "description": null,
        "type": "UserGroup",
        "paginated": false,
        "args": [
            {
                "name": "userGroupId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "userGroup"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "userGroupId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "userGroup"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "userGroupId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "userGroupId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 201
            }
        },
        "body": "query userGroup($userGroupId: String!) {\n  result: userGroup(userGroupId: $userGroupId) {\n    id\n    name\n  }\n}\n"
    },
    "userGroupByName": {
        "name": "userGroupByName",
        "description": null,
        "type": "UserGroup",
        "paginated": false,
        "args": [
            {
                "name": "name",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "userGroupByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "name"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "userGroupByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "name"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 192
            }
        },
        "body": "query userGroupByName($name: String!) {\n  result: userGroupByName(name: $name) {\n    id\n    name\n  }\n}\n"
    },
    "userGroups": {
        "name": "userGroups",
        "description": null,
        "type": "UserGroupConnection",
        "paginated": true,
        "args": [
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "userGroups"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "userGroups"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 357
            }
        },
        "body": "query userGroups($limit: Int = 100, $offset: Int = 0) {\n  result: userGroups(limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "users": {
        "name": "users",
        "description": "fetch a list of users",
        "type": "UserConnection",
        "paginated": true,
        "args": [
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "users"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "users"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 347
            }
        },
        "body": "query users($limit: Int = 100, $offset: Int = 0) {\n  result: users(limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    },
    "workflow": {
        "name": "workflow",
        "description": " Get a Workflow object by ID.",
        "type": "Workflow",
        "paginated": false,
        "args": [
            {
                "name": "workflowId",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "workflow"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "workflowId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "workflow"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "workflowId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "workflowId"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 196
            }
        },
        "body": "query workflow($workflowId: String!) {\n  result: workflow(workflowId: $workflowId) {\n    id\n    name\n  }\n}\n"
    },
    "workflowByName": {
        "name": "workflowByName",
        "description": " Fetch details about a  Workflow by it's name",
        "type": "Workflow",
        "paginated": false,
        "args": [
            {
                "name": "applicationId",
                "description": null,
                "type": "String!"
            },
            {
                "name": "workflowName",
                "description": null,
                "type": "String!"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "workflowByName"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "applicationId"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "workflowName"
                                }
                            },
                            "type": {
                                "kind": "NonNullType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "String"
                                    }
                                }
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "workflowByName"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "applicationId"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "applicationId"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "workflowName"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "workflowName"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "id"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "name"
                                            },
                                            "arguments": [],
                                            "directives": []
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 270
            }
        },
        "body": "query workflowByName($applicationId: String!, $workflowName: String!) {\n  result: workflowByName(\n    applicationId: $applicationId\n    workflowName: $workflowName\n  ) {\n    id\n    name\n  }\n}\n"
    },
    "workflows": {
        "name": "workflows",
        "description": " Get a list of Workflows, by applicationId. This returns paginated data.",
        "type": "WorkflowConnection",
        "paginated": true,
        "args": [
            {
                "name": "filters",
                "description": null,
                "type": "[WorkflowFilter]"
            },
            {
                "name": "limit",
                "description": null,
                "type": "Int = 100"
            },
            {
                "name": "offset",
                "description": null,
                "type": "Int = 0"
            }
        ],
        "mutation": false,
        "documentNode": {
            "kind": "Document",
            "definitions": [
                {
                    "kind": "OperationDefinition",
                    "operation": "query",
                    "name": {
                        "kind": "Name",
                        "value": "workflows"
                    },
                    "variableDefinitions": [
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "filters"
                                }
                            },
                            "type": {
                                "kind": "ListType",
                                "type": {
                                    "kind": "NamedType",
                                    "name": {
                                        "kind": "Name",
                                        "value": "WorkflowFilter"
                                    }
                                }
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "limit"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "100"
                            },
                            "directives": []
                        },
                        {
                            "kind": "VariableDefinition",
                            "variable": {
                                "kind": "Variable",
                                "name": {
                                    "kind": "Name",
                                    "value": "offset"
                                }
                            },
                            "type": {
                                "kind": "NamedType",
                                "name": {
                                    "kind": "Name",
                                    "value": "Int"
                                }
                            },
                            "defaultValue": {
                                "kind": "IntValue",
                                "value": "0"
                            },
                            "directives": []
                        }
                    ],
                    "directives": [],
                    "selectionSet": {
                        "kind": "SelectionSet",
                        "selections": [
                            {
                                "kind": "Field",
                                "alias": {
                                    "kind": "Name",
                                    "value": "result"
                                },
                                "name": {
                                    "kind": "Name",
                                    "value": "workflows"
                                },
                                "arguments": [
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "filters"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "filters"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "limit"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "limit"
                                            }
                                        }
                                    },
                                    {
                                        "kind": "Argument",
                                        "name": {
                                            "kind": "Name",
                                            "value": "offset"
                                        },
                                        "value": {
                                            "kind": "Variable",
                                            "name": {
                                                "kind": "Name",
                                                "value": "offset"
                                            }
                                        }
                                    }
                                ],
                                "directives": [],
                                "selectionSet": {
                                    "kind": "SelectionSet",
                                    "selections": [
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "nodes"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "id"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "name"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            "kind": "Field",
                                            "name": {
                                                "kind": "Name",
                                                "value": "pageInfo"
                                            },
                                            "arguments": [],
                                            "directives": [],
                                            "selectionSet": {
                                                "kind": "SelectionSet",
                                                "selections": [
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "hasMore"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    },
                                                    {
                                                        "kind": "Field",
                                                        "name": {
                                                            "kind": "Name",
                                                            "value": "total"
                                                        },
                                                        "arguments": [],
                                                        "directives": []
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            "loc": {
                "start": 0,
                "end": 402
            }
        },
        "body": "query workflows($filters: [WorkflowFilter], $limit: Int = 100, $offset: Int = 0) {\n  result: workflows(filters: $filters, limit: $limit, offset: $offset) {\n    nodes {\n      id\n      name\n    }\n    pageInfo {\n      hasMore\n      total\n    }\n  }\n}\n"
    }
}