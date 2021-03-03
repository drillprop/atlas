import { sizes, colors, typography, transitions } from '@/shared/theme'
import styled from '@emotion/styled'
import CircularProgressbar from '../CircularProgressbar'
import Icon from '../Icon'
import Text from '../Text'

type StepProps = {
  active?: boolean
}

export const StepWrapper = styled.div<StepProps>`
  padding: ${sizes(3)} ${sizes(4)};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ active }) => (active ? colors.blue[500] : colors.gray[600])};
  transition: border ${transitions.timings.routing} ${transitions.easing};
`

export const StepStatus = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`

export const StepNumber = styled.div<StepProps>`
  background-color: ${({ active }) => (active ? colors.blue[500] : colors.gray[600])};
  font-size: ${typography.sizes.subtitle2};
  color: ${colors.white};
  border-radius: 100%;
  height: ${sizes(7)};
  width: ${sizes(7)};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color ${transitions.timings.routing} ${transitions.easing};
`

export const StepDetails = styled.div`
  margin-left: 10px;
  width: 100%;
`

export const FileType = styled(Text)`
  display: block;
  color: ${colors.gray[300]};
  font-weight: ${typography.weights.regular};
  overflow: hidden;
`

export const FileName = styled(Text)`
  display: block;
  font-family: ${typography.fonts.headers};
  font-size: ${typography.sizes.caption};
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const DeleteButton = styled.button`
  padding: ${sizes(2)};
  border: none;
  background: none;
  cursor: pointer;
  flex-shrink: 0;
`

export const TrashIcon = styled(Icon)`
  color: ${colors.white};
  height: ${sizes(4)};
`
export const StyledProgress = styled(CircularProgressbar)`
  width: ${sizes(7)};
  height: ${sizes(7)};
`

export const Thumbnail = styled.div`
  flex-shrink: 0;
  color: white;
  background: ${colors.gray[600]};
  background-size: 100% 100%;
  width: ${sizes(7)};
  height: ${sizes(6)};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  svg {
    height: ${sizes(3)};
    width: ${sizes(3)};
  }
  img {
    object-fit: cover;
    height: 100%;
  }
`