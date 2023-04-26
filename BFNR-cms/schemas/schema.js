// First, we must import the schema creator
import medlem from './medlem'
import certifications from './certifications'
import contactPerson from './contactPerson'
// Then import schema types from any plugins that might expose them
import tags from './tags'
import connections from './connections'

// Then we give our schema to the builder and provide the result to Sanity

export default [medlem, certifications, contactPerson, tags, connections]
