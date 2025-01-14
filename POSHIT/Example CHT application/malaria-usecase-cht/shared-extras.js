const CONTACT_TYPES = {
  HOUSEHOLD: 'household',
  HOUSEHOLD_MEMBER: 'household_member',
  COMMUNITY_HEALTH_AREA: 'community_health_area',
  COMMUNITY_HEALTH_VOLUNTEER: 'community_health_volunteer'
};
const TASKS = {
  HOUSEHOLD_ASSESSMENT: 'task.household_assessment_followup.title',
  HOUSEHOLD_MEMBER_FOLLOW_UP: 'task.household_member_follow_up.title',
  CHILD_ASSESSMENT_FOLLOW_UP: 'task.children_under_5_follow_up.title',
};
const FORMS = {
  MUTE_HOUSEHOLD: 'mute_household',
  HOUSEHOLD_ASSESSMENT: 'household_assessment',
  CHILD_ASSESSMENT: 'children_under_assessment',
  CHILD_FOLLOW_UP: 'children_under_5_follow_up',
  MEMBER_ASSESSMENT: 'household_member_assessment',
  MEMBER_FOLLOW_UP: 'household_member_follow_up',
  UNMUTE_HOUSEHOLD_MEMBER: 'unmute_household_member',
  UNMUTE_HOUSEHOLD: 'unmute_household',
  MUTE_HOUSEHOLD_MEMBER: 'mute_household_member',
  PREGNANCY_REGISTRATION: 'pregnancy_registration'
};

const TARGETS = {
  HOUSEHOLDS_GTE_2_LLIN: 'household-with-atleast-two-lln',
  MEMBERS_WITH_MALARIA: 'household-members-with-malaria'
};

module.exports = {
  CONTACT_TYPES,
  TASKS,
  FORMS,
  TARGETS
};
