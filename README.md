# ts-util
 Various core utility functionality that can be reused  in typescript projects

## Functionality to include

* Runtime - the root object used to create, initialize, configure, run, and destroy an application
* Task runner
    * Something similar to listr
* Configuration - config management
    * Environment vars
    * Command line args
    * Config files
    * Secrets
    * Credentials
* Logging
* Error handling
* DI container
    * https://github.com/microsoft/tsyringe 
* Command registry
    * Command name/path
    * Options type
    * Return type
    * Handler
    * Description
* Objects - helper classes for object manipulation
    * Serialization/Deserialization
    * Validation
    * String helpers
    * Date helpers
    * Collection helpers
* Observable
* Templating
    * use native javascript templates
    * use javascript $ref standard along
* Filesystem
    * browserfs
* OS/process interaction
* Network
    * HTTP client
    * Proxy
    * Certificate stuff
* Development
    * Testing utility
    * Build helpers to support node & web
    * Codegen
        * https://github.com/quicktype/quicktype
    * Docs gen
* URI handling
    * http(s)
    * git
    * file
    * memoryfs
    * ssh
    * harness-gql
    * harness-yaml

## Things that also should be standardized but could go into separate packages

* CLI framework
* Web server framework
* kubernetes
* github
* pulumi
* harness api client

## Possible dependencies and sources of inspiration

* https://github.com/infinitered/gluegun
* https://github.com/infinitered/apisauce
* fs-jetpack
* https://github.com/fullstack-build/tslog
