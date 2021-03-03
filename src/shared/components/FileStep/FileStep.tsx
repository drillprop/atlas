import React from 'react'
import Icon from '../Icon'
import {
  StepWrapper,
  StepStatus,
  StepNumber,
  StepDetails,
  DeleteButton,
  FileType,
  FileName,
  TrashIcon,
  Thumbnail,
  StyledProgress,
} from './FileStep.style'
import { Step } from '../MultiFileSelect/MultiFileSelect'

export type FileStepProps = {
  stepNumber: number
  active: boolean
  onDelete: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  step: Step
  fileName?: string
  thumbnail?: string
  onChangeStep?: (step: Step) => void
  overhead?: string
  subtitle?: string
  progress?: number
}

const FileStep: React.FC<FileStepProps> = ({
  stepNumber = 1,
  active,
  fileName,
  step,
  onDelete,
  thumbnail,
  onChangeStep,
  overhead,
  subtitle,
  progress = 0,
}) => {
  return (
    <StepWrapper active={active} onClick={() => onChangeStep?.(step)}>
      <StepStatus>
        {!fileName && <StepNumber active={active}>{stepNumber}</StepNumber>}
        {fileName &&
          (progress ? (
            <StyledProgress value={progress} maxValue={80} />
          ) : (
            <Thumbnail>
              {step === 'video' && <Icon name="video-camera" />}
              {step === 'image' && thumbnail && <img src={thumbnail} alt="thumbnail"></img>}
            </Thumbnail>
          ))}
        <StepDetails>
          <FileType variant="overhead">{fileName ? overhead : `Step ${stepNumber}`}</FileType>
          <FileName variant="subtitle2">{fileName || subtitle}</FileName>
        </StepDetails>
      </StepStatus>
      {fileName && (
        <DeleteButton onClick={onDelete}>
          <TrashIcon name="trash-fill" />
        </DeleteButton>
      )}
    </StepWrapper>
  )
}

export default FileStep