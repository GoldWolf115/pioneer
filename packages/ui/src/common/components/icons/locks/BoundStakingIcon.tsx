import React from 'react'

import { Colors } from '@/common/constants'

import { Icon, StyledIcon } from '../Icon'

export const BoundStakingIcon = React.memo(({ className }: StyledIcon) => (
  <Icon
    size="20"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    color="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.6451 1.29914L18.4148 6.31508L15 3.88261L16.0443 2.41653L18.2449 3.98406L22.3992 0L23.6451 1.29914Z"
      fill={Colors.Blue[500]}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0376 14.0793L13.4332 14.5575L14.1453 14.8524C15.3605 15.3558 16.2721 16.1762 16.9228 17.1234C17.9619 18.636 18.3007 20.4097 18.3007 21.5668V22.1331L17.7942 22.3864C16.8603 22.8533 14.3678 23.7 11.3 23.7C8.2321 23.7 5.73961 22.8533 4.80573 22.3864L4.29919 22.1331V21.5668C4.29919 20.4097 4.63798 18.636 5.67714 17.1234C6.32799 16.176 7.2398 15.3554 8.45548 14.8521L9.16759 14.5572L8.56322 14.0789C7.54058 13.2696 6.88577 12.0188 6.88577 10.6149C6.88577 8.17662 8.86238 6.20001 11.3006 6.20001C13.7389 6.20001 15.7155 8.17662 15.7155 10.6149C15.7155 12.019 15.0605 13.2699 14.0376 14.0793ZM6.22236 20.5984L6.15508 20.9815L6.52376 21.1057C7.56739 21.457 9.28254 21.8674 11.3 21.8674C13.3174 21.8674 15.0325 21.457 16.0761 21.1056L16.4448 20.9815L16.3776 20.5984C16.2447 19.842 15.9512 18.9457 15.4122 18.1611C14.6591 17.0648 13.4123 16.1551 11.3 16.1551C9.1876 16.1551 7.94081 17.0648 7.1877 18.1611C6.64868 18.9457 6.35518 19.842 6.22236 20.5984ZM11.3006 13.1971C12.7268 13.1971 13.8829 12.041 13.8829 10.6149C13.8829 9.18878 12.7268 8.03269 11.3006 8.03269C9.87453 8.03269 8.71844 9.18878 8.71844 10.6149C8.71844 12.041 9.87453 13.1971 11.3006 13.1971Z"
      fill={Colors.Black[900]}
    />
  </Icon>
))
