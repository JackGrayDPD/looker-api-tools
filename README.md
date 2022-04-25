# looker-api

## scripts
### listGroups
Lists all groups. Run `npm run listGroups`. Fields shown: name, id.

### listUserAttributes
Lists all user attributes. Run `npm run listUserAttributes`. Fields shown: name, id, label.

### addGroupToGroup
Adds `child_group` as a member of `parent_group`. Run `npm run addGroupToGroup -- --parent_group=20 --child_group=21`. Run `npm run addGroupToGroup -- --help` to see more options.

### updateUserAttributeGroupValue
Run `npm run updateUserAttributeGroupValue -- --group_id=GROUP_ID --user_attribute_value=USER_ATTRIBUTE_VALUE --value=NEW_VALUE`. Run `npm run updateUserAttributeGroupValue -- --help` to see more options.