module.exports = function NonNullRelationsPlugin(builder) {
  builder.hook('GraphQLObjectType:fields:field', (field, build, context) => {
    const { isPgForwardRelationField, pgFieldIntrospection } = context.scope;
    if (isPgForwardRelationField) {
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
