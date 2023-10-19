import React from 'react'
import { StyledText } from '../common'
import { StyledTemperatureInDegrees } from './styles'
import { TemperatureInDegreesProps} from './types'


function TemperatureInDegrees({
    temperature,
    fontWeight,
    fontSize,
    isUpperCase,

  }: TemperatureInDegreesProps): JSX.Element {
    return (
      <StyledTemperatureInDegrees>
        <StyledText
          fontWeight={fontWeight}
          fontSize={fontSize}
          isUpperCase={isUpperCase}
        >
          {temperature}
        </StyledText>
      </StyledTemperatureInDegrees>
    );
  }
  
  export default TemperatureInDegrees;