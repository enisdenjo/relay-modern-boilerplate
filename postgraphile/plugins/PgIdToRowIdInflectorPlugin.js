/**
 *
 * PgIdToRowIdInflectorPlugin
 *
 * When using *Postgraphile* in combination with *Relay Modern* there must be a field
 * named `id` which is globally unique. This field can be used to get any node from
 * GraphQL. However, when using this option (`classicIds`) with Postgres all fields
 * defined in Postgres as `id` will be renamed to `rowId` to allow GraphQL to create
 * the globally unique `id` field (Base64 tuple of [tablename, id]). This raises
 * inconsistencies within the schema because Postgres fields named `user_id` will
 * NOT be renamed!
 *
 * This plugin renames such fields and mutation arguments to suffix `row_id`.
 * Ex:
 *  `user_id` -> `user_row_id`
 *  `article_id` -> `article_row_id`
 *  `articleId` -> `articleRowId`
 *  `user_row_id` -> `user_row_id` (will stay the same if `id` is prefixed with `row_`)
 *  `userRowId` -> `userRowId` (will stay the same if `Id` is prefixed with `Row`)
 */

const { makeAddInflectorsPlugin } = require('graphile-utils');

function replaceIdWithRowId(str) {
  return str
    .replace(/(?<!(row_))(id)$/, 'row_id')
    .replace(/(?<!((R|r)ow))(Id)$/, 'RowId')
    .replace(/(?<!(row_))(ids)$/, 'row_ids')
    .replace(/(?<!((R|r)ow))(Ids)$/, 'RowIds');
}

const PgIdToRowIdInflectorPlugin = makeAddInflectorsPlugin(
  {
    // replace ids in all column
    column(attr) {
      return this.camelCase(replaceIdWithRowId(attr.tags.name || attr.name));
    },
    // replace ids in all computed columns
    computedColumn(pseudoColumnName, proc) {
      if (proc.tags.fieldName) {
        return replaceIdWithRowId(proc.tags.fieldName);
      }
      return this.camelCase(replaceIdWithRowId(pseudoColumnName));
    },
    // replace ids in all mutation arguments
    argument(name, index) {
      return this.camelCase(replaceIdWithRowId(name || `arg${index}`));
    },
  },
  true,
);

module.exports = PgIdToRowIdInflectorPlugin;
