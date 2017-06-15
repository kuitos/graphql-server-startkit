/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-06-12
 */
import userSchema from './user/schema.graphql';
import rootSchema from './schema.graphql';
import paginationSchema from './pagination/schema.graphql';
import resolvers from './resolver';
import { addErrorLoggingToSchema, makeExecutableSchema } from 'graphql-tools';

const schema = makeExecutableSchema({ typeDefs: [rootSchema, userSchema, paginationSchema], resolvers });
addErrorLoggingToSchema(schema, {
	log(e){
		console.error(e.stack);
	}
});

export default schema;
