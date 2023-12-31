import React from 'react'
import { generatePath } from 'react-router'

import { ActivityContentComponent } from '@/common/components/Activities/ActivityContent'
import { ActivityRouterLink } from '@/common/components/Activities/ActivityRouterLink'
import { ForumRoutes } from '@/forum/constant'
import { CategoryDeletedActivity } from '@/forum/types/ForumActivity'

export const CategoryDeletedContent: ActivityContentComponent<CategoryDeletedActivity> = ({ activity }) => {
  return activity.parentCategory ? (
    <>
      Category{' '}
      <ActivityRouterLink to={generatePath(ForumRoutes.category, { id: activity.category.id })}>
        {activity.category.title}
      </ActivityRouterLink>{' '}
      has been deleted in{' '}
      <ActivityRouterLink to={generatePath(ForumRoutes.category, { id: activity.parentCategory.id })}>
        {activity.parentCategory.title}
      </ActivityRouterLink>
      .
    </>
  ) : (
    <>
      Category{' '}
      <ActivityRouterLink to={generatePath(ForumRoutes.category, { id: activity.category.id })}>
        {activity.category.title}
      </ActivityRouterLink>{' '}
      has been deleted.
    </>
  )
}
