import React from 'react'
import { Donut } from 'react-dial-knob'
import { useAppContext } from '../../context'

export default () => {
  const { state, dispatch } = useAppContext()

  return (
    <Donut
      diameter={100}
      min={-12}
      max={12}
      step={1}
      value={state.volume}
      theme={{ donutColor: 'blue' }}
      onValueChange={value => dispatch({ type: 'CHANGE_SETTINGS', payload: value })}
      ariaLabelledBy={'volume'}
    >
      <label id={'volume'}>volume</label>
    </Donut>
  )
}