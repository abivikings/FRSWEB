import { AbilityBuilder, Ability } from '@casl/ability'

export const AppAbility = Ability

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
const defineRulesFor = (role, subject) => {
  const { can,cannot, rules } = new AbilityBuilder(AppAbility)
  if (role === 'super_admin') {
    can('manage', 'all')
    cannot(['read', 'create', 'update', 'delete'], ['campadmin-page','camplist-page','userviewleft-page','adddonar-page','home-page','alldonarlist-page','donardetails-page','donardashboard-page','addpayment-page'])
  } else if (role === 'camp_admin') {
    can(['read', 'create', 'update', 'delete'], ['campadmin-page','camplist-page','userviewleft-page','adddonar-page','home-page','alldonarlist-page','donardetails-page'])
  }else if (role === 'donar') {
    can(['read', 'create', 'update', 'delete'], ['donardashboard-page','addpayment-page'])
  }else {
    can(['read', 'create', 'update', 'delete'], subject)
  }

  return rules
}

export const buildAbilityFor = (role, subject) => {
  return new AppAbility(defineRulesFor(role, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object.type
  })
}

export const defaultACLObj = {
  action: 'manage',
  subject: 'all'
}

export default defineRulesFor
