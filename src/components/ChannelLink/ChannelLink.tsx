import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_CHANNEL } from '@/api/queries'
import { GetChannel, GetChannelVariables } from '@/api/queries/__generated__/GetChannel'
import { BasicChannelFields } from '@/api/queries/__generated__/BasicChannelFields'
import Avatar, { AvatarSize } from '@/shared/components/Avatar'
import routes from '@/config/routes'
import { Container, Handle, HandlePlaceholder } from './ChannelLink.style'

type ChannelLinkProps = {
  id?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
  hideHandle?: boolean
  hideAvatar?: boolean
  noLink?: boolean
  overrideChannel?: BasicChannelFields
  avatarSize?: AvatarSize
  className?: string
}

const ChannelLink: React.FC<ChannelLinkProps> = ({
  id,
  hideHandle,
  hideAvatar,
  noLink,
  overrideChannel,
  avatarSize = 'default',
  className,
}) => {
  const { data } = useQuery<GetChannel, GetChannelVariables>(GET_CHANNEL, {
    fetchPolicy: 'cache-first',
    skip: !id,
    variables: {
      id: id || '',
    },
  })

  const channel = data?.channel

  const displayedChannel = overrideChannel || channel

  return (
    <Container to={routes.channel(id)} disabled={!id || noLink} className={className}>
      {!hideAvatar && (
        <Avatar
          handle={displayedChannel?.handle}
          imageUrl={displayedChannel?.avatarPhotoUrl}
          loading={!displayedChannel}
          size={avatarSize}
        />
      )}
      {!hideHandle &&
        (displayedChannel ? (
          <Handle withAvatar={!hideAvatar}>{displayedChannel.handle}</Handle>
        ) : (
          <HandlePlaceholder withAvatar={!hideAvatar} height={16} width={150} />
        ))}
    </Container>
  )
}

export default ChannelLink
