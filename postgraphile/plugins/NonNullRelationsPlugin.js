/**
 *
 * NonNullRelationsPlugin
 *
 * This plugin makes sure that fields behind foreign keys
 * which are flagged as `NON NULL` are also `NonNull` in
 * the resulting GraphQL schema.
 *
 */

module.exports = function NonNullRelationsPlugin(builder) {
  builder.hook('GraphQLObjectType:fields:field', (field, build, context) => {
    const { isPgForwardRelationField, pgFieldIntrospection } = context.scope;
    if (isPgForwardRelationField && pgFieldIntrospection) {
      const linkedAttributeNums = pgFieldIntrospection.keyAttributeNums;
      const relationIsNotNull = pgFieldIntrospection.class.attributes
        .filter((attr) => linkedAttributeNums.indexOf(attr.num) >= 0)
        .every((attr) => attr.isNotNull || attr.type.domainIsNotNull);

      if (relationIsNotNull) {
        return {
          ...field,
          type: new build.graphql.GraphQLNonNull(field.type),
        };
      }
    }

    return field;
  });
};
