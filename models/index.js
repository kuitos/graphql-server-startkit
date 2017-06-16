/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2017-06-12
 */
import glob from 'glob';
import path from 'path';
import fs from 'fs';
import resolvers from './resolver';
import { addErrorLoggingToSchema, makeExecutableSchema } from 'graphql-tools';

const modules = glob.sync(path.resolve(__dirname, './**/*.graphql'));
const schemaStringArray = modules.map(module => fs.readFileSync(module, { encoding: 'UTF-8' }));
const schema = makeExecutableSchema({ typeDefs: schemaStringArray, resolvers });

addErrorLoggingToSchema(schema, {
	log(e){
		console.error(e.stack);
	}
});

export default schema;
