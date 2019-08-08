import { MEDIA } from "../constants"
import { css } from "styled-components"

const deviceList = Object.keys(MEDIA)

export const media = deviceList.reduce((acc, device, index) => {
  acc[device.toLowerCase()] = (...args) => {
    switch (index) {
      case 0:
        return _largestDeviceCSS(args)
      case deviceList.length - 1:
        return _smallestDeviceCSS(args)
      default:
        return _normalDeviceCSS(args)
    }
  }

  return acc

  function _largestDeviceCSS(args) {
    return css`
      @media (min-width: ${MEDIA[device]}px) {
        ${css(...args)}
      }
    `
  }
  function _normalDeviceCSS(args) {
    return css`
      @media (min-width: ${MEDIA[device]}px) {
        ${css(...args)}
      }
    `
  }
  function _smallestDeviceCSS(args) {
    return css`
      @media (max-width: ${MEDIA[deviceList[index - 1]] - 1}px) {
        ${css(...args)}
      }
    `
  }
}, {})
