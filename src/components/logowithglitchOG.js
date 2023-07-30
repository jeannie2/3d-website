const glitch = useGlitch(
{
  "playMode": "always",
  "createContainers": true,
  "hideOverflow": false,
  "timing": {
    "duration": 2000
  },
  "glitchTimeSpan": {
    "start": 0.02,
    "end": 0.1
  },
  "shake": {
    "velocity": 7,
    "amplitudeX": 0.36,
    "amplitudeY": 0.44
  },
  "slice": {
    "count": 13,
    "velocity": 19,
    "minHeight": 0.08,
    "maxHeight": 0.09,
    "hueRotate": true
  },
  "pulse": false
}
  )
